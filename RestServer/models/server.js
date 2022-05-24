const express = require("express");
const cors = require("cors");
const { dbConnection } = require("../database/config");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usersPath = '/api/users';

    //database
    this.connectDataBase();
    
    this.middlewares();
    this.routes();
  }

  routes() {
    this.app.use('/api/users', require ('../routes/user.routes'));
  }

  listen() {
    this.app.listen(this.port, () =>
      console.log(`Server running at port ${this.port}`)
    );
  }

  middlewares() {
    this.app.use(cors());
    //this.app.use(express.static("public"));
    //read and perse body
    this.app.use(express.json());
  }

  async connectDataBase() {
    await dbConnection();
  }
}

module.exports = Server;
