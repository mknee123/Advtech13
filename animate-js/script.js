//rippling click activity
onload = init;
function init() { 
	makeOneMover();
}

function makeOneMover(){
	//make a new circle
	var newc = document.createElement("div");
	newc.style.height="50px";
	newc.style.width="50px";
	newc.style.opacity="1";
	newc.style.borderRadius ="75px";
	newc.style.border="solid #FFF 2px";
	newc.style.position="absolute";
	newc.style.top="50px";
	newc.style.left="50px";
	//add "body" below
	document.body.appendChild(newc);
	//setInterval() causes a function to repeatedly happen after every so many milliseconds
	setInterval( function() { moveABit() }, 1000/30);
}

 //moves the div a little . When repeated, seems like anim

   function moveABit(){
	var newc=document.getElementsByTagName("div")[0];
		console.log(parseInt(newc.style.top));
		 newc.style.top= (parseInt(newc.style.top) + 5) + 'px';
		 //newc.style.left="150px";
		 //newc.style.opacity="0.5";
		 }//end function moveABit()
