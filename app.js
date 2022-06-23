const express = require("express");

//Routers
const { RegistrationRouter } = require("./routers/Registrations.routes");
//init app
const app = express();
app.use(express.json());
app.use("/api/v1/registrations", RegistrationRouter);

module.exports = { app };
