import express from "express";
import axios from "axios";


const app = express();
const port = 3000;
const API_URL = "https://dog.ceo/api/breeds/image/random";

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index.ejs");
    });

 app.post("/submit", async (req, res) => {
    try {
        const result = await axios.get(API_URL);
        res.render("index.ejs", {
          random: result.data.message,
        });
      } catch (error) {
        console.log(error.response.data);
        res.status(500);
      } 
   });


      
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });