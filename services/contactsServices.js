// at stage 3 of HW, when we switch to databases, it is no longer necessary. we turn back to the base the other way. change in file contactsControllers

const fs = require("fs/promises");
const path = require("path");
const { HttpError } = require("../utils/HttpError");
const crypto = require("crypto");

const contactsPath = path.join(__dirname, "..", "models", "contacts.json");

// all contacts
const listContacts = async () => {
  const data = await fs.readFile(contactsPath);
  return JSON.parse(data);
};

// find contact by ID
const getContactById = async (contactId) => {
  const contacts = await listContacts();
  const contact = contacts.find((contact) => contact.id === contactId);
  if (!contact) {
    throw new HttpError(404, `Not found contact with id: ${contactId}`);
  }

  return contact;
};

// delete contact by ID
const removeContact = async (contactId) => {
  const contacts = await listContacts();
  const index = contacts.findIndex((contact) => contact.id === contactId);
  if (index === -1) {
    throw new HttpError(404, `Not found contact with id: ${contactId}`);
  }
  const [result] = contacts.splice(index, 1);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return result;
};

// add contact
const addContact = async (body) => {
  const contacts = await listContacts();
  const newContact = {
    id: crypto.randomUUID(),
    ...body,
  };

  contacts.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return newContact;
};

// change contact
const updateContact = async (id, body) => {
  const contacts = await listContacts();
  const index = contacts.findIndex((contact) => contact.id === id);
  if (index === -1) {
    throw new HttpError(404, `Not found contact with id: ${id}`);
  }
  contacts[index] = { id, ...body };
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return contacts[index];
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
