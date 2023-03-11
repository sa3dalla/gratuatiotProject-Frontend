const userToken = localStorage.getItem("userToken");

if (!userToken) {
  window.open("./login.html", "_parent");
}

// just test
//Copyright by me ADLE
