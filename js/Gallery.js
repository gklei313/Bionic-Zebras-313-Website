//Array of pictures
var Pictures = [
    "src/IMG_0001.jpg",
    "src/IMG_0002.jpg",
    "src/IMG_0003.jpg",
    "src/IMG_0004.jpg"
];

//Index of current picture
var CurrentPic = 8;

//Buffer with all pictures
var PicBuffer = "";

//Format divs and pics
for (i = 0; i < Pictures.length; i++) {
    PicBuffer += "<img src='" + Pictures[i] + "' width='100%' alt='' id='picture_" + i + "'></img>"
}

//Add new divs
document.getElementById("picture_frame").innerHTML = PicBuffer;


//Set next pic
function NextPic() {
    CurrentPic++
    if (CurrentPic >= Pictures.length) {
        CurrentPic = 0;
    }
    RefreshPics();
}

//Set previous pic
function PrevPic() {
    CurrentPic--
    if (CurrentPic < 0) {
        CurrentPic = Pictures.length - 1;
    }
    RefreshPics();
}

//Hide unused pictures and show current pic
function RefreshPics () {
    for (i = 0; i < Pictures.length; i++) {

        if ( i == CurrentPic ) {
        document.getElementById("picture_" + i).hidden = false;
        }
    
        else {
            document.getElementById("picture_" + i).hidden = true;
        }
    }
}

//Start
RefreshPics();

//Change pic every 4 secs
setInterval(NextPic, 4000);