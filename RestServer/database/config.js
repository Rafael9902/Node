const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_CNN, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.log('DataBase Connected');
  } 
  catch (error) {
    console.error(error);
    throw new Error("Error initializing Data Base");
  }
};

module.exports = { dbConnection };
