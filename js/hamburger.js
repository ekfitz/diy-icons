hamNav();

var hamburger = document.getElementById("hamburger");
var topLine = document.getElementById("topLine");
var middleLine = document.getElementById("middleLine");
var bottomLine = document.getElementById("bottomLine");

hamburger.style.backgroundColor = "green";

setColors();

function hamNav() {
  var ham = document.createElement("div");
  var tl = document.createElement("span");
  var ml = document.createElement("span");
  var bl = document.createElement("span");

  ham.id = "hamburger";
  tl.id = "topLine";
  ml.id = "middleLine";
  bl.id = "bottomLine";

  ham.style.position = "absolute";

  tl.style.position = "absolute";
  tl.style.width = "100%";
  tl.style.height = "20%";
  tl.style.top = "0%";

  ml.style.position = "absolute";
  ml.style.width = "100%";
  ml.style.height = "20%";
  ml.style.top = "40%";

  bl.style.position = "absolute";
  bl.style.width = "100%";
  bl.style.height = "20%";
  bl.style.top = "80%";

  ham.appendChild(tl);
  ham.appendChild(ml);
  ham.appendChild(bl);
  document.body.appendChild(ham);
}

// x = classcolor
function setColors() {
  if (hamburger.style.backgroundColor !== "transparent") {
    topLine.style.backgroundColor = hamburger.style.backgroundColor;
    middleLine.style.backgroundColor = hamburger.style.backgroundColor;
    bottomLine.style.backgroundColor = hamburger.style.backgroundColor;
    hamburger.style.backgroundColor = "transparent";
  }
}
