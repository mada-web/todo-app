import express from "express";
import cors from "cors";
import * as todos from "./repositories";

const app = express();
const port = 8888;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, "localhost", () => {
  console.log(`Server listening on port ${port}`);
});

app.get("/", (req, res) => {
  res.send("ON");
});

app.post("/todo", async (req, res) => {
  try {
    const todo = await todos.createOne(req.body);
    res.send(JSON.stringify(todo));
  } catch (err) {
    console.log(err);
    res.send("error");
  }
});
