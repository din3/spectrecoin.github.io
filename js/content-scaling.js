$(document).ready(function () {

    var w = $(window).width();
    var h = $(window).height();
    if (w > 1350) {
        var x = w / 1350;
        document.getElementById("page-nav").style.transform = "scale(" + x + "," + x + ")";
        document.getElementById("page-wrap").style.transform = "scale(" + x + "," + x + ")";
    }

    if ((w < 1350) && (w > 799)) {
//        var x = w / 1150;
        var ha = h - 130;
        var x = ha / 500;
        document.getElementById("main").style.transform = "scale(" + x + "," + x + ")";
    }

});