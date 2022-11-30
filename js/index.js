function mostrar() {
    document.getElementById("sidebar").style.width = "15em";
    document.getElementById("content").style.marginLeft = "15em";
    document.getElementById("cerrar").style.display = "inline";
}

function ocultar() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("content").style.marginLeft = "0";
    document.getElementById("abrir").style.display = "inline";
    document.getElementById("cerrar").style.display = "none";
}