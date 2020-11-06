require("dotenv").config();
const session = require("express-session");
const express = require("express");
const massive = require("massive");
const authCtrl = require("./authCtrl");
const transactionCtrl = require("./transactionCtrl");
const cors = require("cors");
const { SESSION_SECRET, CONNECTION_STRING } = process.env;

const app = express();
app.use(cors());
app.use(express.json());

app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: { maxAge: 1000 * 60 * 60 * 24 * 365 },
    user: {
      user_id: null,
    },
  })
);

// Middleware
// app.use((req, res, next) => {
//   if(req.session.user) next(req, res);
//   else res.status(400).send("You are not logged in.") 
// });

massive({
  connectionString: CONNECTION_STRING,
  ssl: { rejectUnauthorized: false },
}).then((db) => {
  app.set("db", db);
  console.log("db connected");
});

// auth endpoint
app.post("/api/register", authCtrl.register);
app.post("/api/login", authCtrl.login);
app.put("/api/logout", authCtrl.logout);
app.get("/api/verify", authCtrl.verify);

// transaction endpoints
app.post("/api/transaction/create", transactionCtrl.create);
app.get("/api/transaction/list", transactionCtrl.list);
app.delete('/api/transaction/:id', transactionCtrl.delete)

const PORT = 5000;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
