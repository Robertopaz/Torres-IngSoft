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
	$sql= "INSERT INTO evaluacion VALUES(default,'$name',$description',$minAge,$maxAge,$idApp); SELECT LAST_INSERT_ID();";
	$resultado=mysqli_query($con,$sql);
	$row=mysqli_fetch_array($resultado,MYSQLI_NUM);
	if (mysqli_query($con, $sql)) {
    echo "Ok";
    addForm($row[0]);
}
else{
	echo  mysqli_error($con);
}
}
function addForm($idEvaluation){
	
	} ?>