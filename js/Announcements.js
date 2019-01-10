//Announcements class
class Announcement {
    constructor(heading, date, details) {
        this.heading = heading
        this.date = date
        this.details = details
    }
}

//Array of announcement instances
var Announcements = [
    new Announcement("Build Hours", "Sat 11:00-4:00pm", "Build team please come to robotics club on theses days."),
    new Announcement("Bag Day", "February 19, 2019", "The day construction on the robot must stop and be in a bag.")
];

//Buffer with all announcement
var announcements_buffer = "";

//Format announcements divs
for (i = 0; i < Announcements.length; i++) {
    announcements_buffer += "<div class='row'><div class'col' id='main'><h5>" + Announcements[i].date + "</h5></div><div class'col' id='side'><h4>" + Announcements[i].heading+ "</h4><br>" + Announcements[i].details + "</div></div>"
}

document.getElementById("display_announcements").innerHTML = announcements_buffer;