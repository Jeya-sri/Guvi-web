$('document').ready(function() {
    $("#formReg").validate({

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
        submitHandler: function(form, e) {
            e.preventDefault();
            console.log('submitted !');

            var name = $('#name').val();
            var email = $('#email').val();
            var pass = $('#pass').val();
            var phone = $('#phone').val();
            var gender = $('#gender').val();
            var dob = $('#dob').val();
            var age = $('#age').val();
            var college = $('#college').val();
            var dept = $('#dept').val();
            var aoi = $('#ai').val();


            // Load Values
            var formData = {

                [name]: {
                    Name: name,
                    email: email,
                    phone: phone,
                    pass: pass,
                    gender: gender,
                    dob: dob,
                    age: age,
                    college: college,
                    Dept: dept,
                    Area: aoi
                }
            };

            console.log(formData);

            // Get Json
            $.getJSON("php/Users.json",
                function(data) {

                    var newData = formData;
                    $.extend(true, data, newData);
                    console.log("All Data", data);

                    var strData = JSON.stringify(data); //Stringify json to post 
                    jQuery.post("php/updatejson.php", { data: strData });

                }
            );

            $.ajax({
                url: 'php/signup.php',
                type: 'POST',
                data: formData,
                crossDomain: true,
                beforeSend: function() {
                    $("#error").fadeOut();
                    $("#btn-submit").html(' Creating ...');
                },
                success: function(response) {
                    console.log('Posted data : ', data);
                    if (response == 1) {
                        $("#error").fadeIn(1000, function() {
                            $("#error").html('<div class="alert alert-danger">  Sorry email already taken !</div>');
                            $("#btn-submit").html('Register');
                        });
                    } else {
                        $("#btn-submit").html('<img src="img/loader.gif" />   Signing Up ...');
                        console.log('Done Register');
                        setTimeout('window.location.href = "index.html" ', 2000);
                    }
                }
            });
            return false;
        }
    });


});

function getAge() {
    var dob = document.getElementById('dob').value;
    dob = new Date(dob);
    var today = new Date();
    var age = Math.floor((today - dob) / (365.25 * 24 * 60 * 60 * 1000));
    document.getElementById('age').value = age;
}