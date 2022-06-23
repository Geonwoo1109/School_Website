function handleOnChange(e) {
    // 선택된 데이터 가져오기
    const timetable = e.value;

    // 데이터 출력
    document.getElementById('result_Timetable').innerText = timetable;
    document.getElementById("TimeTable").src="시간표들(배경 제거)/대덕고 "+timetable+" 자세히.png";
}
