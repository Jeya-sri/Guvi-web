$(document).ready(function() {

    // $("#conme").load("login.html");

    $('#regme').click(function(e) {
        console.log("Here...");
        $("#conme").load("register.html");
    });
    $('#logme').click(function(e) {
        console.log("Here...");
        $("#conme").load("login.html");
    });


});