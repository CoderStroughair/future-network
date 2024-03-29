<!-- This Webpage was created by Michael Stroughair in the Summer of 2015 for the ESB Future Network model-->
<!DOCTYPE html>
<html>
	<head>
		<title>Future Networks Model</title>
		<link href="style.css" rel = "stylesheet">
	</head>
	<body>
	<!--Full Page refers to a Div that takes up the full page - Allows for a fullscreen background picture-->
		<div class = "full_page">
			<!--Header holds only the Timer Div - mostly legacy code left over from original Layout-->
			<div class = "header">
				<div id = "timer">
				</div>
			</div>
			<!--Payload is the second Div in full_page, holds the rest of the page inside it-->
			<div class = "payload">
				<!--box_left is the left box bordered by the size of the opaque background. Holds the barcharts and values for power usage-->
				<div class = "box_left">
					<h2> Statistics </h2>
					<!--This div does very little other than a small amount of formatting for the boxes inside box_left-->
					<div id = "variables">
						<!--names holds the only static values on the page-->
						<div id = "names" class = "barcharts">
								<div>Wind Turbine</div>
								<div>Battery</div>
								<div>Wave Turbine</div>
								<div>Power Stations</div>
								<div>Charging Stations</div>
								<div>Solar Panels</div>
								<div>Factory</div>
								<div>Shops</div>
								<div>House</div>
						</div>
						<!--values_red holds the first barchart, the usage meters for the sources-->
						<div id = "values_red" class = "barcharts_r">
								<div id = "wind_r"></div>
								<div id = "battery_r"></div>
								<div id = "wave_r"></div>
								<div id = "station_r"></div>
								<div id = "charge_r"></div>
								<div id = "solar_r"></div>
								<div id = "factory_r"></div>
								<div id = "shops_r"></div>
								<div id = "house_r"></div>
						</div>
						<!--values_green holds the second barchart, the generation meters for the sources-->
						<div id = "values_green" class = "barcharts">
								<div id = "wind"></div>
								<div id = "battery"></div>
								<div id = "wave"></div>
								<div id = "station"></div>
								<div id = "charge"></div>
								<div id = "solar"></div>
								<div id = "factory"></div>
								<div id = "shops"></div>
								<div id = "house"></div>
						</div>
						<!--External data that gives the usage and generation information in English-->
						<div id = "values_numbers" class = "barcharts">
						</div>
					</div>
				</div>
				<!--box_right holds the second box, just has an <iframe> inside it-->
				<div class = "box_right">
					<h2> State Info </h2>
					<!--External data that gives information regarding the current state of the model-->
					<!--<iframe id = "information" src= "state_1.html" Frameborder = "0"></iframe>-->
					<button type = "button" onclick = "getRequest('changeState.php',changeState,0)" class = "state_button">State 1</button>
					<button type = "button" onclick = "getRequest('changeState.php',changeState,0)" class = "state_button">State 2</button>
					<button type = "button" onclick = "getRequest('changeState.php',changeState,0)" class = "state_button">State 3</button>
				</div>
			</div>
		</div>
		<!--Hidden divs that hold the usage data-->
		<div id = "state_1" style="display: none;">
			<div class = "wind_v">+50kW</div>
			<div class = "battery_v">-30kW</div>
			<div class = "wave_v">+40kW</div>
			<div class = "station_v">0kW</div>
			<div class = "charge_v">-20kW</div>
			<div class = "solar_v">+30kW</div>
			<div class = "factory_v">-30kW</div>
			<div class = "shops_v">-30kW</div>
			<div class = "house_v">-10kW</div>
		</div>
		<div id = "state_2" style="display: none;">
			<div class = "wind_v">+10kW</div>
			<div class = "battery_v">+0kW</div>
			<div class = "wave_v">+20kW</div>
			<div class = "station_v">+10kW</div>
			<div class = "charge_v">+0kW</div>
			<div class = "solar_v">+30kW</div>
			<div class = "factory_v">-30kW</div>
			<div class = "shops_v">-30kW</div>
			<div class = "house_v">-10kW</div>
		</div>
		<div id = "state_3" style="display: none;">
			<div class = "wind_v">+10kW</div>
			<div class = "battery_v">+5kW</div>
			<div class = "wave_v">+20kW</div>
			<div class = "station_v">+0kW</div>
			<div class = "charge_v">+0kW</div>
			<div class = "solar_v">+30kW</div>
			<div class = "factory_v">-15kW</div>
			<div class = "shops_v">-15kW</div>
			<div class = "house_v">-5kW</div>
		</div>
		<!--Hidden iframe that holds the state value to update the python code-->
		<iframe id = "state_current" style="display: none;" src = "state2.html" Frameborder = "0"></iframe>
		<script type = "text/javascript" src = "script.js"></script>
	</body>
</html>

