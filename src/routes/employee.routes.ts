import express from "express";
import employeesService from "../controllers/employee.controller";

const router = express.Router();

router.post("/", employeesService.createEmployee);
router.get("/", employeesService.getAllEmployees);
router.get("/:id", employeesService.getEmployeeById);
router.put("/:id", employeesService.updateEmployee);
router.delete("/:id", employeesService.deleteEmployee);
router.patch("/:id/jobs/:jobId/apply", employeesService.applyForAJob);
router.patch("/:id/jobs/:jobId/leave", employeesService.leaveJob);
router.get("/:id/jobs", employeesService.getAllJobs);
router.get("/:id/salary", employeesService.getSalary);

export default router;
