const inputEl = document.querySelector("input");
const buttonEl = document.querySelector("button");
const timerEl = document.querySelector("span");

const parseStr = (number) => (number < 10 ? "0" + number : number);

const createTimerAnimator = () => {
  let timer;
  return (timeFromInput) => {
    clearInterval(timer);
    let time = timeFromInput;

    const updateTime = () => {
      const hours = Math.floor(time / 3600);
      const minutes = Math.floor((time - hours * 3600) / 60);
      const seconds = time - hours * 3600 - minutes * 60;
      timerEl.textContent = `${parseStr(hours)}:${parseStr(minutes)}:${parseStr(
        seconds
      )}`;
    };
    updateTime();

    timer = setInterval(() => {
      time--;
      if (time >= 0) {
        updateTime();
      } else {
        clearInterval(timer);
      }
    }, 1000);
  };
};

const animateTimer = createTimerAnimator();

inputEl.removeEventListener("input", onChangeInput);
inputEl.addEventListener("input", onChangeInput);
function onChangeInput() {
  inputEl.value = inputEl.value.replace(/[^0-9]/g, "");
}

buttonEl.removeEventListener("click", startTimer);
buttonEl.addEventListener("click", startTimer);
function startTimer() {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = "";
}
