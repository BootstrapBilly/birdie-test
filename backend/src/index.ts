import app from './application';
import connect from "./util/connect_to_database"

const port = process.env.PORT || 8000;

const start_server = async () => {

  const database_connected = await connect//connect to the database

  if (database_connected) {

    app.listen(port, () => {
      // tslint:disable-next-line:no-console
      console.log(`Server started at http://localhost:${port}`);
    });

  } else {

    console.log("Connection failed")

  }

}

start_server()
