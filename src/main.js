import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import ErrorPage from "./pages/ErrorPage";

const getLoginStatus = () => {
  return localStorage.getItem("user") !== null;
};

// 현재 url 과 path 값 비교 후, 함수 실행
function route(path, callback) {
  if (window.location.pathname === path) {
    callback();
  }
}

function loadContent(elementId, content) {
  document.getElementById(elementId).innerHTML = content;
}

route("/", () => {
  loadContent("root", HomePage({ isLoggedIn: getLoginStatus() }));
});

route("/login", () => {
  loadContent("root", LoginPage());
});

route("/profile", () => {
  loadContent("root", ProfilePage({ isLoggedIn: getLoginStatus() }));
});

const handleRoute = () => {
  const path = window.location.pathname;
  const isLoggedIn = getLoginStatus();
  if (path === "/") {
    loadContent("root", HomePage({ isLoggedIn: getLoginStatus() }));
  } else if (path === "/login") {
    loadContent("root", LoginPage());
  } else if (path === "/profile") {
    isLoggedIn
      ? loadContent("root", ProfilePage({ isLoggedIn: getLoginStatus() }))
      : loadContent("root", LoginPage());
  } else {
    loadContent("root", ErrorPage());
  }
};

// window 객체에서 path 감지
window.addEventListener("popstate", handleRoute);

window.addEventListener("load", () => {
  route("/", () => {
    loadContent("root", HomePage({ isLoggedIn: getLoginStatus() }));
  });
});

const handleSubmit = function (e) {
  if (e.target.id === "login-form") {
    e.preventDefault();
    const username = document.getElementById("username");
    const password = document.getElementById("password");

    if (username.value) {
      localStorage.setItem(
        "user",
        JSON.stringify({ username: username.value, email: "", bio: "" }),
      );
      username.value = "";
      password.value = "";

      history.pushState({}, "", "/");
      loadContent("root", HomePage({ isLoggedIn: true }));
    }
  }
  if (e.target.id === "profile-form") {
    e.preventDefault();
    const username = e.target.querySelector("#username").value;
    const email = e.target.querySelector("#email").value;
    const bio = e.target.querySelector("#bio").value;
    localStorage.setItem("user", JSON.stringify({ username, email, bio }));
  }
};

window.addEventListener("submit", handleSubmit);

window.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    if (e.target.id === "logout") {
      e.preventDefault();
      localStorage.removeItem("user");
      history.pushState({}, "", "/");
      loadContent("root", HomePage({ isLoggedIn: false }));
    } else if (e.target.id === "login") {
      history.pushState({}, "", "/login");
      loadContent("root", LoginPage());
    } else if (e.target.id === "profile") {
      history.pushState({}, "", "/profile");
      loadContent("root", ProfilePage({ isLoggedIn: getLoginStatus() }));
    }
  }
});
