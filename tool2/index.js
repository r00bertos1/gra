const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(bodyParser.json());

const scientistsFile = path.join(__dirname, "../data/scientists.json");
const scientists = JSON.parse(fs.readFileSync(scientistsFile, "utf8"));

app.post("/", (req, res) => {
  const input = req.body.input;
  if (input.startsWith("test")) {
    return res.json({ output: input });
  }
  const universityId = input;
  const universityScientists = scientists.filter((s) => s.uczelnia === universityId).map((s) => `${s.imie} ${s.nazwisko}`);
  res.json({ output: universityScientists });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Tool2 running on port ${PORT}`);
});
