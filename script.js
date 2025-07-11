const message = "Люблю моего Niki Mil!";
const typingEl = document.querySelector(".typing-text");
const subtitleEl = document.querySelector(".subtitle");
let idx = 0;

function type() {
  if (idx <= message.length) {
    typingEl.style.width = `${idx}ch`;
    typingEl.textContent = message.slice(0, idx++);
    setTimeout(type, 120);
  } else {
    typingEl.style.borderRight = "none";
    typingEl.style.display = "inline-block";
    typingEl.style.margin = "0 auto";

    // ⏳ Ждём чуть-чуть, и потом показываем вторую надпись
    setTimeout(() => {
      subtitleEl.classList.add("visible");
    }, 600);
  }
}

document.addEventListener("DOMContentLoaded", type);

// 💗 Сердечки по клику — увеличенные!
document.body.addEventListener("click", (e) => {
  const heart = document.createElement("div");
  heart.className = "floating-heart";
  heart.textContent = "❤️";
  heart.style.left = `${e.clientX}px`;
  heart.style.top = `${e.clientY}px`;
  document.body.appendChild(heart);
  heart.addEventListener("animationend", () => heart.remove());
});
