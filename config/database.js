const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_URI, {
      useNewUrlParser: true,    // Helps to parse the connection string correctly
      useUnifiedTopology: true,  // Use the new unified topology layer
    })
    .then((data) => {
      console.log(`MongoDB connected with server: ${data.connection.host}`);
    })
    .catch((error) => {
      console.error(`Error connecting to MongoDB: ${error.message}`);
      process.exit(1); // Exit the application if there is a connection error
    });
};

module.exports = connectDatabase;