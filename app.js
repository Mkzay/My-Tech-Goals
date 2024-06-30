document.addEventListener("DOMContentLoaded", function () {
    const dayOfWeekElement = document.getElementById("dayOfWeek");
    const utcTimeElement = document.getElementById("utcTime");
  
    function updateTime() {
      const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      const currentDate = new Date();
      const dayOfWeek = daysOfWeek[currentDate.getUTCDay()];
      const utcTime = currentDate.getTime();
  
      dayOfWeekElement.textContent = dayOfWeek;
      utcTimeElement.textContent = utcTime;
    }
  
    updateTime();
  
    setInterval(updateTime, 1000);
  });