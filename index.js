const express = require('express')
const app = express()

app.use("/",require("./Routers/ProductRouts"))
app.use("/",require("./Routers/UserRouter"))

app.listen(8080)