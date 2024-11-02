// Cambiar el color de fondo al azar
function cambiarColorFondo() {
    const colores = ['#FFEB3B', '#03A9F4', '#FF5722', '#8BC34A', '#9C27B0'];
    const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    document.body.style.backgroundColor = colorAleatorio;
}

// Contador de clics
let contador = 0;
const botonClics = document.getElementById('boton-clics');
const contadorClics = document.getElementById('contador-clics');

botonClics.addEventListener('click', () => {
    contador++;
    contadorClics.textContent = `Clicks: ${contador}`;
});
