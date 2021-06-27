import "dotenv-safe/config";
import express from "express";

import jobRouter from './routes/job.routes';
import employeeRouter from './routes/employee.routes';
import setUpConnection from "./db/dbConnection";

setUpConnection();

const app = express();
app.use('/jobs', jobRouter);
app.use('/employees', employeeRouter);

const port = 3001;
app.listen(port, () => {
  console.log("We are live on " + port);
});
