const contenido = [
  {
    titulo: "La Gran Aventura",
    descripcion: "Película 2024 · 1080p · Latino",
    imagen: "assets/peli1.jpg",
    enlace: "#"
  },
  {
    titulo: "Vector Aimari",
    descripcion: "Diseño vectorial deportivo",
    imagen: "assets/design1.png",
    enlace: "#"
  }
];

const grid = document.getElementById("gallery-grid");

contenido.forEach(item => {
  const div = document.createElement("div");
  div.className = "item";
  div.innerHTML = `
    <img src="${item.imagen}" alt="${item.titulo}">
    <div class="info">
      <h4>${item.titulo}</h4>
      <span>${item.descripcion}</span><br>
      <button class="descargar" onclick="alert('Para descargar este contenido, contacta por WhatsApp o realiza tu pago.')">Descargar</button>
    </div>
  `;
  grid.appendChild(div);
});
