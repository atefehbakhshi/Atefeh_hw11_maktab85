const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");

const threebtn = document.getElementById("threebtn");
const fourbtn = document.getElementById("fourbtn");

const cover = document.getElementById("cover");
const user = document.getElementById("user");

threebtn.addEventListener("click", () => {
  user.classList.add("transformone");
  cover.classList.add("transformthree");
  two.classList.add("front");
  four.classList.add("front");

  one.classList.add('behind')
  three.classList.add('behind')


 

})

fourbtn.addEventListener("click", () => {
  user.classList.remove("transformone");
  cover.classList.remove("transformthree");




  two.classList.remove("front");
  four.classList.remove("front");

  one.classList.remove('behind')
  three.classList.remove('behind')
})