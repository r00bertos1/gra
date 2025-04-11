const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());

const PROJECTS_URL = "https://letsplay.ag3nts.org/data/badania.json";
const UNIVERSITIES_URL = "https://letsplay.ag3nts.org/data/uczelnie.json";

app.post("/", async (req, res) => {
  const input = req.body.input;

  // Weryfikacja webhooka
  if (input.startsWith("test")) {
    return res.json({ output: input });
  }

  try {
    // Pobieranie danych o projektach
    const projectsResponse = await axios.get(PROJECTS_URL, { timeout: 5000 });
    const projects = projectsResponse.data;

    // Pobieranie danych o uczelniach
    const universitiesResponse = await axios.get(UNIVERSITIES_URL, { timeout: 5000 });
    const universities = universitiesResponse.data;

    // Logowanie danych do debugowania
    console.log("Pobrane projekty:", JSON.stringify(projects, null, 2));
    console.log("Pobrane uczelnie:", JSON.stringify(universities, null, 2));

    // Sprawdzenie, czy dane mają oczekiwany format
    if (!Array.isArray(projects) || projects.length === 0) {
      return res.status(500).json({ output: "Brak danych o projektach" });
    }
    if (!Array.isArray(universities) || universities.length === 0) {
      return res.status(500).json({ output: "Brak danych o uczelniach" });
    }

    // Wyszukiwanie projektu
    const searchTerm = input.toLowerCase();
    const project = projects.find((p) => p.nazwa && p.nazwa.toLowerCase().includes(searchTerm));

    if (project) {
      // Znajdź pełną nazwę uczelni na podstawie identyfikatora
      const university = universities.find((u) => u.id === project.uczelnia);
      const universityName = university ? university.nazwa : "Nieznana uczelnia";

      res.json({
        output: {
          nazwa: project.nazwa,
          uczelnia: project.uczelnia,
          uczelniaNazwa: universityName, // Dodajemy pełną nazwę uczelni
          sponsor: project.sponsor,
        },
      });
    } else {
      res.json({ output: "Projekt nie znaleziony" });
    }
  } catch (error) {
    console.error("Błąd:", error.message);
    if (error.response) {
      console.error("Odpowiedź serwera:", error.response.status, error.response.data);
    } else if (error.request) {
      console.error("Brak odpowiedzi od serwera:", error.request);
    }
    res.status(500).json({ output: `Błąd serwera: ${error.message}` });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Tool1 running on port ${PORT}`);
});
