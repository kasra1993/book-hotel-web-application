import Room from "../models/Room.js";
import Hotel from "../models/Hotel.js";

export const createRoom = async (req, res, next) => {
  const hotelId = req.params.hotelid;
  try {
    const newRoom = await Room.create({ ...req.body });
    await Hotel.findByIdAndUpdate(hotelId, { $push: { rooms: newRoom._id } });
    res.status(200).json(newRoom);
  } catch (error) {
    next(err);
  }
};
export const updateRoom = async (req, res, next) => {
  const { id: roomId } = req.params;

  try {
    const updatedRoom = await Room.findByIdAndUpdate(
      roomId,
      {
        $set: req.body,
      },
      { new: true, runValidators: true }
    );
    res.status(200).json(updatedRoom);
  } catch (error) {
    next(error);
  }
};
export const updateRoomAvailability = async (req, res, next) => {
  try {
    await Room.updateOne(
      { "roomNumbers._id": req.params.id },
      {
        $push: {
          "roomNumbers.$.unavailableDates": req.body.dates,
        },
      }
    );
    res.status(200).json("the availibility has been updated");
  } catch (error) {
    next(error);
  }
};
export const deleteRoom = async (req, res, next) => {
  const { id: roomId, hotelid: hotelId } = req.params;
  try {
    const deletedRoom = await Room.findByIdAndDelete(roomId);
    try {
      await Hotel.findByIdAndUpdate(hotelId, {
        $pull: { rooms: roomId },
      });
    } catch (error) {
      next(error);
    }
    res.status(200).json("room has been deleted");
  } catch (error) {
    next(error);
  }
};
export const getRoom = async (req, res, next) => {
  const { id: roomId } = req.params;
  try {
    const room = await Room.findById(roomId);
    res.status(200).json(room);
  } catch (error) {
    next(error);
  }
};
export const getRooms = async (req, res, next) => {
  try {
    const rooms = await Room.find({});
    // const rooms = await Hotel.findById(12345);
    res.status(200).json(rooms);
  } catch (error) {
    next(error);
  }
};
