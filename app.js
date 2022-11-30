const express = require("express");
const app = express();
const DBconnection = require("./config/config.json");
const allRoutes = require("./routes");
const PORT = process.env.PORT || 3000;
const Sequelize = require("Sequelize");
const sequelize = new Sequelize("calcare_dev", "root", "12345678", {
  host: "127.0.0.1",
  dialect: "mysql",
});

// Connect to DB
try {
  sequelize.authenticate(DBconnection);
  console.log("Connection has been established successfully.");
  // Middleware
  app.use(express.json());
  app.use(allRoutes);

  // Menampilkan Koneksi Server
  app.listen(PORT, () => {
    console.log(`Calcare Server is running at port http://localhost:${PORT}`);
  });
} catch (error) {
  console.error("Unable to connect to the database:", error);
}
