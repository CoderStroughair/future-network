var innerDoc;
var state = 1;
var time = 1;
var update_datasheets = setInterval(function(){
	if (state === 1){
		document.getElementById("information").src = 'state_1.html';
		document.getElementById("values_numbers").src = "variable_data_1.html";
		//innerDoc = document.getElementById('values_numbers').contentWindow.document;
		//document.getElementById("test").innerHTML = document.getElementById("values_numbers").contentWindow.document.innerHTML;
		//document.getElementById("wind").className = document.getElementById('wind_n').innerHTML.match(/\d+/g)[0];
		document.getElementById("wind_n").innerHTML = document.getElementById("values_numbers").contentWindow.document.getElementById("wind_v").innerHTML;
		document.getElementById("wind_r").className = "nine_five";
		
		document.getElementById("battery").className = "two_five";
		document.getElementById("battery_r").className = "eight_five";
		
		document.getElementById("wave").className = "three_five";
		document.getElementById("wave_r").className = "seven_five";
		
		document.getElementById("station").className = "four_five";
		document.getElementById("station_r").className = "six";
		
		document.getElementById("charge").className = "five";
		document.getElementById("charge_r").className = "five";
		
		document.getElementById("solar").className = "six";
		document.getElementById("solar_r").className = "four";
		
		document.getElementById("factory").className = "seven";
		document.getElementById("factory_r").className = "three";
		
		document.getElementById("shops").className = "eight";
		document.getElementById("shops_r").className = "two";
		
		document.getElementById("house").className = "nine";
		document.getElementById("house_r").className = "one";
	}
	else if (state === 2){
		document.getElementById("information").src = 'state_2.html';
		//document.getElementById("values_numbers").src = "variable_data_2.html";
		document.getElementById("wind").className = "two";
		document.getElementById("wind_r").className = "zero";
		
		document.getElementById("battery").className = "three";
		document.getElementById("battery_r").className = "zero";
		
		document.getElementById("wave").className = "zero";
		document.getElementById("wave_r").className = "zero";
		
		document.getElementById("station").className = "five";
		document.getElementById("station_r").className = "zero";
		
		document.getElementById("charge").className = "two_five";
		document.getElementById("charge_r").className = "zero";
		
		document.getElementById("solar").className = "six";
		document.getElementById("solar_r").className = "zero";
		
		document.getElementById("factory").className = "four";
		document.getElementById("factory_r").className = "zero";
		
		document.getElementById("shops").className = "zero";
		document.getElementById("shops_r").className = "zero";
		
		document.getElementById("house").className = "nine";
		document.getElementById("house_r").className = "zero";
	}
	else if (state === 3){
		document.getElementById("information").src = 'state_3.html';
		//document.getElementById("values_numbers").src = "variable_data_3.html";
		document.getElementById("wind").className = "two";
		document.getElementById("wind_r").className = "zero";
		
		document.getElementById("battery").className = "three";
		document.getElementById("battery_r").className = "zero";
		
		document.getElementById("wave").className = "zero";
		document.getElementById("wave_r").className = "zero";
		
		document.getElementById("station").className = "five";
		document.getElementById("station_r").className = "zero";
		
		document.getElementById("charge").className = "two_five";
		document.getElementById("charge_r").className = "zero";
		
		document.getElementById("solar").className = "six";
		document.getElementById("solar_r").className = "zero";
		
		document.getElementById("house").className = "nine";
		document.getElementById("house_r").className = "zero";
		
		document.getElementById("factory").className = "four";
		document.getElementById("factory_r").className = "zero";
		
		document.getElementById("shops").className = "zero";
		document.getElementById("shops_r").className = "zero";
	}
	state=state+1;
	if (state > 3){
		state = 1;
	}
}, 1000);

var update_clock = setInterval(function(){
	if (time == 0){
		document.getElementById("timer").style.backgroundImage = "url(timer_1.png)";
	}
	else if (time == 1){
		document.getElementById("timer").style.backgroundImage = "url(timer_2.png)";		
	}
	else if (time == 2){
		document.getElementById("timer").style.backgroundImage = "url(timer_3.png)";		
	}
	else if (time == 3){
		document.getElementById("timer").style.backgroundImage = "url(timer_4.png)";		
	}
	time++;
	if (time == 4){
		time = 0;
	}
},15000)


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