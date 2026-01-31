import express from "express";
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, World! Testing3000");
});

const PORT = process.env.PORT || 5000;

app.listen(Number(PORT), "0.0.0.0", () => {
  console.log(`Server is running on port ${PORT}`);
});
