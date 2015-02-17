<?php
$state = $_REQUEST['state'];
$fp = fopen("state.txt","w");
fputs=($fp, $state);
fclose($fp);
?>