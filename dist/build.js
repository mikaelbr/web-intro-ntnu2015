(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){


setupSlideshow();
setupSoundButton();

document.querySelector('#change-image').addEventListener('click', function (e) {
  e.preventDefault();
  var myImage = document.querySelector('#my-image-1');
  myImage.src = 'assets/dance.gif';
});

var myImage2 = document.querySelector('#my-image-2');
myImage2.addEventListener('click', function (e) {
  e.preventDefault();
  myImage2.src = 'assets/dance.gif';
});


function setupSlideshow () {
  var data = "class: front-page\n\n# Introduksjon til Web-teknologi\n## Et lite innblikk i det moderne web\n\nMikael Brevik\n\n19/08/2015\n\n---\nclass: agenda\n\n# Del 1: Grunnleggende Interaksjon\n\n * Historie\n * Hva er Web?\n * Apper, været og likes\n\n---\nclass: agenda\n\n# Del 2: HTML, CSS og JavaScript\n\n* Bak kulissene\n* HTML: Innhold\n* CSS: Design\n* JavaScript: Oppførsel\n* Web and Beyond\n\n---\nclass: middle center\n\n# Historisk Web\n\n---\nclass: middle center\n\n![Windows 95 Dail Up](assets/win95dialup.png)\n\n<a href=\"#\" class=\"btn\" id=\"sound-button\">Lyd</a>\n\n???\n\nHastigheter var typisk rundt 28 kbps eller 56 kbps. Etterhvert var det noen heldige som hadde ISDN og kunne bruke dobbel linje for å øke det til 128 kbps! Det kunne bety en vanlig MP3 sang på rundt 5 minutter. Som var veldig, veldig raskt. Jeg husket jeg lå på rundt nedlastingshastighet på 6 KB/s. Som gjorde at om alle planeter lå på linje, kunne jeg laste ned en sang på rundt 12 minutter.\n\n---\nbackground-image: url(assets/ie20years.jpg)\n\n???\n\nHer er et bilde av Internet Explorer 1 i Windows 95, som er 20 år nå!\n\n---\nbackground-image: url(assets/apple-website.png)\nclass: middle center\n\n???\n\nPå grunn av lav hastighet, lite modent teknologi, store krangler mellom nettlesere osv, var det ikke veldig mye man kunne gjøre på web-en i starten. Det var for det meste mye tekst og noen bilder. Dette er et bilde av Apple sine sider fra 1997, som ellers er forholdsvis kjent for sin gode design-stil.\n\nLegg særlig merke til datoen som står oppe i høyre hjørne. Av en eller annen grunn var det utrolig vanlig for nettsider å vise klokke og/eller dato på nettsiden.\n\n---\nclass: middle center\n\n![Windows 95 bar](assets/clock.png)\n\n???\n\nMen det var ikke slik at det var et behov for det. I 97, var det vanligste OS-et Windows 95, eller kanskje Windows 98. Men begge hadde startlinja der klokken var synlig hele tiden.\n\n---\nbackground-image: url(assets/google.png)\nclass: middle center\n\n???\nDa Google kom, kanskje først for fullt rundt 1998, ble det plutselig mulig å skikkelig kunne søke på nettet etter innhold. Starten på informasjonsalderen der vi kunne ha all slags mulig \"redaktørstyrt\" innhold.  \n\n---\nbackground-image: url(assets/ms-encarta.jpg)\nclass: middle center\n\n???\n\nFør internett ble kraftig nok, måtte man kjøpe det meste på disketter eller CD-er dersom man ville ha noe digitalt. Det var ikke båndbredde til å laste ned noe særlig stort. Et eksempel på noe vi kanskje tar for gitt i dag er leksikon på nett. Før var det Encarta som Microsoft ga ut. Der kunne man lese om alt slags mulig interessant.\n---\nbackground-image: url(assets/encarta-game.jpg)\nclass: middle center\n\n???\n\ndet var til og med et uhyre langsomt spill som jeg aldri klarte å komme meg noe langt på.\n\n---\nbackground-image: url(assets/first-wikipedia.png)\nclass: middle center\n\n???\n\nI 2001, fikk vi selvfølgelig Wikipedia som var første store lexicon på nett. I den tiden hadde også med seg alderen for brukergenerert innhold. Ikke lengre skulle det bare være \"redaktørstyrt\" innhold. Innhold der det var noen webmasters og de som sto bak sidene skulle legge ut, men brukerne av sidene skulle bidra til å legge ut innhold.\n\nWikier er selvfølgelig av den typen side. Alle brukere kan opprette innhold i en Wiki, og redaktørjobben blir overlatt til miljøet. Noe som har vist seg å fungere for mange sider.\n\n\n---\nbackground-image: url(assets/digg-2004.png)\n\n\n???\n\nEtt av de nettstedene som var tidlig ute med brukergenerert innhold var siden Digg. Digg var (og er vel kanskje fremdeles) en nyhetsaggregeringsside. Som da er sider som samler lenker til alle slags andre sider. I dag er Digg ikke like populært, men de fleste av brukerene har gått over til Reddit, som kanskje de aller fleste kjenner til.\n\n---\nbackground-image: url(assets/first-facebook.png)\n\n\n???\n\nPå samme tiden, rundt 2004, kom det en ganske kjent side for mange. Riktig nok, så ble den først den Facebook vi kjenner i dag rundt 2008. Da kom det et stort re-design og den fikk flesteparten av de featurene vi ser. I Norge hadde vi først noen andre sider som løste mye av de samme \"behovene\".\n\n---\nbackground-image: url(assets/blink.png)\n\n???\n\nFørst var Dagbladets blink en stor greie\n\n---\nbackground-image: url(assets/nettby.png)\n\n???\n\nOg VG kunne selvfølgelig ikke være noe dårligere og kjøpte opp Nettby, som etterhvert tok mer eller mindre over for Blink.\n\nVi var inne i en ny alder der det ble mer og mer populært å være sosial på nettet. Vi skulle ikke bare lese informasjon og dele informasjon, men vi skulle interagere med mennesker. I denne tiden begynte ting å bevege selv veldig raskt. Samtidig som sosiale medier ble født, fikk vi også underholdning i mye større grad.\n\n---\nbackground-image: url(assets/first-youtube.png)\n\n\n???\n\nI 2004, gjorde Janet Jackson et stort stunt på Super Bowl, der hun eksponerte litt av sine private deler. Etter over å frustrere seg over at det ikke var mulig å finne videoen noe sted, bestemte Hurley, Chen og Karin seg for å lage YouTube. Først, skulle YouTube være en slags Online Dating side bare for videoer. Etterhvert muterte derimot Youtube til å bli mer likt det vi kjenner det som i dag.\n\n---\nbackground-image: url(assets/second-youtube.png)\n\n\n???\n\nEn side der hvor alle kan dele alle slags videoer.\n\n---\nbackground-image: url(assets/first-iphone.jpg)\n\n???\n\nMot 2007, skjedde det noe annet stort. Vi fikk skikkelig fungerende smart-telefoner. I alle fall starten på en fungerende smartphone. I utgangspunktet var det f.eks ikke en App Store. Tanken var at det skulle være web-apps på alt. Man skulle kun bruke weben til å gjøre alt man trengte. Men behovet kom for å ha mer native apps og App Storen ble født.\n\n---\nclass: middle center\n\n![Wordfeud](assets/wordfeud.jpeg)\n\n???\n\nF.eks apper som Wordfeud.\n\n---\nclass: middle center\n\n![Angry birds](assets/angrybirds.jpg)\n\n???\n\nEller ting som Angry Birds.\n\n---\nclass: middle center\n\n![Fun Run](assets/funrun.jpg)\n\n???\n\nEller Fun Run..\n\n\n---\nclass: middle center\n\n![Angry birds](assets/gobi.png)\n\n???\n\nOg til og med Gobi. Alle slike apper, baserer seg på Web-teknologi. Vi skal se litt mer om hvordan senere.\n\n\n---\nclass: middle center\n\n# Hva er Web?\n\n???\n\nMen først. Hva er egentlig web? Hvordan funker det?\n\n---\nclass: middle center\n\n![Request/Response](assets/request-response.png)\n\n???\n\nNettleseren sender en spørring inn til en tjener ved å slå opp i et register for å endre fra domene til en adresse (IP). Så får man svar med tjeneren om man finner et innhold eller ikke. Dersom innholdet finnes kommer innholdet også.\n\n---\n\n# Request\n\n```\ncurl -v http://www.vg.no | head -n 1|cut -d$' ' -f2\n```\n\n```\n* Connected to www.vg.no (195.88.55.16) port 80 (#0)\n> GET / HTTP/1.1\n> User-Agent: curl/7.37.1\n> Host: www.vg.no\n> Accept: */*\n```\n\n\n---\n# Response\n\n```\n< HTTP/1.1 200 OK\n< Server: Apache/2.2.15 (CentOS)\n< X-VG-WebServer: vgphoenix-web-03\n< Last-Modified: Sun, 16 Aug 2015 19:15:45 GMT\n< Content-Type: text/html; charset=UTF-8\n< X-VG-SolveMe: uggc://jjj.it.ab/ynxfrgngg.ugzy\n< Cache-Control: max-age=30,must-revalidate\n< Transfer-Encoding: chunked\n< Date: Sun, 16 Aug 2015 19:18:48 GMT\n< Connection: keep-alive\n< X-Cache: HIT:4326\n< Vary: Accept-Encoding,User-Agent\n< X-VG-WebCache: m323-varnish-01\n< X-Age: 174\n< Age: 0\n```\n\n---\nbackground-image: url(assets/carusel.gif)\nclass: middle center\n\n???\n\nAll den teknologien slik at vi kan se gif-er på nett.\n\n\n---\n\n# HTTP\n\n_Hypertext Transfer Protocol_\n\nEr en protokoll for å kommunisere mellom systemer.\n\n---\nclass: middle center\n\n\n# Apps, været og likes\n\n???\n\nSå hvordan er Web relatert til Apps og alt vi gjør på telefonen, tablets, etc, hver dag?\n\n---\nbackground-image: url(assets/phone-response.png)\n\n\n???\n\nI bakgrunnen, isteden for at vi går direkte inn på en nettadresse, et domene, så gjør appen det for oss.\n\n---\nbackground-image: url(assets/yr.png)\n\n???\n\nSå f.eks, om Yr skal hente ut været. Går den egentlig inn på en nett-addresse i bakgrunnen, som henter ut et format som dataen kan lese og lage et grensesnitt ut av.\n\n---\n\n```\nhttp://www.yr.no/sted/Norway/S%C3%B8r-Tr%C3%B8ndelag/Trondheim/Trondheim/varsel.xml\n```\n\n```xml\n<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<weatherdata>\n  <location>\n    <name>Trondheim</name>\n    <type>By</type>\n    <country>Norge</country>\n    <timezone id=\"Europe/Oslo\" utcoffsetMinutes=\"120\" />\n    <location altitude=\"8\" latitude=\"63.4304873907371\" longitude=\"10.3950612843065\" geobase=\"ssr\" geobaseid=\"211102\" />\n  </location>\n  <forecast>\n    <text>\n      <location name=\"Trondheim\">\n        <time from=\"2015-08-16\" to=\"2015-08-16\">\n          <title>søndag</title>\n          <body>&lt;strong&gt;Trøndelag:&lt;/strong&gt; Søraust bris, frisk bris utsatte steder. Pent vær.</body>\n        </time>\n```\n\n???\n\nSå om du åpner en nettside, vil nettleseren gå å hente ut innholdet til den nettsiden, og du vil få tilbake et format som nettleseren kan vise med et tilhørende design (kalt HTML og CSS). For apps, vil appen hente ut et innhold og få tilbake et format som kan konsumeres enkelt for den, f.eks JSON eller XML.\n\n---\nbackground-image: url(assets/facebook-app.png)\n\n???\n\nDet samme skjer når man f.eks trykker \"Like\" på Facebook App-en. Facebook går i bakrunnen og åpner en side, som gjør den handlingen man ønsker.\n\n\n---\n\n```\nhttp://api.facebook.com/actions/do-like/01307572/some-post\n```\n\n```json\n{\n  \"success\": true,\n  \"likes\": 56,\n  \"youLiked\": true\n}\n```\n\n???\n\nVi kan forestille oss at den ser ut som noe slik, for eksempel.\n\n---\nclass: middle center\n\n![Fun Run](assets/funrun.jpg)\n\n???\n\nSamme da med fun run. Bare at man kan tenke seg at man sender litt andre ting. F.eks kan det være at den kontinuerlig sender sin posisjon til en server som igjen sprer den videre til alle andre mobil-telefoner som er med i spillet.\n\n---\n\n# Request\n\n```\nPOST http://api.some-funrun-page.com/coordinates/game-id/12f938abc321adf\n```\n\n## Body\n```json\n{ \"x\": 1205, \"y\": 300 }\n```\n\n# Response\n```json\n{ \"message\": \"ok\" }\n```\n\n\n---\nclass: middle center\n\n# Pause\n\n---\n\n# Re-cap: Del 1\n\n\n * Web baserer seg på HTTP\n * Fungerer som Request og Response\n * Kan vise forskjellige typer innhold (tekst, bilder, data-format etc)\n * Kommunikasjon i apper er og ofte basert på Web-teknologi.\n\n---\nclass: middle center\n\n\n![Request/Response](assets/request-response.png)\n\n???\n\nNettleseren sender en spørring inn til en tjener ved å slå opp i et register for å endre fra domene til en adresse (IP). Så får man svar med tjeneren om man finner et innhold eller ikke. Dersom innholdet finnes kommer innholdet også.\n\n---\n\nclass: agenda\n\n# Del 2: HTML, CSS og JavaScript\n\n * Bak kulissene\n * HTML: Innhold\n * CSS: Design\n * JavaScript: Oppførsel\n * Web and Beyond\n\n\n---\n\n# HTML: Innhold\n\n## _HyperText Markup Language_\n\n_Markup: Et språk for å definere hvordan vi vil at strukturen på en nettside skal være._\n\n\n## Format\n\n```html\n<tag attribute=\"attribute-value\">content</tag>\n```\n\n---\n\n# HTML\n\n```html\n<h1>Min sidetittel</h1>\n<p>\n  Dette er et avsnitt med litt <strong>fet tekst</strong>\n  og en <a href=\"https://bekk.no/\">kul lenke</a>.\n</p>\n```\n\n---\n\n# HTML\n\n```html\n<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"utf-8\">\n    <title>Web Intro 2015</title>\n  </head>\n  <body>\n    <h1>Min sidetittel</h1>\n  </body>\n</html>\n```\n\n\n---\n\n# CSS: Design\n\n## _Cascading Style Sheets_\n\n_Stilsett definert som design for nettsiden din._\n\n## Format\n\n```CSS\nselector {\n  property: value;\n}\n```\n\nInkluderes i HTML ved en `<link>`-tag\n```html\n<link href=\"stylesheet.css\" type=\"text/css\" rel=\"stylesheet\">\n```\n\n---\n\n# CSS\n\n```CSS\narticle h1 {\n  font-size: 150%;\n  color: #FF0000; /* same as red */\n}\n```\n\n<h1 style=\"font-size: 150%; color: #FF0000;\">Min tittel</h1>\n\n---\n# CSS\n\n```CSS\narticle img {\n  width: 350px;\n  float: left;\n}\n```\n\n<img style=\"width: 350px; float: left;\" src=\"./assets/kungfubaby.gif\" alt=\"Kung Fu Baby\" />\n<h1 style=\"font-size: 150%; color: #FF0000;\">Min tittel</h1>\n\n---\n\n# CSS: Selectorer\n\nMan kan velge elementer ut i fra tag, ID, klasse (og litt til)\n\n```html\n<img id=\"my-image\" class=\"image\" src=\"./assets/kungfubaby.gif\" alt=\"Kung Fu Baby\" />\n```\n\n```CSS\n/* Alle henter ut samme element: */\nimg { /* .. */ }\n#my-image { /* .. */ }\n.image { /* .. */ }\n\n/* Til og med kombinere */\nimg#my-image.image { /* .. */ }\n```\n\n\n---\n\n# JavaScript\n\nEt programmeringsspråk. Brukt til å gjøre dynamisk endringer på HTML og CSS.\nIkke relatert til «Java»\n\n> \"Java is to Javascript, as Car is to Carpenter\"\n> – Someone\n\n## Eksempel\n\n```js\nvar hello = 'Hello, ';\nvar name = 'Abakus';\nvar helloAbakus = hello + name; //> 'Hello, Abakus'\n```\n\n---\n\n# Javascript\n\nInkluderes i HTML ved en `<script>`-tag\n```html\n<script src=\"myFile.js\" type=\"text/javascript\"></script>\n\n// Or inline\n\n<script type=\"text/javascript\">\nvar hello = 'Hello!';\n</script>\n```\n\n\n---\n# JavaScript\n\n```js\n// Som med matte: f(x, y) = x + y\nvar add = function (x, y) {\n  return x + y;\n};\n\n// Som med matte f(40, 2) -> 42\nvar number = add(40, 2); //> 42\n\nvar number2 = add(add(20, 20), 2); //> 42\n\n```\n\n---\n# JavaScript\n\nKan konstruere \"objeker\" som holder på informasjon:\n\n```js\nvar myPoint = { x: 40, y: 2 };\n\n// Funksjon som tar inn point:\nvar add = function (point) {\n  return point.x + point.y;\n};\nadd(myPoint); //> 42\n```\n\n\n---\n# JavaScript\n\nKommunisere med HTML\n\n```html\n<img src=\"assets/kungfubaby.gif\" id=\"my-image\" alt=\"Gif\" />\n```\n\nVi kan hente det ut i Javascript:\n\n```js\n// Samme selectorer som i CSS\nvar myImage = document.querySelector('#my-image');\n\n// Endre kilde til bilde\nmyImage.src = 'assets/dance.gif';\n```\n\n---\n# JavaScript\n\n<img src=\"assets/kungfubaby.gif\" id=\"my-image-1\" alt=\"Gif\" />\n<a href=\"#\" id=\"change-image\" class=\"btn\" id=\"sound-button\">Kjør kode</a>\n\n\n---\n# Javascript\n\nLytte til brukerinteraksjon.\n```html\n<img src=\"assets/kungfubaby.gif\" id=\"my-image\" alt=\"Gif\" />\n```\n\n```js\nvar myImage = document.querySelector('#my-image');\n\n// Lytte til når noen klikker på bildet\nmyImage.addEventListener('click', function () {\n  myImage.src = 'assets/dance.gif';\n});\n```\n\n---\n\n<img src=\"assets/kungfubaby.gif\" id=\"my-image-2\" alt=\"Gif\" />\n\n\n---\n\n# Javascript: Lister\n\n```js\nvar listOfNumbers = [5, 4, 3, 4, 5];\n\n// Første tall:\nlistOfNumbers[0]; //> 5\nlistOfNumbers[1]; //> 4\n\n// Gå over listen\nvar sum = 0;\nlistOfNumbers.forEach(function (number) {\n  sum = sum + number;\n});\n\nsum; //> 21\n```\n\n---\n\n# Javascript: AJAX\n\nI Javascript kan man gjøre HTTP-kall fra koden:\n\n```js\nhttpRequest.onreadystatechange = function() {\n  if (httpRequest.readyState === 4) {\n    var data = httpRequest.responseText;\n  }\n};\n\nhttpRequest.open('GET', 'http://bekk.no/');\nhttpRequest.send();\n```\n\n---\nclass: middle center\n\n# Demo: jifs!\n\n## Enkel side for GIF-er\n\n<a href=\"./example/static.html\" class=\"btn\" target=\"_blank\" id=\"sound-button\">Kjør demo</a>\n\n---\nclass: middle center\n\n# Demo: jifs!\n\n## Søkeside for GIF-er\n\n<a href=\"./example/index.html\" class=\"btn\" target=\"_blank\" id=\"sound-button\">Kjør demo</a>\n\n---\n\n# Oppsumert\n\n* HTTP — transport\n* HTML – Innhold\n* CSS – Design\n* JavaScript – Oppførsel\n\n---\nbackground-image: url(assets/racing.png)\nclass: cover\n\n# Racer S: WebGL\n\n<a href=\"http://helloracer.com/racer-s/\" class=\"btn\" target=\"_blank\" id=\"sound-button\">Kjør demo</a>\n\n\n---\nbackground-image: url(assets/gotham.png)\nclass: cover\n\n# Witness Gotham: WebGL\n\n<a href=\"http://witnessgotham.com//\" class=\"btn\" target=\"_blank\" id=\"sound-button\">Kjør demo</a>\n\n\n---\nbackground-image: url(assets/music.png)\nclass: cover\n\n# Technitone: Web Audio API\n\n<a href=\"http://www.technitone.com/gallery/recent\" class=\"btn\" target=\"_blank\" id=\"sound-button\">Kjør demo</a>\n\n\n---\nbackground-image: url(assets/quake.png)\nclass: cover\n\n# Quake: EMSCRIPTEN\n\n<a href=\"http://www.quakejs.com/\" class=\"btn\" target=\"_blank\" id=\"sound-button\">Kjør demo</a>\n\n\n---\nbackground-image: url(assets/ttd.png)\nclass: cover\n\n# Transport Tycoon Deluxe: EMSCRIPTEN\n\n<a href=\"http://epicport.com/en/ttd\" class=\"btn\" target=\"_blank\" id=\"sound-button\">Kjør demo</a>\n\n\n---\nclass: front-page\n\n# Spørsmål?\n\n## mikael.brevik@bekk.no – @mikaelbrevik\n\nSlides: http://github.com/mikaelbr/web-intro-ntnu2015\n";
  document.querySelector('#source').innerHTML = data;

  var slideshow = remark.create({
    ratio: '16:9',
    highlightStyle: 'monokai'
  });
}

function setupSoundButton () {
  var dialupButton = document.querySelector('#sound-button');
  var sound = null;
  dialupButton.addEventListener('click', function (e) {
    e.preventDefault();
    if (sound && sound.paused) {
      return sound.play();
    }
    if (sound && !sound.paused) {
      return sound.pause();
    }
    sound = new Audio('./assets/dial-up-modem-01.mp3');
    sound.play();
  }, false);
}

},{}]},{},[1]);