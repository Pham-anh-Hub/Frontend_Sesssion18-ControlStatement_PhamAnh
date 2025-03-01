//Tính thuế thu nhập cá nhân
let salary = +prompt(`Nhập lương: `)
let tax;
if(salary < 5000000){
    tax = 0;    
}else if(salary >= 5000000 && salary < 10000000){
    tax = salary * 0.05;
}else if(salary >= 10000000 && salary < 18000000){
    tax = salary * 0.1;
}else if(salary >= 18000000 && salary < 32000000){
    tax = salary * 0.15;
}else {
    tax = salary * 0.2;
}
document.write(`Thuế: `, tax);

//Yêu cầu kiểm tra trạng thái http

const httpCode = 200;
switch(httpCode){
    case 200:
        document.write(`Thành công `);
        break;
    case 201:
        document.write(`Thêm thành công`);
        break;
    case 400:
        document.write(`Lỗi request`);
        break;
    case 404:
        document.write(`Không tìm thấy`);
        break;
    case 500:
        document.write(`Lỗi server`);
        break;
}

//Kiểm tra trạng thái nhân viên

//Các hằng số đại diện cho trạng thái nhân viên
const WORKING = "WORKING";
const ON_LEAVE = "ON_LEAVE";
const RESIGNED = "RESIGNED";
const TERMINATED = "TERMINATED";

let Status = prompt(`Nhập vào trạng thái nhân viên`).toUpperCase();

let result = Status === "WORKING" ? "Dang lam viec" : Status === "ON_LEAVE" ? "Dang nghi phep" : Status === "RESIGNED" ? "Da nghi viec" : Status === "TERMINATED" ? "Bi sa thai" : "Trang thai khong hop le";

document.write(`Trạng thái nhân viên: ${result}`);
