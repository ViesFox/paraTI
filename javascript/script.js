// Obtener las imágenes de las cartas
const cartas = document.querySelectorAll('.carta img');

// Obtener los modales
const modales = document.querySelectorAll('.modal');

// Asignar eventos de clic a cada imagen de carta
cartas.forEach((carta, index) => {
  carta.addEventListener('click', () => {
    // Mostrar el modal correspondiente al hacer clic en la imagen de la carta
    modales[index].style.display = 'flex';
  });
});

// Obtener los elementos de cierre de los modales
const closeButtons = document.querySelectorAll('.close');

// Asignar eventos para cerrar los modales al hacer clic en el botón de cierre (×)
closeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    // Ocultar el modal al hacer clic en el botón de cierre
    button.parentElement.parentElement.style.display = 'none';
  });
});
