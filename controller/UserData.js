

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
 
let postUser = (req,res) => {            //getUsers
    if(req.body == null){
        res.send("Bad Request").status(400)
    }
    else{
        let userAdd = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            Address: req.body.Address,
            pin: req.body.pin
        }
    MallUsers.push(userAdd)
    res.send("User Saved").status(200)
    }
}

let getUsers = (req,res) => {           //viewUsers
    if(req.params.name != null){
        res.json(MallUsers)
    }
    else{
        res.send("Bad Request").status(400)
    }
}

let putUser = (req,res) => {
    if(req.body == null){
        res.send("Bad Request").status(400)
    }
    else{
        MallUsers.forEach((item) => {
            if(item.name == req.params.name){
                item.name = req.body.name,
                item.email = req.body.email,
                item.password = req.body.password,
                item.Address = req.body.Address,
                item.pin = req.body.pin
            }
        })
    }
    res.json(MallUsers)
}

let deleteUser = (req,res) =>{
    if(req.params.name != null){
        MallUsers.forEach((item,index)=>{
            if(item.name == req.params.name){
                MallUsers.splice(index,1)
            }
        })
        res.json(MallUsers)
        }
        else{
            res.send("Bad Request").status(400)
        }
}



module.exports = {postUser,getUsers,deleteUser,putUser}