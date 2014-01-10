/// <reference path="../common/_tsdef/jquery.d.ts" />
/// <reference path="../common/_tsdef/backbone.d.ts" />
/// <reference path="../common/_tsdef/lib.d.ts" />
/// <reference path="../common/_tsdef/bootstrap.d.ts" />
/// <reference path="./_model/MenuItemModel.ts" />
/// <reference path="./_view/MyMenuView.ts" />
/// <reference path="./_view/AnotherView.ts" />
/// <reference path="./AppRouter.ts" />

$(function () {
    var app_router = new AppRouter();
    Backbone.history.start();
    setTimeout(function(){
        $(window).trigger('resize');
    },50);
    // $('#app').animate({opacity: 1},1500);

    $('#closePanel').click(function(){
        $('#propPanel').fadeOut('50').animate({
            width: '0%'
        },1,function(){
            $('#mainPanelWrap').animate({
                width: '100%'
            },100)
        });

    });

    $('#openPanel').click(function(){

        var w:number = parseFloat($('body').css('width').replace('px', ''));
        if (w<=768){
            $('#closePanel').trigger('click');
            $('#myModal').modal('show');
            return false;
        }

        $('#mainPanelWrap').animate({
            width: '75%'
        },50,function(){
            $('#propPanel').animate({
                width: '25%'
            },100).fadeIn('10');
        });

        return false;

    });

    //$('#propPanel').fadeOut().removeClass('col-md-3');
    // $('#propPanel').fadeOut();
    // $('#mainPanel').removeClass('col-md-12').addClass('col-md-9');
    // $('#propPanel').fadeIn().addClass('col-md-3');

    var h:number = parseFloat($('body').css('height').replace('px', ''));
    h = h - 115;
    // $('#wrap').height(h);
    $('#propPanel').height(h);
    $('#mainPanel').height(h);
    // $('#mainPanelWrap').height(h);

    console.log('init size'+h);

    $(window).resize(function () {
        var h:number = parseFloat($('body').css('height').replace('px', ''));
        var w:number = parseFloat($('body').css('width').replace('px', ''));
        h = h - 115;

        if (w<=768){
            if ($('#propPanel').width()!=0){
                console.log('Prop w: '+$('#propPanel').width());
                // $('#closePanel').trigger('click');
                // $('#propPanel').fadeOut('1').width('0%');
                // $('#mainPanelWrap').width('100%');

                $('#propPanel').fadeOut(1).animate({
                    width: '0%'
                },1,function(){
                    $('#mainPanelWrap').animate({
                        width: '100%'
                    },1)
                });
            }
        }

        console.log('resize '+h);

        $('#propPanel').height(h);
        $('#mainPanel').height(h);



    });

});

