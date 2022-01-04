import * as express from "express";

const app = express();
const port = 3000;
app.get("/", (req, res) => {
  // index.ts
  const arr: string[] = ["one", "two", "three"];
  if (arr.length == 0) {
    throw new Error("Empty array");
  }

  res.send("Hello World!");
});

app.listen(port, () => {
  return console.log(`server is listening on ${port}`);
});
