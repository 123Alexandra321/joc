const zonaJoc = document.getElementById("joc");
const scorEl = document.getElementById("scor");

let scor = 0;

// Funcție care creează un cerc aleatoriu
function creeazaCerc() {
  const cerc = document.createElement("div");
  cerc.classList.add("cerc");

  const dim = 50;
  const x = Math.random() * (window.innerWidth - dim);
  const y = Math.random() * (window.innerHeight - dim);

  cerc.style.left = `${x}px`;
  cerc.style.top = `${y}px`;

  // La click pe cerc, crește scorul
  cerc.addEventListener("click", () => {
    scor++;
    scorEl.textContent = `Scor: ${scor}`;
    cerc.remove();
  });

  zonaJoc.appendChild(cerc);

  // Dacă nu este apăsat în 1.5 secunde, dispare
  setTimeout(() => {
    cerc.remove();
  }, 1500);
}

// Creează un cerc la fiecare 1.2 secunde
setInterval(creeazaCerc, 1200);
