let linkBtn = document.querySelectorAll(".nav-link");

for (let i = 0; i < linkBtn.length; i++) {
  linkBtn[i].addEventListener("click", function () {
    loading();
    linkBtn[i].classList.add("active");
    for (let j = 0; j < linkBtn.length; j++) {
      if (j != i) {
        linkBtn[j].classList.remove("active");
      }
    }
  });
}
window.addEventListener("load", function () {
  loading();
});
function loading() {
  let idValue = setInterval(() => {
    document.getElementById("loading").classList.replace("d-none", "d-block");
  });

  setTimeout(() => {
    clearInterval(idValue);
    document.getElementById("loading").classList.replace("d-block", "d-none");
  }, 500);
}

document.addEventListener("DOMContentLoaded", function () {
  const gameCards = document.querySelectorAll(".game-card .game");

  gameCards.forEach(function (card) {
    card.addEventListener("click", function (event) {
      event.preventDefault();
      const gameId = card.getAttribute("data-game");

      document.querySelectorAll(".game-content").forEach(function (content) {
        content.style.display = "none";
      });

      document.getElementById(gameId).style.display = "block";
    });
  });

  document.querySelectorAll(".close-button").forEach(function (button) {
    button.addEventListener("click", function (event) {
      event.preventDefault();
      button.closest(".game-content").style.display = "none";
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      var targetId = link.id.replace("show-", "");

      document.querySelectorAll("section").forEach(function (section) {
        section.classList.add("d-none");
      });

      var targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.classList.remove("d-none");
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  function showSection(sectionId) {
    document.getElementById(sectionId).classList.remove("d-none");
  }

  document.getElementById("show-offer").addEventListener("click", function () {
    showSection("offer");
  });

  document.getElementById("show-status").addEventListener("click", function () {
    showSection("status");
  });

  document.getElementById("show-survey").addEventListener("click", function () {
    showSection("survey");
  });
  document.querySelectorAll(".game").forEach(function (gameCard) {
    gameCard.addEventListener("click", function (event) {
      event.preventDefault();
      const gameDetailsId = gameCard.getAttribute("data-game");
      showSection(gameDetailsId);
    });
  });
});

const modeBtn = document.getElementById("mode");

if (localStorage.getItem("theme")) {
  const theme = localStorage.getItem("theme");
  console.log(theme);
  document.documentElement.dataset.theme = localStorage.getItem("theme");
  if (theme === "light") {
    modeBtn.classList.replace("fa-sun", "fa-moon");
  } else {
    modeBtn.classList.replace("fa-moon", "fa-sun");
  }
}

modeBtn.addEventListener("click", function (e) {
  theme(e.target);
});

function theme(element) {
  const rootElement = document.documentElement;
  if (element.classList.contains("fa-sun")) {
    element.classList.replace("fa-sun", "fa-moon");
    rootElement.dataset.theme = "light";
    localStorage.setItem("theme", "light");
  } else {
    element.classList?.replace("fa-moon", "fa-sun");
    rootElement.dataset.theme = "dark";
    localStorage.setItem("theme", "dark");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  var navLinks = document.querySelectorAll(".nav-link");
  var navbarCollapse = document.querySelector(".navbar-collapse");

  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      var bsCollapse = new bootstrap.Collapse(navbarCollapse, {
        toggle: false,
      });
      bsCollapse.hide();
    });
  });
});

$('.show-form').click(function (e) { 
  $('.hide-form-wrapper').show(500,function () {
    $('form').show(500,function(){
      $('.show-form').hide(500)
    });
  });
  
});

$('.hide-form').click(500,function(){
  $('form').hide(500,function () {
    $('.hide-form-wrapper').hide(500,function(){
      $('.show-form').show(500)
    });
  });
}); 