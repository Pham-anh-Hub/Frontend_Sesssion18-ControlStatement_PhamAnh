let number = +prompt(`Nhập và 1 số tự nhiên`);

switch(number){
    case 0:
        document.write(`<h1>Số không</h1>`);
        break;
    case 1:
        document.write(`<h1>Số một</h1>`);
        break;
    case 2:
        document.write(`<h1>Số hai</h1>`);
        break;
    case 3:
        document.write(`<h1>SỐ ba</h1>`);
        break;
    case 4:
        document.write(`<h1>Số bôn</h1>`);
        break;
    case 5:
        document.write(`<h1>Số năm</h1>`);
        break;
    case 6:
        document.write(`<h1>Số sáu</h1>`);
        break;
    case 7:
        document.write(`<h1>Số bảy</h1>`);
        break;
    case 8:
        document.write(`<h1>Số tám</h1>`);
        break;
    case 9:
        document.write(`<h1>Số chín</h1>`);
        break;
    default:
        document.write(`<h1>Số không thuộc khoảng 0-9</h1>`);
        break;
}