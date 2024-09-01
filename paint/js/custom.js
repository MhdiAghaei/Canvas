window.addEventListener("load", function () {
  let Ground = document.getElementById("app");
  let ctx = Ground.getContext("2d");
  document.querySelector(".toolBox").style.width = "200px";
  Ground.width = window.innerWidth;
  Ground.height = window.innerHeight;
  Ground.width = Ground.width - 217;
  let isPainting = false;
  const startPainting = (e) => {
    isPainting = true;
    draw(e);
  };

  const stopPainting = function () {
    isPainting = false;
    ctx.beginPath();
  };
  window.setInterval(() => {
    document.getElementById("line").innerText =
      document.getElementById("input").value + "px";
  }, 100);

  const draw = (e) => {
    if (!isPainting) {
      return;
    }

    let inputRange = document.getElementById("input").value;
    ctx.lineCap = "round";
    document.querySelector("#red").addEventListener("click", () => {
      ctx.strokeStyle = "red";
    });
    document.querySelector("#black").addEventListener("click", () => {
      ctx.strokeStyle = "black";
    });
    document.querySelector("#green").addEventListener("click", () => {
      ctx.strokeStyle = "green";
    });
    document.querySelector("#yellow").addEventListener("click", () => {
      ctx.strokeStyle = "yellow";
    });
    document.querySelector("#blue").addEventListener("click", () => {
      ctx.strokeStyle = "blue";
    });
    document.querySelector("#cyan").addEventListener("click", () => {
      ctx.strokeStyle = "cyan";
    });
    ctx.lineWidth = inputRange;
    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();
  };

  window.addEventListener("mousedown", startPainting);
  window.addEventListener("mouseup", stopPainting);
  window.addEventListener("mousemove", draw);

  window.addEventListener("resize", () => {
    Ground.width = window.innerWidth;
    Ground.height = window.innerHeight;
  });
});
