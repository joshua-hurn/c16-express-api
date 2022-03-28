const express = require('express');
const app = express();
const port = 3000;
const apiRouter = require("./routes");

app.use(express.json());

// localhost:3000/api/chirps GET
app.use("/api", apiRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});