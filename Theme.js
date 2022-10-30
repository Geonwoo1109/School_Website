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
        //document.querySelector('.Title').style.color = "#0f3368";
        //document.querySelector(".Element").style.color = "#164996";
        
        ChangeTheme("#0f3368", "#164996");
    }
    if (data == "purple") {
        document.body.style.backgroundColor = '#f4effb';
        document.getElementById('ChangeTheme').style.backgroundColor = "#e3cef6";
        document.getElementById('ChangeTimeTable').style.backgroundColor = "#e3cef6";
        // document.getElementById('end_1').style.color = "#710193";
        ChangeTheme("#502989", "#502989");
        
    }
    if (data == "blue") {
        document.body.style.backgroundColor = '#f2f4ff';
        document.getElementById("ChangeTimeTable").style.backgroundColor = "#bee9e8";
        document.getElementById('ChangeTheme').style.backgroundColor = "#bee9e8";
        ChangeTheme("#0f3368", "#164996");
    }
    if (data == "green") {
        document.body.style.backgroundColor = '#e7f6e9';
        document.getElementById("ChangeTimeTable").style.backgroundColor = "#b7e4c7";
        document.getElementById('ChangeTheme').style.backgroundColor = "#b7e4c7";
        ChangeTheme("#1b4332", "#2d6a4f");
    }
}

function ChangeTheme(Tc, Ec) {
		for (i=0; i<(".Title").length-1; i++) {
        document.querySelectorAll(".Title")[i].style.color = Tc;
		}
		for (i=0; i<(".Element").length-1; i++) {
        document.querySelectorAll(".Element")[i].style.color = Ec;
		}
}


// 약한 보라: #710193
// 강한 보라: #502989
// 민트: e8fff5
// 클래스는 배열 형태로 불러와진다