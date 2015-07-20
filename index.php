<html>
	<head>	
	<link href="style.css" rel = "stylesheet">
	<?php $state = file_get_contents('./data.txt'); ?>
	<title>Future Network Display</title>
	</head>
	<body>
		<div class = "webpage">
		
			<div class = "header">
			
				<div class = "timer">
				</div>	
				
			</div>
			
			<div class = "data">
			
				<div class = "stats">
					<h3> Statistics </h3>
					<p><iframe class = "stats_iframe" src = "variable_names.html" Frameborder = "0"></iframe></p>
					<?php
						$state = file_get_contents('./data.txt');
						if ($state == 1){
							echo "</p><iframe class = 'data_iframe' src = 'variable_data_1.html' Frameborder = '0'></iframe></p>";				
						}
						elseif ($state == 2){
							echo "</p><iframe class = 'data_iframe' src = 'variable_data_2.html' Frameborder = '0'></iframe></p>";	
						}
						else{
							echo "</p><iframe class = 'data_iframe' src = 'variable_data_3.html' Frameborder = '0'></iframe></p>";	
						}
					?>

				</div>
				
				<div class = "state-info">
					<h3> State Info </h3>
					<?php
						$state = file_get_contents('./data.txt');
					?>
					<p><iframe class = "states_iframe" <?php echo "src = state_".$state.".html"; ?> Frameborder = "0"></iframe></p>;				

				</div>


			</div>
		</div>
	</body>
</html>

