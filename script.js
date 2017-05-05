$( document ).ready(function() {
    new WOW().init();
    $("#myCarousel").carousel({interval: 3000});

    $(".item1").click(function () {
        $("#myCarousel").carousel(0);
    });
    $(".item2").click(function () {
        $("#myCarousel").carousel(1);
    });
    $(".item3").click(function () {
        $("#myCarousel").carousel(2);
    });
    $(".item4").click(function () {
        $("#myCarousel").carousel(3);
    });

    $(".left").click(function () {
        $("#myCarousel").carousel("prev");
    });
    $(".right").click(function () {
        $("#myCarousel").carousel("next");
    });
    $('#sign-up-button').unbind('click').bind('click', function () {
        var x = document.forms["signupForm"]["email"].value;
        var atpos = x.indexOf("@");
        var dotpos = x.lastIndexOf(".");
        if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
            alert("Nieprawidłowy adres e-mail");
            $('.users-email').val('');
            return false;
        } else
        {
            $('#game-handler').removeClass('hidden');
            $('#game-handler').addClass('game-handler-shown');
            $('.dimmer-shown').removeClass('hidden');
            setTimeout(function() {
                $('.users-email').val('');
            }, 1);
            return false;
        }
    });
    $('#gameLauncher').click(function () {
        $('#gameDiv').removeClass('hidden');
        $('#game-handler-h2').hide();
        $('#game-handler-p').hide();
        $('#gameLauncher').hide();
    });
    $('.hide-game').click(function() {
        $('#gameDiv').addClass('hidden');
        $('#game-handler').removeClass('game-handler-shown');
        $('#game-handler').addClass('hidden');
        $('.show-game-shown').removeClass('hidden');
        $('.dimmer-shown').addClass('hidden');
    });
    $('.show-game-shown').click(function() {
        $('#game-handler').removeClass('hidden');
        $('#gameDiv').removeClass('hidden');
        $('#game-handler').addClass('game-handler-shown');
        $('.show-game-shown').addClass('hidden');
        $('.dimmer-shown').removeClass('hidden');
    });
    $(window).on("scroll", function() {

        var currentPos = $(window).scrollTop();

        $('nav li a').each(function() {

            var sectionLink = $(this);
            var navHeight = $('.navbar-default').outerHeight() + 1;
            var section = $(sectionLink.attr('href'));

            if(section.position().top - navHeight  <= currentPos && sectionLink.offset().top + section.height()> currentPos) {
                $('nav li').removeClass('active');
                sectionLink.parent().addClass('active');
            } else {
                sectionLink.parent().removeClass('active');
            }
        });
    });
});