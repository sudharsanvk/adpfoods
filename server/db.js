const mongoose = require('mongoose')

const connectDB = ()=>{
    mongoose.connect("mongodb+srv://adpfoods:adpfoods@cluster0.oatd7ix.mongodb.net/adp",{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(()=>{
        console.log("Database connected successfully")
    })
    .catch((err)=>{
        console.log(err)
    })
}
module.exports = connectDB
// exports.module=connectDB
