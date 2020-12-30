const express = require('express')
const router = express.Router();
const {getUser} = require("../controller/UserData")


router.get("/addUser/:name/:address/:password/:pin/:email",getUser)

module.exports = router