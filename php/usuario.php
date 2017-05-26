<?php 
	include 'conex.php';
	$flag=$_POST['flag'];
	$con=Conectarse();
	function FunctionName($value='')
	{
		# code...
	}
	if ($flag='log-val') {
		$usuario=$_POST['u'];
		$password=$_POST['p'];
		$sql="SELECT * FROM usuario WHERE correo='".$usuario."' AND contrasena='".$password."'";
		$resultado=mysqli_query($con,$sql);
		$numRows=mysqli_num_rows($resultado);
		if ($resultado->num_rows===1){
			echo "Si";
		}
		else{
			echo "No";
		}
		
	}
	elseif ($flag='getPerfil') {
		$userId=$_POST['u'];
		$userMode=validateUserMode($userId);

	}
	elseif ($flag='getDisponibles') {
		echo "Disponibles";
	}
	elseif ($flag=='getResueltas') {
		
	}
	elseif ($flag=='') {
		
	}
	
 ?>