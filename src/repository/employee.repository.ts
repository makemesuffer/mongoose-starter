import Employee, { IEmployee } from "../models/employee.model";
import Job, { IJob } from "../models/job.model";
import Hiring from "../models/hiring.model";
import IEmployeeData from "../interfaces/employeeData.interface";

class EmployeesRepository {
  createEmployee = async (data: IEmployeeData) => {
    const employee = new Employee(data);
    return employee.save();
  };

  getAllEmployees = async () => {
    return Employee.find({});
  };

  getEmployeeById = async (id: IEmployee["_id"]) => {
    return Employee.findById({ _id: id });
  };

  updateEmployee = async (id: IEmployee["_id"], body: IEmployeeData) => {
    await Employee.findOneAndUpdate({ _id: id }, body);
    return Employee.findById({ _id: id });
  };

  deleteEmployee = async (id: IEmployee["_id"]) => {
    return Employee.deleteOne({ _id: id });
  };

  applyForAJob = async (id: IEmployee["_id"], jobId: IJob["_id"]) => {
    await Employee.findOneAndUpdate({ _id: id }, { $push: { jobId } });
    const applyDate = new Date();
    await Job.findOneAndUpdate({ _id: jobId }, { $push: { employeeId: id } });
    const hiring = new Hiring({ employeeId: id, jobId, startDate: applyDate });
    await hiring.save();
    return Employee.findById({ _id: id });
  };

  leaveJob = async (id: IEmployee["_id"], jobId: IJob["_id"]) => {
    await Employee.findOneAndUpdate({ _id: id }, { $pull: { jobId } });
    await Job.findOneAndUpdate({ _id: jobId }, { $pull: { employeeId: id } });
    await Hiring.deleteOne({ employeeId: id, jobId });
    return Employee.findById({ _id: id });
  };

  getAllJobs = async (id: IEmployee["_id"]) => {
    const employee = await Hiring.find({ employeeId: id }).populate("jobId");
    return employee;
  };

  getJobs = async (id: IEmployee["_id"]) => {
    const employee = await Employee.findById({ _id: id });
    if (employee) {
      return Job.find({ _id: { $in: employee.jobId } });
    } else {
      throw new Error("Invalid job id");
    }
  };
}

export default new EmployeesRepository();
