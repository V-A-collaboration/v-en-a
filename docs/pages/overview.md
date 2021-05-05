# Overview

Elementen aan de hand van een workflow gaande van Input --> Bibliotheek --> Output

| Input               | Bibliotheek               | Output           |
|---------------------|---------------------------|------------------|
| Handmatige invoer   | Handmatige invoer         | V&A stylesheet   |
| Translators         | Rechtbanklijsten          | Afkortingenlijst |
| Identifier          | Identifier                |                  |

# Input

Voor de invoer van boeken, tijdschriften, rechtspraak, ...

## Handmatige invoer

Juris-M niet (altijd) aangepast aan specifiek Belgische context.
Handmatig invullen is een optie als het niet mogelijk is met translators of het om een analoge bron gaat. 

Werkpunten:

- Verbeteren [documentatie](https://v-a-collaboration.github.io/v-en-a/pages/handleiding.html)
- Suggesties voor aanpassing V&A [discussie-forum](https://github.com/V-A-collaboration/v-en-a/discussions)

## Translators

Translators zijn scripts die een online bron direct aan de bibliotheek kunnen toevoegen.

[Repository](https://github.com/V-A-collaboration/translators) inclusief instructies.
[Documentatie](https://www.zotero.org/support/dev/translators)

Lijst met translators specifiek voor België

- Ejustice
- ECLI
- Jurisquare

# Bibliotheek

In de bibliotheek zelf is de mogelijkheid tot handmatig invoeren te vinden. 

Er is ook een optie om via identifier elementen toe te voegen. Specifiek is hierbij de ECLI interessant om te implementeren.

## Handmatig toevoegen

Het gaat hier vooral om documentatie, zie hierboven.
Als er geen goede velden bestaan en deze onontbeerlijk zijn, kunnen deze worden toegevoegd aan het extra veld.

## Rechtbanklijsten

De lijst met rechtbanken zorgt voor de juiste weergaven in de interface. Daarnaast is deze relevant voor de correcte weergave in de output, zie hieronder.
[Lijsten met rechtbanken](https://github.com/V-A-collaboration/legal-resource-registry)

## Identifier (DOI, ECLI, ...)

Voor ECLI als identifier moeten hier aanpassingen gedaan worden. 
Zie (out of date?) [code voor ECLI](https://github.com/Juris-M/zotero/compare/jurism-5.0...mvwestendorp:jurism-5.0) 

# Output

Naar Word document, Google Docs, ...

## Stylesheets

De stylesheet zorgt voor het correct format van de verwijzing.

- [V&A](https://github.com/V-A-collaboration/v-en-a)

[Documentatie CSL](https://juris-m.github.io/cslm-docs/)


## Afkortingenlijst

- [Tijdschriften](https://github.com/V-A-collaboration/v-en-a/blob/master/vena-abbrev.json)
- [Lijsten met rechtbanken](https://github.com/V-A-collaboration/jurism-abbreviations)
  -  Afkortingensysteem is aan veel verandering onderhevig geweest, te controleren via welke weg hier aanpassingen gedaan kunnen worden.
