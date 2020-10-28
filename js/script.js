// var figure = document.querySelector("#caroussel>figure");
var toggle = document.querySelector(".icone-menu");
var showimg = document.querySelectorAll(".stylised");
var body = document.querySelector("body");
var hideme = document.querySelectorAll(".hideme");

function dotoggle() {
    document.querySelector('.menu').classList.toggle('show-menu');
    document.querySelector('body').classList.toggle('no-scroll');
    toggle.classList.toggle('menu-open');
}

toggle.addEventListener("click", dotoggle);

//  click sur image
for (k = 0; k < showimg.length; k++) {
    showimg[k].addEventListener("click", function () {
        this.classList.toggle('clicked');
        body.classList.toggle('no-scroll');
        body.classList.toggle('focus');
    });
}

window.addEventListener('scroll', function () {
    document.querySelectorAll(".hideme").forEach(function (x, y) {
        if (document.querySelector("html").clientHeight * 3 / 4 > hideme[y].getBoundingClientRect().top) {
            hideme[y].classList.add("showme");
        }
    });
});


//Ancien carroussel
// function nextprev(x) {
//     if (figure.classList.contains("un")) {
//         if (x === "next") {
//             figure.classList.replace("un", "deux")
//         } else {
//             figure.classList.replace("un", "quatre")
//         }
//     } else if (figure.classList.contains("deux")) {
//         if (x === "next") {
//             figure.classList.replace("deux", "trois")
//         } else {
//             figure.classList.replace("deux", "un")
//         }
//     } else if (figure.classList.contains("trois")) {
//         if (x === "next") {
//             figure.classList.replace("trois", "quatre")
//         } else {
//             figure.classList.replace("trois", "deux")
//         }
//     } else if (figure.classList.contains("quatre")) {
//         if (x === "next") {
//             figure.classList.replace("quatre", "un")
//         } else {
//             figure.classList.replace("quatre", "trois")
//         }
//     }
// }


// Ancien apparition fadeIn
// $(document).ready(function () {
//     /* Every time the window is scrolled ... */
//     $(window).scroll(function () {
//         /* Check the location of each desired element */
//         $('.hideme').each(function (i) {
//             var bottom_of_object = $(this).position().top + $(this).outerHeight() / 3.5;
//             var bottom_of_window = $(window).scrollTop() + $(window).height();
//             /* If the object is completely visible in the window, fade it it */
//             if (bottom_of_window > (bottom_of_object)) {
//                 // $(this).animate({'opacity':'1'},500);
//                 $(this).addClass("showme");
//             }
//         });
//     });
// });
//
// window.addEventListener('scroll', function () {
//     for (k = 0; k < hideme[k].length; k++) {
//         alert(hideme[k]);
//         var bottom_of_object = hideme[k].getBoundingClientRect() + hideme[k].offsetHeight;
//         var bottom_of_window = window.scrollTop + window.clientHeight;
//         if (bottom_of_window > bottom_of_object) {
//             this.classList.toggle("showme");
//
//         }
//         alert(hideme[k].getBoundingClientRect());
//
//     }
// });