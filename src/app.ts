import express from "express";
import logger from "morgan";
import * as path from "path";

import { errorHandler, errorNotFoundHandler } from "./middlewares/errorHandler";

// Routes
import { index } from "./routes/index";
// Create Express server
export const app = express();
const port = process.env.PORT || 3000;
// Express configuration
app.set("port", port);
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "pug");

app.use(logger("dev"));

app.use(express.static(path.join(__dirname, "../public")));
app.use("/", index);

app.use(errorNotFoundHandler);
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
  