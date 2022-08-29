console.log("hi")
var GoTime = ["", "00", "02", "05", "07", "10"];
var class_2_timeline_7th = "체육 선택A 국어B 영어 창체";

function handleOnChange(e) {
    // 선택된 데이터 가져오기
    const data = e.value;
    
    document.getElementById('result_Timetable').innerText = data;
    document.getElementById("TimeTable").src="3학년 2학기 시간표/"+data+".png";
    
    var Rank = changeOrder(Number(data.replace("반", "")), new Date().getDay());
    document.getElementById("BabOrder").innerText = "우리반: "+ Rank + "번째 (12:" + GoTime[Rank] + " 출발)";

	if (data == "2반") {
		document.getElementById("Timeline_7th").style.display = "block";
		document.getElementById('class2_7th').innerHTML = "class_2_timeline_7th";

	} else {
		document.getElementById("Timeline_7th").style.display = "none";
	}
}

function changeOrder(classNumber, day) {
		var ChangeClass = [0,1,1,1,2,2,3,3,4,4,5,5];
		var RealRank = [0,1,2,3,4,5,1,2,3,4,5];
		
		console.log(classNumber);
		
		classNumber = ChangeClass[classNumber];
		
		console.log(classNumber);
		
		if (day == 0 || day == 6 || day == 1) {
				return classNumber;
		} else if (day == 2) {
				if (classNumber == 1) return 5;
				else return classNumber -1;
		} else if (day == 3) {
				if (classNumber == 1 || classNumber == 2) return classNumber + 3;
				else return classNumber -2
		} else if (day == 4) {
				if (classNumber == 4 || classNumber == 5) return classNumber - 3;
				else return classNumber +2;
		} else {
				if (classNumber == 5) return 1;
				else return classNumber +1;
		}
		
}


//0:일, 1:월, 2:화
