var express = require("express");
var expresshandlebars = require("express-handlebars");
var app = express();
var url = require("url");
var fs = require("fs");
app.engine(
  "handlebars",
  expresshandlebars({
    layoutsDir: __dirname + "/views/layouts",
    defaultLayout: "main",
  })
);

app.use(express.static("views"));

app.set("view engine", "handlebars");
// hhtp get
app.get("/", function (req, res) {
  res.render("index");
});
app.get("/login", function (req, res) {
  res.render("Login");
});

app.get("/signup", function (req, res) {
  res.render("Signup");
});
app.get("/fs", function (req, res) {
  res.render("File");
});
app.get("/insert", function (req, res) {
  fs.writeFile("test.txt", "/n Ghi vao file thu xem", function (err, data) {
    if (err == null) {
      res.send("Ghi thanh cong");
    } else {
      res.send(err);
    }
  });
});
app.get("/append", function (req, res) {
  fs.appendFile("test.txt", "\n Ghi vao file thu xem 2", function (err) {
    if (err == null) {
      res.send("Ghi thanh cong");
    } else {
      res.send(err);
    }
  });
});
app.get("/unlink", function (req, res) {
  fs.unlink("test.txt", function (err) {
    if (err == null) {
      res.send("Xoa thanh cong");
    } else {
      res.send(err);
    }
  });
});
app.get("/rename", function (req, res) {
  fs.rename("test.txt", "test2.txt", function (err) {
    if (err == null) {
      res.send("Rename thanh cong");
    } else {
      res.send(err);
    }
  });
});

app.listen(process.env.PORT || "3000");
