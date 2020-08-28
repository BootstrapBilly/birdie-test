import * as express from "express";
import {pingController} from "./controllers/ping";
import {eventsController} from "./controllers/events"
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json())//set up the body parser
app.use(pingController);
app.use(eventsController);//use the events middleware

export default app;