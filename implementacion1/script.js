console.log("conexion correcta")

let input = document.getElementById("input");
let boton = document.getElementById("boton");
let estadoActual = 0;

//aca debo aplicar la lógica para implementar el enter, que cuando haga enter muestre el alert

if (input) {
    input.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            alert(input.value);
        } 
    });
}

//logica cambiar de color el boton (base)

if (boton) {
    boton.addEventListener("click", function() {

        // Cambiar colores según el estado actual
        if (estadoActual === 0) {
            // Estado 0: fondo blanco, texto negro
            document.body.style.backgroundColor = "white";
            document.body.style.color = "black";
            estadoActual = 1; // Pasar al siguiente estado
            
        } else if (estadoActual === 1) {
            // Estado 1: fondo negro, texto blanco
            document.body.style.backgroundColor = "black";
            document.body.style.color = "white";
            estadoActual = 2; // Pasar al siguiente estado
            
        } else if (estadoActual === 2) {
            // Estado 2: fondo celeste, texto rojo
            document.body.style.backgroundColor = "lightblue";
            document.body.style.color = "red";
            estadoActual = 0; // Volver al primer estado
        }
    });
} else {
    console.log("No se encontró el botón con id 'boton'");
}
