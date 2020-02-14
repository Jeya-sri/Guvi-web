$('document').ready(function() {
    console.log('validate');
    $("form[name='reg-form']").validate({

        rules: {
            name: {
                required: true,
                minlength: 3
            },
            pass: {
                required: true,
                minlength: 8,
                maxlength: 15
            },
            repass: {
                required: true,
                equalTo: '#pass'
            },
            email: {
                required: true,
                email: true
            },
            phone: {
                required: true,
                minlength: 10,
                maxlength: 10
            },
            gender: {
                required: true
            },
            dob: {
                required: true
            }
        },
        messages: {
            name: "please enter your name",
            pass: {
                required: "please provide a password",
                minlength: "password should at least have 8 characters"
            },
            email: "please enter a valid email address",
            phone: {
                required: "please enter your phone number",
                minlength: "phone number should contain 10 digits"
            },
            gender: "please select your gender",
            dob: "please enter your date of birth",
            password: {
                required: "please retype your password",
                equalTo: "password doesn't match !"
            }
        },
        submitHandler: submitForm
    });
    /* handle form submit */
    function submitForm() {
        console.log('submitted');
        var data = $("#regform").serialize();
        console.log(data);
        $.ajax({
            type: 'POST',
            url: 'signup.php',
            data: data,
            beforeSend: function() {
                $("#error").fadeOut();
                $("#btn-submit").html(' Creating ...');
            },
            success: function(response) {
                if (response == 1) {
                    $("#error").fadeIn(1000, function() {
                        $("#error").html('<div class="alert alert-danger">  Sorry email already taken !</div>');
                        $("#btn-submit").html('Register');
                    });
                } else {
                    $("#btn-submit").html('<img src="img/loader.gif" />   Signing Up ...');
                    console.log('Done Register');
                    setTimeout('window.location.href = "inde.html" ', 2000);
                }
            }
        });
        return false;
    }
});



function getAge() {
    var dob = document.getElementById('dob').value;
    dob = new Date(dob);
    var today = new Date();
    var age = Math.floor((today - dob) / (365.25 * 24 * 60 * 60 * 1000));
    document.getElementById('age').value = age;
}