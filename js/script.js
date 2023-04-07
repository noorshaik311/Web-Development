let acc = document.getElementsByClassName("adv-container");
acc[0].addEventListener("click", function () {
  let panel = this.nextElementSibling;
  if (panel.style.display === "block") {
    panel.style.display = "none";
  } else {
    panel.style.display = "block";
  }
});
