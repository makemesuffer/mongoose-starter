import mongoose, { Schema, Document, Types } from "mongoose";

const EmployeeSchema: Schema = new Schema({
  name: { type: String, maxLength: 45, required: true },
  surname: { type: String, maxLength: 45, required: true },
  birthDate: { type: Date, required: true },
  jobId: [{ type: mongoose.Schema.Types.ObjectId, ref: "Job" }],
});

export interface IEmployee extends Document {
  name: string;
  surname: string;
  birthDate: Date;
  jobId: Array<Types.ObjectId | Record<string, unknown>>;
}

const Employee = mongoose.model<IEmployee>("Employee", EmployeeSchema);

export default Employee;
