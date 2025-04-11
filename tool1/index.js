const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(bodyParser.json());

const projectsFile = path.join(__dirname, "../data/projects.json");
const projects = JSON.parse(fs.readFileSync(projectsFile, "utf8"));

app.post("/", (req, res) => {
  const input = req.body.input;
  if (input.startsWith("test")) {
    return res.json({ output: input });
  }
  const searchTerm = input.toLowerCase();
  const project = projects.find((p) => p.nazwa.toLowerCase().includes(searchTerm));
  if (project) {
    res.json({ output: project });
  } else {
    res.json({ output: "Projekt nie znaleziony" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Tool1 running on port ${PORT}`);
});
