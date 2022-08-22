const boxRef = document.querySelector(".js-box");

// boxRef.addEventListener("mouseenter", onBtnSent);
// boxRef.addEventListener("mouseleave", onBtnRemoveSent);
boxRef.addEventListener("mousemove", onMouseMove);

function onBtnSent(event) {
  const eve = event.currentTarget;

  eve.classList.add("box--active");
}

function onBtnRemoveSent(event) {
  const eve = event.currentTarget;

  eve.classList.remove("box--active");
}

function onMouseMove(event) {
  console.log(event);
}
