<?php 
include 'conex.php';
$flag=$_POST['flag'];
$con=Conectarse();
session_start();
if ($flag='addEvaluation') {
	addApp();
}
else{
	echo "nada";
}
function evaluation()
{
	$con=Conectarse();
	$session=getSession();
	$name=$_POST['name'];
	$minAge=$_POST['minAge'];
	$maxAge=$_POST['maxAge'];
	$description=$_POST['description'];
	$date=$_POST['date'];
	$idApp=$_POST['idApp'];
	$tipo=$_POST['type'];
	$sql= "INSERT INTO evaluacion VALUES(default,'$name',$description',$minAge,$maxAge,$idApp)";
	if (mysqli_query($con, $sql)) {
    echo "Ok";
}
else{
	echo  mysqli_error($con);
}
}
function addForm(){
	
	} ?>