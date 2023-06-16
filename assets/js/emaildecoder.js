function decodeEmail(encoded) {
  const email = atob(encoded);
  return email;
}

function showEmail(event, encodedEmail) {
  event.preventDefault();
  const decodedEmail = decodeEmail(encodedEmail);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailRegex.test(decodedEmail)) {
    const mailtoLink = 'mailto:' + encodeURIComponent(decodedEmail);
    window.location.href = mailtoLink;
  } else {
    console.error('Email inválido:', decodedEmail);
  }
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