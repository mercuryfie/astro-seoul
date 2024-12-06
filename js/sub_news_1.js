// 제이쿼리 1
$(function () {

    // 본인 js 작업
    $('.number-1').css('font-size','28px')

    $('.number-1').each(function () {
        $(this).prop('Counter', 0).animate({
          Counter: 138
        }, {
          duration: 2000,
          easing: 'swing',
          step: function (now) {
            $(this).text(Math.ceil(now));
          },
          complete: function() {
            $(this).text('138');
          }
        });
      });

      $('.number-2').each(function () {
        $(this).prop('Counter', 0).animate({
          Counter: 243
        }, {
          duration: 2000,
          easing: 'swing',
          step: function (now) {
            $(this).text(Math.ceil(now));
          },
          complete: function() {
            $(this).text('243');
          }
        });
      });
       
  

      $('.second-box-text').css('display','block')
    })
      
       

// 제이쿼리 2
$(function () {

  // 본인 js 작업
  $('.number-1').css('font-size','1em')

  $('.number-1').each(function () {
      $(this).prop('Counter', 0).animate({
        Counter: 138
      }, {
        duration: 2000,
        easing: 'swing',
        step: function (now) {
          $(this).text(Math.ceil(now));
        },
        complete: function() {
          $(this).text('138');
        }
      });
    });

    $('.number-2').each(function () {
      $(this).prop('Counter', 0).animate({
        Counter: 243
      }, {
        duration: 2000,
        easing: 'swing',
        step: function (now) {
          $(this).text(Math.ceil(now));
        },
        complete: function() {
          $(this).text('243');
        }
      });
    });
     

    $('.earth-btn').click(function () {
      window.location.href = "sub_news_2.html";
    });

    $('.second-box-text').css('display','block')

  })
    





