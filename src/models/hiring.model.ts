import mongoose, { Schema, Document } from "mongoose";

import { IEmployee } from "./Employee.model";
import { IJob } from "./Job.model";

const HiringSchema: Schema = new Schema({
  employeeId: { type: Schema.Types.ObjectId, ref: "Employee" },
  jobId: { type: Schema.Types.ObjectId, ref: "Job" },
  startDate: { type: Date, required: true },
});

interface Hiring extends Document {
  employeeId: IEmployee["_id"];
  jobId: IJob["_id"];
  startDate: Date;
}
const Hiring = mongoose.model<Hiring>("Hiring", HiringSchema);

export default Hiring;
