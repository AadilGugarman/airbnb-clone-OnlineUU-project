if(process.env.NODE_ENV != "PRODUCTION"){
    require('dotenv').config()
}


const mongoose = require('mongoose')
const initData = require('./data.js')
const Listing = require('../models/listing.js');
const User = require('../models/user.js');

// for local database
// const MongoURL = 'mongodb://127.0.0.1:27017/airbnb'

// main().then((res)=>{
//     console.log('connected to init DB')
// }).catch((err) =>{
//   console.log(err)
// })
// async function main(){
//     await mongoose.connect(MongoURL)
// }

const dbUrl = process.env.ATLAS_DB
console.log("🌍 DB URL from ENV:", process.env.ATLAS_DB);

main().then((res)=>{
    console.log('connected to DB')
}).catch((err) =>{
  console.log(err)
})
async function main(){
    await mongoose.connect(dbUrl)
};



const initDB =async ()=>{
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj)=>({...obj , owner:'692f0f62010ed20b61f38c9d'}))
    await Listing.insertMany(initData.data)

}
initDB();

// const delDB =async ()=>{
//      await Review.deleteMany({})

// }
// delDB();

