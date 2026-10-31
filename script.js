const formulario = document.getElementById("formContacto");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const nombre = document.getElementById("name").value.trim();

    /*alert(`¡Hola, ${nombre}! Gracias por contactarnos. Hemos recibido tu mensaje.`);*/
    alert("¡Hola, " + nombre + "! Gracias por contactarnos. Hemos recibido tu mensaje.");

    formulario.reset();
});


function myClickFunction() { 
     alert("LLAMA YA al 8118953245 y pregunta por la casa que te interesa, te atenderemos con gusto."); 
}