import mongoose from "mongoose";
import { config } from "./config";

export const dbConnection = async() => {
    try {
        await mongoose.connect(config.MONGO_DB_CNN!);
    
        console.log('DataBase Connected');
      } 
      catch (error) {
        console.error(error);
        throw new Error("Error initializing Data Base");
      }
};
