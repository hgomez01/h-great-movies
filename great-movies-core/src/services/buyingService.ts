// Dependencies
import {Request, Response} from "express";
var MovieModel = require("./../models/movie");
var InvoiceModel = require("./../models/invoice");
var InvoiceDetailModel = require("./../models/invoiceDetails");

// method to buy a product
export  const buyMovie = (req: Request, res: Response) => {
    // creating a new invoice
    var bill = new InvoiceModel({
        clientId : res.decoded.userId,
        total : req.body.total,
        transType : 'Sell'
    })
    // saving invoice
    bill.save((error) => {
        if(error){
            return errorResponse(res, 'error saving data :' + error);
        } else {
            req.body.details.forEach(function(prod){
                // Saving details entry per product
                var detail = new InvoiceDetailModel({
                    invoiceId : bill._id,
                    productId : prod.productId,
                    amount    : prod.amount,
                    unitPrice : prod.price
                });
                // Saving detail
                detail.save(function(err){
                    if(err){
                        return errorResponse(res, 'error saving data :' + err)
                    } else {
                        // If detail is stored then updating amount on product
                        MovieModel.findById( detail.productId, ( findError, product ) => {
                            if ( findError ){
                                return errorResponse(res, findError);
                            } else {
                                // Calculating new amount for product
                                var newAmount = product.amount - detail.amount;
                                product.set({amount : newAmount});
                                // Updating product with remaining amount available
                                product.save( (updateError, updatedProd) => {
                                    if ( updateError ){
                                        return errorResponse(res, updateError);
                                    } else {
                                        // Returning success response when operation worked
                                        return res.status(201).json({
                                            success : true,
                                            message : 'process successfully'
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


var errorResponse = (response, message) =>{
    return response.status(500).json({
        success : false,
        message : message
    });
};
