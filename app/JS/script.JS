console.log("This is why you should hire me.")

//  lightmode/ darkmode toogle -- I can make fun color contrasting toggles for accessibility.
const body = document.querySelector("body");
const toggle = document.querySelector(".toggle");

const savedMode = localStorage.getItem("mode");

if (savedMode === "dark") {
    body.classList.add("dark");
    toggle.classList.add("active");
}

toggle.addEventListener("click", () => {
    body.classList.toggle("dark");

    const isDark = body.classList.contains("dark");
    localStorage.setItem("mode", isDark ? "dark" : "light");

    toggle.classList.toggle("active");
});