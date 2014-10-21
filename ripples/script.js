//rippling click activity
document.onmousemove = 
function(evt) { 
	makeOneCircle(evt);
}

function makeOneCircle(evt){
	evt = (evt || event) //makes all browsers understand the event
	//make a new circle
	var newc = document.createElement("div");
	newc.style.height="75px";
	newc.style.width="75px";
	newc.style.opacity="1";
	newc.style.borderRadius ="50px";
	newc.style.border="solid #4ef 2px";
	newc.style.position="absolute";
	newc.style.top=evt.clientY +"px";
	newc.style.left=evt.clientX +"px";
	newc.style.transition="width .2s ease-out, height .2s ease-out, opacity .2s ease-out";
	newc.style.webkitTransition ="width .2s ease-out, height .2s ease-out, opacity .2s ease-out";
	//add "body" below
	document.body.appendChild(newc);
	//setTimeout() causes a function to happen after a # of milliseconds
	setTimeout( function(){
					newc.style.height="150px";
					newc.style.width="150px";
					newc.style.opacity="0";
				}, 0);
}
