const seleccionConsulta = document.getElementById('seleccionConsulta');
const inputSeleccion = document.getElementById('inputSeleccion');
const menu = document.querySelector('.menu');
const navLinks = document.querySelector('.nav-links');

if (seleccionConsulta) {
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
}

if (menu) {

    menu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    })
}

let map;

function initMap () {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 8
    });
}