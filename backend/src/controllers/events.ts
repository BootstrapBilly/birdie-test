import * as express from "express";
import database from "../util/connect_to_database"

export const eventsController = express.Router();

eventsController.get('/records', async (_, res) => {

    try {

        const records_fetched = await database.execute("SELECT * FROM events")
        records_fetched && res.status(200).json({records: records_fetched, message:"Records fetched successfully"});
    }
    
    catch (error) {

        console.log(error)
        res.status(500).json({message:"Something went wrong with the server"})
    }


});
