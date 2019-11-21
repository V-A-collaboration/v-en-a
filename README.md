Documentatie Juris-M
====================
# Inhoudstafel
1. Hoe installeer ik Juris-M?
2. Wat kan ik doen met Juris-M?
3. Hoe maak ik een item aan in Juris-M? Hoe vul ik dit correct in?

**Opmerking vooraf:**  software is altijd in ontwikkeling. Het is onwaarschijnlijk dat alles wat je probeert met Juris-M/V&A perfect lukt. Kijk dus zeker je referenties na. Is er iets dat niet lukt, niet klopt, of ontbreekt, laat het ons dan zeker weten. Je kan ons feedback sturen via [dit formulier.](https://justlegal.be/van-va-naar-beter/feedback/).

# 1. Installatie
Je kan het programma downloaden op [https://juris-m.github.io](https://juris-m.github.io/) of [https://justlegal.be/van-va-naar-beter](https://justlegal.be/van-va-naar-beter).
Behalve het programma Juris-M heb je best ook een browser plugin ("connector"). Hiermee kan je met één klik referenties vanop een website opslaan. De connector bestaat voor Chrome en Firefox.
Onderstaande extra bestanden zullen worden opgenomen in deze installatie zodat ze niet meer apart te installeren zijn. Voorlopig is dit nog wel het geval.

## 1.1 Extra installatie
Op dit moment (8/8/2019) moet je voor een volledige installatie nog het volgende installeren:
 - De V&A-stijl (csl-bestand)
 - Afkortingenlijst voor tijdschriften (json-bestand)
 - Translators voor ejustice, hudoc en jurisquare (js-bestand) om via connector/browser plugin verwijzingen te kunnen opslaan

## 1.2 Hoe installeer ik V&A?
Dit bestand laat je toe verwijzingen en bibliografieën te creëren in de V&A-stijl.
 1. Download het bestand hier: https://justlegal.be/v-en-a.csl
 2. Ga in Juris-M naar Edit > Preferences (Bewerken > Voorkeuren)
 3. Kies Cite > Styles (Citeren > Stijlen)
 4. Onder de lijst met citatiestijlen klik je op ![image](figures/Manual-plus-sign.png)
 5. Kies het csl-bestand dat je gedownload hebt.
 6. Klik op ok (2x)

**Opgelet** Je hebt de stijl nu lokaal geïnstalleerd. Als er wijzigingen of verbeteringen gebeuren aan het bestand, worden deze niet automatisch doorgevoerd in jouw installatie. Controleer daarom op [https://justlegal.be/van-va-naar-beter/installatie/](https://justlegal.be/van-va-naar-beter/installatie/) of er updates zijn.

![Toevoegen Stylesheet](figures/Manual-fig-1.png)

! In Zotero geeft dit een waarschuwing dat het Stylesheet niet aan de csl 1.0.1 voldoet, dit is omdat de extra opties voor Juris-M zijn toegevoegd

## 1.3 Hoe installeer ik de afkortingenlijst?

 1. Open het bestand hier: [https://raw.githubusercontent.com/mvwestendorp/v-en-a/master/vena-abbrev.json](https://raw.githubusercontent.com/mvwestendorp/v-en-a/master/vena-abbrev.json) en sla het op (ctrl+s).
 2. Ga in Juris-M naar Edit > Preferences (Bewerken > Voorkeuren)
 3. Kies Cite > Styles (Citeren > Stijlen)
 4. Open de Stijlbewerker (Style Editor) onder Tools
 5. Klik op "Abbrevs" (rechtsboven) 
 6. Klik "Import from defaults", dan "Click to select a file"
 7. Selecteer het bestand met de afkortingen (vena-abbrev.json) en importeer.

## 1.4 Hoe installeer ik de translators?
Een *translator* is het stukje code dat ervoor zorgt dat de *connector* de databank of site die je bezoekt herkent en weet welke metadata opgehaald moeten worden en ingevuld in Juris-M. Omdat dit voor elke databank apart geschreven moet worden, worden uiteraard (nog) niet alle databanken ondersteund, m.n. de Belgische. 

Op  [deze site](https://github.com/Juris-M/translators) vind je een lijst met geïntegreerde *translators*. 

Voor Jurisquare, Ejustice en HUDOC (EHRM) zijn aparte, nog niet geïntegreerde *translators* beschikbaar.  Deze vind je [hier](https://justlegal.be/van-va-naar-beter/installatie/). Voeg de bestanden hieronder toe aan de desbetreffende [map](https://www.zotero.org/support/zotero_data) door middel van `opslaan als`.

| Platform | Locatie |
|----------| --------|
**macOS** | /Users/<username>/Juris-M 
**Windows 7 and higher** | C:\Users\<User Name>\Juris-M
**Windows XP/2000** | C:\Documents and Settings\<username>\Juris-M
**Linux** | ~/Juris-M

# 2. Mogelijkheden
## Wat is Juris-M?
Juris-M is een variant van Zotero die ondersteuning biedt voor juridisch refereren. Met deze *reference management software* kan je o.a.
 - referenties met één klik opslaan vanuit een heleboel sites en databanken
 - referenties en bibliografieën creëren in bvb. Microsoft Word
 - referenties delen met collega's

Enkele voordelen van het gebruik van een *reference manager*:
- Je hoeft niet meer na te denken over de correcte manier van refereren. (Uiteraard is nakijken aan te raden.)
- Gebruik je dezelfde referentie later nog eens, dan hoef je deze niet meer in te voeren of uit te schrijven.
- Maak notities bij je opgeslagen referenties, annoteer de pdf en organiseer je referenties.
 
 ## Wat kan Juris-M dat Zotero niet kan?
 Specifiek aan Juris-M zijn o.a. volgende mogelijkheden:
  - je kan meer velden invullen in materiaaltypes zoals rechtszaken en wetten
  - je kan een afkortingenlijst toevoegen voor bvb. tijdschriften
  - referenties met meerdere vindplaatsen worden samengevoegd (**gedeeltelijk ondersteund**)
  - ondersteuning voor verschillende jurisdicties (en eventueel bijhorende verschillende referentiesystemen)
  - invullen van rechtbanken per jurisdictie en sorteren op basis van hiërarchie hiervan (**work in progress**)

# 3. Hoe gebruik ik Juris-M?
## 3.1 Referenties opslaan met de browserplugin
1. Controleer de instellingen van je connector.
- Wil je automatisch een snapshot opslaan?
- Wil je automatisch pdfs mee opslaan?
2. Opslaan
- Zorg dat je binnen Juris-M in de juiste map bent.
- Navigeer naar het document dat je nodig hebt.
- Hover over het connector-icoontje om te zien welk *item type* aan dit document gegeven wordt. 
- Klik om de referentie op te slaan in je bibliotheek.
- Controleer de gegevens in Juris-M. Vul aan waar nodig.

## 3.2 Referenties invoeren

### Wetgeving
#### Algemene opmerkingen
- V&A 43: de hiërarchie tussen verschillende soorten wetgeving (& rechtspraak) automatisch laten voorlopen is momenteel nog niet mogelijk (28/10/2019)
- onder het item type `Wet` of `Statute` in Juris-M vallen:
	- wetten
	- decreten
	- ministeriële & koninklijke besluiten

#### Invullen
1. Maak een nieuw item met type `Wet` of `Statute`
2. Vul het hele opschrift of de hele titel van de wet, het decreet of besluit in bij `citeertitel wet`.
3. Bij "korte titel" vul je eventueel de gebruikelijke afkorting ervan in. (Na een volledige verwijzing bij het eerste citaat wordt deze korte titel gebruikt bij verdere verwijzingen)
4. In het veld `jurisdiction` moet `België | BE` staan.
5. Bij `code`vul je de plaats van publicatie in, meestal het Belgisch Staatsblad. (Mits de juiste afkortingenlijst, wordt dit in je referentie afgekort.)
6. Bij `date enacted` vul je de publicatiedatum in. Wil je de afkondigingsdatum invullen, dan kan dat in het veld `orig. date`. Hiermee gebeurt niets mee bij het refereren. 

#### Ophalen met connector
- Wetgeving ophalen via de site [http://www.ejustice.just.fgov.be/](http://www.ejustice.just.fgov.be/)(Justel-databank) werkt mits je de *translator* voor E-justice geïnstalleerd hebt (zie hierboven).
- De translator werkt alleen voor wetten, dus niet voor besluiten, decreten, etc.
- Navigeer vanuit je resultaat naar de bijhorende ELI-url. Deze heeft de volgende structuur:  http://www.ejustice.just.fgov.be/eli/wet/jjjj/mm/dd/elinummer/justel 
- Het icoontje van de connector verandert naar het wetgevingsicoon. Door erop te klikken wordt deze wet opgeslagen in de map waarin je je momenteel bevindt binnen Juris-M.

### Rechtspraak
#### Algemene opmerkingen
- V&A 43: de hiërarchie tussen verschillende soorten wetgeving (& rechtspraak) automatisch laten voorlopen is momenteel nog niet mogelijk (28/10/2019)
- rechtszaken vallen onder het item type `case` 

#### Invullen
- `case name`: de naam van de zaak of de namen van de partijen (niet noodzakelijk in Belgische rechtspraak)
- `author`: indien van toepassing, de auteur van de conclusie (prefix "concl." wordt automatisch toegevoegd)
- `commentator`: indien van toepassing, de auteur van de noot (prefix "noot" wordt automatisch toegevoegd)
- `jurisdiction`: moet altijd ingevuld zijn
- `court`: idealiter kies je hier de rechtbank uit een lijst; de afkortingen worden overeenkomstig deze lijst gemaakt
- `date decided`: datum van de beslissing
- `docket number`: rolnummer of ECLI-nummer. Vermeld je meerdere nummers? Zet er een komma tussen. 
	- *voorbeeld*: HvJ 4 september 2014, nr. C-452/13, ECLI:EU:C:2014:2141.
- `reporter`: naam van het tijdschrift waarin deze zaak gepubliceerd werd
- `reporter volume`: jaargang van het tijdschrift; indien paginering niet doorloopt per volgnummer of jaargang, kan je het nummer of de aflevering hierbij vermelden na een komma
	- *voorbeeld*: Kh. Brussel 28 september 1977, *RGAR* 1978, nr. 9912, 2.
	- *voorbeeld*: Corr. Namen 31 maart 1980, *JJD* 1983, afl. 33, 5.

### Rechtsleer

## 3.3 Referenties delen
## 3.4 Citaties invoegen
Zotero werkt met Microsoft Word, LibreOffice en Google Docs. Juris-M werkt voorlopig niet met Google Docs. Hieronder hebben we het alleen over Microsoft Word.
1. Zorg dat Juris-M open staat. Open je document.
2. Bovenaan vind je een onderdeel "Zotero". Ook wanneer je werkt met Juris-M staat hier Zotero. Staat dit er niet, kijk dan even bij de *Voorkeuren/Preferences* van Juris-M om de Word-plugin opnieuw te installeren.
3. Plaats je cursor in de tekst waar je een referentie wil invoeren. 
4. Kies "Add/Edit Citation". Als dit de eerste referentie in je document is, krijg je nu een dialoogvenster dat je vraagt in welke stijl je wil citeren. Als je de V&A-stijl correct hebt geïnstalleerd, kan je deze kiezen uit de lijst. Kies "Display Citations As: Footnotes". Klik "ok".
5. In de rode zoekbalk kan je snel zoeken naar een referentie en deze invoegen. 
6. Klik op de referentie om bvb. een paginanummer toe te voegen. 
7. Wil je meerdere referenties toevoegen in dezelfde  voetnoot? Zet deze dan gewoon allemaal achter elkaar in de zoekbalk, in de volgorde dat je ze wil.
8. Gebruik de groene "M" om naar een zoekvenster te gaan met meer zoekmogelijkheden. (*Classic view*)
9. Voeg eventueel een prefix of suffix toe, een rand- of paragraafnummer i.p.v. een paginanummer, etc. Eventueel kan je de verwijzing handmatig aanpassen. 

De volgorde van verwijzingen in een voetnoot is degene die je zelf bepaalt. Het automatisch rangschikken van verwijzingen op basis van informatiesoort of hiërarchie van rechtbanken en gerechtshoven is voorlopig niet mogelijk.

### Kamerstukken
------------

*Hand*. Kamer 1989-90, 23 mei 1990, 68–79.

Veld | Soort waarde | Voorbeeld
--- | --- | ---
Type Item | ’Kamerstukken / Handelingen / Wetsvoorstel’ | 
Jurisdiction | Belgium|BE | 
(Wetgevend) orgaan | Tekst + datum | Kamer 1989-90
Session Type | Afkorting zoals opgenomen in V|A | Hand. ; Parl. St ; Vr. en Antw.
Datum | een geldige datum | 23 mei 1990
Sectie | Getal | 309
Pagina’s | Relevante pagina’s | 68-79


![Kamerstukken weergave in Juris-M](figures/Manual-fig-2.png)

## 3.5 Een bibliografie invoegen
## 3.6 Handmatige aanpassingen

# Tips & tricks
- Zoeken: pdfs doorzoeken als deze geïndexeerd worden
- Invoegen van superscripts via het gebruik van html tags `<sup>e</sup>` bijvoorbeeld: `RvS (13<sup>e</sup> k.)`

# FAQ
## De URL wordt bij online gepubliceerde rechtspraak vermeld, is dat V&A conform?
Dat is V&A conform. De V&A vermeldt in randnummer 105 databanken waarbij een URL niet nodig is. In andere gevallen wordt wel een URL vereist (zie V&A randnummer 106). Een URL mag dus altijd vermeld worden en veel gevallen moet dat zelfs. Daarom is gekozen om altijd de URL voor online gepubliceerde rechtspraak in de citatie te zetten.
