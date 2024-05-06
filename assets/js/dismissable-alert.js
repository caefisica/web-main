(() => {
    "use strict";

    // Check if alert has been closed, and set data-global-alert to closed
    Object.keys(localStorage).forEach(function (key) {
        if (/^global-alert-/.test(key)) {
            document.documentElement.setAttribute(
                "data-global-alert",
                "closed"
            );
        }
    });

    // Enable alert closing, on DOMContentLoaded
    window.addEventListener("DOMContentLoaded", () => {
        var announcement = document.getElementById("announcement");

        if (announcement !== null) {
            var id = announcement.dataset.id;

            // Check if the alert has been previously closed
            if (localStorage.getItem(id) === "closed") {
                announcement.style.display = "none"; // Hide the alert if it's closed
            } else {
                announcement.classList.remove("d-none"); // Show the alert if it's not closed
            }

            // Remove other alerts from localStorage and DOM
            Object.keys(localStorage).forEach(function (key) {
                if (/^global-alert-/.test(key)) {
                    if (key !== id) {
                        localStorage.removeItem(key);
                        document.documentElement.removeAttribute(
                            "data-global-alert"
                        );
                    }
                }
            });

            // Event listener for the alert's closing button
            var closeButton = announcement.querySelector(".btn-close");
            closeButton.addEventListener("click", function () {
                localStorage.setItem(id, "closed"); // Store the closed state in localStorage
            });
        }
    });
})();
