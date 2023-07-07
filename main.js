const slider = document.getElementById("slider");
const total = document.querySelector(".dollar");
console.log(total);
const toggle = document.querySelector(".slider-toggle");
const month = document.querySelector(".month");
const checkbox = document.getElementById("checkbox");
const backColor = document.querySelector(".slider-div");
let disCount = 12 * 0.25;
total.innerHTML = 16;
slider.addEventListener("change", function () {
  x();
});
function x() {
  if (checkbox.checked) {
    total.innerHTML = parseInt(slider.value) * 12 * 0.75;
    month.innerHTML = "/ year";
  } else {
    total.innerHTML = Math.round(parseInt(slider.value));
    month.innerHTML = "/ month";
  }
}

checkbox.addEventListener("click", function () {
  x();

  console.log(checkbox.checked);
});
slider.addEventListener("input", function (event) {
  const thumbPosition =
    (event.target.value - event.target.min) /
    (event.target.max - event.target.min);
  const thumbPositionPercent = thumbPosition * 100 + "%";
  document.documentElement.style.setProperty(
    "--thumb-position",
    thumbPositionPercent
  );
});
