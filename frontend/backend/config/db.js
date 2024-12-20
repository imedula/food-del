import mongoose from "mongoose";


export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://iumedulashvili:Tapachiralavka3142@cluster0.psl6r.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}