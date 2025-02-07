# Visitekaartje

Redesign je visitekaartje en bouw het met NodeJS en een REST API.

De instructie vind je in: [INSTRUCTIONS](https://github.com/fdnd-task/connect-your-tribe-profile-card/blob/main/docs/INSTRUCTIONS.md)


## Inhoudsopgave Readme
* [Beschrijving](#beschrijving)
* [Kenmerken](#kenmerken)
* [Installatie](#installatie)
* [Gebruik](#gebruik)
* [Bronnen](#bronnen)
* [Licentie](#licentie)



## Beschrijving
Deze interactieve visitekaartjes-webapplicatie is gebouwd met Node.js en Express. Op basis van de ID van de gebruiker haalt de applicatie gegevens op via een REST API en verwerkt deze in JSON-formaat.
 

Hoe werkt het?

-De Express-server maakt een aanvraag naar de REST API.

-De API stuurt de gegevens terug in JSON-formaat.

-Liquid templates tonen de gegevens dynamisch op de website.

-De server luistert naar poort 8000.

-GSAP voegt animaties toe, zoals een draaiende profielfoto.

live version:
https://connect-your-tribe-profile-card-ek91.onrender.com/

Foto:
<img src="./public/assets/visitekaartje.jpg" alt="Visitekaartje" style="width: 150px; height: auto;">



## Kenmerken
-Node.js & Express: Voor de backend-server en API-aanroepen

-LiquidJS: Voor dynamische rendering van data

-REST API: Ophalen van gebruikersgegevens via https://fdnd.directus.app/items/person/{personID}

-GSAP Animaties: Voor een mooie visuele effecten

-Responsieve CSS: Geschikt voor mobiele versies met @media (max-width: 48rem)


HTML-structuur:

-article business-card: Container voor het visitekaartje

-article avatar-card: Bevat naam, foto en titel

-section skills: Lijst met vaardigheden

-article footer-card: Onderste deel van de kaart



## Installatie
-Clone de repository

-Installeer de vereiste pakketten  (npm install)

-Start de applicatie  

-Open  deze in de browser


## Gebruik
-Start de server met  (npm start )

-Open http://localhost:8000 in de browser

-De applicatie haalt gebruikersgegevens op via een REST API

-De gegevens worden verwerkt en weergegeven met Liquid templates

-GSAP en CSS zorgen voor een interactieve en moderne uitstraling


## Bronnen
https://github.com/fdnd-task/connect-your-tribe-profile-card/blob/main/docs/INSTRUCTIONS.md

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).

