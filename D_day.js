function alarm() {

    //var 월 = ["", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    return "[ 시험일정 ]"  
        //+ "\n4월 모평: " + D_day("Apr 13, 2022")
        + "\n중간고사: " + D_day("Apr 29, 2022")
        + "\n6월 모평: " + D_day("Jun 9, 2022")
        //+ "\n기말고사: " + D_day("Jun 30, 2022")
        //+ "\n7월 모평: " + D_day("Jul 6, 2022")
        + "\n수능: " + D_day("Nov 17, 2022")

        + "\n\n[ 기타 일정 ]"
        + "\n여름방학식: " + D_day("Jul 20, 2022");
}

function D_day(date) {
    var temp = Math.floor((new Date() - new Date(date)) / (1000*60*60*24));
    if (temp == 0) return "D-Day";
    else if (temp > 0) return "D+"+temp;
    else return "D"+temp;
}

document.getElementById("Schedule").innerText = alarm();