const express = require('express')
const router = express.Router();
const objUser = require("../controller/UserData")
//http://localhost:8080/addUser/JustSul/Dubai/1234/432110/justsul@hotmail.com

// To get all users
router.get("/",objUser.getUsers)

// To post
router.post("/addUser",objUser.postUser)

// To put
router.put("/update/:name",objUser.putUser)

// To delete
router.delete("/delete/:name",objUser.deleteUser)

module.exports = router