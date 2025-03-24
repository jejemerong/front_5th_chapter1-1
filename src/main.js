import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import ErrorPage from "./pages/ErrorPage";

// TODO: 상태값
const isLoggedIn = false;

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
  loadContent("root", HomePage(isLoggedIn));
});
route("/login", () => {
  loadContent("root", LoginPage());
});

route("/profile", () => {
  loadContent("root", ProfilePage(isLoggedIn));
});

// window 객체에서 path 감지
window.addEventListener("popstate", () => {
  const path = window.location.pathname;

  if (path === "/") {
    loadContent("root", HomePage(isLoggedIn));
  } else if (path === "/login") {
    loadContent("root", LoginPage());
  } else if (path === "/profile") {
    isLoggedIn
      ? loadContent("root", ProfilePage(isLoggedIn))
      : loadContent("root", LoginPage());
  } else {
    loadContent("root", ErrorPage());
  }
});

window.addEventListener("load", () => {
  route("/", () => {
    loadContent("root", HomePage(isLoggedIn));
  });
});
