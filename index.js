// code away!
require("dotenv").config();

const app = require("./server");

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is up and listening at port: ${PORT}`);
});
