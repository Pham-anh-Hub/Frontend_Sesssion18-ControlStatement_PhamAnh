
let userName = prompt(`Mời nhập tên người dùng:`);

if (userName === "ADMIN") {
    let password = prompt(`Mời nhập mật khẩu`);
    if (password === "TheMaster") {
        document.write(`<h1>Welcome</h1>`);
    } else if (password === null) {
        document.write(`<h1>Cancelled</h1>`);
    } else {
        document.write(`<h1>Wrong password</h1>`);
    }
} else if (userName === null) {
document.write(`<h1>Cancelled</h1>`);
} else {
document.write(`<h1>I Don't know you</h1>`);
}