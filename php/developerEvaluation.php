<?php 
include 'conex.php';
$flag=$_POST['flag'];
$con=Conectarse();
session_start();
if ($flag=='addEvaluation') {
	addApp();
}
elseif ($flag=='getPreguntasBase') {
	
}
else{
	echo "nada";
}
function evaluation()
{
	$session=getSession();
	$con=Conectarse();
	$session=getSession();
	$name=$_POST['name'];
	$minAge=$_POST['minAge'];
	$maxAge=$_POST['maxAge'];
	$description=$_POST['description'];
	$date=$_POST['date'];
	$idApp=$_POST['idApp'];
	$tipo=$_POST['type'];
	$jsonOBJ=json_decode($_POST['formulario']);
	$sql= "INSERT INTO evaluacion VALUES(default,'$name',$description',$minAge,$maxAge,$idApp); SELECT LAST_INSERT_ID();";
	$resultado=mysqli_query($con,$sql);
	$row=mysqli_fetch_array($resultado,MYSQLI_NUM);
	if (mysqli_query($con, $sql)) {
    addForm($row[0],$jsonOBJ);
}
else{
	echo  mysqli_error($con);
}
}
function getQuestions()
{
	$sql="SELECT * FROM PreguntasBase";
	echo $sql;
}



$prueba=array(1=>"foo", 2=>"bar", 3=>"baz", 4=>"blong");
$prueba= json_encode($prueba);
echo $prueba; ?>