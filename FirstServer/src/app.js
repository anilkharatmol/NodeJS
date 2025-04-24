const express = require("express");

const app=express();

const PORT = 4000;

// Authentication Middleware

app.use(express.json());
app.use((req,res,next)=>{
  console.log("Authentication Middleware called");
  next();
})

app.use("/library-2",(req,res,next)=>{
  console.log("Book Recommendation");
  next()
  
})

app.use("/library-3",(req,res,next)=>{
  console.log("Special Access to research papers");
  next();
})

app.use("/welcome",(req,res,next)=>{
  req.user = "Guest"
  console.log("In the welcome middleware");  
  next();
})

app.get("/library-2",(req,res)=>{
  res.send("<h1>Library-2 entered</h1>")
})

app.get("/library-3",(req,res)=>{
  res.send("<h2>Library-3 entered</h2>")
})

app.get("/welcome",(req,res)=>{
  res.send(`<h2>Welcome,${req.user}</h2>`)
})


// Products
app.get('/products', (req, res) => {
  res.send('Here is the list of all products.');
});

app.post('/products', (req, res) => {
  res.send('A new product has been added.');
});

// Categories
app.get('/categories', (req, res) => {
  res.send('Here is the list of all categories.');
});

app.post('/categories', (req, res) => {
  res.send('A new category has been created.');
});

app.all('/*splat',(req,res)=>{
  res.status(404).send("<h1>404 - Page Not Found</h1>");
})

app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}! Ready to handle requests.`);
});