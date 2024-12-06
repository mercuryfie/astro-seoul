// pc, mobile 스크립트입니다.

// 탑버튼 (공통)
$("#top").click(function () {
    $('html, body').animate({ scrollTop: 0 })

})

// ============================== 헤더 (공통) ============================== 
// pc/mobile 화면 크기 변경 시 현재 메뉴 상태를 강제 초기화, 새로고침 없이도 동적으로 메뉴를 전환하려고 했으나 적용이 되지 않는 문제로
// 새로고침을 해야 메뉴가 작동하는 문제가 있습니다. 참고해주세요 ㅠㅠ

$(function () {
    let isPcScriptActive = false;

    // Body 스크롤 비활성화
    function disableBodyScroll() {
        $('body').css({
            overflow: 'hidden',
            position: 'fixed',
            width: '100%'
        });
    }

    // Body 스크롤 활성화
    function enableBodyScroll() {
        $('body').css({
            overflow: '',
            position: '',
            width: ''
        });
    }

    // PC 메뉴 - hover로 sub_menu 표시
    function enablePcMenu() {
        if (window.matchMedia('(max-width: 600px)').matches) return; // 모바일일 때는 실행하지 않음
        $('.main_menu').hover(
            function () {
                $('.sub_menu').stop().slideDown();
                $('.nav_bg_black').stop().slideDown();
            },
            function () {
                $('.sub_menu').stop().slideUp();
                $('.nav_bg_black').stop().slideUp();
            }
        );
    }

    // 모바일 메뉴 - 클릭으로 sub_menu 표시
    function enableMobileMenu() {
        if (!window.matchMedia('(max-width: 600px)').matches) return; // PC일 때는 실행하지 않음
        $('.main_menu > li > a').off('click').on('click', function (e) {
            e.preventDefault();
            const $submenu = $(this).siblings('.sub_menu');
            const isOpen = $submenu.is(':visible');

            // 모든 서브메뉴 닫기
            $('.sub_menu').slideUp();
            $('.main_menu > li').removeClass('active');

            // 클릭한 메뉴 열기
            if (!isOpen) {
                $submenu.stop().slideDown();
                $(this).parent().addClass('active');
                disableBodyScroll(); // Body 스크롤 비활성화
            } else {
                enableBodyScroll(); // Body 스크롤 활성화
            }
        });

        // 모바일 메뉴 버튼 클릭 시 전체 메뉴 열기/닫기
        $('.nav_mobile_btn').off('click').on('click', function () {
            $('.top_wrap').toggleClass('active');

            if ($('.top_wrap').hasClass('active')) {
                disableBodyScroll(); // Body 스크롤 비활성화
            } else {
                enableBodyScroll(); // Body 스크롤 활성화
            }
        });
    }

    // PC/모바일 메뉴 활성화 토글
    function toggleMenuScript() {
        if (window.matchMedia('(max-width: 600px)').matches) {
            // 모바일 버전 활성화
            enableMobileMenu();
            disableScrollScript();
            resetStyles(); // 상태 초기화
            $('.sub_menu, .nav_bg_black').stop().slideUp();
        } else {
            // PC 버전 활성화
            enablePcMenu();
            enableScrollScript();
            resetStyles(); // 상태 초기화
            $('.sub_menu, .nav_bg_black').stop().slideUp();
            $('.top_wrap').removeClass('active'); // 모바일 메뉴 열림 상태 초기화
            enableBodyScroll(); // PC에서는 Body 스크롤 활성화
        }
    }

    // PC 스크롤 이벤트 활성화
    function enableScrollScript() {
        if (isPcScriptActive) return; // 이미 활성화된 경우 중복 실행 방지
        isPcScriptActive = true;

        $(window).on('scroll.pcScroll', function () {
            const pageY = $(window).scrollTop();

            if (pageY >= 600 && pageY <= 3300) {
                $('header').addClass('active');
                $('#header').addClass('active_h');
                $('.logo').css('margin', '0 auto');
                $('.logo img').css('width', '80%');
                $('.main_menu>li>a').css('padding', '10px 40px 10px 0');
            } else if (pageY <= 80) {
                $('header').removeClass('active');
                $('#header').removeClass('active_h');
                $('.logo').css('margin', '30px auto');
                $('.logo img').css('width', '100%');
                $('.main_menu>li>a').css('padding', '10px 65px 10px 0');
            }
        });
    }

    // PC 스크롤 이벤트 비활성화
    function disableScrollScript() {
        if (!isPcScriptActive) return; // 이미 비활성화된 경우 중복 실행 방지
        isPcScriptActive = false;

        $(window).off('scroll.pcScroll'); // 스크롤 이벤트 제거
        resetStyles(); // 초기 스타일 복구
    }

    // 초기 스타일 복구
    function resetStyles() {
        $('header').removeClass('active');
        $('#header').removeClass('active_h');
        $('.logo').css('margin', '');
        $('.logo img').css('width', '');
        $('.main_menu>li>a').css('padding', '');
    }

    // 화면 크기 변경 감지 및 초기화
    function onResize() {
        toggleMenuScript(); // 메뉴 스크립트 토글
    }

    // 초기 실행
    toggleMenuScript();

    // 화면 크기 변경 감지
    $(window).on('resize', onResize);

    // 초기 상태 강제 업데이트
    setTimeout(() => {
        onResize(); // DOM 준비 후 즉시 적용
    }, 100);
});


// ============================== 메인 (본인 js) ============================== 

// 첫번째 배너 스크롤 텍스트
// 페이지 로드 시 텍스트 순차적으로 나타나는 효과
document.addEventListener('DOMContentLoaded', () => {
    const fadeElements = document.querySelectorAll('.fade-in'); // `.fade-in` 클래스 선택

    fadeElements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add('show'); // `.show` 클래스 추가
        }, index * 500); // 500ms 간격으로 순차 애니메이션 실행
    });
});

// 스크롤 이벤트로 애니메이션 효과 적용
window.addEventListener('scroll', () => {
    const sections = document.querySelector('.section1'); // `.section` 섹션 가져오기
    const title = sections.querySelector('.section1_text'); // `.section1_text` 요소 가져오기
    const circle = sections.querySelector('.circle'); // `.circle` 요소 가져오기
    const square1 = sections.querySelector('.square1'); // `.square` 요소 가져오기
    const circle2 = sections.querySelector('.circle2'); // 새로운 `.circle2`

    const scrolled = window.scrollY; // 현재 스크롤 위치 가져오기
    const scaleFactor = Math.max(Math.min(scrolled * 0.01, 5), 1); // 최소 1배, 최대 5배

    // `.section1_text` 크기 조정 (최소 크기 1, 최대 크기 1.5로 제한)
    title.style.transform = `scale(${scaleFactor})`;

    // `.circle`과 `.square` 이동 (스크롤에 따라 변화)
    circle.style.transform = `translate(${Math.min(scrolled, 500)}px, ${Math.min(scrolled, 500)}px)`; // 이동 범위 제한
    square1.style.transform = `translate(${Math.max(-scrolled * 0.5, -150)}px, ${Math.min(scrolled * 0.5, 150)}px)`; // 이동 범위 제한
    // `.circle2` 대각선 위로 이동
    circle2.style.transform = `translate(${Math.min(scrolled, 200)}px, ${Math.max(-scrolled * 0.8, -200)}px)`;

});

//두번째 배너 스크롤 텍스트
document.addEventListener("scroll", function () {
    const scrollPosition = window.scrollY; // Current scroll position
    const target = document.querySelector(".text_wrap2 .section2_text");

    if (scrollPosition >= 600) {
        target.classList.add("visible");
    }
    else if (scrollPosition >= 500) {
        target.classList.remove("visible");
    }
});


// 메인콘텐츠
// 메인콘텐츠 - 프로그램 목록
// 스크롤내리면 내용 나타나기
document.addEventListener("scroll", function () {
    const scrollPosition = window.scrollY;
    const target1 = document.querySelector(".program_wrap");
    const target2 = document.querySelector(".btn");


    if (scrollPosition >= 800) {
        target1.classList.add("visible");
        target2.classList.add("visible");
    }
    else if (scrollPosition >= 500) {
        target1.classList.remove("visible");
        target2.classList.remove("visible");
    }
});

// 메인콘텐츠 - 우주 이야기
// 탭메뉴
document.querySelectorAll('.news_list > ul > li').forEach((item) => {
    const list = item.querySelector('.list');
    const content = item.querySelector('.news_content');

    list.addEventListener('click', () => {
        // 모든 내용을 숨기기
        document.querySelectorAll('.news_content').forEach((content) => {
            content.style.display = 'none';
        });
        document.querySelectorAll('.news_list > ul > li').forEach((li) => {
            li.classList.remove('active');
        });
        // 현재 클릭한 아이템의 내용 표시
        content.style.display = 'block';
        item.classList.add('active');
    });
});

//캘린더
$(function () {
    const calendarDates = document.getElementById("calendarDates");
    const currentMonthElement = document.getElementById("currentMonth");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    const today = new Date();
    let currentMonth = today.getMonth();
    let currentYear = today.getFullYear();

    function renderCalendar() {
        const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
        const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
        const startDayOfWeek = firstDayOfMonth.getDay();
        currentMonthElement.textContent = `${currentYear}년 ${currentMonth + 1}월`;

        calendarDates.innerHTML = "";

        for (let i = 0; i < startDayOfWeek; i++) {
            const emptyDate = document.createElement("div");
            emptyDate.classList.add("date", "empty");
            calendarDates.appendChild(emptyDate);
        }

        for (let i = 1; i <= daysInMonth; i++) {
            const dateElement = document.createElement("div");
            dateElement.classList.add("date");
            dateElement.textContent = i;
            calendarDates.appendChild(dateElement);
        }
    }

    renderCalendar();

    prevBtn.addEventListener("click", () => {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
        renderCalendar();
    });

    nextBtn.addEventListener("click", () => {
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        renderCalendar();
    });

    $('.date').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
    })
})


