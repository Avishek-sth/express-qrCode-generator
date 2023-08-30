const express = require("express");
const app = express();

const indexRouter = require("./routes");

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.static("public"));
app.use(express.json());
app.use("/", indexRouter);

app.use((err, req, res, next) => {
  err = err ? err.toString() : "Something went wrong!"
  res.status(500).json({data: "", msg: err})
})

app.listen(3333, () => {
  console.log("Application is running on port 3333.");
});
