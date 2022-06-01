function handleOnChange(e) {
    // 선택된 데이터 가져오기
    const data = e.value;

    // 데이터 출력
    document.getElementById('result').innerText = data;
    document.getElementById("TimeTable").src="시간표들(배경 제거)/대덕고 "+data+" 자세히.png";
}