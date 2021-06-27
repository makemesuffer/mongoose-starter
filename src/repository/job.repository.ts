import Job, { IJob } from "../models/job.model";
import Hiring from "../models/hiring.model";
import Employee, { IEmployee } from "../models/employee.model";

import IJobData from "../interfaces/jobData.interface";

class JobsRepository {
  createJob = async (data: IJobData) => {
    const job = new Job(data);
    return job.save();
  };

  getAllJobs = async () => {
    return Job.find({});
  };

  getJobById = async (id: IJob["_id"]) => {
    return Job.findById({ _id: id });
  };

  updateJob = async (id: IJob["_id"], body: IJobData) => {
    await Job.findOneAndUpdate({ _id: id }, body);
    return Job.findById({ _id: id });
  };

  deleteJob = async (id: IJob["_id"]) => {
    return Job.deleteOne({ _id: id });
  };

  getJobData = async (jobId: IJob["_id"]) => {
    return Hiring.find({ jobId }).populate("employeeId");
  };

  getAllEmployees = async (id: IJob["_id"]) => {
    const job = await Job.findById({ _id: id });
    if (job) {
      return Employee.find({ _id: { $in: job.employeeId } });
    } else {
      throw new Error("Invalid job id");
    }
  };

  fireAnEmployee = async (id: IJob["_id"], employeeId: IEmployee["_id"]) => {
    await Job.findOneAndUpdate({ _id: id }, { $pull: { employeeId } });
    await Hiring.deleteOne({ jobId: id, employeeId });
    await Employee.findOneAndUpdate(
      { _id: employeeId },
      { $pull: { jobId: id } }
    );
    return Job.findById({ _id: id });
  };
}

export default new JobsRepository();
