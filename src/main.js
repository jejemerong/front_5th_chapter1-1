import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import ErrorPage from "./pages/ErrorPage";

// TODO: 이 함수를 Header 에서 받으면
export const getLoginStatus = () => {
  return localStorage.getItem("user") !== null;
};

// router 는 page 정보만 리턴하는 역할
export const routes = {
  "/": () => HomePage(),
  "/login": () => LoginPage(),
  "/profile": () => ProfilePage(),
  404: () => ErrorPage(),
};

export function handleRoute(path) {
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

  // 로그인 -> 홈까지 같이 햦ㄹ수도있음.
  if (isLoggedIn && path === "/login") {
    // 네네네
    window.history.replaceState({}, "", "/");
    rootElement.innerHTML = HomePage();
    return;
  }
  // 로그인 안됐을 때 프로필 접근 제한
  if (!isLoggedIn && path === "/profile") {
    window.history.pushState({}, "", "/login");
    rootElement.innerHTML = LoginPage();
    return; // 까먹지말자!!!!!
  }
  window.history.pushState({}, "", path);
  console.log("path=========", path);

  rootElement.innerHTML = content;
}

const handleClick = (e) => {
  if (e.target.tagName === "A") {
    e.preventDefault(); // 네네 a 링크가 눌렀을 때 기본 이벤트들이 있는데 그 이벤트들을 방지, 아하~!
    switch (e.target.id) {
      case "logout":
        localStorage.removeItem("user");
        handleRoute("/login"); // TODO: 이동하려고 하는 URL, 렌더링해야 하는 컴포넌트 //네네 네네 아그러면 window 가 피룡한 때는 겱국ㄱ 그 가려는 페이지랑 현재 페이지랑 비교한ㄴ엥 왜지 저기 현재 페이지랑 비교해서 replace 할 때도 필요한거아니에요
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
