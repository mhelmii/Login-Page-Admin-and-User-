function getInfo() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  fetch("./users.json")
    .then((response) => response.json())
    .then((users) => {
      users.map((user , index) => {
        if (user.email === email && user.password === password) {
          if (user.isAdmin) {
            window.location.href = "admin.html";
          } else {
            window.location.href = "home.html";
          }
        } else {
          if(index === users.length - 1){
            window.alert("Invalid Email or Password");
          }
        }
      });
    });
}
