const { Registration } = require("../models/registrations.model");

const getAlluser = async (req, res) => {
  try {
    const records = await Registration.findAll();
    res.status(201).json({
      records,
    });
  } catch (error) {
    console.log(error);
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const registration = await Registration.findOne({ where: { id } });
    if (!registration) {
      res.status(404).json({
        status: "error",
        message: "Registration not found",
      });
    }
    res.status(200).json({
      stus: "correct",
      registration,
    });
  } catch (error) {
    console.log(error);
  }
};

const createRegistration = async (req, res) => {
  try {
    const { entranceTime } = req.body;

    const newRegistration = await Registration.create({
      entranceTime,
    });

    res.status(201).json({
      status: "Successful registration",
      newRegistration,
    });
  } catch (error) {
    console.log(error);
  }
};

const updateRegistration = async (req, res) => {
  try {
    const { id } = req.params;
    const { exitTie } = req.body;
    const updateRegistration = await Registration.findOne({
      where: { id, status: "working" },
    });

    if (!updateRegistration) {
      res.status(404).json({
        status: "error",
        message: "Registration not found",
      });
    }
    await updateRegistration.update({ exitTie, status: "out" });
    res.status(204).json({
      status: "Update Successful",
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteRegistration = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedRegistration = await Registration.findOne({
      where: { id, status: "working" },
    });

    if (!deletedRegistration) {
      res.status(404).json({
        status: "error",
        message: "Registration not found, the user is not working",
      });
    }

    await deletedRegistration.update({ status: "cancelled" });

    res.status(204).json({
      status: "successful removal",
    });
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  getAlluser,
  getUserById,
  createRegistration,
  updateRegistration,
  deleteRegistration,
};
