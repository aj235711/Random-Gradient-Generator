var body = document.getElementById("gradient");
var button = document.querySelector("button");
var intervalb=document.querySelector("#intervalb");
var h5 = document.querySelector("h5");
var css = getComputedStyle(body);
var bg = css.background;

h5.innerHTML = bg;


button.addEventListener("click", createBG)

function createBG() {
	var arr = [[], [], []];
	for(var i = 0; i < 3; i++) {
		// if(!arr[i]) {
		// 	arr[i] = [];
		// }
		for(var j = 0; j < 3; j++) {
			arr[i][j] = Math.floor((Math.random() * 255) + 1);
		}
	}
	body.style.background = "linear-gradient(to right, rgb(" + arr[0][0] + ", " + arr[0][1] + ", " + arr[0][2] + "), rgb("
	+ arr[1][0] + ", " + arr[1][1] + ", " + arr[1][2] + "), rgb("
	+ arr[2][0] + ", " + arr[2][1] + ", " + arr[2][2] + "))";
	h5.innerHTML = body.style.background + ";";
}

intervalb.addEventListener("click",interbggen)
var settimer;
function interbggen() {
  clearInterval(settimer);
	var inter =  inter = document.getElementById("time").value;
  inter=inter*1000
  settimer= setInterval(createBG,inter)

}
