const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const FileStore = require("session-file-store")(session);
require("dotenv").config();

const app = express();
const PORT = process.env.PORT ?? 5000;

const indexRouter = require('./routes/index')
const registr = require("./routes/registr");

const sessionConfig = {
  store: new FileStore(),
  key: "user_sid",
  secret: `${process.env.SECRET_WORD}`,
  resave: true,
  saveUninitialized: false,
  cookie: {
    expires: 1000 * 60 * 60 * 12,
    httpOnly: true,
  },
};

app.use(session(sessionConfig));
app.use(cookieParser());
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);
app.use("/", indexRouter);
app.use("/", registr);

app.listen(PORT, () =>
  console.log(`*Server started at http://localhost:${PORT}`)
);
