import cookieParser from "cookie-parser";
import express from "express";
import morgan from "morgan";
import testRoute from "./routes/route.js";

const app = express();

app.get("/", (req, res) => {
	res.send("Hello, World!");
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan("dev"));

app.use("/api", testRoute);

export default app;
