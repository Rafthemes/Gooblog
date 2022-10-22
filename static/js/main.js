new Swiper(".nav-swiper", {
  slidesPerView: "auto",
  navigation: {
    prevEl: ".nav-swiper-prev",
    nextEl: ".nav-swiper-next",
  },
});

const toggleTheme = document.querySelector("#toggle-theme");
const toggleThemeIcon = toggleTheme.querySelector("img");
const toggleThemeText = toggleTheme.querySelector(".text");
const html = document.querySelector("html");

if (JSON.parse(localStorage.getItem("darkmode"))) {
  html.classList.add("dark");
  toggleThemeText.textContent = "Dark";
  toggleThemeIcon.src = "/images/icons/darkmode.svg";
} else {
  html.classList.remove("dark");
  toggleThemeText.textContent = "Light";
  toggleThemeIcon.src = "/images/icons/lightmode.svg";
}

toggleTheme.addEventListener("click", () => {
  switchTheme();
});

function switchTheme() {
  if (!html.classList.contains("dark")) {
    html.classList.add("dark");
    localStorage.setItem("darkmode", true);
    toggleThemeText.textContent = "Dark";
    toggleThemeIcon.src = "/images/icons/darkmode.svg";
  } else {
    html.classList.remove("dark");
    localStorage.setItem("darkmode", false);
    toggleThemeText.textContent = "Light";
    toggleThemeIcon.src = "/images/icons/lightmode.svg";
  }
}

(function () {
  var d = document,
    s = d.createElement("script");
  s.src = "https://gooblog-1.disqus.com/embed.js";
  s.setAttribute("data-timestamp", +new Date());
  (d.head || d.body).appendChild(s);
})();

const openChat = document.querySelector(".open-chat");
const disqus = document.querySelector("#disqus_thread");

openChat?.addEventListener("click", () => {
  openChat.style.display = "none";
  disqus.style.display = "block";
});
