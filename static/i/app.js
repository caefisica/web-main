var things = [ 'Miguel','Grosbet','Marco','Anderson','Jhanny','Daniel','Micaela','Fernando','Tifany','Miriam','Edgard','Jean','Sebastian','Renzo','Benjamin','Thania','Luis','Diego','Cristhian','Jhosep','Santiago','Rivaldo','Kevin','Abel','Francis','Josué','Franco','Alexandra','Danny','Emerson','Abdel','Juan','Alejandro','Sandra','Yasser','Walter','Macedonio','Carlos','Elio','Alex','Jesus','Michael','Segundo','Julio','Gustavo','Yerzon','Sebastián','Hardy','Adrian','Hegel','Pablo','Piero','Jose','Gandhy','Pedro','George','Jesús','Marino','Leonardo','Rita','Isabella','Eduardo','David','Mayra','Lidier','Frank','Alek','Edson','Rodrigo','Manuel','Darlei','Ronald','Nohelia','Alexander','Gean','Bruno','Gabriel','José','Yoset','Ricardo','Cinthia','Danilo','Ronaldo','Anyel','César','Mark','Yesabela','Deysi','Milan','Henry','Augusto','Bryan','Andree','Yahaira','Nori','Brener','Andres','Rafael','Jonathan','Henri','Enrique','Lynton','Rosa','María','Angella','Joseph','Flor','Elvis','Ollenka','Geanpierre','Eder','Hernán','Angel','Hector','Jeremy','Monica','Richard','Jefferson','Jiff','Jair','Stefano','Jeam','Omar','Gerson','Lucio','Martin','Gianfranco','Aleeky','Cesar','Israel','Esdrubal','Gian','Erwin','Fabian','Marcelo','Alvaro','James','Renato','Samuel','Dario','Jhair','Maria','Mauricio','Joel','Maximo','Edward','Valeria','Johan','Sergio','Billy','Mario','Fausto','Rosario','Magherlly','Gerardo','Bricman','Victor','Oscar','Gilmer','Denis','Alessandro','Doroteo','Jamil','Selene','Ulfer','Diana','Amberly','Edwin','Tito','Giam','Joubert','Aldair','Alfredo','Yonatan','Irlyn','Josue','Franky','Wagner','Jonel','Steven','Jhony','Etsón','Galo','Zayef','Yeltsin','Rider','Leonel','Nerio','Ana','Jhonn','Antonella','Brayan','Ciro','Andy','Jeferson','Acxel','Naldito','Andrea','Claudio','Ivan','Christian','Bill','Nelson','Jacson','Raul','Esteban','Anthony','Andre','Fabricio','Martìn','Jhan','Gjatsky','Aldo','Derick','Celeste','Betty','Ronal','Marjorie','Erick','Jhazmin','Dorian','Jhon','Walt','Nícolas','Karla','Cirilo','Zamira','Arianna','Lenny','Nomi','Brandon','Hedgar','Paulo','Elias','Medali','Robert','Aaron','Jhoel','Smith','Angelo','Joaquin','Geancarlo','Jarot','Alicia','Antonio','Fredi','Francisco','Rodolfo','Natividad','Soledad','Humberto','Mateo','Elky','Alberto','Nicolás','Javier','Antony','Pool','Oreste','Moises','Giordano','Brigitt','Mariana','Agustin','Junior','Ernesto','Truman','Vidal','Andrés','Isaillas','Job','Américo','Jhordan','Zenobia','Nicole','Alfonso','Alejandra','Ceferino','Erik','Yofre','Alonso','Hiroshi','Pierre','Vanessa','Stephanie','Crisologo','Mercedes','Bladimir','Armando','Nelida','Leoncio','William','Eyver','Wander','Solansh','Melani','Jordy','Hernando','Eusebio','Giovany','Samier','Anibal','Esther','Zarami','Heli','Dante','Amos','Geraldine','Cristopher','Patricio','Wilder','Antoni','Raúl','Marcos','Axel','Rogelio','Larco','Enzo','Pierr','Felix','Ulises','Alexsander','Guillermo','Gonzalo','Camilo','Ines','Pamela','Douglas','Francesco','Lizeth','Denisse','Sony','Alan','Graciani','Sthif','Gonsalo','Desiree','Derly','Romel','Max','Lorenzo','Jakeline','Dominick','Amberson','Edú','Leandro','Axcel','Jorge','Cristina','Alessandra','Ranieiro','Adan','Diosdado','Jadyr','Roman','Yanina','Jonas','Italo','Sam','Alexandro','Fabrizio','Piter','Ajhaira','Paul','Carlo','Giovanni','Yaser','Jackelin','Liuba','Adriano','Angelina','Valentin','Laura','Mitchel','Anthonny','Jorell','Alexis','Lincoln','Francesca','Angelica','Luz','Eli','Rene','Khaled','Jhames','Karin','Arturo','Emilio','Hermes','Fidel','Paolo','Marcial' ];
var thing = things[Math.floor(Math.random()*things.length)];

const NAME = thing;

const CARDS = [
  {
    name: "Lector EPUB",
    icon: "ri-book-fill",
    link: "https://pgaskin.net/ePubViewer/",
  },
  {
    name: "Lector DJUV",
    icon: "ri-book-open-fill",
    link: "https://djvu.js.org/",
  },
  {
    name: "Noticias",
    icon: "ri-rss-fill",
    link: "https://www.inoreader.com/all_articles",
  },
  {
    name: "Enviar archivos",
    icon: "ri-send-plane-fill",
    link: "https://snapdrop.net/",
  },
  {
    name: "Correo",
    icon: "ri-mail-fill",
    link: "https://mail.google.com/",
  },
  {
    name: "Remover fondo",
    icon: "ri-image-edit-fill",
    link: "https://www.remove.bg/",
  },
  {
    name: "YouTube",
    icon: "ri-youtube-fill",
    link: "https://www.youtube.com/",
  },
  {
    name: "Instagram",
    icon: "ri-instagram-fill",
    link: "https://www.instagram.com/",
  },
];

/* -------------------------------------------------------- */

/******************/
/* RELOJ */
/******************/

const DAYS = [
  "domingo",
  "lunes",
  "martes",
  "miércoles",
  "jueves",
  "viernes",
  "sábado",
];

const MONTHS = [
  "enero",
  "febrero",
  "marzo",
  "abril",
  "mayo",
  "junio",
  "julio",
  "agosto",
  "setiembre",
  "octubre",
  "noviembre",
  "diciembre",
];

const updateDate = () => {
  // Create a new Date object and get the complete Date/Time information
  const completeDate = new Date();

  // Variables de tiempo
  let currentHour = formatDigit(completeDate.getHours());
  let currentMinute = formatDigit(completeDate.getMinutes());

  // Variables de las fechas
  let currentDay = completeDate.getDay();
  let currentNumber = completeDate.getDate();
  let currentMonth = completeDate.getMonth();
  let currentYear = completeDate.getFullYear();

  // Update the Time
  currentTime.innerHTML = `${
    currentHour % 12 == 0 ? "12" : currentHour % 12
  }:${currentMinute} ${currentHour > 11 ? "PM" : "AM"}`;

  // Update the Date
  currentDate.innerHTML = `${DAYS[currentDay]} ${currentNumber} de ${MONTHS[currentMonth]} del ${currentYear}`;

  // Create a Loop
  setTimeout(() => {
    updateDate();
  }, 1000);
};

const formatDigit = (digit) => {
  return digit > 9 ? `${digit}` : `0${digit}`;
};

/******************/
/* CARDS FUNCTION */
/******************/

const printCards = () => {
  for (const card of CARDS) {
    let currentCard = document.createElement("a");
    let currentCardText = document.createElement("p");
    currentCardText.appendChild(document.createTextNode(card.name));
    let currentCardIcon = document.createElement("i");
    currentCardIcon.classList.add(card.icon);

    // Style the Card Element
    currentCard.classList.add("card");
    currentCard.href = card.link;

    // Style the Icon
    currentCardIcon.classList.add("card__icon");

    // Style the Text
    currentCardText.classList.add("card__name");

    currentCard.append(currentCardIcon);
    currentCard.append(currentCardText);
    cardContainer.appendChild(currentCard);
  }
};

/****************/
/* STARTER CODE */
/****************/

userName.innerHTML = NAME;
printCards();
updateDate();
