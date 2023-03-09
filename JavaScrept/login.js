const userEmail = document.querySelector(".email");
const userPassword = document.querySelector(".password");
const btnSignIn = document.querySelector("#sign-in");

btnSignIn.addEventListener("click", (event) => {
  event.preventDefault();

  console.log("hello");

  fetch("https://average-fox-handbag.cyclic.app/api/v1/users/login", {
    method: "POST",
    body: JSON.stringify({
      "email": userEmail.value,
      "password": userPassword.value,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data.status === "success") {
        console.log("success");

        localStorage.setItem("userToken", data.token);
        window.open("./../index.html", "_parent");
      } else {
        console.log(data.message);
      }
    })
    .catch((err) => {
      console.log(err);
    });
});
