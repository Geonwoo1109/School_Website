function Time() {
    var target_ = document.getElementById("time");
    var ampm = document.getElementById("ampm");
    var today = document.getElementById("date");

    var week = ["일", "월", "화", "수", "목", "금", "토"];

    var date = new Date();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();

    var year = date.getFullYear();
    var month = date.getMonth();
    var day_d = date.getDate();
    var day_w = date.getDay();

    target_.innerText =
        (hour>12 ? hour-12 : hour)
        +":"+ (min<10 ? "0":"") + min
        +":"+ (sec<10 ? "0":"") + sec;

    ampm.innerText = hour>12 ? "PM" : "AM";

    today.innerText =
        year + "년 " +
        (month=12 ? month+1 : month) + "월 " +
        day_d + "일 " +
        week[day_w] + "요일";
}

Time();
setInterval(Time, 1000);