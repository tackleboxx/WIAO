window.onload = checkAvailableWidth;
window.onresize = checkAvailableWidth;
function checkAvailableWidth(){
	var container = document.getElementById("container");
	container.style.width = (document.body.clientWidth > 1100)? "1100px" : "auto";
}