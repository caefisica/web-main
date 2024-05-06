const getPreferredTheme = () => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
        return storedTheme;
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches ?
            "dark"
        :   "light"; // eslint-disable-line no-multi-spaces
};

const setTheme = theme => {
    if (theme === "dark") {
        document.documentElement.setAttribute("data-dark-mode", "");
    } else {
        document.documentElement.removeAttribute("data-dark-mode");
    }
    localStorage.setItem("theme", theme);
};

const toggleTheme = () => {
    const currentTheme =
        document.documentElement.hasAttribute("data-dark-mode") ?
            "dark"
        :   "light"; // eslint-disable-line no-multi-spaces
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    setTheme(newTheme);
};

const initTheme = () => {
    const preferredTheme = getPreferredTheme();
    setTheme(preferredTheme);

    window
        .matchMedia("(prefers-color-scheme: dark)")
        .addEventListener("change", event => {
            const newTheme = event.matches ? "dark" : "light";
            setTheme(newTheme);
        });

    const modeToggle = document.getElementById("mode");
    if (modeToggle) {
        modeToggle.addEventListener("click", toggleTheme);
    }

    document.querySelectorAll("[data-theme-toggle]").forEach(toggle => {
        toggle.addEventListener("click", toggleTheme);
    });
};

document.addEventListener("DOMContentLoaded", initTheme);
