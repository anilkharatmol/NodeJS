const express = require("express");
const userRouter = require("./routes/userRoutes")
const productRouter = require("./routes/productRoutes")
const cartRouter = require("./routes/cartRoutes")

const app = express();

app.use(express.json())

app.use(express.static("public"))

app.use("/users",userRouter);
app.use("/products",productRouter);
app.use("/cart",cartRouter);

app.get("/",(req,res)=>{
    res.send("Welcome to E-Commerce Startup")
})

app.all("/*splat",(req,res)=>{
    res.status(404).send("<h1>Page not found</h1>")
})

app.listen(3000,()=>{
    console.log("Server is running on PORT 3000");
})

