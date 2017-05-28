<?php 
include 'conex.php';
$flag=$_POST['flag']
if ($flag='addApp') {
	addApp()
}
function addApp()
{
	$session=getSession();
	$name=$_POST['name'];
	$url=$_POST['url'];
	$description=$_POST['description'];
	$date=$_POST['date'];
	$idUser=$session;
	$sql= "INSERT INTO aplicacion VALUES(default,'$name','$url')";
	echo $sql;
}
 ?>