// 제이쿼리
$(function () {
    // 헤더 - 메뉴 (공통)
    $('.main_menu').hover(
        function () {
            $('.sub_menu').stop().slideDown();
            $('.nav_bg_black').stop().slideDown();
        },
        function () {
            $('.sub_menu').stop().slideUp();
            $('.nav_bg_black').stop().slideUp();
        }
    )

    // 본인 js 작업
})



