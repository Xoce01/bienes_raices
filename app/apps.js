var nombre = document.getElementById("user");
var email = document.getElementById("ema");
var form = document.getElementById("form");
var parrafo = document.getElementById("warnings")



var imge = ["image/casauno.jpg",
    "image/casados.jpg",
    "image/casatres.jpg",
    "image/casacuatro.jpg",
    "image/casasinco.jpg"
];

var num = 0;

function netx() {
    var slider = document.getElementById("slider");
    num++;

    if (num >= imge.length) {
        num = 0;
    }
    slider.src = imge[num];
}

function prev() {
    var slider = document.getElementById('slider');
    num--;

    if (num < 0) {
        num = imge.length - 1;
    }
    slider.src = imge[num];
}

/*---------------*/
const menuIcon = document.querySelector(".hamburger-menu");

const navbar = document.querySelector('.men');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle("change");
});