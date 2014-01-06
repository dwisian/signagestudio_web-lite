/// <reference path="../../common/_ts/jquery.d.ts" />
console.log('zzzzzzzzzzzzzzzzzaaaa');

var AnotherView = (function () {
    function AnotherView() {
        var a = 1;
        $('a').click(function (e) {
            alert('clicked');
        });
    }
    AnotherView.prototype.showView = function () {
        // alert('another view');
        console.log('aaaa');
        console.log('aaaa');
        console.log('aaaa');
        console.log('aaaa');
        console.log('aaaa');
        console.log('aaaa');
        console.log('aaaa');
        console.log('aaaa');
        console.log('aaaa');
    };
    return AnotherView;
})();
//# sourceMappingURL=AnotherView.js.map
