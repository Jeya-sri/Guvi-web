$(document).ready(function() {

    $("#conme").load("login.html");

    $('#regme').click(function(e) {
        console.log("Here...");
        $("#conme").load("register.html");
    });
    $('#logme').click(function(e) {
        console.log("Here...");
        $("#conme").load("login.html");
    });

    $("#btnLogin").click(function(event) {

        //Fetch form to apply custom Bootstrap validation
        var form = $("#formLogin")

        if (form[0].checkValidity() === false) {
            event.preventDefault()
            event.stopPropagation()
        }

        form.addClass('was-validated');
    });
});