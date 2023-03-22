function decodeEmail(encoded) {
  const email = atob(encoded);
  return email;
}

function showEmail(event, encodedEmail) {
  event.preventDefault();
  const decodedEmail = decodeEmail(encodedEmail);
  const mailtoLink = 'mailto:' + decodedEmail;
  window.location.href = mailtoLink;
}

document.addEventListener('DOMContentLoaded', function() {
  const emailLinks = document.querySelectorAll('.email-link');

  emailLinks.forEach(function(emailLink) {
    const encodedEmail = emailLink.getAttribute('data-email');
    emailLink.addEventListener('click', function(event) {
      showEmail(event, encodedEmail);
    });
  });
});