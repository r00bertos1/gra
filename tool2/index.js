const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());

const SCIENTISTS_URL = "https://letsplay.ag3nts.org/data/osoby.json";

app.post("/", async (req, res) => {
  const input = req.body.input;

  // Weryfikacja webhooka
  if (input.startsWith("test")) {
    return res.json({ output: input });
  }

  try {
    // Pobieranie danych o naukowcach
    const response = await axios.get(SCIENTISTS_URL, { timeout: 5000 });
    const scientists = response.data;

    // Logowanie danych do debugowania
    console.log("Pobrani naukowcy:", JSON.stringify(scientists, null, 2));

    // Sprawdzenie, czy dane mają oczekiwany format
    if (!Array.isArray(scientists) || scientists.length === 0) {
      return res.status(500).json({ output: "Brak danych o naukowcach" });
    }

    // Wyszukiwanie naukowców
    const universityId = input;
    const universityScientists = scientists.filter((s) => s.uczelnia === universityId).map((s) => `${s.imie} ${s.nazwisko}`);

    res.json({ output: universityScientists });
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

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Tool2 running on port ${PORT}`);
});
