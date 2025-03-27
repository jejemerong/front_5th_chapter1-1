import { handleRoute } from "./main"; // 제가 얘를 main.js 에서 갖고와서 써서 그런걸까여..?

console.log("url.hash", window.location.hash);

// TODO: 해시가 사라지는 이유
const path = window.location.hash.slice(1) || "/"; // 해시 지운거
console.log("path", path);

window.addEventListener("hashchange", handleRoute(path)); // 얘가 handleRoute 말고 콘솔 찍어봣을때 나오거든요...!
window.addEventListener("load", handleRoute(path));
