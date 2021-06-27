import JobsRepository from "../repository/job.repository";
import IJobData from "../interfaces/jobData.interface";
import { IJob } from "../models/job.model";
import { IEmployee } from "../models/employee.model";

class JobsService {
  createJob = async (body: IJobData) => {
    return JobsRepository.createJob(body);
  };

  getAllJobs = async () => {
    return JobsRepository.getAllJobs();
  };

  getJobById = async (id: IJob["_id"]) => {
    return JobsRepository.getJobById(id);
  };

  updateJob = async (id: IJob["_id"], body: IJobData) => {
    return JobsRepository.updateJob(id, body);
  };

  deleteJob = async (id: IJob["_id"]) => {
    return JobsRepository.deleteJob(id);
  };

  getJobData = async (id: IJob["_id"]) => {
    return JobsRepository.getJobData(id);
  };

  getAllJobSalary = async (id: IJob["_id"]) => {
    const employees = await JobsRepository.getAllEmployees(id);
    const job = await JobsRepository.getJobById(id);
    if (job) {
      const totalSalary = employees.length * job.salary;
      return { totalSalary };
    } else {
      throw new Error("Enter a valid job id");
    }
  };

  fireAnEmployee = async (id: IJob["_id"], employeeId: IEmployee["_id"]) => {
    return JobsRepository.fireAnEmployee(id, employeeId);
  };
}

export default new JobsService();
