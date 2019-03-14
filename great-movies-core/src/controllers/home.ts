import {Request, Response} from "express"

/* GET home page. */
export let index = (req: Request, res: Response) => {
    
    let languages = [
        {
            language: 'Spanish'
        },
        {
            language: "French"
        },
        {
            langauge: "German"
        }
    ];
    res.json(languages);
};
