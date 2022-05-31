require("dotenv").config();
const express = require("express");
const app = express();
const { auth, requiresAuth } = require("express-openid-connect");

const mongoose = require("mongoose");
const radioStationRoute = require("./routes/radio-stations");
const PORT = process.env.PORT || 3000;

const conn = process.env.DB_CONNECTION;
const connectDB = async () => {
  try {
    await mongoose.connect(conn, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to database");
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};
connectDB();

//OAuth-2 login/signup
app.use(
  auth({
    authRequired: true,
    auth0Logout: true,
    issuerBaseURL: process.env.ISSUER_BASE_URL,
    baseURL: process.env.BASE_URL,
    clientID: process.env.CLIENT_ID,
    secret: process.env.SECRET,
    idpLogout: true,
  })
);

//MIDDLEWARES
app.use(express.json());
app.use("/radiostation", radioStationRoute);

app.get("/", (req, res) => {
  res.send(req.oidc.isAuthenticated() ? "Hello World" : "Sigin First!");
});
app.get("/profile", requiresAuth(), (req, res) => {
  res.send(JSON.stringify(req.oidc.user));
});

app.listen(PORT, () => {
  console.log(`App running on Port ${PORT}`);
});
