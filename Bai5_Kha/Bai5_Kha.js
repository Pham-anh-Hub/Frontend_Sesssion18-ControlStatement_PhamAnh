let experience = +prompt(`Nhập số năm kinh nghiệm của nhân viên`);

if(experience < 1 && experience !== 0){
    document.write(`<h1>Nhân viên mới vào nghề</h1>`);
}else if(experience >= 1 && experience <= 3){
    document.write(`<h1>Nhân viên có kinh nghiệm</h1>`);
}else if( experience >= 4 && experience <= 6){
    document.write(`<h1>Chuyên viên</h1>`);
}else if(experience > 6){
    document.write(`<h1>Quản lý</h1>`);
}