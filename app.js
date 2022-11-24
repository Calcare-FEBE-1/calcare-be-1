const express = require("express");
const app = express();
const DBconnection = require("./config/config");
const allRoutes = require("./routes");
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(allRoutes);

// Menampilkan Koneksi Server 
app.listen(PORT, () => {
  console.log("Server is running");
});
