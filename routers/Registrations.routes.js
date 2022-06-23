const express = require("express");

const {
  getAlluser,
  getUserById,
  createRegistration,
  updateRegistration,
  deleteRegistration,
} = require("../controllers/registrations.controller");

const RegistrationRouter = express.Router();

RegistrationRouter.get("/", getAlluser);
RegistrationRouter.get("/:id", getUserById);
RegistrationRouter.post("/", createRegistration);
RegistrationRouter.patch("/:id", updateRegistration);
RegistrationRouter.delete("/:id", deleteRegistration);

module.exports = { RegistrationRouter };
