let Canvas = document.getElementById("myCanvas");
let context = Canvas.getContext("2d");
context.font = "12px Tahoma";
context.strokeStyle = "#008080";

const Objects = [
  {
    id: 1,
    day: "saturday",
    value: 100,
  },
  {
    id: 2,
    day: "sunday",
    value: 300,
  },
  {
    id: 3,
    day: "monday",
    value: 150,
  },
  {
    id: 4,
    day: "tuesday",
    value: 400,
  },
  {
    id: 5,
    day: "wednesday",
    value: 450,
  },
  {
    id: 6,
    day: "thursday",
    value: 160,
  },
  {
    id: 7,
    day: "Friday",
    value: 200,
  },
];
let x = 40;
function createChart() {
  Objects.forEach((object) => {
    context.fillText(object.value, x, Canvas.height - object.value - 20);
    context.fillText(object.day, x, 10);
    context.strokeRect(x, Canvas.height - object.value, 20, object.value);
    x += 100;
  });
}

window.addEventListener("load", () => {
  context.fillText(`X:${Canvas.width},Y:${Canvas.height}`, 800, 20);

  createChart();
});
