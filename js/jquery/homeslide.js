//_______________________Slide start


var sNum=1; //初始化显示的图片
var nNum=4; //图片的数量
var Sec=2500; //切换图片的速度
var S_id;
function FocusSlide(v){
	var i;
	for(i=1;i<=nNum;i++){
		eval("document.getElementById(\"Slide_tit_"+i+"\").className=\"g\"");
		eval("document.getElementById(\"Slide_img_"+i+"\").style.display=\"none\"");
	}
		eval("document.getElementById(\"Slide_tit_"+v+"\").className=\"r\"");
		eval("document.getElementById(\"Slide_img_"+v+"\").style.display=\"\"");
		SetNum(v+1);
		clearTimeout(S_id);
		S_id = setTimeout("FocusSlide(sNum)",Sec);
}
function SetNum(v){
	sNum=v;
	if(sNum>nNum) sNum=1;
}
S_id = setTimeout("FocusSlide(sNum)",Sec);