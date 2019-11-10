hamNav();

function hamNav() {
  var ham = document.createElement("div");
  var tl = document.createElement("span");
  var ml = document.createElement("span");
  var bl = document.createElement("span");

  ham.className = "hamnav";
  ham.id = "hamburger";
  tl.id = "topLine";
  ml.id = "middleLine";
  bl.id = "bottomLine";

  tl.style.width = "100%";
  tl.style.height = "20%";
  tl.style.top = "0%";
  tl.style.backgroundColor = "red";

  ml.style.width = "100%";
  ml.style.height = "20%";
  ml.style.top = "40%";
  ml.style.backgroundColor = "red";

  bl.style.width = "100%";
  bl.style.height = "20%";
  bl.style.top = "80%";
  ml.style.backgroundColor = "red";

  ham.appendChild(tl);
  document.body.appendChild(ham);
}
