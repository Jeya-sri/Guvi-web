$(document).ready(function() {

    $('#divformReg').hide();
    $("#divformLogin").show(100);

    // Load login and registration forms on click

    $('#regme').click(function(e) {
        console.log("Redirecting to Registration Page...");
        $('#divformLogin').hide(100);
        $("#divformReg").show(200);
    });
    $('#logme').click(function(e) {
        console.log("Redirecting to Login Page...");
        $('#divformReg').hide(100);
        $("#divformLogin").show(200);
    });
});