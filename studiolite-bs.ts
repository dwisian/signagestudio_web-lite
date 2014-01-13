/// <reference path="../common/_tsdef/jquery.d.ts" />
/// <reference path="../common/_tsdef/backbone.d.ts" />
/// <reference path="../common/_tsdef/lib.d.ts" />
/// <reference path="../common/_tsdef/bootstrap.d.ts" />
/// <reference path="../common/_tsdef/underscore.d.ts" />
/// <reference path="./_model/MenuItemModel.ts" />
/// <reference path="./_view/MyMenuView.ts" />
/// <reference path="./_view/AnotherView.ts" />
/// <reference path="./AppRouter.ts" />

$(function () {
    var app_router = new AppRouter();
    Backbone.history.start();
    setTimeout(function () {
        $(window).trigger('resize');
    }, 50);
    // $('#app').animate({opacity: 1},1500);

    $('#closePanel').click(function () {
        $('#propPanel').fadeOut('50').animate({
            width: '0%'
        }, 1, function () {
            $('#mainPanelWrap').animate({
                width: '100%'
            }, 100)
        });
    });


    $('#openPanel').click(function () {

        var w:number = parseFloat($('body').css('width').replace('px', ''));
        if (w <= 768) {
            $('#closePanel').trigger('click');
            $('#myModal').modal('show');
            return false;
        }

        $('#mainPanelWrap').animate({
            width: '75%'
        }, 50, function () {
            $('#propPanel').animate({
                width: '25%'
            }, 100).fadeIn('10');
        });

        return false;

    });

    var h:number = parseFloat($('body').css('height').replace('px', ''));
    h = h - 115;
    $('#propPanel').height(h);
    $('#mainPanel').height(h);
    // $('#mainPanelWrap').height(h);

    console.log('init size' + h);

    $(window).resize(function () {

        var h:number = <any>$('body').css('height').replace('px', '');
        var w:number = <any>($('body').css('width').replace('px', ''));

        h = h - 115;

        if (w >= 1200) {
            console.log($('#propPanel').width());
            // alert($('#propPanel').width());
            if ($('#propPanel').width() < 50)
                $('#openPanel').trigger('click');

        }

        if (w <= 768) {
            h = h + 65;
            if ($('#propPanel').width() != 0) {
                console.log('Prop w: ' + $('#propPanel').width());
                $('#propPanel').fadeOut(1).animate({
                    width: '0%'
                }, 1, function () {
                    $('#mainPanelWrap').animate({
                        width: '100%'
                    }, 1)
                });
            }
        }

        console.log('resize ' + h);

        $('#propPanel').height(h);
        $('#mainPanel').height(h);
        $('#mainPanelWrap').height(h);

    });

});

