

var MallUsers = [
    {
        name: "Pawan",
        Address: "Aurangabad",
        pin: "431001",
        password: "****",
        email: "pawan@gmail.com"
    },
    {
        name: "John",
        Address: "USA",
        pin: "131004",
        password: "****",
        email: "john@gmail.com"
    },
    {
        name: "Robin",
        Address: "Japan",
        pin: "22312",
        password: "****",
        email: "robin@gmail.com"
    }
]

let getUser = (req,res) => {
    
    MallUsers.push(req.params)
    res.send("User Saved")
}

module.exports = {getUser}