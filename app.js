const express = require("express");
const app = express();
const port = 5000;

// cobver json to object
app.use(express.json());
let users_details = [
  {
    id: 1963,
    name: "Pradeep ",
    email: "pardeep9536@gmail.com",
    password: "pksingh@52",
  },
  {
    id: 1945,
    name: "Sagar kumar",
    email: "sagar4585@gmail.com",
    password: "sagar@6262",
  },
];

app.post("/signup/", (req, res) => {
  let { name, email, password } = req.body;

  if (!name || !email || !password) {
   return res.send({error: "All field are required"});
  }
  //name should be >= 3 digit
  if (name.length < 3) {
    return res.send({error: "Name should be >= 3 digit"});
  }
  // email should be valid
  if (email.indexOf("@") == -1) {
    return res.send({error: "Email should be valid"});
  }
  // password should be >= 8 digit
  if (password.length < 8) {
    return res.send({error: "password should be >= 8 digit"});
  }

  // check if email already exist
  for (t of users_details) {
    if (t.email == email) {
      return res.send({error: "Email already exist"});
    }
  }

  // create a new user 
let last_id = users_details[users_details.length-1].id

//before storing the data in the database, we should encrypt the password - bycrypt

users_details.push({id: last_id+1, name, email, password})

console.log(users_details)

let current_user = users_details[users_details.length-1]
res.send({message: "User created successfully", data: {name:current_user.name, email:current_user.email, id: current_user.id}})

});

app.listen(port, () => console.log("Auth app running on port ${port} !"));
