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

function checkToken() {
  if (location.href.indexOf('#invite_token') >= 0 || location.href.indexOf('#access_token') >= 0) {
    var urlSplit = window.location.href.split('#');
    if (urlSplit.length >= 2) {
      window.location = `/admin/#${urlSplit[1]}`;
    }
  }
}

// check for the invite or access token
checkToken();

/* This handles the newsletter submission button */
function handleFormSubmit(e) {
  e.preventDefault();

  var form = e.currentTarget;
  var subscribeButton = form.querySelector('button[type="submit"]');
  if (subscribeButton) {
    subscribeButton.disabled = true;
    form.submit();
    form.addEventListener('error', () => subscribeButton.disabled = false); // re-enable the subscribe button if error
  }
}

function addFormListener() {
  var form = document.querySelector('form[name="newsletter"]');
  if (form) {
    form.addEventListener('submit', handleFormSubmit);
    form.addEventListener('success', () => console.log('¡Se ha enviado un correo correctamente!'));
    form.addEventListener('remove', () => form.removeEventListener('submit', handleFormSubmit));
  }
}

var forms = document.querySelectorAll('form[name="newsletter"]');
forms.forEach(addFormListener);