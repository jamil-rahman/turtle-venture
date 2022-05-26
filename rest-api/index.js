require('dotenv').config();
const express = require('express');
const app = express();
const { auth, requiresAuth } = require('express-openid-connect');



app.use(
  auth({
    authRequired: false,
    auth0Logout: true,
    issuerBaseURL: process.env.ISSUER_BASE_URL,
    baseURL: process.env.BASE_URL,
    clientID: process.env.CLIENT_ID,
    secret: process.env.SECRET,
    idpLogout: true,
  })
);
console.log(process.env.SECRET)


const PORT = process.env.PORT || 3000
app.listen(PORT, ()=>{
    console.log(`App running on Port ${PORT}`);
})