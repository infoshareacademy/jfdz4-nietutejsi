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
    $('#sign-up-button').click(function () {
        var x = document.forms["signupForm"]["email"].value;
        var atpos = x.indexOf("@");
        var dotpos = x.lastIndexOf(".");
        if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
            alert("Nieprawidłowy adres e-mail");
            // FIXME remove double check on click
        } else
        {
            $('#game-handler').removeClass('game-handler-hidden');
            $('#game-handler').addClass('game-handler-shown');
            $('.dimmer-shown').removeClass('dimmer-hidden');
            setTimeout(function() {
                $('.users-email').val('');
            }, 1);
            return false;
        }
    });
    $('.hide-game').click(function() {
        $('#game-handler').removeClass('game-handler-shown');
        $('#game-handler').addClass('game-handler-hidden');
        $('.show-game-shown').removeClass('show-game-hidden');
        $('.dimmer-shown').addClass('dimmer-hidden');
    });
    $('.show-game-shown').click(function() {
        $('#game-handler').removeClass('game-handler-hidden');
        $('#game-handler').addClass('game-handler-shown');
        $('.show-game-shown').addClass('show-game-hidden');
        $('.dimmer-shown').removeClass('dimmer-hidden');
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