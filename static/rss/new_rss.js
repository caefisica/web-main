// Function to add a new RSS feed
function addFeed(url) {
  // Get the URL of the CORS proxy
  var proxyUrl = "https://cors.cae.workers.dev/";

  // Initialize the items array
  var items = [];

  // Make a request to the CORS proxy, passing the new feed URL as a query parameter
  fetch(proxyUrl + "?" + url)
    .then(function(response) {
      return response.text();
    })
    .then(function(responseText) {
      // Parse the RSS feed using the DOMParser
      var parser = new DOMParser();
      var feed = parser.parseFromString(responseText, "text/xml");

      // Get the list of items in the feed
      var feedItems = feed.getElementsByTagName("item");

      // Convert the NodeList to an array
      items = Array.from(feedItems);

      // Create a Date object for each item in the feed and add it to the item
      for (var i = 0; i < items.length; i++) {
        var item = items[i];
        var pubDate = item.getElementsByTagName("pubDate")[0].textContent;
        item.date = new Date(pubDate);
      }

      // Sort the items in the feed by their Date object
      items.sort(function(a, b) {
        if (!a.date && !b.date) {
          // Both items don't have a date property, so they are considered equal
          return 0;
        }
        if (!a.date) {
          // The first item doesn't have a date property, so it is considered less than the second item
          return -1;
        }
        if (!b.date) {
          // The second item doesn't have a date property, so it is considered greater than the first item
          return 1;
        }
        // Both items have a date property, so we can compare them using the Date object
        return b.date - a.date;
      });

      // Get the name of the feed and its description
      var feedTitle = feed.getElementsByTagName("title")[0];
      var feedDescription = feed.getElementsByTagName("description")[0];
      var description = item.getElementsByTagName("description")[0];

      // Check if the description element exists
      if (description) {
        description = description.textContent;
      }

      if (description.length > 50) {
        description = description.substring(0, 550) + "...";
      }

            // Check if the feed title and description elements exist
            if (feedTitle && feedDescription) {
              feedTitle = feedTitle.textContent;
              feedDescription = feedDescription.textContent;
            }
      
            // Loop through the items and add them to the list on the page
            for (var i = 0; i < items.length; i++) {
              var item = items[i];
              var title = item.getElementsByTagName("title")[0];
              if (title instanceof Node) {
                console.log("title is a NodeList");
              }
              var link = item.getElementsByTagName("link")[0];
              var date = item.date;
      
              // Check if the title and link elements exist
              if (title && link) {
                title = title.textContent;
                if (title.toUpperCase() === title) {
                  // Lowercase the title
                  title = title.toLocaleLowerCase("es-ES");
                  // Capitalize the first letter of each word
                  title = title.replace(/\b[a-z]/g, function(letter) {
                    return letter.toUpperCase();
                  });
                }
                link = link.textContent;
              }
      
              // Create a list item for the item, including the title, date, and link, and add it to the page
              var listItem = "<li><a class='title' href='" + link + "'>" + title + "</a> - " + date + " - " + description + "</li>";
              document.getElementById("feed").insertAdjacentHTML("beforeend", listItem);
            }
      
            // Add the name of the feed and its description to the page
            document.getElementById("feed-title").innerHTML = feedTitle;
            document.getElementById("feed-description").innerHTML = feedDescription;
        });
      }

// Pre-load some RSS feeds
addFeed("https://news.fnal.gov/tag/physics/feed/");
addFeed("https://cooperacion-unmsm.blogspot.com/feeds/posts/default?alt=rss");
addFeed("https://feeds.bbci.co.uk/mundo/rss.xml");	