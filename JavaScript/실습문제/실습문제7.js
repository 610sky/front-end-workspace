const imgs = document.querySelectorAll(".container img");
let count = 0;

function rand_num() {
  return Math.floor(Math.random() * 3);
}

function randomHandler() {
  for (let i = 0; i < imgs.length; i++) {
    imgs[i].setAttribute("src", `../resources/family${rand_num() + 1}.jpg`);
  }
  click.innerHTML = `Click ${++count}`;

  if (
    imgs[0].getAttribute("src") == imgs[1].getAttribute("src") &&
    imgs[1].getAttribute("src") == imgs[2].getAttribute("src")
  ) {
    result.innerHTML = "Congratulation!! Press restart to play again~!!";
    click.setAttribute("disabled", "disabled");
  }
}

function restartHandler(e) {
  click.innerHTML = "Click";
  count = 0;
  for (let i = 0; i < imgs.length; i++) {
    imgs[i].setAttribute("src", `../resources/family${i + 1}.jpg`);
  }
  result.innerHTML = "";
  click.removeAttribute("disabled");
}

click.addEventListener("click", randomHandler);
restart.addEventListener("click", restartHandler);
