// Espera a que todo el documento cargue
document.addEventListener('DOMContentLoaded', () => {
    console.log("Landing page de la campaña cargada correctamente.");

    // Ejemplo: Alerta simple al hacer clic en un botón (opcional)
    const boton = document.querySelector('button');
    if (boton) {
        boton.addEventListener('click', () => {
            alert("¡Gracias por tu interés en nuestra campaña!");
        });
    }
    document.getElementById('btn-accion').addEventListener('click', function() {
    alert("¡Gracias por unirte al cambio con el Candidato X!");
});
});