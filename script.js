document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("game").onclick = function () {
        alert('This is the github version you dont get any games sadly.')
    };
    document.getElementById("readme").onclick = function () {
        location.href = "readme/run.html"; // Redirects to the readme page
    };
    document.getElementById("about").onclick = function () {
        location.href = "about/run.html"; // Redirects to the about page
    };
    document.getElementById("contact").onclick = function () {
        location.href = "contact/run.html"; // Redirects to the contact page
    };
    document.getElementById("changelogs").onclick = function () {
        location.href = "changelogs/run.html"; // Redirects to the changelogs page
    };
    document.getElementById("gameOG").onclick = function () {
alert('ya dont get this either');
    };
    document.getElementById("status").onclick = function () {
        location.href = "./status/status"; // Redirects to the legacy path
    };
        document.getElementById("Github").onclick = function () {
        alert('You got this from github so youll not get any games because thats how it works you only get the status readme contact and about go to the contact section contact me and ill send the real version'); // Redirects to the legacy path
    };
});
