/// Elena Guzman Blanco

// Cambiando un parrafo
function miNombre()
{
	var nombre = window.prompt("¿Cual es tu nombre?");
	document.getElementById("hora").innerHTML = nombre;
}

// Cambiando el titulo
function nuevoTitulo()
{
	var tituloNuevo = window.prompt("¿Nuevo titulo?");
	document.getElementById("tit").innerHTML = tituloNuevo;
}

// Tomando parametro de input
function nombrePJ(name)
{
	document.getElementById("hora").innerHTML = name;
}

// Cambiando color de fondo
function CambiarColorBG() {
	document.body.style.backgroundColor = "darkslateblue";
}