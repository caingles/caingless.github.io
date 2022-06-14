document.getElementById('btn_menu').addEventListener('click', mostrar_menu);

nav = document.getElementById('nav');
background_menu = document.getElementById('back_menu')

function mostrar_menu() {
    nav.style.right = "0px";
    background_menu.style.display = 'block';
}

background_menu.addEventListener('click', ocultar_menu);

function ocultar_menu() {
    nav.style.right = "-250px";
    background_menu.style.display = 'none';
}

// ---------------
var header = document.getElementById('header');
console.log(header)

window.addEventListener('scroll', mostrar);

function mostrar() {
    var scroll = scrollY;

    if (scroll > 15) {
        header.style.background = '#fab2b2';
        header.style.padding = '0px';
    } else {
        header.style.background = 'transparent';
        header.style.padding = '10px 0 0 0';

    }
}

