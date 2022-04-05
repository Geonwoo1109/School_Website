var KEY="626f330394384c3980b83f0727f7a9de";

var main = new Date();
var Y = String(main.getFullYear());
var M = String(main.getMonth()+1);
if (M.length == 1) M = "0" + M;
var D = String(main.getDate());
if (D.length == 1) D = "0" + D;

//중식
$.ajax({
	method: "GET",
	url: "https://open.neis.go.kr/hub/mealServiceDietInfo?KEY=" + KEY
	+ "&Type=json&plndex=1&pSize=100&ATPT_OFCDC_SC_CODE=G10&SD_SCHUL_CODE=7430030&MLSV_MYD="
	+ Y+M+D + "&MLSV_FROM_YMD=" + Y+M+D + "&MLSV_TO_YMD=20221231"
})
	.done(function( msg ) {
		$( "#middle" ).append( JSON.parse(msg).mealServiceDietInfo[1].row[0].DDISH_NM.replace(/ /g, "\n") );
	});

//석식
$.ajax({
	method: "GET",
	url: "https://open.neis.go.kr/hub/mealServiceDietInfo?KEY=" + KEY
	+ "&Type=json&plndex=1&pSize=100&ATPT_OFCDC_SC_CODE=G10&SD_SCHUL_CODE=7430030&MLSV_MYD="
	+ Y+M+D + "&MLSV_FROM_YMD=" + Y+M+D + "&MLSV_TO_YMD=20221231&MMEAL_SC_CODE=3"
})
	.done(function( msg ) {
		//alert("1");
		$( "#last" ).append( JSON.parse(msg).mealServiceDietInfo[1].row[0].DDISH_NM.replace(/ /g, "\n") );
	});


console.log("gd");

