import { Router } from "express";
import {
  deleteUsers,
  getUsers,
  postUsers,
  putUsers,
} from "../controllers/users.js";
import { check } from "express-validator";

let validations = [
  check("email", "Email is not valid.").isEmail(),
  check("name", "Name is required.").not().isEmpty(),
  check("password", "Password must be at least 6 characters.").isLength({
    min: 6,
  }),
  check("role", "Role is not valid.").isIn(["ADMIN_ROLE", "USER_ROLE"]),
];

const router = Router();

router.get("/", getUsers);
router.put("/:id", putUsers);
router.post("/", validations, postUsers);
router.delete("/", deleteUsers);

export default router;
