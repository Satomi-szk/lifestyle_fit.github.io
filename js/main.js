$(function () {
    /*=================================================
    ハンバーガーメニュー
    ===================================================*/
    $(".toggle_btn").on("click", function () {
        $("header").toggleClass("open");
    });

    $("nav").on("click", function () {
        $("header").toggleClass("open");
    });

});