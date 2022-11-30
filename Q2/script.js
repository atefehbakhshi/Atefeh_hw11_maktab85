const signUpButton = document.getElementById("sign-up-btn");
const signInButton = document.getElementById("sign-in-btn");
const containerParent = document.getElementById("container");

class classToggler {
  constructor(container) {
    this.container = container;
  }
  add() {
  container.classList.add("right-panel-active");
  }
  remove() {
    container.classList.remove("right-panel-active");
  }
}

const clicked = new classToggler(containerParent)

signUpButton.addEventListener("click",clicked.add);
signInButton.addEventListener("click",clicked.remove);
