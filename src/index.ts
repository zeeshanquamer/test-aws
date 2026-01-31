import express from "express";
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

const PORT = process.env.PORT || 5000;

app.listen(Number(PORT), () => {
  console.log(`Server is running on port ${PORT}`);
});
