import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://Z3abdalla:325253725@cluster0.yyi4bbu.mongodb.net/food-del') 
    .then(()=>console.log("DB connected"))
}