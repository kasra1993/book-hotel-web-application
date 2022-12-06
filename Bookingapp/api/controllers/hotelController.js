import Hotel from "../models/Hotel.js";
import Room from "../models/Room.js";
export const createHotel = async (req, res, next) => {
  try {
    const hotel = await Hotel.create({ ...req.body });
    // const savedHotel = await newHotel.save();
    //   console.log(newHotel);
    res.status(200).json(hotel);
  } catch (error) {
    next(error);
  }
};
export const updateHotel = async (req, res, next) => {
  const { id: hotelId } = req.params;

  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(
      hotelId,
      {
        $set: req.body,
      },
      { new: true, runValidators: true }
    );
    res.status(200).json(updatedHotel);
  } catch (error) {
    next(error);
  }
};
export const deleteHotel = async (req, res, next) => {
  const { id: hotelId } = req.params;
  try {
    const deletedItem = await Hotel.findByIdAndDelete(hotelId);
    res.status(200).json("deletion successful");
  } catch (error) {
    next(error);
  }
};
export const getHotel = async (req, res, next) => {
  const { id: hotelId } = req.params;
  try {
    const hotel = await Hotel.findById(hotelId);
    res.status(200).json(hotel);
  } catch (error) {
    next(error);
  }
};
export const getAllHotels = async (req, res, next) => {
  const { min, max, ...others } = req.query;
  try {
    const hotels = await Hotel.find({
      ...others,
      cheapestPrice: { $gt: min || 1, $lt: max || 999999 },
    }).limit(req.query.limit);
    // const hotels = await Hotel.findById(12345);
    res.status(200).json(hotels);
  } catch (error) {
    next(error);
  }
};
export const countByCity = async (req, res, next) => {
  const cities = req.query.cities.split(",");
  try {
    const list = await Promise.all(
      cities.map((city) => {
        return Hotel.countDocuments({ city: city });
      })
    );
    // const hotels = await Hotel.findById(12345);
    res.status(200).json(list);
  } catch (error) {
    next(error);
  }
};
export const countByType = async (req, res, next) => {
  try {
    const hotelCount = await Hotel.countDocuments({ type: "hotel" });
    const apartmentCount = await Hotel.countDocuments({ type: "apartment" });
    const resortCount = await Hotel.countDocuments({ type: "resort" });
    const villaCount = await Hotel.countDocuments({ type: "villa" });
    const cabinCount = await Hotel.countDocuments({ type: "cabin" });
    res.status(200).json([
      { type: "hotel", count: hotelCount },
      { type: "apartment", count: apartmentCount },
      { type: "resort", count: resortCount },
      { type: "villa", count: villaCount },
      { type: "cabin", count: cabinCount },
    ]);
  } catch (error) {
    next(error);
  }
};

export const getHotelRooms = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    const list = await Promise.all(
      hotel.rooms.map((room) => {
        return Room.findById(room);
      })
    );
    res.status(200).json(list);
  } catch (error) {
    next(error);
  }
};
