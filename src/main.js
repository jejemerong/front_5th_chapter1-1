import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import ErrorPage from "./pages/ErrorPage";
import { getLoginStatus } from "./utils/getLoginStatus";

const routes = {
  "/": () => HomePage(),
  "/login": () => LoginPage(),
  "/profile": () => ProfilePage(),
  404: () => ErrorPage(),
};

function handleRoute(path) {
  const route = routes[path];
  if (route) {
    const content = route();
    loadContent(content, path);
  } else {
    loadContent(ErrorPage(), "404");
  }
}

function loadContent(content, path) {
  const rootElement = document.getElementById("root");
  const isLoggedIn = getLoginStatus();

  // 로그인한 상태에서 로그인 페이지 접근 시, 경로 변경
  if (isLoggedIn && path === "/login") {
    window.history.replaceState({}, "", "/");
    rootElement.innerHTML = HomePage();
    return;
  }
  // 로그인 안됐을 때, 프로필 접근 제한
  if (!isLoggedIn && path === "/profile") {
    window.history.pushState({}, "", "/login");
    rootElement.innerHTML = LoginPage();
    return;
  }
  window.history.pushState({}, "", path);
  rootElement.innerHTML = content;
}

const handleClick = (e) => {
  if (e.target.tagName === "A") {
    e.preventDefault();
    switch (e.target.id) {
      case "logout":
        localStorage.removeItem("user");
        handleRoute("/login"); // 이동하려고 하는 URL, 렌더링해야 하는 컴포넌트
        break;

      case "login":
        handleRoute("/login");
        break;

      case "profile":
        handleRoute("/profile");
        break;

      default:
        handleRoute("/home");
        break;
    }
  }
};

const handleSubmit = (e) => {
  // 로그인
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
      handleRoute("/");
    }
  }

  // 프로필 업데이트
  if (e.target.id === "profile-form") {
    e.preventDefault();
    const username = e.target.querySelector("#username").value;
    const email = e.target.querySelector("#email").value;
    const bio = e.target.querySelector("#bio").value;
    localStorage.setItem("user", JSON.stringify({ username, email, bio }));
  }
};

// TODO: hashroute 추가
handleRoute(window.location.pathname);

// 렌더가 되고 이벤트 등록
window.addEventListener("popstate", () =>
  handleRoute(window.location.pathname),
);

// 이벤트 위임...!
document.body.addEventListener("submit", handleSubmit);
document.body.addEventListener("click", handleClick);
