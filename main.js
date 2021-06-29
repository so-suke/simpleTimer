const $seconds = document.getElementById("seconds");
const $minutes = document.getElementById("minutes");
const $startBtn = document.getElementById("startBtn");
const $stopBtn = document.getElementById("stopBtn");
let intervalId;
// 秒数の切り上げ数
const TIME_ROUND_UP = 59;
const INTERVAL = 1000;
let seconds = 0;
let minutes = 0;

// 2桁数字の0埋めをします。
const zeroPadding = (number) => {
  return String(number).padStart(2, "0");
};

$startBtn.addEventListener("click", () => {
  intervalId = setInterval(() => {
    seconds++;
    if (seconds > TIME_ROUND_UP) {
      seconds = 0;
      minutes++;
    }

    if (minutes > TIME_ROUND_UP) {
      minutes = 0;
      alert("タイマーを終了します。");
      clearInterval(intervalId);
    }
    $seconds.innerHTML = zeroPadding(seconds);
    $minutes.innerHTML = zeroPadding(minutes);
  }, INTERVAL);
});
$stopBtn.addEventListener("click", () => {
  clearInterval(intervalId);
});
