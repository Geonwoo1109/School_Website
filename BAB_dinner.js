var KEY="626f330394384c3980b83f0727f7a9de";

var main = new Date();
var Y = String(main.getFullYear());
var M = String(main.getMonth()+1);
if (M.length == 1) M = "0" + M;
var D = String(main.getDate());
if (D.length == 1) D = "0" + D;

var data, dataNumber, a=[], b =[];


//석식
$.ajax({
	method: "GET",
	url: "https://open.neis.go.kr/hub/mealServiceDietInfo?KEY=" + KEY
	+ "&Type=json&plndex=1&pSize=100&ATPT_OFCDC_SC_CODE=G10&SD_SCHUL_CODE=7430030&MLSV_MYD="
	+ Y+M+D + "&MLSV_FROM_YMD=" + Y+M+D + "&MLSV_TO_YMD=20221231&MMEAL_SC_CODE=3",
	async: false
})
	.done(function( msg ) {
		data = JSON.parse(msg).mealServiceDietInfo[1];
        dataNumber = JSON.parse(msg).mealServiceDietInfo[0].head[0].list_total_count;
		
	});

for (i=0; i<dataNumber; i++) {
    a.push(
        +data.row[i].MLSV_YMD.slice(4,6)+"월 "
        +data.row[i].MLSV_YMD.slice(6,8)+"일 급식<br>"
        // +data.row[i].MMEAL_SC_NM+""+"\n\n"
        +data.row[i].DDISH_NM.replace(/ /g, "\n")
    );
}

console.log(a);
document.getElementById("main").innerHTML = a.join("<br><br>");



// document.getElementById("end_1").innerText = "석식 ("+data석.MLSV_YMD.slice(4,6)+"."+data석.MLSV_YMD.slice(6,8)+")";
// document.getElementById("end_2").innerHTML = data석.DDISH_NM.replace(/ /g, "\n");



//async await
//http://www.tcpschool.com/ajax/ajax_server_request


// .done(function(json) {
//     $("<h1>").text(json.title).appendTo("body");
//     $("<div class=\"content\">").html(json.html).appendTo("body");
// })

//https://recollectionis.tistory.com/167