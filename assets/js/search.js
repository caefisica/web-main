document.onkeyup = function () {
  var e = e || window.event; // for IE to cover IEs window event-object
  if(e.ctrlKey && e.key === '/' ) {
      document.getElementById('autocomplete-0-input').focus();
    return false;
  }
}