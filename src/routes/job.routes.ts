import express from "express";
import jobsController from "../controllers/job.controller";

const router = express.Router();

router.post("/", jobsController.createJob);
router.get("/", jobsController.getAllJobs);
router.get("/:id", jobsController.getJobById);
router.put("/:id", jobsController.updateJob);
router.delete("/:id", jobsController.removeJob);
router.get("/:id/employees", jobsController.getJobData);
router.get("/:id/salary", jobsController.getAllJobSalary);
router.patch("/:id/employees/:employeeId", jobsController.fireAnEmployee);

export default router;
