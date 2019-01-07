//Scroll animation
$(".content-link").click(function () {
    $('html,body').animate({
        scrollTop: $(this.hash).offset().top
    }, 400);
    setTimeout(hidebar, 2000);
});

//Hide navbar on scroll down
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-110px";
    }
    prevScrollpos = currentScrollPos;
}

function hidebar () {
    document.getElementById("navbar").style.top = "-110px";
}


