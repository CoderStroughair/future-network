<?php
	echo "Hello world";
	$f = fopen("/var/www/file.txt", "w");
	fwrite($f, "Hello world");
	fclose($f);
?>
