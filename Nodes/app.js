
const app = require("express")();
const Blog = require("./blogmodel");
const { connectDataBase } = require("./database");
connectDataBase();
//connecting to Database



app.get("/", (req, res) => {
  res.json({ 
    message: "Hello World", 
    status: "success"      
  });
}
);

app.post("/createBlog",async(req,res) => {
  const title = req.body.title;
  const subTitle = req.body.subTitle;
  const description = req.body.description;
  //Alternative way
  // res.status(200).json({
    // message: "Blog Created",
  // });
 
  await Blog.create({
    title: title,
    subTitle: subTitle,
    description : description,
    snippet: "Blog 1 snippet",
    body: "Blog 1 body"
  })

  res.json({
    message: "Blog Created",
    status: 201
  });
});
// app.get("/", (req, res) => {
    // res.json({
      // message: "Hello World",
    //  status: "success"
    // });
  // }
  // );
  // app.get("/api", (req, res) => {
    // res.send("Hello API");
  // }
  // );
  app.listen(2000, () => {    
    console.log("Server is running on port 2000");
  });