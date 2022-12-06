import express from "express";
import {
  updateUser,
  deleteUser,
  getUser,
  getAllUsers,
} from "../controllers/userController.js";
import { isAdmin, verifyUser } from "../utils/verifyToken.js";
// import { isAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";
const router = express.Router();
// router.get("/checkauthentication", verifyToken, (req, res, next) => {
//   res.send("hello user you are logged in");
// });
// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//   res.json("user was verified");
// });
// router.get("/isAdmin/:id", isAdmin, (req, res, next) => {
//   res.json("user is admin");
// });

/// this is the update function

router.put("/:id", verifyUser, updateUser);

/// this is the delete function

router.delete("/:id", verifyUser, deleteUser);

// Get one hotel function

router.get("/:id", verifyUser, getUser);

// Get all hotels

router.get("/", getAllUsers);
export default router;
