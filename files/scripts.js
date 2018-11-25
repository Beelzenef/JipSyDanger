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

function displayCD(i) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            myFunction(xmlhttp, i);
        }
    };
    xmlhttp.open("GET", "cd_catalog.xml", true);
    xmlhttp.send();
}

function myFunction(xml, i) {
    var xmlDoc = xml.responseXML; 
    x = xmlDoc.getElementsByTagName("CD");
    document.getElementById("showCD").innerHTML =
    "Artist: " +
    x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
    "<br>Title: " +
    x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
    "<br>Year: " + 
    x[i].getElementsByTagName("YEAR")[0].childNodes[0].nodeValue;
}