import * as express from "express";
import {pingController} from "./controllers/ping";
import {eventsController} from "./controllers/events"
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json())
app.use(pingController);
app.use(eventsController);

export default app;