const express = require("express");
const app = express();
const allRoutes = require("./routes");
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.get(allRoutes);

app.listen(PORT, () => {
  console.log("Server is running");
});
