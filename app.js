const express = require("express");
const app = express();
const allRoutes = require("./routes");
const PORT = process.env.PORT || 3000;
const cors = require("cors");
// Middleware
app.use(express.json());
app.use(allRoutes);
app.use(cors());

// Menampilkan Koneksi Server
app.listen(PORT, () => {
  console.log(`Calcare Server is running at port http://localhost:${PORT}`);
});

/* Ini local
    "development": {
    "username": "root",
    "password": "12345678",
    "database": "calcare_dev",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },

  Ini Railway
  "development":{
    "username": "root",
    "password": "62Vpsy2SFLUIt1orZDfC",
    "database": "railway",
    "port": 7579,
    "host": "containers-us-west-90.railway.app",
    "dialect": "mysql"
*/
