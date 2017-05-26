<?php 
	include 'conex.php';
	$flag=$_POST['flag'];
	$con=Conectarse();
	session_start();
	function FunctionName($value='')
	{
		# code...
	}
	if ($flag=='log-val') {
		$usuario=$_POST['u'];
		$password=$_POST['p'];
		$sql="SELECT * FROM usuario WHERE correo='".$usuario."' AND contrasena='".$password."'";
		$resultado=mysqli_query($con,$sql);
		$row=mysqli_fetch_array($resultado,MYSQLI_NUM);
		$numRows=mysqli_num_rows($resultado);
		if ($resultado->num_rows===1){
			echo "Si";
			setSession($row[0]);
		}
		else{
			echo "No";
		}
		
	}
	elseif ($flag=='load-profile') {
		$session=getSession();
		$sql="SELECT * FROM usuario WHERE idUsuario=".$session;
		$resultado=mysqli_query($con,$sql);
		$row=mysqli_fetch_array($resultado,MYSQLI_NUM);
		if ($row[7]=="No") {
			if ($row[4]=="M") {
				$row[7]="man.png";
			}
			else{
				$row[7]="woman.png";
			}
		}
		$arreglo = array('name' => $row[1],'img'=>$row[7] );
		echo json_encode($arreglo);
	}
	elseif ($flag=='getDisponibles') {
		echo "Disponibles";
	}
	elseif ($flag=='getResueltas') {
		
	}
	elseif ($flag=='') {
		
	}
	
 ?>