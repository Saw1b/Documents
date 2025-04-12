const mongoose = require("mongoose")
exports.connectDataBase = async() => {
    
    await mongoose.connect("mongodb+srv://Saw11:Saw11@cluster0.obyrby2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    console.log("Connected to MongoDB");
}