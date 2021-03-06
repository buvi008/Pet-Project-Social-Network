const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const FileStore = require("session-file-store")(session);
require("dotenv").config();

const app = express();
const PORT = process.env.PORT ?? 5000;

const indexRouter = require("./routes/index");
const registration = require("./routes/registr");
const isAuthorizedRouter = require("./routes/isAuthorized");
const logoutRouter = require("./routes/logout");
const loginRouter = require("./routes/login");
const projects = require("./routes/projects");
const message = require("./routes/message");

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

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(session(sessionConfig));
app.use(logger("dev"));
app.use("/", indexRouter);
app.use("/registration", registration);
app.use("/isAuthorized", isAuthorizedRouter);
app.use("/logout", logoutRouter);
app.use("/login", loginRouter);
app.use("/project", projects);
app.use("/message", message);

app.listen(PORT, () =>
  console.log(`*Server started at http://localhost:${PORT}`)
);
