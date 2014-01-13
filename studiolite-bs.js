/// <reference path="../common/_tsdef/jquery.d.ts" />
/// <reference path="../common/_tsdef/backbone.d.ts" />
/// <reference path="../common/_tsdef/lib.d.ts" />
/// <reference path="../common/_tsdef/bootstrap.d.ts" />
/// <reference path="../common/_tsdef/underscore.d.ts" />
/// <reference path="./_model/MenuItemModel.ts" />
/// <reference path="./_view/MyMenuView.ts" />
/// <reference path="./_view/AnotherView.ts" />
/// <reference path="./AppRouter.ts" />
var wB = 0;
$(function () {
    var app_router = new AppRouter();
    Backbone.history.start();
    setTimeout(function () {
        $(window).trigger('resize');
    }, 50);

    // $('#app').animate({opacity: 1},1500);
    $('#closePanel').click(function () {
        $('#propPanel').fadeOut(function () {
            $('#propPanel').addClass('hidden-sm hidden-md');
            $('#mainPanelWrap').removeClass('col-sm-9 col-md-9');
            $('#mainPanelWrap').addClass('col-md-12');
        });
    });

    $('#openPanel').click(function () {
        $('#mainPanelWrap').addClass('col-sm-9 col-md-9');
        setTimeout(function () {
            $('#mainPanelWrap').removeClass('col-md-12');
            $('#propPanel').children().hide();
            $('#propPanel').removeClass('hidden-sm hidden-md');
            $('#propPanel').children().fadeIn();
        }, 500);

        return;

        var w = parseFloat($('body').css('width').replace('px', ''));
        if (w <= 768) {
            // $('#closePanel').trigger('click');
            $('#myModal').modal('show');
            return false;
        }

        return false;
    });

    var h = parseFloat($('body').css('height').replace('px', ''));
    h = h - 115;
    $('#propPanel').height(h);
    $('#mainPanel').height(h);

    // $('#mainPanelWrap').height(h);
    console.log('init size' + h);

    $(window).resize(function () {
        $('#mainPanelWrap').removeClass('animateDivs');
        $('#propPanel').removeClass('animateDivs');

        var h = $('body').css('height').replace('px', '');
        var w = ($('body').css('width').replace('px', ''));

        h = h - 115;

        /*if (w >= 1200) {
        console.log($('#propPanel').width());
        // alert($('#propPanel').width());
        if ($('#propPanel').width() < 50)
        $('#openPanel').trigger('click');
        } */
        // fixed footer
        if (w <= 768) {
            h = h + 65;
        }

        /*if (w >= 1200) {
        $('#mainPanelWrap').width('66.68%');
        $('#propPanel').width('16.66%');
        $('#mainNav').width('16.66%');
        } */
        /*if (w <= 768) {
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
        */
        console.log('resize ' + h);

        $('#propPanel').height(h);
        $('#mainPanel').height(h);
        $('#mainPanelWrap').height(h);
    });
});
//# sourceMappingURL=studiolite-bs.js.map
