const btnIncre = document.getElementById("btn_increment");
const btnDecre = document.getElementById("btn_decrement");
const btnReset = document.getElementById("btn_reset");
const countArea = document.querySelector(".count");

// START
function Counter() {
  this.count = 0;
}

Counter.prototype.increment = function() {
  this.count = this.count + 1;
};

Counter.prototype.decrement = function() {
  this.count = this.count - 1;
};

Counter.prototype.reset = function() {
  this.count = 0;
};

Counter.prototype.getCount = function() {
  return this.count;
};

const CounterApp = new Counter();
// END

const renderCount = function() {
  const getNum = CounterApp.getCount();
  countArea.innerHTML = getNum;
};

const handleIncrement = function() {
  CounterApp.increment();
  renderCount();
};

const handleDecrement = function() {
  CounterApp.decrement();
  renderCount();
};

const handleReset = function() {
  CounterApp.reset();
  renderCount();
};

btnIncre.addEventListener("click", handleIncrement);
btnDecre.addEventListener("click", handleDecrement);
btnReset.addEventListener("click", handleReset);

const init = function() {
  renderCount();
};

window.onload = function() {
  init();
};
