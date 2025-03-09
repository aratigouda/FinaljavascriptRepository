let Express = require("express")
let Path = require("path")
let app = Express()


app.use(Express.urlencoded())

//css
app.use(Express.static(Path.join(__dirname, "public")))

//3
let Mongoose = require("mongoose")
Mongoose.connect("mongodb://localhost:27017/registrationdatabase")

//4
let Bcrypt = require("bcrypt")

//3
let RegistrationSchema = new Mongoose.Schema({
    email: String,
    username: String,
    password: String

})
let RegistrationModel = Mongoose.model("registrations", RegistrationSchema)

//8
let status = false
//7
 app.get("/home", function(req, res){
    let fatchedUsername = req.query.username
    res.render("home.ejs", {username: fatchedUsername, status: loginstatus})
 })
//1
app.get("/register", function(req, res){
 res.render("register.ejs")
})

//2
app.post("/submit_registration", async function(req, res){
    let registrationData = req.body
    //console.log(registrationData)
    if(registrationData.password == registrationData.confirm)
    {
        //4
       let hashedPassword = await Bcrypt.hash(registrationData.password, 10)
//3
 new RegistrationModel({email: registrationData.email, usename:registrationData.username, password:hashedPassword})
   .save()
   //before res.send("<h1> Registration successfull</h1>")
    
   res.redirect("/login")//now 5


}
    else{
        res.send("password dont match")
    }
})


//5
app.get("/login", function(req, res){
    res.render("login.ejs", {message: ""})

})


//6 login page
app.post("/login", async function(req, res){

    let enteredEmail = req.body.email
   let enteredPassword =  req.body.password
   //before console.log(enteredEmail, enteredPassword)
  
   /*before 
   let registrationDetails = await RegistrationModel.find()
console.log(registrationDetails)

registrationDetails.map( async function(i){
    if(i.email == enteredEmail){
      let status =  await Bcrypt.compare(i.password, enteredPassword)
    console.log(status)
    }
})*/

//now
    let output = await RegistrationModel.findOne({email: enteredEmail})
  //console.log(output)
  if(output != null){
    let status =  await Bcrypt.compare(enteredPassword, output.password)
   //console.log(status)

   if(status == true){
    loginstatus = true //8
   // res.redirect("/home") before
    res.redirect(`/home?username=${output.username}`)

   }else{
    loginstatus = false //8
    res.redirect("/login")
   }
}
else{
    res.render("login.ejs", { message: "enter correct details "})
}
})


//9
app.get("/logout", function(req, res){
    loginstatus = false
    res.redirect("/login")
})

app.listen(2000, function(){
    console.log("express program is running on 2000 port")
})