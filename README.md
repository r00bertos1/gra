# Repozytorium dla narzędzi webhook

To repozytorium zawiera dwa narzędzia (webhooki) do wyszukiwania danych pobieranych z:

- Projekty: `https://letsplay.ag3nts.org/data/badania.json`
- Uczelnie: `https://letsplay.ag3nts.org/data/uczelnie.json`
- Naukowcy: `https://letsplay.ag3nts.org/data/osoby.json`

## Struktura

- `tool1/`: Narzędzie do wyszukiwania projektów badawczych na podstawie frazy w nazwie. Zwraca nazwę projektu, identyfikator uczelni, pełną nazwę uczelni i sponsora.
- `tool2/`: Narzędzie do wyszukiwania naukowców na podstawie identyfikatora uczelni.

## Uruchomienie lokalne

1. Zainstaluj zależności w folderach `tool1` i `tool2`:
   ```bash
   cd tool1
   npm install
   cd ../tool2
   npm install
   ```
