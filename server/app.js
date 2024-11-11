// halaman untuk server back end
const express = require("express");
const app = express();

// untuk port server
const port = 5000;

// untuk listening server
app.listen(port, () => {
  console.log(`App is listening on http://localhost:${port}`);
});
