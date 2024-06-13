const last = new Date("2025-1-1 00:00:00");

function count() {
  const now = new Date();

  const leftDay = Math.floor((last - now) / 1000 / 60 / 60 / 24);
  const leftHour = Math.floor(((last - now) / 1000 / 60 / 60) % 24);
  const leftMinute = Math.floor(((last - now) / 1000 / 60) % 60);
  const leftSecond = Math.floor(((last - now) / 1000) % 60);

  left_time.innerHTML = `${leftDay}d ${leftHour}h
${leftMinute}m ${leftSecond}s`;
}

String(leftSecond).padStart(2, "0");

count();

setInterval(count, 1000);
