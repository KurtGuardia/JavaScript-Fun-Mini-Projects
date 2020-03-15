var btn = document.getElementsByClassName('btn')[0],
    text = document.getElementsByClassName('text')[0],
    img = document.getElementsByClassName('img')[0],
    c = 0;
function coverImage() {
    if (c == 0) {
        btn.innerHTML = "Cover Image";
        text.style.display = 'none';
        img.style.filter = 'blur(0)';
        c = 1;
    } else {
        btn.innerHTML = "Uncover Image";
        text.style.display = 'block';
        img.style.filter = 'blur(24px)';
        c = 0;
    }
}