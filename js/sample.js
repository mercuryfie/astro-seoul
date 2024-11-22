/// 제이쿼리

$(function () {
    // 메뉴
    $('.mainmenu').hover(
        function () { $('.submenu').stop().slideDown() },
        function () { $('.submenu').stop().slideUp() }
    )

    // 슬라이드 - 가로로 이미지 자동슬라이드
    setInterval(function () {
        $('.slider_list').delay(1000).animate({ marginLeft: '-100vw' }, 2000),
            $('.slider_list').delay(1000).animate({ marginLeft: '-200vw' }, 2000),
            $('.slider_list').delay(1000).animate({ marginLeft: '0vw' }, 2000)
    }, 2000)

    // 아이콘 - 이전/다음 버튼 누르면 이미지 넘어감
    $('.next').click(function () {
        $('.icon_list>ul>li:eq(0)').appendTo('.icon_list>ul');
    })

    $('.prev').click(function () {
        $('.icon_list>ul>li:eq(9)').prependTo('.icon_list>ul');
    })

    // 탭메뉴 - 탭메뉴
    $('.tapmenu>ul>li').on('click', function () {
        $(this).addClass('active').siblings('li').removeClass();
    })

    //갤러리 이미지 - 플러그인사용, 
    $('.swiper-slide>p').hover(
        function () { $(this).css('color', 'red') },
        function () { $(this).css('color', 'black') }
    )

    // 페이드 배너 
    $('.fade_banner>ul>li:gt(0)').hide();
    setInterval(function () {
        $('.fade_banner>ul>li:first').fadeOut(2000).next('li').fadeIn(2000)
            .end().appendTo('.fade_banner>ul');
    }, 3000)

    // 호버 배너
    $('.hover_banner').hover(
        function () { $('.box_hide').animate({ marginTop: '-170px' }), 1000 },
        function () { $('.box_hide').animate({ marginTop: '0px' }), 1000 }
    )

    // 라인배너
    setInterval(function () {
        $('.line_bn>ul').delay(1000).animate({ marginTop: '-155px' }, 2000),
            $('.line_bn>ul').delay(1000).animate({ marginTop: '0px' }, 2000)
    }, 2000)

    // 모달창
    $('.notice>ul>li:first').on('click', function () {
        $('#black').show();
        $('.button').click(function () {
            $('#black').fadeOut();
        })
    })
})


// 자바스크립트

// a link 클릭 시 href 이동 방지용 
$("a").click(function (e) {
    e.preventDefault();
});

$("#top").click(function () {
    $('html, body').animate({ scrollTop: 0 })

})


// Swiper 플러그인

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    grid: {
        rows: 2,
    },
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    }
});