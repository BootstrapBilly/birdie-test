import * as express from "express";
import {pingController} from "./controllers/ping";
import {eventsController} from "./controllers/events"
const bodyParser = require("body-parser");

const app = express();

app.use((_, res, next) => {

    res.setHeader("Access-Control-Allow-Origin", "*");//Allow all requests to prevent cors errors
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");//types of methods to allow
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");//Types of headers (Json and JWTS)
    next();
  
  })

app.use(bodyParser.json())//set up the body parser
app.use(pingController);
app.use(eventsController);//use the events middleware

export default app;