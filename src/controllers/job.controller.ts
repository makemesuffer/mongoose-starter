import { Request, Response } from "express";

import jobsServices from "../services/job.service";

class JobsController {
  createJob = async (req: Request, res: Response) => {
    const message = await jobsServices.createJob(req.body);
    res.send(message);
  };

  getAllJobs = async (_req: Request, res: Response) => {
    const message = await jobsServices.getAllJobs();
    res.send(message);
  };

  getJobById = async (req: Request, res: Response) => {
    const message = await jobsServices.getJobById(req.params.id);
    res.send(message);
  };

  updateJob = async (req: Request, res: Response) => {
    const message = await jobsServices.updateJob(req.params.id, req.body);
    res.send(message);
  };

  removeJob = async (req: Request, res: Response) => {
    const message = await jobsServices.deleteJob(req.params.id);
    res.send(message);
  };

  getJobData = async (req: Request, res: Response) => {
    const message = await jobsServices.getJobData(req.params.id);
    res.send(message);
  };

  getAllJobSalary = async (req: Request, res: Response) => {
    const message = await jobsServices.getAllJobSalary(req.params.id);
    res.send(message);
  };

  fireAnEmployee = async (req: Request, res: Response) => {
    const message = await jobsServices.fireAnEmployee(
      req.params.id,
      req.params.employeeId
    );
    res.send(message);
  };
}

export default new JobsController();
