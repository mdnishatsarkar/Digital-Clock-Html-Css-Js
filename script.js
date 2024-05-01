
// Collecting ids from HTML page
const day = document.getElementById("day");
const period = document.getElementById("period");
const hour = document.getElementById("hours");
const minute = document.getElementById("minutes");
const second = document.getElementById("second");

const date = document.getElementById("date");
const Month = document.getElementById("Month");
const year = document.getElementById("year");
const messege = document.getElementById("messege");


const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const minutes = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60"]
const seconds = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60"]

function updateClock() {

    let now = new Date();

    let d = days[now.getDay()]
    let h = now.getHours()
    let m = minutes[now.getMinutes()]
    let s = seconds[now.getSeconds()]

    let pe = 'AM';
    if (h >= 12) {
        pe = 'PM';
        h = h - 12;
    } if (h == 0) {
        h = 12;
    }

    let da = now.getDate()
    let mo = months[now.getMonth()]
    let ye = now.getFullYear()

    day.innerHTML = d
    hour.innerHTML = h
    minute.innerHTML = m
    second.innerHTML = s

    date.innerText = da
    Month.innerText = mo
    year.innerText = ye
    period.innerHTML = pe

    if (pe == 'AM' && h >= 5 && h <= 12) {
        messege.innerHTML = "Good Morning!"
    } if (pe == 'PM' && h >= 1 && h < 6) {
        messege.innerHTML = "Good Afternoon!"
    } if (pe == 'PM' && h == 6){
        messege.innerHTML = "Good Evening!"
    } if ((pe == 'PM' && h > 6) || (pe == 'AM' && h < 5)) {
        messege.innerHTML = "Good Night!"
    }

}

setInterval(updateClock, 1000);
updateClock();