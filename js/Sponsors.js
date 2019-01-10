//Array of sponsor logos
var Sponsors = [
    "src/logos/Dadara_logo.png",
    "src/logos/FIRSTinMichigan.png",
    "src/logos/WWCSD_logo.png",
    "src/logos/GMS_logo.png",
    "src/logos/Powerstroke_logo.png",
    "src/logos/Icon_logo.png",
    "src/logos/WayneRotary_logo.png",
    "src/logos/Pakman_logo.png",
    "src/logos/Faro_logo.png",
    "src/logos/Derm_logo.png"
];

var SponsorBuffer = "";

for (i = 0; i < Sponsors.length; i++) {

    if (i % 2 == 0) {
        SponsorBuffer += "<div class='row' id='group'><div class='col'><div class='card' id='sponsor'><img src='" + Sponsors[i] + "'alt='link'></div></div>";
    } 
    else if ( Sponsors.length % 2 == 1 && i == Sponsors.length -1) {
        SponsorBuffer += "<div class='col'><div class='card' id='sponsor'><img src='" + Sponsors[i] + "'alt='link'></div></div>";
    }
    else {
        SponsorBuffer += "<div class='col'><div class='card' id='sponsor'><img src='" + Sponsors[i] + "'alt='link'></div></div></div>";
    }
}

document.getElementById("SponsorGrid").innerHTML = SponsorBuffer;