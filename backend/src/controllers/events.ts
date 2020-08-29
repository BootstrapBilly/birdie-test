import * as express from "express";
import database from "../util/connect_to_database"

export const eventsController = express.Router();

eventsController.get('/all_events', async (_, res) => {

    try {

        const events_fetched = await database.execute("SELECT * FROM events")//fetch every event in the table
        events_fetched && res.status(200).json({events: events_fetched[0], message:"Records fetched successfully"});//return the fetched events
    }
    
    catch (error) {

        console.log(error)
        res.status(500).json({message:"Something went wrong with the server"})
    }

});

eventsController.post('/single_recipient_events', async (req, res) => {
        
    const care_recipient_id = req.body.care_recipient_id//extract the care recipient id from the body

    console.log(care_recipient_id)

    try {

        //fetch every event for the given recipient id
        const events_fetched = await database.execute(`SELECT * FROM events WHERE care_recipient_id='${care_recipient_id}'`)

        //if at least 1 record was found, return it
        events_fetched[0].length ? res.status(200).json({events: events_fetched[0], message:"Records fetched successfully"}) 
        : res.status(404).json({message: "No records found"});//otherwise, return a no records found message
    }
    
    catch (error) {

        console.log(error)
        res.status(500).json({message:"Something went wrong with the server"})
    }

});
