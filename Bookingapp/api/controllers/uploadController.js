export const uploadImage = (req, res, next) => {
  try {
    const imageName = req.file.path.slice(7, 20);
    res.status(200).json(imageName);
  } catch (error) {
    console.log(error);
  }
};
