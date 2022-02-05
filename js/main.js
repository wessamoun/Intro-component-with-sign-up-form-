let submit = document.querySelector(".submit");
submit.addEventListener("click", function (e) {
  let inputs = document.querySelectorAll("input");
  inputs.forEach(function (input) {
    if (input.value === "") {
      input.classList.add("invalid");
      input.parentElement.querySelector(".validation").style.display = "block";
      input.parentElement.querySelector("img").style.display = "block";
    } else {
      input.classList.remove("invalid");
      input.parentElement.querySelector(".validation").style.display = "none";
      input.parentElement.querySelector("img").style.display = "none";
    }
    let email = document.querySelector(".email")
    let msg = email.parentElement.querySelector(".validation");
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,4}$/;
    if (!email.value.match(pattern)) {
      email.classList.add("invalid");
      msg.style.display = "block";
      email.parentElement.querySelector("img").style.display = "block";
    } else {
      msg.style.display = "none";
      email.classList.remove("invalid");
      email.parentElement.querySelector("img").style.display = "none";
    }
  });
});
