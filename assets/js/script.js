var cantidadProducto = 1; // Inicializa la cantidad en 0
var precio = 35990;


function actualizar() {
    var totalGeneral = cantidadProducto * precio;
    document.querySelector('#total').innerHTML = totalGeneral;
    document.querySelector('#cantidad').innerHTML = cantidadProducto;
}

document.addEventListener('DOMContentLoaded', function() {
    actualizar(); // Inicializa los valores al cargar la página
    
    var botonSumar = document.querySelector("#sumar");
    var botonRestar = document.querySelector("#restar");
    var botonComprar = document.querySelector("#btn-comprar");
    
    botonSumar.addEventListener('click', function() {
        cantidadProducto = cantidadProducto + 1; 
        actualizar(); 
    });

    botonRestar.addEventListener('click', function() {
        if (cantidadProducto > 0) {
            cantidadProducto = cantidadProducto - 1; 
            actualizar(); 
        }
    });

    botonComprar.addEventListener('click', function() {
        alert("Compra Exitosa!");
    });


});


