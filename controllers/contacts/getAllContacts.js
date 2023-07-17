const { Contact } = require("../../models/contact");
const { ctrlWrapper } = require("../../utils");

let getAllContacts = async (req, res) => {
  const { _id: owner } = req.user;
  // pagination
  const { page = 1, limit = 10 } = req.query;
  const skip = (page - 1) * limit;

  // favorite
  let contacts;
  if (req.query.favorite) {
    const favorite = req.query.favorite === "true";
    contacts = await Contact.find({ owner, favorite }, null, {
      skip,
      limit,
    });
  } else {
    contacts = await Contact.find({ owner }, null, { skip, limit });
  }

  res.status(200).json(contacts);
};
getAllContacts = ctrlWrapper(getAllContacts);

module.exports = getAllContacts;
