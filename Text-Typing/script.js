var i=0, text;

text = "Hello... is it me you are looking for?... I can see it in your eyes... I can see it in your smile.... You're all I've ever wanted and my arms are open wide.... <3";

var typing = () => {
   if(i<text.length) {
        document.getElementById("text").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing,100)
    } 
};

typing();
