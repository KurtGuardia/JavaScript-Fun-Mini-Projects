
function getNew() {
    var symbols, color;
    symbols = "0123456789ABCDEF";

    color = "#";
    for(var i = 0; i < 6; i++){
        color = color + symbols[Math.floor(Math.random() * 16)];
    }

    document.body.style.background = color;
    document.getElementById("hex").innerHTML = color;

    copiarAlPortapapeles("hex");
}

function copiarAlPortapapeles(hex) {
    var aux = document.createElement("input");
    aux.setAttribute("value", document.getElementById("hex").innerHTML);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
}

