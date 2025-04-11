# Repozytorium dla narzędzi webhook

To repozytorium zawiera dwa narzędzia (webhooki) do wyszukiwania danych.

## Struktura

- `data/`: Pliki JSON z danymi źródłowymi.
- `tool1/`: Narzędzie do wyszukiwania projektów badawczych.
- `tool2/`: Narzędzie do wyszukiwania naukowców na uczelni.

## Uruchomienie lokalne

1. Zainstaluj zależności w folderach `tool1` i `tool2`:

   ```bash
   cd tool1
   npm install
   cd ../tool2
   npm install
   ```

2. Uruchom narzędzia:

- Tool1: `cd tool1 && npm start` (port 3000)
- Tool2: `cd tool2 && npm start` (port 3001)

3. Testuj za pomocą narzędzia jak Postman, wysyłając POST requesty z JSONem

```json
{ "input": "fraza" }
```
