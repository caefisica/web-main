async function fetchRSSFeed(url) {
  const corsProxy = 'https://cors.cae.workers.dev/?';
  const response = await fetch(corsProxy + url);
  const text = await response.text();
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(text, 'application/xml');
  return xmlDoc;
}

function capitalizeFirstWord(str, nameExceptions = [], initialExceptions = []) {
  // Sanitize the input string
  const trimmedStr = str.trim().replace(/\s+/g, ' ');

  // Split the input string into words
  const words = trimmedStr.split(/[\p{Z}\s]+/u);

  // Capitalize the first word and apply exceptions
  const capitalizedWords = words.map((word, index) => {
    if (index === 0) {
      if (word === word.toUpperCase()) {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      } else {
        return word.replace(/^\p{L}/u, (c) => c.toUpperCase());
      }
    } else if (nameExceptions.includes(word.toLowerCase())) {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    } else if (initialExceptions.includes(word.toUpperCase())) {
      return word.toUpperCase();
    } else {
      return word.toLowerCase();
    }
  });

  // Join the words into a sentence
  const capitalizedSentence = capitalizedWords.join(' ');

  return capitalizedSentence;
}

function sanitizeHTML(text, feedName) {
  const tempElement = document.createElement('div');
  tempElement.innerHTML = text;
  const plainText = tempElement.textContent || tempElement.innerText || '';
  if (feedName === 'OGCRI - UNMSM') {
    console.log('Sanitizing text from OGCRI - UNMSM')
    console.log('The feed name is: ' + feedName)
    const sanitizedText = plainText.replace(/<br\s*\/?>/gi, '\n')
                                  .replace(/([^\sA-Za-záéíóúüñÁÉÍÓÚÜÑ])\s?(?=[A-Za-záéíóúüñÁÉÍÓÚÜÑ])/g, '$1')
                                  .replace(/([A-Za-záéíóúüñÁÉÍÓÚÜÑ])\s?(?=[^\sA-Za-záéíóúüñÁÉÍÓÚÜÑ]|[a-záéíóúüñÁÉÍÓÚÜÑ][A-ZÁÉÍÓÚÜÑ])/g, '$1')
                                  .replace(/(\d)(?=[A-Za-záéíóúüñÁÉÍÓÚÜÑ])/g, '$1 ')
                                  .replace(/([A-Za-záéíóúüñÁÉÍÓÚÜÑ])(?=\d)/g, '$1 ')
                                  .replace(/([^\s])(?=[,])/g, '$1')
                                  .replace(/([,])(?=[^\s])/g, '$1 ')
                                  .replace(/([A-Za-záéíóúüñÁÉÍÓÚÜÑ])(?=https?:\/\/)/g, '$1 ')
                                  .replace(/(http|https)(:\/{2})/gi, '$1$2')
                                  .replace(/([^htps:])(:)/gi, '$1: ')
                                  .replace(/\)(?=[a-zA-Z])/g, ') ')
                                  .replace(/\((?=[a-zA-Z])/g, ' (')
                                  .replace(/\d\.(?!\s)/g, '$& ')
    return sanitizedText.trim();
  } else {
    return plainText.trim();
  }
}

function parseFeed(xmlDoc) {
  const items = xmlDoc.getElementsByTagName('item');
  const parsedItems = [];
  
  // Words to be capitalized
  const nameExceptions = ['colombia', 'méxico', 'argentina', 'buenos', 'aires', 'universidad', 'salamanca', 'españa', 'alemania', 'taiwán', 'ecuador', 'brasil', 'canadá', 'finlandia', 'europa', 'fundación', 'chile', 'jaen', 'fundación', 'carolina', 'university', 'jyväskylä', 'facultad', 'central', 'san', 'autónoma', 'concepción', 'técnica', 'guanajuato', 'antioquía', 'salvador', 'nacional', 'cuyo', 'metropolitana', 'católica', 'valparaíso', 'américa', 'latina']; 
  // Words to be fully uppercase
  const initialExceptions = ['OEA', 'STEM', 'AUIP', 'UNMSM', '2023-II', 'ELAP', 'FMUSP', 'UDEC', 'PUCV', 'USS', 'ITESO']; 

  for (const item of items) {
    const channel = xmlDoc.getElementsByTagName('channel')[0];
    const feedName = channel.getElementsByTagName('title')[0].textContent;

    const titleElement = item.getElementsByTagName('title')[0];
    const title = titleElement ? (feedName === 'OGCRI - UNMSM' ? capitalizeFirstWord(titleElement.textContent, nameExceptions, initialExceptions) : titleElement.textContent) : '';

    const link = item.getElementsByTagName('link')[0].textContent;
    const rawDescription = item.getElementsByTagName('description')[0].textContent;
    const sanitizedDescription = sanitizeHTML(rawDescription, feedName);
    const clippedDescription = (feedName === 'OGCRI - UNMSM') ? capitalizeFirstWord(sanitizedDescription.slice(0, 350), nameExceptions, initialExceptions) : sanitizedDescription.slice(0, 350);

    const pubDate = item.getElementsByTagName('pubDate')[0].textContent;

    const enclosure = item.getElementsByTagName('enclosure')[0];
    const img = (enclosure && enclosure.getAttribute('type').startsWith('image')) ? enclosure.getAttribute('url') : '';

    parsedItems.push({
      title,
      link,
      description: clippedDescription,
      img,
      pubDate,
      feedName,
    });
  }

  return parsedItems;
}

async function loadFeeds(feedUrls) {
  const allFeeds = [];

  for (const url of feedUrls) {
    try {
      const xmlDoc = await fetchRSSFeed(url);
      const parsedItems = parseFeed(xmlDoc);
      allFeeds.push(...parsedItems);
    } catch (error) {
      console.error(`Error fetching feed from ${url}:`, error);
    }
  }

  const sortedFeeds = sortFeedsByDate(allFeeds);
  displayFeeds(sortedFeeds, 0, 10); // Call displayFeeds here
  return sortedFeeds;
}


function saveFeedsToLocalStorage(feeds) {
  localStorage.setItem('rssFeeds', JSON.stringify(feeds));
}

function loadFeedsFromLocalStorage() {
  const savedFeeds = localStorage.getItem('rssFeeds');
  return savedFeeds ? JSON.parse(savedFeeds) : [];
}

function sortFeedsByDate(feeds) {
  return feeds.sort((a, b) => {
    const dateA = new Date(a.pubDate);
    const dateB = new Date(b.pubDate);
    return dateB - dateA;
  });
}

function displayFeeds(feeds, startIndex, count) {

  const endIndex = startIndex + count;
  const feedsToShow = feeds.slice(startIndex, endIndex);

  const feedContainer = document.getElementById('feed-container');
  
  const loadMoreButton = document.getElementById('load-more-button');
  if (loadMoreButton) {
    feedContainer.removeChild(loadMoreButton);
  }

  feedsToShow.forEach((feed) => {
    const feedItem = document.createElement('div');
    feedItem.classList.add('card', 'mb-3');

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    const title = document.createElement('h3');
    title.classList.add('card-title');
    title.innerHTML = `<a class="stretched-link text-body" href='${feed.link}'>${feed.title}</a>`;
    cardBody.appendChild(title);

    if (feed.img) {
      const imgContainer = document.createElement('div');
      imgContainer.classList.add('text-center', 'mb-3');

      const img = document.createElement('img');
      img.classList.add('img-fluid', 'rounded');
      img.src = feed.img;
      imgContainer.appendChild(img);

      cardBody.appendChild(imgContainer);
    }

    const description = document.createElement('p');
    description.classList.add('card-text');
    description.textContent = feed.description;
    cardBody.appendChild(description);

    const publishedData = document.createElement('p');
    publishedData.classList.add('card-text', 'published_data', 'mt-1');
    const pubDate = new Date(feed.pubDate).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    publishedData.innerHTML = `<small>Publicado el ${pubDate}<span class="special_display"> por <a class="stretched-link position-relative" href="#">${feed.feedName}</a></span>&nbsp;‐&nbsp;<strong>2&nbsp;min. de lectura</strong></small>`;
    cardBody.appendChild(publishedData);

    feedItem.appendChild(cardBody);

    feedContainer.appendChild(feedItem);
  });

  if (endIndex < feeds.length) {
    const loadMoreButton = document.createElement('button');
    loadMoreButton.textContent = 'Ver más';
    loadMoreButton.classList.add('btn', 'btn-primary', 'w-100', 'button-email', 'mt-0', 'mb-3');
    loadMoreButton.addEventListener('click', () => {
      startIndex += count;
      displayFeeds(feeds, startIndex, count);
      feedContainer.removeChild(loadMoreButton);
    });
    feedContainer.appendChild(loadMoreButton);
  }
} 

async function updateFeedsInBackground(feedUrls) {
  const newFeeds = await loadFeeds(feedUrls);
  const savedFeeds = loadFeedsFromLocalStorage();

  const mergedFeeds = mergeFeeds(savedFeeds, newFeeds);
  saveFeedsToLocalStorage(mergedFeeds);

  const uniqueNewFeeds = newFeeds.filter(
    (newFeed) => !savedFeeds.some((savedFeed) => savedFeed.link === newFeed.link)
  );
  displayFeeds(uniqueNewFeeds);
}

function mergeFeeds(feedsA, feedsB) {
  const mergedFeeds = [...feedsA];
  feedsB.forEach((feedB) => {
    if (!feedsA.some((feedA) => feedA.link === feedB.link)) {
      mergedFeeds.push(feedB);
    }
  });
  return mergedFeeds;
}

function init(feedUrls) {
  console.log('Initializing RSS reader...');

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', async function () {
      main(feedUrls);
    });
  } else {
    main(feedUrls);
  }
}

async function main(feedUrls) {
  console.log('Loading saved feeds...');
  const savedFeeds = loadFeedsFromLocalStorage();
  displayFeeds(savedFeeds, 0, 10);

  updateFeedsInBackground(feedUrls);

  document
    .getElementById('add-feed-form')
    .addEventListener('submit', async (e) => {
      e.preventDefault();
      const feedUrl = e.target.elements['feed-url'].value;
      console.log(`Adding new feed: ${feedUrl}`);
      const newFeeds = await loadFeeds([feedUrl]);
      console.log(`Fetched ${newFeeds.length} items from ${feedUrl}. Feed name: ${newFeeds[0].feedName}`)

      const savedFeeds = loadFeedsFromLocalStorage();
      const mergedFeeds = mergeFeeds(savedFeeds, newFeeds);
      saveFeedsToLocalStorage(mergedFeeds);
      displayFeeds(newFeeds, 0, 10);

      e.target.elements['feed-url'].value = '';
    });
}

const feedUrlsJson = [
  'https://cooperacion-unmsm.blogspot.com/feeds/posts/default?alt=rss',
  'https://www.gob.pe/busquedas.rss?contenido[]=normas&institucion[]=unmsm&sheet=1&sort_by=recent&term=pregrado',
  'https://www.gob.pe/busquedas.rss?contenido[]=noticias&institucion[]=concytec&sheet=1&sort_by=recent&term=Consejo%20Nacional%20de%20Ciencia%2C%20Tecnolog%C3%ADa%20e%20Innovaci%C3%B3n%20Tecnol%C3%B3gica',
  'https://www.gob.pe/busquedas.rss?categoria[]=10-educacion&contenido[]=noticias&institucion[]=pronabec&sheet=1&sort_by=recent',
];

init(feedUrlsJson);