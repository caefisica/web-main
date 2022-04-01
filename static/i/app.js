var things = ['desconocido', 'desconocida'];
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
