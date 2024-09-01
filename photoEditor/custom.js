let inputFile = document.getElementsByClassName("fileInput")[0];
let inputBlur = document.getElementsByClassName("blur")[0];
let inputBrightness = document.getElementsByClassName("brightness")[0];
let inputSaturation = document.getElementsByClassName("saturation")[0];
let inputInversion = document.getElementsByClassName("inversion")[0];
let inputSepia = document.getElementsByClassName("sepia")[0];

let img = null;

let canvas = document.querySelector("canvas");
let context = canvas.getContext("2d");

let settings = {};

function generate() {
  let blur = settings.Blur;
  let brightness = settings.Brightness;
  let saturate = settings.Saturation;
  let invert = settings.Inversion;
  let sepia = settings.Sepia;
  return `brightness(${brightness}%) blur(${blur}px) saturate(${saturate}%) invert(${invert}%) sepia(${sepia}%)`;
}

function renderImage() {
  canvas.width = img.width;
  canvas.height = img.height;
  context.filter = generate();
  console.log(generate());
  context.drawImage(img, 0, 0);
}

function reset() {
  settings.Blur = "0";
  settings.Brightness = "100";
  settings.Saturation = "100";
  settings.Inversion = "0";
  settings.Sepia = "0";
  inputBlur.value = settings.Blur;
  inputBrightness.value = settings.Brightness;
  inputSaturation.value = settings.Saturation;
  inputInversion.value = settings.Inversion;
  inputSepia.value = settings.Sepia;
}

function update(key, value) {
  if (img) {
    settings[key] = value;
    renderImage();
  }
}

inputFile.addEventListener("change", () => {
  img = new Image();
  img.src = URL.createObjectURL(inputFile.files[0]);
  img.addEventListener("load", () => {
    reset();
    renderImage();
  });
});
inputBlur.addEventListener("input", () => {
  update("Blur", inputBlur.value);
});
inputBrightness.addEventListener("input", () => {
  update("Brightness", inputBrightness.value);
});
inputSaturation.addEventListener("input", () => {
  update("Saturation", inputSaturation.value);
});
inputInversion.addEventListener("input", () => {
  update("Inversion", inputInversion.value);
});
inputSepia.addEventListener("input", () => {
  update("Sepia", inputSepia.value);
});
