#PKI PROJECT

### Logowanie
Dane użytkowników zapisywane na bazie danych, na serwerze, przy logowaniu jest tworzony jsonwebtoken, który jest przesyłany w odpowiedzi na zapytanie logowania, potem jest ten token zapisywany w przeglądarce razem informacją o loginie użytkownika.

### Dane
Po zalogowaniu w aplikacji komunikacja przez websockety.  
Po zapytaniu o konkretną tabelę, można edytować dowolnie jej zawartość: dodawać, edytować, usuwać rekordy. Przy każdej zmianie na bazie danych, są aktualizowane dane do wszystkich użytkowników aktualnie podłączonych.  
Można również przesyłać zapytania, do bazy danych, i w ich przypadku, również w przypadku zmian, odświeżone zostaną dane.  
  
Tabela która wyświetla dane, pobrane z bazy pozwala na sortowanie, oraz filtrowanie wyników w tabelu przez pole: "Search..."  

### Projekt
Projekt dostępny w internecie pod adresem:  
http://pki.pskowron.ski  
Link do repozytorium  
https://github.com/skowronskip/PKIproject
