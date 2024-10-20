const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const port = 3019;

const app = express();
app.use(express.static(__dirname));
app.use(express.urlencoded({extended:true}))

mongoose.connect('mongodb://localhost:27017/payments')
const db = mongoose.connection
db.once('open', ()=>{
console.log("Mongodb connection successful")
})

const userSchema = new mongoose.Schema({
      FullName:String,
      gender:String,
      address: String,
      email:String,
      Pincode:String,
      cardType:String,
      cardNumber:String,
      expirationDate: String,
      cvv:String
})

const Users = mongoose.model("data",userSchema)

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/post',async(req,res)=>{
  const{FullName, gender,address,email,Pincode,cardType,cardNumber,expirationDate,cvv} = req.body
  const user = new Users({
    FullName,
      gender,
      address,
      email,
      Pincode,
      cardType,
      cardNumber,
      expirationDate,
      cvv
})
await user.save()
console.log('user')
res.send("Form Submission Successful")
})

app.listen(port, () => {
  console.log("Server started on port " + port);
});
