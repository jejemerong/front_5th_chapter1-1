import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import ErrorPage from "./pages/ErrorPage";

const getLoginStatus = () => {
  return localStorage.getItem("user") !== null;
};

function loadContent(elementId, content) {
  document.getElementById(elementId).innerHTML = content;
}

const router = {
  "/": () => {
    loadContent("root", HomePage({ isLoggedIn: getLoginStatus() }));
  },
  "/login": () => {
    if (getLoginStatus()) {
      history.replaceState("", "", "/");
      loadContent("root", HomePage({ isLoggedIn: true }));
    } else {
      loadContent("root", LoginPage());
    }
  },
  "/profile": () => {
    if (!getLoginStatus()) {
      loadContent("root", LoginPage());
    } else {
      loadContent("root", ProfilePage({ isLoggedIn: true }));
    }
  },
};

function handleRoute(path) {
  if (router[path]) {
    router[path]();
  } else {
    // 정의되지 않은 경로일 경우 ErrorPage 렌더링
    loadContent("root", ErrorPage());
  }
}

// 초기 라우팅 route 묶음
handleRoute(window.location.pathname);

// popstate 이벤트에서 라우팅 처리
window.addEventListener("popstate", () => {
  handleRoute(window.location.pathname);
});

const handleSubmit = (e) => {
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
    e.preventDefault();
    if (e.target.id === "logout") {
      localStorage.removeItem("user");
      history.pushState({}, "", "/login");
      loadContent("root", LoginPage());
    } else if (e.target.id === "login") {
      if (getLoginStatus()) {
        history.pushState({}, "", "/");
      } else {
        loadContent("root", LoginPage());
      }
    } else if (e.target.id === "/profile") {
      history.pushState({}, "", "/profile");
      loadContent("root", ProfilePage({ isLoggedIn: getLoginStatus() }));
    } else if (e.target.id === "home") {
      history.pushState({}, "", "/");
      loadContent("root", HomePage({ isLoggedIn: getLoginStatus() }));
    }
  }
});
