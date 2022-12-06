import express from "express";
import {
  createRoom,
  getRooms,
  getRoom,
  deleteRoom,
  updateRoom,
  updateRoomAvailability,
} from "../controllers/roomController.js";
import { isAdmin } from "../utils/verifyToken.js";
const router = express.Router();

// crud operations

router.post("/register/:hotelid", isAdmin, createRoom);

router.put("/:id", isAdmin, updateRoom);
router.put("/availability/:id", updateRoomAvailability);

router.delete("/:id/:hotelid", isAdmin, deleteRoom);

router.get("/:id", getRoom);

router.get("/", getRooms);
router.get("/rooms", getRooms);

export default router;
