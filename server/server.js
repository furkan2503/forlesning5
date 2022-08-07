import express from "express";

const app = express();

app.get("/login", (req, res, next) => {
  res.json({ username: "Noen Andre Personer" });
});

app.post("/login", (reg, res, next) => {
  res.sendStatus(401);
});

app.use(express.static("public"))

const server = app.listen(process.env.PORT || 3000, () => {
  console.log(`started on http://localhost:${server.address().port}`);
});
