$ (function() {
  setInterval(function() {
  $('.res_img>ul').delay(1000);
  $('.res_img>ul').animate({marginTop : -200});
  $('.res_img>ul').delay(1000);
  $('.res_img>ul').animate({marginTop : -400});
  $('.res_img>ul').delay(1000);
  $('.res_img>ul').animate({marginTop : -600});
  $('.res_img>ul').delay(1000);
  $('.res_img>ul').animate({marginTop : 0});
  });

  $('.time_box').click(function() {
    $(this).addClass('active').siblings().removeClass('active');
  });
  $('.last_button').click(function() {
    $(this).addClass('active').siblings().removeClass('active');
  })

  // 캘린더
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

$('.date').click(function() {
  $(this).addClass('active').siblings().removeClass('active');
})
})