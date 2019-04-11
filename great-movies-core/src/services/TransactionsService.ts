// Dependencies
import { Request, Response } from "express";
var MovieModel = require("./../models/movie");
var InvoiceModel = require("./../models/invoice");
var InvoiceDetailModel = require("./../models/invoiceDetails");

// method to buy a product
export const buyRentMovie = (req: Request, res: Response) => {

    // creating a new invoice
    var bill = new InvoiceModel({
        clientId: req.body.userId,
        total: req.body.total,
    });

    if (req.body.isRental) {
        var estimatedReturn = new Date();

        bill['transType'] = 'Rental';
        bill['estimatedReturnDate'] = estimatedReturn.getDate() + 7;
    } else {
        bill['transType'] = 'Sell';
    }

    // saving invoice
    bill.save((error) => {
        if (error) {
            return errorResponse(res, 'error saving data :' + error);
        } else {
            req.body.details.forEach((prod) => {
                // Saving details entry per product
                var detail = new InvoiceDetailModel({
                    invoiceId: bill._id,
                    productId: prod.productId,
                    amount: prod.amount,
                    unitPrice: prod.price
                });
                // Saving detail
                detail.save(function (err) {
                    if (err) {
                        return errorResponse(res, 'error saving data :' + err)
                    } else {
                        // If detail is stored then updating amount on product
                        MovieModel.findById(detail.productId, (findError, product) => {
                            if (findError) {
                                return errorResponse(res, findError);
                            } else {
                                // Calculating new amount for product
                                var newAmount = product.amount - detail.amount;
                                product.set({ amount: newAmount });
                                // Updating product with remaining amount available
                                product.save((updateError, updatedProd) => {
                                    if (updateError) {
                                        return errorResponse(res, updateError);
                                    } else {
                                        // Returning success response when operation worked
                                        return res.status(201).json({
                                            success: true,
                                            message: 'transaction performed successfully'
                                        });
                                    }
                                });
                            }
                        });
                    }
                });
            });
        }
    });
};

export const checkPenality = (req: Request, res: Response) => {
    InvoiceModel.findById(req.params.id, (error, inv) => {
        if(error){
            return errorResponse(res, "Transaction not found");
        } else {
            var currDate = new Date();

            if(currDate.getDate() > inv.estimatedReturn){
                let penalityToPay = inv.total * 0.15;
                return res.status(200).json({penality : true, extra : penalityToPay});
            } else {
                return res.status(200).json({penality : false});
            }
        }
    });
};

export const deliverMovie = (req: Request, res: Response) => {
    InvoiceModel.findById(req.body.id, (error, inv) => {
        if(error){
            return errorResponse(res, "Transaction not found");
        } else {
            var currDate = new Date();
            if (req.body.penality) {
                inv.set({penality : req.body.penality});
            }
            inv.set({returnedDate: currDate.getDate()});
            inv.save( (err, updatedInv) => {
                if(err){
                    return errorResponse(res, `error delivering movie: ${err.errmsg}`)
                } else {
                    return res.status(201).json({
                        success: true,
                        message: 'deliveried successfully'
                    });
                }
            })
        }
    });
};

export const getTransactions = (req: Request, res: Response) => {
    let tFilter = {};

    /* Checking if is getting for a specific id */
    if (req.body.userId) {
        tFilter['clientId'] = req.body.userId;
    }
    /* Checking type of transaction to filter by */
    if (req.body.transType){
        tFilter['transType'] = req.body.transType.toLocaleLowerCase() == 'rental' ? 'Rental' : 'Sell';
    }

    InvoiceModel.find(tFilter, (err: any , tResults: any) => {
        if (err) {
            return errorResponse(res, `error getting transactions : ${err.errmsg}`)
        } else {
            return res.status(200).json(tResults);
        }
    });
}

var errorResponse = (response, message) => {
    return response.status(500).json({
        success: false,
        message: message
    });
};
