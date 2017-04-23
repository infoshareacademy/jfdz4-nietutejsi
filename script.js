// function validateEmail() {
//     var x = document.forms["signupForm"]["email"].value;
//     var atpos = x.indexOf("@");
//     var dotpos = x.lastIndexOf(".");
//     if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
//         alert("Nieprawidłowy adres e-mail");
//         return false;
//     }
// }
//
// function checkTerms() {
//     if(document.signupForm.agreement.checked)
//     {
//         document.signupForm.submitemail.disabled=false;
//     }
//     else
//     {
//         document.signupForm.submitemail.disabled=true;
//         alert("Brak wyrażenia zgody");
//     }
// }
//
// function enableSubmit() {
//     document.signupForm.submitemail.disabled = false
// }
$( document ).ready(function() {
$('#sign-up-button').click(function () {
    var x = document.forms["signupForm"]["email"].value;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
        alert("Nieprawidłowy adres e-mail");
    } else if(document.signupForm.agreement.checked)
    {
        $('.users-email').val('');
        $('#game-handler').removeClass('game-handler-hidden');
        $('#game-handler').addClass('game-handler-shown');
        return false;
    }
    else
    {
        document.signupForm.submitemail.disabled=true;
        alert("Brak wyrażenia zgody");
    }
});
});