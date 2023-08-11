const container = document.getElementsByClassName("container");
const navBar = document.querySelector("nav");

colors = [
  "#008080",
  "#50C878",
  "#7FFFD4",
  "#FF6F61",
  "#E6E6FA",
  "#DAA520",
  "#FFA07A",
  "#082567",
  "#6A5ACD",
  "#FFD700",
  "#FF6347",
  "#FF4500"
]

for (let i = 0; i < colors.length; i++) {
  const container = document.querySelector(".container");
  const button = document.createElement("button");

  button.style.backgroundColor = colors[i];
  button.textContent = colors[i];
  button.setAttribute("onclick", `SetColor('${colors[i]}')`);

  container.append(button);
}

SetColor(localStorage.getItem("currentColor"));

function SetColor(color) {
  navBar.style.backgroundColor = color;
  localStorage.setItem("currentColor", color);
}
