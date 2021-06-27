import EmployeesRepository from "../repository/employee.repository";
import JobsRepository from "../repository/job.repository";
import IEmployeeData from "../interfaces/employeeData.interface";
import { IJob } from "../models/job.model";
import { IEmployee } from "../models/employee.model";

class EmployeesService {
  createEmployee = async (body: IEmployeeData) => {
    return EmployeesRepository.createEmployee(body);
  };

  getAllEmployees = async () => {
    return EmployeesRepository.getAllEmployees();
  };

  getEmployeeById = async (id: IEmployee["_id"]) => {
    return EmployeesRepository.getEmployeeById(id);
  };

  updateEmployee = async (id: IEmployee["_id"], body: IEmployeeData) => {
    return EmployeesRepository.updateEmployee(id, body);
  };

  deleteEmployee = async (id: IEmployee["_id"]) => {
    return EmployeesRepository.deleteEmployee(id);
  };

  applyForAJob = async (id: IEmployee["_id"], jobId: IJob["_id"]) => {
    const currentJobs = await EmployeesRepository.getJobs(id);
    const totalWorkingHours = currentJobs.reduce(
      (a, b) => {
        return { workingHours: a.workingHours + b.workingHours };
      },
      { workingHours: 0 }
    );
    const jobToApply = await JobsRepository.getJobById(jobId);
    if (
      jobToApply &&
      jobToApply.workingHours + totalWorkingHours.workingHours > 20
    ) {
      return "No more jobs for you, working bee";
    }
    return EmployeesRepository.applyForAJob(id, jobId);
  };

  leaveJob = async (id: IEmployee["_id"], jobId: IJob["_id"]) => {
    return EmployeesRepository.leaveJob(id, jobId);
  };

  getAllJobs = async (id: IEmployee["_id"]) => {
    return EmployeesRepository.getAllJobs(id);
  };

  getSalary = async (id: IEmployee["_id"]) => {
    const jobs = await EmployeesRepository.getJobs(id);
    const totalSalary = jobs.reduce(
      (a, b) => {
        return { salary: a.salary + b.salary };
      },
      { salary: 0 }
    );
    return totalSalary;
  };
}

export default new EmployeesService();
