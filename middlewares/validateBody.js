const { HttpError } = require("../utils/HttpError");

const validateBody = (schema) => {
  const func = (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      throw new HttpError(404, error.message);
    }
    next();
  };
  return func;
};

module.exports = validateBody;
