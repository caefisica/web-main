/* Allows users to user ctrl+/ to go directly to the search engine */
document.onkeyup = function () {
  var e = e || window.event; // for IE to cover IEs window event-object
  if(e.ctrlKey && e.key === '/' ) {
      document.getElementById('autocomplete-0-input').focus();
    return false;
  }
}

/* Redirect the invites links to /admin/, this is not an automatic function from Netlify */
/* If either indexOf() returns value equal or greater than zero, then it will be executed */
if (location.href.indexOf("#invite_token") >= 0 || location.href.indexOf("#access_token") >= 0) {
  var urlSplit = document.URL.split("#");
  window.location = `/admin/#${urlSplit[1]}`;
}