const express = require("express");
const app = express();

const indexRouter = require("./routes");

app.use(express.json());
app.use("/", indexRouter);


app.listen(3333, () => {
    console.log("Application is running on port 3333.");
});