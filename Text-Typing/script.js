var i=0, text;

text = "Hola Mari, que manera de dormir no? Dioj mio... bueno pero que no estes durmiendo esta noche en hora, vas a ver, waska...";

var typing = () => {
   if(i<text.length) {
        document.getElementById("text").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing,100)
    } 
};

typing();
