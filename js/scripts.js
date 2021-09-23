function toggleText() {
  if (el.textContent == "En savoir +") {
    el.textContent = "En savoir -";
    text.style.display = "inline-block";
  } else {
    text.style.display = "none";
    el.textContent = "En savoir +";
  }
}

const text = document.getElementById("toggleableText");
const el = document.getElementById("toggleTextBtn");
el.addEventListener("click", toggleText);
