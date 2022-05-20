const express = require("express");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    this.middlewares();
    this.routes();
  }

  routes() {
    this.app.get("/api", (req, res) => {
      res.status(403).json({
        message: "Ok",
      });
    });

    this.app.put("/api", (req, res) => {
      res.status(403).json({
        message: "Ok",
      });
    });

    this.app.post("/api", (req, res) => {
      res.status(403).json({
        message: "Ok",
      });
    });

    this.app.delete("/api", (req, res) => {
      res.status(403).json({
        message: "Ok",
      });
    });
  }

  listen() {
    this.app.listen(this.port, () =>
      console.log(`Server running at port ${this.port}`)
    );
  }

  middlewares() {
    this.app.use(express.static("public"));
  }
}

module.exports = Server;
