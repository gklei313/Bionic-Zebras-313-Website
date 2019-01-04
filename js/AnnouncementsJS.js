//Announcements 
class Announcement {
    constructor(heading, date, details) {
        this.heading = heading
        this.date = date
        this.details = details
    }
}

var Announcements = [
    new Announcement("Beat up dipaNKAR", "June 15, 2019", "Free for where every one jumps dipankar immediatly after graduation. Seniors Only."),
    new Announcement("Kick off", "January 5, 2019", "Meet at chums and go to kick off event. bring your papers credit card as well as 3 numbers in the back."),
    new Announcement("Yeetus Deleetus", "January 43, 5665", "jefdhioigshoyiusaffhgiuo oirugoise hpodr gtuposeriuut repoiuoiue iuoi euoi tueor tre."),
    new Announcement("National Weed Day", "April 20, 2019", "4/20, also known as the dankest day of the year")
];

var announcements_buffer = "";

for (i = 0; i < Announcements.length; i++) {
    announcements_buffer += "<div class='card'><div class='row'><div class'col' id='main'><h5>" + Announcements[i].date + "</h5></div><div class'col' id='side'><h4>" + Announcements[i].heading+ "</h4><br>" + Announcements[i].details + "</div></div></div>"
}

document.getElementById("display_announcements").innerHTML = announcements_buffer;