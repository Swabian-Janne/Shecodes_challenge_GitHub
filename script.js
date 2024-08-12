/** @format */

function contact() {
  let genre = prompt("In which genre would you be most intrested in?");
  let time = prompt("How much minutes would you spend reading a day?");
  let mail = prompt("Please enter your mail address:");
  alert(
    "Thank you very much! For your daily amount of " +
      time +
      " min reading time  will I send you a list with " +
      genre +
      " book recommondations 📖😊"
  );
}

function changeTheme() {
  let body = document.querySelector("body");
  // body.classList.toogle("dark"); -- same as below till }
  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
  } else {
    body.classList.add("dark");
  }
}
let themeButton = document.querySelector(".theme-button");
themeButton.addEventListener("click", changeTheme);

let button = document.querySelector(".contact-button");
button.addEventListener("click", contact);
