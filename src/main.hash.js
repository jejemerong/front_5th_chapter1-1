import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import ErrorPage from "./pages/ErrorPage";
import { getLoginStatus } from "./utils/getLoginStatus";

const routes = {
  "/": () => HomePage(),
  "/login": () => LoginPage(),
  "/profile": () => ProfilePage(),
  "/404": () => ErrorPage(),
}; // 아 그래서 다른 분들이 prefix 이랬구나

function loadContent(content, path) {
  const rootElement = document.getElementById("root");
  const isLoggedIn = getLoginStatus();

  // 로그인 -> 홈까지 같이 햦ㄹ수도있음.
  if (isLoggedIn && path === "/login") {
    window.location.hash = "/";
    rootElement.innerHTML = HomePage();
    return;
  }
  // 로그인 안됐을 때 프로필 접근 제한
  if (!isLoggedIn && path === "/profile") {
    window.location.hash = "/login"; // 네네
    rootElement.innerHTML = LoginPage();
    return; // 까먹지말자!!!!!
  }
  window.location.hash = path;
  console.log("path in loadContent", path);
  rootElement.innerHTML = content;
  console.log("rootElement.innerHTML", rootElement.innerHTML);
}

function handleRoute(path) {
  // const path =
  const route = routes[path];

  if (route) {
    const content = route();
    loadContent(content, path);
  } else {
    loadContent(ErrorPage(), "/404");
  }
}

// TODO: navigate 를 따로 만들어서
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
        handleRoute("/");
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
      handleRoute("/"); //TODO: 여긴가
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

// TODO: path 변수로 두지말고
// const path = window.location.hash.slice(1) || "/"; // 해시 지운거

// init
// handleRoute(window.location.hash.slice(1) || "/");
handleRoute(location.hash.replace(/^#/, "") || "/");

window.addEventListener("hashchange", () =>
  handleRoute(handleRoute(location.hash.replace(/^#/, "") || "/")),
);

// 현재 상황: 테스트 코드에서 /login 으로 경로가 바뀌면서 홈화면 렌더링
// popstate 가 뒤늦게 바뀌면서 /login 으로 경로 바뀌고 로그인 화면 렌더링
// 임의로 테스트 코드에서 setTimeout 으로 DOM

// window.addEventListener("popstate", () => {
//   console.log("룰ㄹ루라랄라");
//   handleRoute(window.location.hash.slice(1) || "/");
// });

document.body.addEventListener("submit", handleSubmit); //
document.body.addEventListener("click", handleClick); //네네 네네 아하 별개의 것
