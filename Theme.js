function theme(e) {
    // 선택된 데이터 가져오기
    const data = e.value;

    // 데이터 출력
    document.getElementById('result_Theme').innerText = data;
    //document.getElementById("TimeTable").src="시간표들(배경 제거)/대덕고 "+data+" 자세히.png";
    //document.getElementById('body').bgcolor = "#f4effb";
    if (data == "white") {
        document.body.style.backgroundColor = '#ffffff';
        document.getElementById('ChangeTimeTable').style.backgroundColor = "#bee9e8";
        document.getElementById('ChangeTheme').style.backgroundColor = "#bee9e8";
        document.querySelector('.Title').style.color = "#0f3368";
    }
    if (data == "purple") {
        document.body.style.backgroundColor = '#f4effb';
        document.getElementById('ChangeTheme').style.backgroundColor = "#e3cef6";
        document.getElementById('ChangeTimeTable').style.backgroundColor = "#e3cef6";
        // document.getElementById('end_1').style.color = "#710193";
        document.querySelector('.Title').style.color = "#502989";
        // document.querySelector('.Element').style.color = "#710193";
        // 
        // 
    }
    if (data == "blue") {
        document.body.style.backgroundColor = '#f2f4ff';
        document.getElementById('ChangeTimeTable').style.backgroundColor = "#bee9e8";
        document.getElementById('ChangeTheme').style.backgroundColor = "#bee9e8";
        document.querySelector('.Title').style.color = "#0f3368";
    }
}


// 약한 보라: #710193
// 강한 보라: #502989