import express from "express";
import {
  countByCity,
  countByType,
  createHotel,
  deleteHotel,
  getAllHotels,
  getHotel,
  getHotelRooms,
  updateHotel,
} from "../controllers/hotelController.js";
import { isAdmin } from "../utils/verifyToken.js";
// import Hotel from "../models/Hotel.js";
// import { createError } from "../utils/error.js";
const router = express.Router();
// crud operations

// this is the create function

router.post("/register", createHotel);

/// this is the update function

router.put("/:id", isAdmin, updateHotel);

/// this is the delete function

router.delete("/:id", isAdmin, deleteHotel);

// Get one hotel function

router.get("/find/:id", getHotel);

// Get all hotels

router.get("/", getAllHotels);
router.get("/hotels", getAllHotels);
router.get("/countByCity", countByCity);
router.get("/countByType", countByType);
router.get("/room/:id", getHotelRooms);

export default router;
