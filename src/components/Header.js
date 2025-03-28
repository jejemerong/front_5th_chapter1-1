// TODO: 헤더 상태
// TODO: 근데 href 로 가져오려고하니까 또 안되더라고요? 그래서 그냥 id 네넨!!!
export const Header = ({ isLoggedIn }) => {
  const currentPath = window.location.pathname;

  return /* HTML */ `
    <div>
      <header class="bg-blue-600 text-white p-4 sticky top-0">
        <h1 class="text-2xl font-bold">항해플러스</h1>
      </header>
      <nav class="bg-white shadow-md p-2 sticky top-14">
        <ul class="flex justify-around">
          <li>
            <a
              href="/"
              class="${currentPath === "/"
                ? "text-blue-600 font-bold"
                : "text-gray-600"}"
              >홈</a
            >
          </li>
          ${isLoggedIn
            ? `<li>
                  <a id="profile" href="/profile" class="${
                    currentPath === "/profile"
                      ? "text-blue-600 font-bold"
                      : "text-gray-600"
                  }">프로필</a>
                </li>
                <li>
                  <a id="logout" href="/login" class="text-gray-600">로그아웃</a> 
                </li>`
            : `<li>
                  <a id="login" href="/login" class="${
                    currentPath === "/login" // TODO: 해시 라우터, 기본 라우터 구분
                      ? "text-blue-600 font-bold"
                      : "text-gray-600"
                  }">로그인</a>
                </li>`}
        </ul>
      </nav>
    </div>
  `;
};
