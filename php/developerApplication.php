<?php 
include 'conex.php';
$flag=$_POST['flag'];
$con=Conectarse();
session_start();
if ($flag='addApp') {
	addApp();
}
else{
	echo "nada";
}
function addApp()
{
	$con=Conectarse();
	$session=getSession();
	$name=$_POST['name'];
	$url=$_POST['url'];
	$description=$_POST['description'];
	$date=$_POST['date'];
	$category=$_POST['cat'];
	$idUser=$session;
	$sql= "INSERT INTO aplicacion(`nombre`, `url`, `Descripcion`, `fechaRegistro`, `IdUsuario`, `Categoria`) VALUES('$name','$url','$description','$date',$idUser,'$category')";
	if (mysqli_query($con, $sql)) {
    echo "Ok";
}
else{
	echo  $sql;
}
}
 ?>