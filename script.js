const contenido = [
  {
    titulo: "Cine Poster HD",
    descripcion: "Película HD · 2025",
    imagen: "assets/peli1.jpg",
    enlace: "#"
  },
  {
    titulo: "Diseño Aimari Vector",
    descripcion: "Vector profesional deportivo",
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
      <p>${item.descripcion}</p>
      <button class="descargar" onclick="alert('Para descargar este contenido, contáctanos.')">Descargar</button>
    </div>
  `;
  grid.appendChild(div);
});