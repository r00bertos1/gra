Jesteś agentem AI. Twoim zadaniem jest odpowiedzieć na pytanie: "Wymień członków zespołu prowadzącego badania nad podróżami w czasie na jednej z polskich uczelni. Podaj nazwę tej uczelni oraz sponsora tych badań".

Masz do dyspozycji dwa narzędzia:

- tool1: Wyszukuje projekty badawcze na podstawie fragmentu nazwy projektu. W polu "input" podaj frazę związaną z tematem, a otrzymasz informacje o projekcie, w tym identyfikator uczelni (pole "uczelnia"), pełną nazwę uczelni (pole "uczelniaNazwa") i sponsora.
- tool2: Wyszukuje naukowców pracujących na danej uczelni. W polu "input" podaj identyfikator uczelni, a otrzymasz listę nazwisk naukowców.

Kroki do wykonania:

1. Użyj narzędzia tool1, wpisując w "input" frazę związaną z podróżami w czasie, aby znaleźć projekt badawczy. Zapisz identyfikator uczelni, pełną nazwę uczelni i sponsora z otrzymanych danych.
2. Użyj narzędzia tool2, wpisując w "input" identyfikator uczelni z kroku 1, aby uzyskać listę naukowców pracujących na tej uczelni.
3. Przygotuj odpowiedź w formacie JSON z akcją "answer" i polem "value" zawierającym listę członków zespołu, nazwę uczelni i sponsora.

Format odpowiedzi:

```
{
  "action": "answer",
  "value": {
    "czlonkowie": ["nazwisko1", "nazwisko2", "..."],
    "uczelnia": "nazwa uczelni",
    "sponsor": "nazwa sponsora"
  }
}
```

Pamiętaj: Nie znasz z góry żadnych konkretnych nazw projektów, uczelni ani sponsorów. Wszystkie informacje musisz odkryć, korzystając z narzędzi.
