const { HttpError } = require("../utils/HttpError");
const { isValidObjectId } = require("mongoose");

const isValidId = async (req, res, next) => {
  const { contactId } = req.params;
  const idCorrectId = isValidObjectId(contactId);
  if (!idCorrectId) {
    const error = new HttpError(404, `Id: ${contactId} is not corrent format`);
    next(error);
  }
  next();
};

module.exports = isValidId;
