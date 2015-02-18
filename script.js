//Written by Michael Stroughair, Summer 2015, for the purpose of powering the ESB's Future Network Model Web Interface
var innerDoc;
var state = "1";
var time = 2;
var signs;

//update_sheet: Moves the state 
function changeState(){
	state = "3";
	document.getElementById("state_current").innerHTML = state;
	update_sheet();
}
function update_sheet(){
	if (state === "1"){
		//document.getElementById("information").src = 'state_1.html';
		document.getElementById("values_numbers").innerHTML = document.getElementById("state_1").innerHTML;
	}
	else if (state === "2"){
		//document.getElementById("information").src = 'state_2.html';
		document.getElementById("values_numbers").innerHTML = document.getElementById("state_2").innerHTML;
	}
	else if (state === "3"){
		//document.getElementById("information").src = 'state_3.html';
		document.getElementById("values_numbers").innerHTML = document.getElementById("state_3").innerHTML;
	}
	
	/* Will try to come back to the code below so that I'm not parsing HTML as much as I am, doesn't work this way though at the moment.*/
	//var list = document.querySelectorAll('div.values_numbers ul li');
	//signs = list.map(firstCharOfContent);
	signs = document.getElementById('values_numbers').innerHTML.match(/[+-]/g);
	if (signs[0] == "+")
	{
		document.getElementById("wind").className = convertdouble(document.getElementById('values_numbers').innerHTML.match(/\d+/g)[0]);
		document.getElementById("wind_r").className = "zero";
	}
	else
	{
		document.getElementById("wind_r").className = convertdouble(document.getElementById('values_numbers').innerHTML.match(/\d+/g)[0]);
		document.getElementById("wind").className = "zero";
	}
	if (signs[1] == "+")
	{
		document.getElementById("battery").className = convertdouble(document.getElementById('values_numbers').innerHTML.match(/\d+/g)[1]);
		document.getElementById("battery_r").className = "zero";
	}
	else
	{
		document.getElementById("battery").className = "zero";
		document.getElementById("battery_r").className = convertdouble(document.getElementById('values_numbers').innerHTML.match(/\d+/g)[1]);
	}
	if (signs[2] == "+")
	{
		document.getElementById("wave").className = convertdouble(document.getElementById('values_numbers').innerHTML.match(/\d+/g)[2]);
		document.getElementById("wave_r").className = "zero";	
	}
	else
	{
		document.getElementById("wave").className = "zero";
		document.getElementById("wave_r").className = convertdouble(document.getElementById('values_numbers').innerHTML.match(/\d+/g)[2]);		
	}
	if (signs[3] == "+")
	{
		document.getElementById("station").className = convertdouble(document.getElementById('values_numbers').innerHTML.match(/\d+/g)[3]);
		document.getElementById("station_r").className = "zero";
	}
	else
	{
		document.getElementById("station").className = "zero";
		document.getElementById("station_r").className = convertdouble(document.getElementById('values_numbers').innerHTML.match(/\d+/g)[3]);
	}
	if (signs[4] == "+")
	{
		document.getElementById("charge").className = convertdouble(document.getElementById('values_numbers').innerHTML.match(/\d+/g)[4]);
		document.getElementById("charge_r").className = "zero";
	}
	else
	{
		document.getElementById("charge").className = "zero";
		document.getElementById("charge_r").className = convertdouble(document.getElementById('values_numbers').innerHTML.match(/\d+/g)[4]);		
	}
	if (signs[5] == "+")
	{
		document.getElementById("solar").className = convertdouble(document.getElementById('values_numbers').innerHTML.match(/\d+/g)[5]);
		document.getElementById("solar_r").className = "zero";
	}
	else
	{
		document.getElementById("solar").className = "zero";
		document.getElementById("solar_r").className = convertdouble(document.getElementById('values_numbers').innerHTML.match(/\d+/g)[5]);		
	}
	if (signs[6] == "+")
	{
		document.getElementById("factory").className = convertdouble(document.getElementById('values_numbers').innerHTML.match(/\d+/g)[6]);
		document.getElementById("factory_r").className = "zero";
	}
	else
	{
		document.getElementById("factory").className = "zero";
		document.getElementById("factory_r").className = convertdouble(document.getElementById('values_numbers').innerHTML.match(/\d+/g)[6]);
	}
	if (signs[7] == "+")
	{
		document.getElementById("shops").className = convertdouble(document.getElementById('values_numbers').innerHTML.match(/\d+/g)[7]);
		document.getElementById("shops_r").className = "zero";
	}
	else
	{
		document.getElementById("shops").className = "zero";
		document.getElementById("shops_r").className = convertdouble(document.getElementById('values_numbers').innerHTML.match(/\d+/g)[7]);
	}
	if (signs[8] == "+")
	{
		document.getElementById("house").className = convertdouble(document.getElementById('values_numbers').innerHTML.match(/\d+/g)[8]);
		document.getElementById("house_r").className = "zero";
	}
	else
	{
		document.getElementById("house").className = "zero";
		document.getElementById("house_r").className = convertdouble(document.getElementById('values_numbers').innerHTML.match(/\d+/g)[8]);
	}	
	//state=state+1;
	//if (state > 3){
	//	state = 1;
	//}
}

update_sheet();
//Updates the Clock image, and calls the update function every time it hits the first segment.
var update_clock = setInterval(function(){
	//document.getElementById("state_current").contentWindow.location.reload(true);
	document.getElementById("state_current").contentWindow.document.body.innerHTML = state;
	//if (state != innerDoc){
	//	state = innerDoc;
	//	update_sheet();
	//}
},500)
//Takes a number in numerical form, and converts it into a text equivalent
function convert(number){

	switch (number){
		case("0"):
			return "zero";
			break;
		case ("5"):
			return "zero_five";
			break;
		case ("10"):
			return "one";
			break;
		case ("15"):
			return "one_five";
			break;
		case ("20"):
			return "two";
			break;
		case ("25"):
			return "two_five";
			break;
		case ("30"):
			return "three";
			break;
		case ("35"):
			return "three_five";
			break;
		case ("40"):
			return "four";
			break;
		case ("45"):
			return "four_five";
			break;
		case ("50"):
			return "five";
			break;
		case ("55"):
			return "five_five";
			break;
		case ("60"):
			return "six";
			break;
		case ("65"):
			return "six_five";
			break;
		case ("70"):
			return "seven";
			break;
		case ("75"):
			return "seven_five";
			break;
		case ("80"):
			return "eight";
			break;
		case ("85"):
			return "eight_five";
			break;
		case ("90"):
			return "nine";
			break;
		case ("95"):
			return "nine_five";
			break;
		case ("100"):
			return "ten";
			break;	
		default:
			return "five";
			break;
	}	
}

//same as above, but the numbers take up twice the space, assuming they don't go above 50 KJ
function convertdouble(number){

	switch (number){
		case("0"):
			return "zero";
			break;
		case ("5"):
			return "one";
			break;
		case ("10"):
			return "two";
			break;
		case ("15"):
			return "three";
			break;
		case ("20"):
			return "four";
			break;
		case ("25"):
			return "five";
			break;
		case ("30"):
			return "six";
			break;
		case ("35"):
			return "seven";
			break;
		case ("40"):
			return "eight";
			break;
		case ("45"):
			return "nine";
			break;
		case ("50"):
			return "ten";
			break;	
		default:
			return "five";
			break;
	}	
}
function getRequest(url, success, error) {
    var req = false;
    try{
        // most browsers
        req = new XMLHttpRequest();
    } catch (e){
        // IE
        try{
            req = new ActiveXObject("Msxml2.XMLHTTP");
        } catch(e) {
            // try an older version
            try{
                req = new ActiveXObject("Microsoft.XMLHTTP");
            } catch(e) {
                return false;
            }
        }
    }
    if (!req) return false;
    if (typeof success != 'function') success = function () {};
    if (typeof error!= 'function') error = function () {};
    req.onreadystatechange = function(){
        if(req.readyState == 4) {
            return req.status === 200 ? 
                success(req.responseText) : error(req.status);
        }
    }
    req.open("GET", url, true);
    req.send(null);
    return req;
}
