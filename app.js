document.addEventListener("DOMContentLoaded", function () {
  const dayOfWeekElement = document.getElementById("dayOfWeek");
  const utcTimeElement = document.getElementById("utcTime");

  function updateTime() {
    const currentDate = new Date();
    const dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][currentDate.getUTCDay()];

    const hours = currentDate.getUTCHours().toString().padStart(2, "0");
    const minutes = currentDate.getUTCMinutes().toString().padStart(2, "0");
    const seconds = currentDate.getUTCSeconds().toString().padStart(2, "0");
    const formattedUTCTime = `${hours}:${minutes}:${seconds}`;

    dayOfWeekElement.textContent = dayOfWeek;
    utcTimeElement.textContent = formattedUTCTime;
  }

  updateTime();
  setInterval(updateTime, 1000);
});
