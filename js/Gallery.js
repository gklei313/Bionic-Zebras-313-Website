var Pictures = [
    "src/buildseason2018.jpg",
    "src/IMG_4220.JPG",
    "src/IMG_5000.JPG",
    "src/IMG_5175.JPG"
];

var CurrentPic = 0;

function NextPic() {
    CurrentPic++
    if (CurrentPic >= Pictures.length) {
        CurrentPic = 0;
    }
    document.getElementById("gallery_picture").src = Pictures[CurrentPic];
}

function PrevPic() {
    CurrentPic--
    if (CurrentPic < 0) {
        CurrentPic = Pictures.length - 1;
    }
    document.getElementById("gallery_picture").src = Pictures[CurrentPic];
}

setInterval( NextPic, 4000 );
