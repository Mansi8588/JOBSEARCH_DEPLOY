import mongoose from "mongoose";

export const dbConnection = () => {
  // mongoose.connect("mongodb://localhost:27017", {
  //     dbName: "MERN_JOB_SEEKING_WEBAPP",
  //   })
  mongoose.connect('mongodb+srv://mansirai:Ampm123@cluster0.z2oq7zr.mongodb.net/')
    .then(() => {
      console.log("Connected to database.");
    })
    .catch((err) => {
      console.log(`Some Error occured. ${err}`);
    });
};