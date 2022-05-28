var inputEnglish = document.getElementById("english");
inputEnglish.addEventListener('click', function() {
    document.title = "Save the sea";
    document.getElementById("toph").innerHTML = "You eat this much plastic every <i>year</i>";
    document.getElementById("bottomh").innerHTML = "<strong>Plastic pollution is real</strong>";
    document.getElementById("dropdownl").innerHTML = "Translate";
    document.getElementById("english").innerHTML = "English"
    document.getElementById("finnish").innerHTML = "Finnish"
    document.getElementById("dropdown").checked = false;
});

var inputFinnish = document.getElementById("finnish");
inputFinnish.addEventListener('click', function() {
    document.title = "Pelasta meri";
    document.getElementById("toph").innerHTML = "Syöt näin paljon muovia joka <i>vuosi</i>";
    document.getElementById("bottomh").innerHTML = "<strong>Muovisaaste ei ole vitsi</strong>";
    document.getElementById("dropdownl").innerHTML = "Käännä";
    document.getElementById("english").innerHTML = "Englanti"
    document.getElementById("finnish").innerHTML = "Suomi"
    document.getElementById("dropdown").checked = false;
});

window.onload = function() {
    let event = new Event('click');
    inputFinnish.dispatchEvent(event);
}
