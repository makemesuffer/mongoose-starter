import mongoose, { Schema, Document, Types } from "mongoose";

const JobSchema: Schema = new Schema({
  title: { type: String, maxLength: 45, required: true, unique: true },
  salary: { type: Number, required: true },
  workingHours: { type: Number, required: true, max: 20 },
  employeeId: [{ type: Schema.Types.ObjectId, ref: "Employee" }],
});

export interface IJob extends Document {
  title: string;
  salary: number;
  workingHours: number;
  employeeId: Array<Types.ObjectId | Record<string, unknown>>;
}

const Job = mongoose.model<IJob>("Job", JobSchema);

export default Job;
