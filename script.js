
function criarCoracao() {
  const container = document.getElementById("hearts-container");

  if (!container) {
    console.log("container não encontrado");
    return;
  }

  const heart = document.createElement("div");
  heart.classList.add("heart");

  heart.innerHTML = "EU TE AMO";

  heart.style.left = Math.random() * 100 + "%";
  heart.style.fontSize = (Math.random() * 2 + 1) + "rem";
  heart.style.animationDuration = (Math.random() * 5 + 3) + "s";

  container.appendChild(heart);

  setTimeout(() => heart.remove(), 5000);
}

let intervalo;

function iniciarCoracoes() {
  intervalo = setInterval(criarCoracao, 500);
}

function pararCoracoes() {
  clearInterval(intervalo);
}

iniciarCoracoes()