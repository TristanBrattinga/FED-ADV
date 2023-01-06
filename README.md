# Procesverslag
Markdown is een simpele manier om HTML te schrijven.  
Markdown cheat cheet: [Hulp bij het schrijven van Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

Nb. De standaardstructuur en de spartaanse opmaak van de README.md zijn helemaal prima. Het gaat om de inhoud van je procesverslag. Besteedt de tijd voor pracht en praal aan je website.

Nb. Door *open* toe te voegen aan een *details* element kun je deze standaard open zetten. Fijn om dat steeds voor de relevante stuk(ken) te doen.





## Jij

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Auteur:
  Tristan Brattinga

  #### Je startniveau:
  Rood

  #### Je focus:
  Responsive
 
</details>





## Je website

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Je opdracht:m,
  Playstation
  https://www.playstation.com/nl-nl/?emcid=pa-co-422294&gclid=Cj0KCQiAsdKbBhDHARIsANJ6-jei-leWB1VhR1qP7ECmOvxLZzve-5scrixoYRFwXtnluMkhaAaC6YQaAgg9EALw_wcB&gclsrc=aw.ds
  
  
  
  #### Screenshot(s) van de eerste pagina (small screen): 
  Playstation Homepage  
  
  (klik op de image want heb ze verkleind om niet eindeloos te moeten scrollen door de readme)
  
  <img src="readme-images/playstation-pagina1.jpeg" height="375px" alt="Playstation Homepage screenshot (small screen)">

  #### Screenshot(s) van de tweede pagina (small screen):
  Playstation Games Page  
  
  (klik op de image want heb ze verkleind om niet eindeloos te moeten scrollen door de readme)
  
  <img src="readme-images/playstation-pagina2.jpeg" height="375px" alt="Playstation games page screenshot (small screen)">
 
</details>



## Toegankelijkheidstest 1/2 (week 1)

<details>
  <summary>uitwerken na test in 1e werkgroep</summary>

  ### Bevindingen
  Lijst met je bevindingen die in de test naar voren kwamen:
  - Sommige beperkingen zijn niet zo erg op het web, maar sommige zijn bijna niet mee te werken.
  - Tabben door de website gaat heel gemakkelijk en duidelijk.
  - Heading levels zijn niet helemaal correct.
  - Focus state is bij sommige elementen goed te zien en bij sommige elementen niet. Bijv. in de footer is de focus state helemaal niet te zien.
  - Er zijn weinig animaties op de website waardoor het voor de meerderheid van de gebruikers fijn te gebruiken.
  
  #### Screenreader
  Hier korte omschrijving (met indien nodig afbeeldingen)
  
  <strong>De screenreader werkt niet heel optimaal op de Playstation website. Het is niet duidelijk waar de Narrator zich bevindt en wat het precies aan het oplezen     is. De Narrator blijft maar doorgaan zonder enig idee wat er wordt verteld. Sommige sections op de website gaat de narrator wel goed af op volgorde en sommige         sections pakt het niet. Ook worden er geen heading levels aangegeven door de Narrator.<strong>
  
  <img src="readme-images/screenreader.png" width="375px" alt="headings niet getoond">
  
  
  Hier een omschrijving van hoe het opgelost kan worden (met indien nodig afbeeldingen)
  
  - Een betere structuur opzetten in de HTML met betere labels en headings. 
  - Onderdelen waar een carrousel is om content uit te lichten gaan helemaal niet goed met de Narrator. Ik     zou niet zo goed weten hoe dit opgelost zou kunnen           worden.
  - Duidelijkere verdeling geven in de sections om te zorgen dat dit logischer wordt opgelezen. Zo komt er meer structuur in de website.

  #### Muis en Toetsenbord 
  Hier korte omschrijving (met indien nodig afbeeldingen)
  
  Alles is goed te navigeren met het toetsenbord. De focus state is duidelijk te zien bij de meeste interactieve elementen. De elementen worden ook in een logische       volgorde geselecteerd. De dropdown menu's zijn ook makkelijk te bereiken via tabben. Alleen op mobile screen size is het niet mogelijk in het menu te komen d.m.v.     tabben. Ook met de muis zijn de hover states goed en duidelijk te zien. Ook de active state komt goed over. Alleen in de footer is het niet mogelijk om te zien wat     je selecteert met het toetsenbord. Ook met de muis is dit niet duidelijk.
  
  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="bummer">
  
  Hier een omschrijving van hoe het opgelost kan worden (met indien nodig afbeeldingen)
  
  - In de footer moet er een duidelijkere focus, hover en active state worden aangegeven. Dit kan door een border of een andere text color.
  - Op mobile screen size is het menu niet te bedienen met tabben. Je kan wel zien dat er achter het menu door de website wordt getabt. Dus het hamburger menu wordt       over de body heen gelegd. Dit zou op een andere manier moeten om te zorgen dat hier doorheen getabt kan worden. 
  
  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="bummer">

  #### Motoriek (shocks, elastiekjes)
  Hier korte omschrijving (met indien nodig afbeeldingen)
  
  De elastiekjes waren niet echt een acurate beperking. Het is nog steeds heel goed mogelijk om door de website te navigeren. Alleen met het gebruiken van de muis moet 
  je je ringvinger gebruiken om de rechterknop in te drukken. Verder was tabben en scrollen heel goed mogelijk.
  
  De shockmachine viel bijna niet mee te werken. Je motoriek wordt zodanig aangepast dat bediening met de muis bijna onmogelijk is. Tabben door de website kan ook maar   gaat soms sneller dan je wilt. Typen gaat ook heel moeilijk omdat er vaak verkeerde toetsen worden ingedrukt.
  
  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="bummer">
  
  Hier een omschrijving van hoe het opgelost kan worden (met indien nodig afbeeldingen)
  
  - De elastiekjes beperking kan niet echt opgelost worden, want er valt al omheen te werken. Deze beperking is amper te merken en je zou hier via het web denk ik niet     echt hulpmiddelen of verbeteringen voor kunnen bedenken.
  - Voor de shockmachine is het ook heel moeilijk om oplossingen te bedenken. Het enige wat de meeste obstakels zou kunnen verhelpen is het gebruik van spraak om door     de website te navigeren en te typen. Verder zou een mindergevoelige scrollbar of wieltje op de muis het makkelijk maken om door de website te navigeren.
  
  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="bummer">

  #### Visueel (brillen, contrast, kleurenblind, dark/light). 
  Hier korte omschrijving (met indien nodig afbeeldingen)
  
  De visuele beperkingen waren heel verschillend. Bij de ene bril merkte je heel weinig beperking in het bezoeken van de website en bij sommige juist weer wel heel       erg. Op de Playstation website was er niet heel veel problemen om de website te bezoeken met kleurenblindheid. Alleen sommige plaatjes kwamen niet goed naar voren.
  
  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="bummer">
  
  Hier een omschrijving van hoe het opgelost kan worden (met indien nodig afbeeldingen)
  
  - Er zou een toggle button gemaakt kunnen worden op de website om verschillende kleurenblindheden te bedienen zodat de website normaal kan worden bekeken.
  
  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="bummer">
  
</details>



## Breakdownschets (week 1)

<details>
  <summary>uitwerken na afloop 2e werkgroep</summary>

  ### de hele pagina: 
  <img src="readme-images/breakdownschets.jpg" width="375px" alt="breakdown van de hele pagina">

  ### dynamisch deel (bijv menu): 
  <img src="readme-images/dynamischdeel.jpg" width="375px" alt="breakdown van een dynamisch deel">
  
</details>





## Voortgang 1 (week 2)

<details>
  <summary>uitwerken voor 1e voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)


  ### Agenda voor meeting
  samen met je groepje opstellen

  | student 1      | student 2          | student 3    | student 4        |
  | ---            | ---                | ---          | ---              |
  | dit bespreken  | en dit             | en ik dit    | en dan ik dat    |
  | en dat ook nog | dit als er tijd is | nog een punt | dit wil ik zeker |
  | ...            | ...                | ...          | ...              |


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - punt 1
  - punt 2
  - nog een punt
  - ...

</details>





## Voortgang 2 (week 3)

<details>
  <summary>uitwerken voor 2e voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)


  ### Agenda voor meeting
  samen met je groepje opstellen

  | student 1      | student 2          | student 3    | student 4        |
  | ---            | ---                | ---          | ---              |
  | dit bespreken  | en dit             | en ik dit    | en dan ik dat    |
  | en dat ook nog | dit als er tijd is | nog een punt | dit wil ik zeker |
  | ...            | ...                | ...          | ...              |


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - punt 1
  - punt 2
  - nog een punt
- ...

</details>





## Toegankelijkheidstest 2/2 (week 4)

<details>
  <summary>uitwerken na test in 8e werkgroep</summary>

  ### Bevindingen
  Lijst met je bevindingen die in de test naar voren kwamen (geef ook aan wat er verbeterd is):

  #### Screenreader
  Hier korte omschrijving (met indien nodig afbeeldingen)
  
  Hier een omschrijving van hoe het opgelost kan worden (met indien nodig afbeeldingen)


  #### Muis en Toetsenbord 
  Hier korte omschrijving (met indien nodig afbeeldingen)

  Hier een omschrijving van hoe het opgelost kan worden (met indien nodig afbeeldingen)


  #### Motoriek (shocks, elastiekjes)
  - swipen lukt
  - zoomen lukt
  - typen gaat moeilijker
  - tabben gaat heel makkelijk door de site

  Hier een omschrijving van hoe het opgelost kan worden (met indien nodig afbeeldingen)


  #### Visueel (brillen, contrast, kleurenblind, dark/light). 
  - p tekst is een beetje klein en moeilijk te lezen met de peripheral field loss bril
  - Bij de Hemifield Loss bril is er eigenlijk geen beperking
  - Bij de blur bril is tekst helemaal niet leesbaar, grotere plaatjes zijn wel zichtbaar maar ook met een kleine vervaging
  - Bij central field loss verlies je alles in het midden van het scherm maar de rest eromheen is wel te zien, hier kan dan bijvoorbeeld meer focus op worden gelegd.

  Hier een omschrijving van hoe het opgelost kan worden (met indien nodig afbeeldingen)

</details>





## Voortgang 3 (week 4)

<details>
  <summary>uitwerken voor 3e voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)


  ### Agenda voor meeting
  samen met je groepje opstellen

  | student 1      | student 2          | student 3    | student 4        |
  | ---            | ---                | ---          | ---              |
  | dit bespreken  | en dit             | en ik dit    | en dan ik dat    |
  | en dat ook nog | dit als er tijd is | nog een punt | dit wil ik zeker |
  | ...            | ...                | ...          | ...              |


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - punt 1
  - punt 2
  - nog een punt
  - ...

</details>





## Eindgesprek (week 5)

<details>
  <summary>uitwerken voor eindgesprek</summary>

  ### Je uitkomst - karakteristiek screenshots:
  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="uitomst opdracht 1">


  ### Dit ging goed/Heb ik geleerd: 
  Alles ging wel goed en veel nieuwe dingen geleerd over CSS die ik normaal niet zo snel zou uitvogelen. Jammer dat ik het alleen niet af heb :(

  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="top">


  ### Dit was lastig/Is niet gelukt:
  Door tijdsgebrek heb ik het helaas niet af kunnen krijgen. 

  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="bummer">
</details>





## Bronnenlijst

<details open>
  <summary>continu bijhouden terwijl je werkt</summary>

  Nb. Wees specifiek ('css-tricks' als bron is bijv. niet specifiek genoeg).

  1. https://www.playstation.com/nl-nl/ voor alle content 
  2. 

</details>
