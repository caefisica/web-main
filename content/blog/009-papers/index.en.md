---
title: "Access Scientific Articles"
emoji: ":lock_with_ink_pen:"
description: "On many occasions, you will need to access an article that is behind a paywall. We will look at some of the ways to gain access to these articles."
lead: "On many occasions, you will need to access an article that is behind a paywall. We will look at some of the ways to gain access to these articles."
date: 2022-09-15T14:44:30-05:00
lastmod: 2022-09-15T14:44:30-05:00
images: []
thumbnail: ""
contributors: ["David", "Richard", "Sergio", "Renzo"]
author_id: "david"
tags: ["tips"]
toc: true
weight: 90
pinned: false
draft: false
---

Before we begin, you need to know the meanings of the following terms.

1. DOI: Acronym for Digital Object Identifier. It is an alphanumeric code that uniquely identifies a scientific article, image, book, news item, among others. This code is a permanent identifier.
2. Sci-Hub: Website founded by Alexandra Elbakyan in 2011. The official links are [Sci-Hub.se](https://sci-hub.se/), [Sci-Hub.st](https://sci-hub.st/) y [Sci-Hub.ru](https://sci-hub.ru/).

### How to access

#### Bookmarks

Without going too into detail (for now), you can bookmark the following script in your browser of preference.

```
javascript:location.hostname += '.sci-hub.ru'
```

When visiting the paper webpage, you can click on the bookmark containing the script and it will be executed and redirect you to the paper webpage on Sci-Hub.

#### Browser Add-ons

This process can be automatized by using extensions in your browser. 

1. If you use a Chromium-based browser that allows you to install from the Chrome Web Store. You can install [Sci-Hub X Now!](https://chrome.google.com/webstore/detail/sci-hub-x-now/gmmnidkpkgiohfdoenhpghbilmeeagjj). 

{{< img-simple src="1.jpg" alt="Screenshot when searching for the DOI term in the browser" class="d-block mx-auto shadow my-5" >}}

2. Another alternative is [Sci-Hub-Fly](https://github.com/allanino/sci-hub-fy), although in this case you have to install the add-ons manually, by enabling Developer Mode. The repository contains the detailed steps.

#### Telegram

In Telegram there is a bot ([@scihubot](https://telegram.me/scihubot)) to which you can send the URL of a scientific article as a message and the bot responds with the PDF file of the selected scientific article.

#### Manually

1. You need the DOI of the scientific article you wish to access. You can also use the URL of the article itself.
2. Paste the DOI or link on the Sci-Hub website. That's all. :tada:

##### Example

Let's say I want to access the following article:
- Author: Jonathan Adams
- Title: "_Early citation counts correlate with accumulated impact_" 
- URL: ```https://link.springer.com/article/10.1007/s11192-005-0228-9```

When you enter the mentioned link, you will see the following:

{{< img-simple src="2.jpeg" alt="Captura de pantalla de un artículo científico en Springer" class="d-block mx-auto shadow my-5" >}}

First, we need to identify the DOI. Each scientific journal has a different way of displaying its article information, so it will be in different positions depending on the journal. Use ```Ctrl+F``` in your browser and search for the term "DOI". They are usually found at the bottom of the page.

{{< img-simple src="3.png" alt="Captura de pantalla al buscar el término DOI en el navegador" class="d-block mx-auto shadow my-5" >}}

In this case, the DOI code is ```10.1007/s11192-005-0228-9```. Paste this into the Sci-Hub website and it will load the document. You can use ```Ctrl+S``` to save the document locally.

{{< img-simple src="4.png" alt="Captura de pantalla al buscar el término DOI en el navegador" class="d-block mx-auto shadow my-5" >}}
