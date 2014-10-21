//follow moues activity
	//store how far circle should move to get partway to the mouse
	var dist_per_frame =0;
	//make a counter for how many times it has done moveABit so we can stop it.
	var timer_counter=0; 
	//set up a name in new time so we can set in one function and clear it in another
	var movetimer;	
onload = init;
function init() { 
	makeOneMover();//puts a single circle on page
	//when user clicks anywhere, start circle moving towards that point
	document.onclick = function(evt){
		causeTrip(evt); 
	}
}
/**
 *start circle moving toward point where mouse is
 *
 *@param evt The mouse event (gives us mouse coordinates)
 */
 function causeTrip(evt){
	evt = (evt || event); //for certain browsers
	//var to store the high/low position of the mouse
	var destination_y = evt.clientY;
	//document.getElementsByTagName("div")[0].style.top = destination_y + "px";
	//store the overall distance to get circle to where mouse is
	var y_distance = destination_y - parseInt(document.getElementsByTagName("div")[0].style.top)
	//store how far circle should move to get partway to the mouse
	dist_per_frame = y_distance/30;
	//stop the timer & reset the counter
		clearInterval(movetimer);
		timer_counter=0;
	//setInterval() causes a function to repeatedly happen after every so many milliseconds
	movetimer = setInterval( function() { moveABit() }, 1000/30);
 } //closes function causeTrip(evt)
 

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
	//
}

 //moves the div a little . When repeated, seems like anim

   function moveABit(){
	var newc=document.getElementsByTagName("div")[0];
		console.log(parseInt(newc.style.top));
		 newc.style.top= (parseInt(newc.style.top) + dist_per_frame) + 'px';
		timer_counter++;//count that moveABit ran again
		//if it has done moveABit 30, times, clear the interval
		 if(timer_counter > 30){
			//stop the timer_counter
			clearInterval(movetimer);
			timer_counter =0; 
			}
		 }//end function moveABit()
