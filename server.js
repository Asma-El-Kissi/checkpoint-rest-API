//Install & Set up mongoose
require ('dotenv').config({path:'./config/.env'});
const mongoose=require ('mongoose');
const express=require('express');
const app = express();
app.use(express.json());
const port=5000;
const user=require('./models/User.js')
// MONGO_URI=mongodb://localhost:27017
const mongouri=process.env.MONGO_URI;
console.log(mongouri)
//Connect to the database
mongoose.connect(mongouri).then(()=>{console.log('the database is connected')}).catch((err)=>{console.log(`the database is not connected ${err}`)})
app.listen(port,(err) => err ? console.log(err):console.log(`server is runnning on ${port}`));
//Create Many Records with model.create()
let arrayofPeople=[
    {name: 'Karim', age : 30, favouriteFoods:['spagetty', 'couscous']},
    {name: 'Salwa', age : 20, favouriteFoods:['salad', 'soup','sandwich']},
    {name: 'Iheb', age : 25, favouriteFoods:['mosli', 'salad']},
  ]
  user.create(arrayofPeople);
  