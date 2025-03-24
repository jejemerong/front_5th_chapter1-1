(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function i(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(o){if(o.ep)return;o.ep=!0;const l=i(o);fetch(o.href,l)}})();const m=({isLoggedIn:t})=>`
    <div>
      <header class="bg-blue-600 text-white p-4 sticky top-0">
        <h1 class="text-2xl font-bold">항해플러스</h1>
      </header>
      <nav class="bg-white shadow-md p-2 sticky top-14">
        <ul class="flex justify-around">
          <li><a href="/" class="text-blue-600">홈</a></li>
          ${t?`<li><a id="profile" href="/profile" class="text-gray-600">프로필</a></li>
          <li><a id="logout" href="/login" class="text-gray-600">로그아웃</a></li>`:`<li><a id="login" href="/login" class="text-gray-600">로그인</a></li>
          `}
        </ul>
      </nav>
    </div>
  `,f=()=>`
    <footer class="bg-gray-200 p-4 text-center">
      <p>&copy; 2024 항해플러스. All rights reserved.</p>
    </footer>
  `;function n({isLoggedIn:t}){return`
    <div class="bg-gray-100 min-h-screen flex justify-center">
      <div class="max-w-md w-full">
        ${m({isLoggedIn:t})}
        ${t?`<main class="p-4">
          <div class="mb-4 bg-white rounded-lg shadow p-4">
            <textarea
              class="w-full p-2 border rounded"
              placeholder="무슨 생각을 하고 계신가요?"
            ></textarea>
            <button class="mt-2 bg-blue-600 text-white px-4 py-2 rounded">
              게시
            </button>
          </div>`:"<div></div>"}
          <div class="space-y-4">
            <div class="bg-white rounded-lg shadow p-4">
              <div class="flex items-center mb-2">
                <img
                  src="https://placehold.co/40"
                  alt="프로필"
                  class="rounded-full mr-2"
                />
                <div>
                  <p class="font-bold">홍길동</p>
                  <p class="text-sm text-gray-500">5분 전</p>
                </div>
              </div>
              <p>오늘 날씨가 정말 좋네요. 다들 좋은 하루 보내세요!</p>
              <div class="mt-2 flex justify-between text-gray-500">
                <button>좋아요</button>
                <button>댓글</button>
                <button>공유</button>
              </div>
            </div>

            <div class="bg-white rounded-lg shadow p-4">
              <div class="flex items-center mb-2">
                <img
                  src="https://placehold.co/40"
                  alt="프로필"
                  class="rounded-full mr-2"
                />
                <div>
                  <p class="font-bold">김철수</p>
                  <p class="text-sm text-gray-500">15분 전</p>
                </div>
              </div>
              <p>새로운 프로젝트를 시작했어요. 열심히 코딩 중입니다!</p>
              <div class="mt-2 flex justify-between text-gray-500">
                <button>좋아요</button>
                <button>댓글</button>
                <button>공유</button>
              </div>
            </div>

            <div class="bg-white rounded-lg shadow p-4">
              <div class="flex items-center mb-2">
                <img
                  src="https://placehold.co/40"
                  alt="프로필"
                  class="rounded-full mr-2"
                />
                <div>
                  <p class="font-bold">이영희</p>
                  <p class="text-sm text-gray-500">30분 전</p>
                </div>
              </div>
              <p>오늘 점심 메뉴 추천 받습니다. 뭐가 좋을까요?</p>
              <div class="mt-2 flex justify-between text-gray-500">
                <button>좋아요</button>
                <button>댓글</button>
                <button>공유</button>
              </div>
            </div>

            <div class="bg-white rounded-lg shadow p-4">
              <div class="flex items-center mb-2">
                <img
                  src="https://placehold.co/40"
                  alt="프로필"
                  class="rounded-full mr-2"
                />
                <div>
                  <p class="font-bold">박민수</p>
                  <p class="text-sm text-gray-500">1시간 전</p>
                </div>
              </div>
              <p>주말에 등산 가실 분 계신가요? 함께 가요!</p>
              <div class="mt-2 flex justify-between text-gray-500">
                <button>좋아요</button>
                <button>댓글</button>
                <button>공유</button>
              </div>
            </div>

            <div class="bg-white rounded-lg shadow p-4">
              <div class="flex items-center mb-2">
                <img
                  src="https://placehold.co/40"
                  alt="프로필"
                  class="rounded-full mr-2"
                />
                <div>
                  <p class="font-bold">정수연</p>
                  <p class="text-sm text-gray-500">2시간 전</p>
                </div>
              </div>
              <p>새로 나온 영화 재미있대요. 같이 보러 갈 사람?</p>
              <div class="mt-2 flex justify-between text-gray-500">
                <button>좋아요</button>
                <button>댓글</button>
                <button>공유</button>
              </div>
            </div>
          </div>
        </main>
        ${f()}
      </div>
    </div>
  `}function d(){return`
  <main class="bg-gray-100 flex items-center justify-center min-h-screen">
    <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <h1 class="text-2xl font-bold text-center text-blue-600 mb-8">항해플러스</h1>
      <form id="login-form">
        <div class="mb-4">
          <input id="username" type="text" placeholder="사용자 이름" class="w-full p-2 border rounded">
        </div>
        <div class="mb-6">
          <input id="password" type="password" placeholder="비밀번호" class="w-full p-2 border rounded">
        </div>
        <button type="submit" class="w-full bg-blue-600 text-white p-2 rounded font-bold">로그인</button>
      </form>
      <div class="mt-4 text-center">
        <a href="#" class="text-blue-600 text-sm">비밀번호를 잊으셨나요?</a>
      </div>
      <hr class="my-6">
      <div class="text-center">
        <button class="bg-green-500 text-white px-4 py-2 rounded font-bold">새 계정 만들기</button>
      </div>
    </div>
  </main>
`}function b({isLoggedIn:t}){const e=localStorage.getItem("user"),{username:i,email:a,bio:o}=JSON.parse(e);return`
    <div id="profile" id="root">
      <div class="bg-gray-100 min-h-screen flex justify-center">
        <div class="max-w-md w-full">
          ${m({isLoggedIn:t})}
          <main class="p-4">
            <div class="bg-white p-8 rounded-lg shadow-md">
              <h2 class="text-2xl font-bold text-center text-blue-600 mb-8">
                내 프로필
              </h2>
              <form id="profile-form">
                <div class="mb-4">
                  <label
                    for="username"
                    class="block text-gray-700 text-sm font-bold mb-2"
                    >사용자 이름</label
                  >
                  <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder
                    value="${i}"
                    class="w-full p-2 border rounded"
                  />
                </div>
                <div class="mb-4">
                  <label
                    for="email"
                    class="block text-gray-700 text-sm font-bold mb-2"
                    >이메일</label
                  >
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value="${a}"
                    class="w-full p-2 border rounded"
                  />
                </div>
                <div class="mb-6">
                  <label
                    for="bio"
                    class="block text-gray-700 text-sm font-bold mb-2"
                    >자기소개</label
                  >
                  <textarea
                    id="bio"
                    name="bio"
                    rows="4"
                    class="w-full p-2 border rounded"
                  >${o}</textarea
                  >
                </div>
                <button
                  type="submit"
                  class="w-full bg-blue-600 text-white p-2 rounded font-bold"
                >
                  프로필 업데이트
                </button>
              </form>
            </div>
          </main>
          ${f()}
        </div>
      </div>
    </div>
  `}function p(){return`
<main class="bg-gray-100 flex items-center justify-center min-h-screen">
  <div class="bg-white p-8 rounded-lg shadow-md w-full text-center" style="max-width: 480px">
    <h1 class="text-2xl font-bold text-blue-600 mb-4">항해플러스</h1>
    <p class="text-4xl font-bold text-gray-800 mb-4">404</p>
    <p class="text-xl text-gray-600 mb-8">페이지를 찾을 수 없습니다</p>
    <p class="text-gray-600 mb-8">
      요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
    </p>
    <a href="/" class="bg-blue-600 text-white px-4 py-2 rounded font-bold">
      홈으로 돌아가기
    </a>
  </div>
</main>
`}const r=()=>localStorage.getItem("user")!==null;function c(t,e){window.location.pathname===t&&e()}function s(t,e){document.getElementById(t).innerHTML=e}c("/",()=>{s("root",n({isLoggedIn:r()}))});c("/login",()=>{s("root",d())});c("/profile",()=>{s("root",b({isLoggedIn:r()}))});const g=()=>{const t=window.location.pathname,e=r();t==="/"?s("root",n({isLoggedIn:r()})):t==="/login"?s("root",d()):t==="/profile"?e?s("root",b({isLoggedIn:r()})):s("root",d()):s("root",p())};window.addEventListener("popstate",g);window.addEventListener("load",()=>{c("/",()=>{s("root",n({isLoggedIn:r()}))})});const v=function(t){if(t.target.id==="login-form"){t.preventDefault();const e=document.getElementById("username"),i=document.getElementById("password");e.value&&(localStorage.setItem("user",JSON.stringify({username:e.value,email:"",bio:""})),e.value="",i.value="",history.pushState({},"","/"),s("root",n({isLoggedIn:!0})))}if(t.target.id==="profile-form"){t.preventDefault();const e=t.target.querySelector("#username").value,i=t.target.querySelector("#email").value,a=t.target.querySelector("#bio").value;localStorage.setItem("user",JSON.stringify({username:e,email:i,bio:a}))}};window.addEventListener("submit",v);window.addEventListener("click",t=>{t.target.tagName==="A"&&(t.target.id==="logout"?(t.preventDefault(),localStorage.removeItem("user"),history.pushState({},"","/"),s("root",n({isLoggedIn:!1}))):t.target.id==="login"?(history.pushState({},"","/login"),s("root",d())):t.target.id==="profile"&&(history.pushState({},"","/profile"),s("root",b({isLoggedIn:r()}))))});
