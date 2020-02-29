$('document').ready(function() {

    /* handle form validation */
    $("#formLogin").validate({
        rules: {
            logpass: {
                required: true
            },
            logemail: {
                required: true,
                email: true
            }
        },
        messages: {
            logpass: {
                required: "please provide a password",
                minlength: "password should at least have 8 characters"
            },
            logemail: "please enter a valid email address"
        },
        submitHandler: function(form, e) {

            var lemail = $("#logemail").val();
            var lpass = $("#logpass").val();

            console.log('Email : ', lemail, 'Pass : ', lpass);
            e.preventDefault();

            $.ajax({
                type: 'POST',
                url: 'php/login.php',
                data: {
                    email: lemail,
                    pass: lpass
                },
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
});