function is_checked() {
    var C = document.getElementById("checkbox1").checked;
    // document.getElementById("p123").innerText = C;
    if (C == true) {
        document.getElementById("ChangeTimeTable").style.visibility = "hidden";
        document.getElementById("TimeTable").src = "시간표들/모의고사.png";
        document.getElementById("Bab_And_Dday").style.visibility = "hidden";
    } else {
        document.getElementById("ChangeTimeTable").style.visibility = "visible";
        document.getElementById("TimeTable").src = "시간표들/대덕고 3-1 자세히.png";
        document.getElementById('result').innerText = "1반";
        document.getElementById("Bab_And_Dday").style.visibility = "visible";
    }
}