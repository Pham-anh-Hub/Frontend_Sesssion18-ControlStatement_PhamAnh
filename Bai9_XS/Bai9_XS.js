let hour = +prompt(`Nhập vào giờ`);
let minute = +prompt(`Nhập vào phút`);
let second = +prompt(`Nhập vào giây`);

if((hour>=0 && hour<=24) && (minute>=0 && minute<=60) && (second>=0 && second<=60) ){
    let hourUnit;
    if(hour >= 0 && hour <= 12){
        hourUnit = "AM";
        hour = hour % 12;
        console.log(`${hour}:${minute}:${second} ${hourUnit}`);    
    }else if(hour >= 12 && hour <= 24){
        hourUnit = "PM";
        hour = hour % 12;
        console.log(`${hour}:${minute}:${second} ${hourUnit}`);    
    } 
}else{
    alert(`Thời gian nhập vào chưa hợp lệ`);
}


// if(hour >= 0 && hour <= 12){
//     hourUnit = "AM";
//     console.log(`${hour}:${minute}:${second} ${hourUnit}`)
// }else if(hour > 12 && hour <= 24){
//     hourUnit = "PM";
//     hour = hour - 12;
//     console.log(`${hour}:${minute}:${second} ${hourUnit}`)
// }