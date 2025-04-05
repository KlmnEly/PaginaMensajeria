const seleccionConsulta = document.getElementById('seleccionConsulta');
const inputSeleccion = document.getElementById('inputSeleccion');
const menu = document.querySelector('.menu');
const navLinks = document.querySelector('.nav-links');

seleccionConsulta.addEventListener('change', function () {
    const opcionSeleccionada = this.value;
    let nuevoPlaceholder = '';

    switch (opcionSeleccionada) {
        case "envios":
            nuevoPlaceholder = "Ingresa el # de guia"
            break;

        case "remision":
            nuevoPlaceholder = "Ingresa el # de remosion"
            break;
        case "factura":
            nuevoPlaceholder = "Ingresa el # de factura"
            break;
        case "recoleccion":
            nuevoPlaceholder = "Ingresa el codigo"
            break;
    }

    inputSeleccion.placeholder = nuevoPlaceholder;
})

menu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
})