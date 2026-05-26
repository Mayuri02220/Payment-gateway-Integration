import express from "express";
import payment from "./routes/productRoutes.js"

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use("/api",payment)


export default app;