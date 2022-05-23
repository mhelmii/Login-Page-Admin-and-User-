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
                <button id="review">Review</button>
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

    // Review Button
    const reviewBtn = document.querySelectorAll("#review");
    const layout = document.querySelector(".layout");
    const reviewform = document.querySelector(".reviewBtn");
    for (let k = 0; k < reviewBtn.length; k++) {
      reviewBtn[k].addEventListener("click", function () {
        reviewBtn[k].addEventListener("click", function () {
          layout.style.display = "block";
          reviewform.style.transform = "scale(1)";
        });
      });
    }
  });

// Feedback
const layout = document.querySelector(".layout");
const feedbackBtn = document.querySelector(".feedbackBtn");
const reviewform = document.querySelector(".reviewBtn");
function feedback() {
  layout.style.display = "block";
  feedbackBtn.style.transform = "scale(1)";
}

// Close pop-up
layout.onclick = function () {
  layout.style.display = "none";
  feedbackBtn.style.transform = "scale(0)";
  reviewform.style.transform = "scale(0)";
};
