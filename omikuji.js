let name;
let username;
let userresult;

username = prompt("お名前を教えて下さい。");
if (username == "") {
    document.getElementById("name").innerHTML = "名無し";
} else {
    document.getElementById("name").innerHTML = username;
}

let rand = Math.floor(Math.random() * 5);
// if文で書くよりも、大吉、中吉...を配列で管理し、取得したほうが短くて良い
let result = ["大吉", "中吉", "小吉", "吉", "凶"]

document.getElementById("result").innerHTML = result[rand];