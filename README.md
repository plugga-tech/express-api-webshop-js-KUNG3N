# Du har fått i uppdrag att utveckla API’et till en webbshop.

En lösningsarkitekt har redan dokumenterat vilka endpoints som skall finnas för API’et samt skrivit ett test flöde med REST-Client som ni kan börja utveckal med. Dvs vilka endpoints och vad de skall heta samt vad de förväntas returnera är redan förutbestämt. 

För att testerna skall fungera behöver ni Rest-Client (extension) installerat till vsc.

För G krav så räcker det att de endpoints markerade med G fungerar. 

för betyget G behöver ingen frontend skapas.

Projektet ni klonar har förutom test-rest filerna förberett även en mapp för backend, där ni kan installera express på valfritt sätt.

All data skall sparas i en lokal MongoDB databas. Döp databasen enligt “fornamn-efternamn”.

Det är helt ok att skapa alla produkter med “mock” data, samt att för designens skull använda en “placeholder”-bild för produkterna, dvs att alla produkter har samma bild.


### Skillnader mellan G och VG krav:

För kravet G så behöver inte anänvdarens lösenord krypteras. 

OBS! Spara aldrig API nyckeln i databasen när du tex sparar en order eller en ny kategori.

Hårdkoda heller inte in nyckeln någonstans i backend, tänk på att nyckeln skall enkelt kunna ändras vid behov. Tex via en global variabel, eller en .env variabel.

Skapar du en .env fil för projektet så skicka med ett exempel på env filen döpt till “example.env”.

För G nivå så behöver inte produkter sparas i kategorier.

<!-- ### Frontend klienten skall kunna (VG krav):

Skapa en ny användare samt logga in
Lösenordet skall krypteras
Se vilka produkter som finns i butiken, fördelat på olika kategorier. 
På varje produkt så skall grundläggande info som pris, namn och bild (placeholder) visas.
Kunna lägga en produkt i en kundvagn
Skicka en order med alla produkter från kundvagnen
Kunna se en sida med alla sina skapade orders, samt vilka produkter en order innehåller.
Lämna in länken till ert skapde repo när ni är färidga. Skriv även ett meddelande om ni önskar att bli testade mot G eller VG kraven. -->

Lycka till!

Kom ihåg att comitta och pusha ofta!