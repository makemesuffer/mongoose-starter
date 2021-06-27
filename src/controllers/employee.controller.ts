import { Request, Response } from "express";

import employeesService from "../services/employee.service";

class EmployeesController {
  createEmployee = async (req: Request, res: Response) => {
    const message = await employeesService.createEmployee(req.body);
    res.send(message);
  };

  getAllEmployees = async (_req: Request, res: Response) => {
    const message = await employeesService.getAllEmployees();
    res.send(message);
  };

  getEmployeeById = async (req: Request, res: Response) => {
    const message = await employeesService.getEmployeeById(req.params.id);
    res.send(message);
  };

  updateEmployee = async (req: Request, res: Response) => {
    const message = await employeesService.updateEmployee(
      req.params.id,
      req.body
    );
    res.send(message);
  };

  deleteEmployee = async (req: Request, res: Response) => {
    const message = await employeesService.deleteEmployee(req.params.id);
    res.send(message);
  };

  applyForAJob = async (req: Request, res: Response) => {
    const message = await employeesService.applyForAJob(
      req.params.id,
      req.params.jobId
    );
    res.send(message);
  };

  leaveJob = async (req: Request, res: Response) => {
    const message = await employeesService.leaveJob(
      req.params.id,
      req.params.jobId
    );
    res.send(message);
  };

  getAllJobs = async (req: Request, res: Response) => {
    const message = await employeesService.getAllJobs(req.params.id);
    res.send(message);
  };

  getSalary = async (req: Request, res: Response) => {
    const message = await employeesService.getSalary(req.params.id);
    res.send(message);
  };
}

export default new EmployeesController();
