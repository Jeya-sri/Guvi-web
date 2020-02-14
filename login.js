$('document').ready(function() {

    /* handle form validation */
    $("#formLogin").validate({
        rules: {
            password: {
                required: true
            },
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            password: {
                required: "please provide a password",
                minlength: "password should at least have 8 characters"
            },
            email: "please enter a valid email address"
        },
        submitHandler: submitForm
    });
    /* handle form submit */
    function submitForm() {
        var data = $("#formLogin").serialize();
        $.ajax({
            type: 'POST',
            url: 'login.php',
            data: data,
            beforeSend: function() {
                $("#error").fadeOut();
                $("#btnLogin").html('sending ...');
            },
            success: function(response) {
                if (response == 2) {
                    $("#error").fadeIn(1000, function() {
                        $("#error").html('<div class="alert alert-danger"> <span class="glyphicon glyphicon-info-sign"></span>email or password does not exist.</div>');
                        $("#btnLogin").html('Sign In');
                    });
                } else {

                    $("#btnLogin").html('<img src="img/loader.gif" />   Signing In ...');
                    setTimeout(' window.location.href = "home.html"; ', 4000);
                }
            }
        });
        return false;
    }


});