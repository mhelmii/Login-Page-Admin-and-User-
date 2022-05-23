fetch("./users.json")
  .then((response) => response.json())
  .then((users) => {
    const list = users.map((el) => {
      return `
        <li class ="data">
            <div class ="details">
                  <h2>${el.fullName}</h2>
                <div id ="info" class="info">
                  <p>${el.email}</p>
                  <p>${el.phone}</p>
                  <p>${el.address}</p>
                </div>
                <button id = "view">View</button>
                <button id = "update">Update</button>
                <button id = "delete">Delete</button>
            </div>
          </li>
        `;
    });
    document.querySelector(".list").innerHTML = list.join("");

    // View Button
    const viewBtn = document.querySelectorAll("#view");
    const info = document.querySelectorAll(".info");
    for (let i = 0; i < viewBtn.length; i++) {
      viewBtn[i].addEventListener("click", function () {
        {
          if (info[i].style.display === "none") {
            info[i].style.display = "block";
            viewBtn[i].innerText = "Hide";
          } else {
            info[i].style.display = "none";
            viewBtn[i].innerText = "View";
          }
        }
      });
    }

    // Delete Button
    const delBtn = document.querySelectorAll("#delete");
    const data = document.querySelectorAll(".data");
    for (let j = 0; j < delBtn.length; j++) {
      delBtn[j].addEventListener("click", function () {
        data[j].style.display = "none";
      });
    }

    // Update Button
    const updateBtn = document.querySelectorAll("#update");
    const layout = document.querySelector(".layout");
    const form = document.querySelector(".new");
    for (let k = 0; k < updateBtn.length; k++) {
      updateBtn[k].addEventListener("click", function () {
        layout.style.display = "block";
        form.style.transform = "scale(1)";
        document.querySelector("#idNum").value = `${users[k]._id}`;
        document.querySelector("#name").value = `${users[k].fullName}`;
        document.querySelector("#email").value = `${users[k].email}`;
        document.querySelector("#pass").value = `${users[k].password}`;
        document.querySelector("#phone").value = `${users[k].phone}`;
        document.querySelector("#city").value = `${users[k].address}`;
        if (users[k].isAdmin === true){
          document.querySelector("#isAdmin").checked = true;
        }else{
          document.querySelector("#isAdmin").checked = false;
        }
      });
    }
  });
      // Create Button
      const layout = document.querySelector(".layout");
      const form = document.querySelector(".new");

      function showForm() {
        layout.style.display = "block";
        form.style.transform = "scale(1)";
        document.querySelector("#idNum").value = "";
        document.querySelector("#name").value = "";
        document.querySelector("#email").value = "";
        document.querySelector("#pass").value = "";
        document.querySelector("#phone").value = "";
        document.querySelector("#city").value = "";
        document.querySelector("#isAdmin").checked = false;
      }

    // Close pop-up
      layout.onclick = function () {
        layout.style.display = "none";
        form.style.transform = "scale(0)";
      };