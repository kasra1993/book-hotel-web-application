import User from "../models/User.js";

export const updateUser = async (req, res, next) => {
  const { id: userId } = req.params;

  try {
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      {
        $set: req.body,
      },
      { new: true, runValidators: true }
    );
    res.status(200).json(updatedUser);
  } catch (error) {
    next(error);
  }
};
export const deleteUser = async (req, res, next) => {
  const { id: userId } = req.params;
  try {
    const deletedItem = await User.findByIdAndDelete(userId);
    res.status(200).json("deletion successful");
  } catch (error) {
    next(error);
  }
};
export const getUser = async (req, res, next) => {
  const { id: userId } = req.params;
  try {
    const user = await User.findById(userId);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};
export const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find({});
    // const users = await User.findById(12345);
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};
