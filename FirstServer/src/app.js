const express = require("express");
const app=express();
const PORT = 4000;
const productRouter = require("../routes/products");
const categoriesRouter = require("../routes/categories");

// Authentication Middleware

app.use(express.json());
app.use((req,res,next)=>{
  console.log("Authentication Middleware called");
  next();
})

app.use("/products", productRouter);
app.use("/categories", categoriesRouter);


app.all('/*splat',(req,res)=>{
  res.status(404).send("<h1>404 - Page Not Found</h1>");
})

app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}! Ready to handle requests.`);
});