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
	elseif($flag=='prueba'){
		$session=getSession();
		getAppsDeveloper($session);
		
	}
	elseif ($flag=='getEvals') {
		$session=getSession();
		getEvaluationsDeveloper($session);
	}
	Function getAppsDeveloper($id) {
		$con=Conectarse();
		$arreglo=array();
		 $sql="SELECT * FROM aplicacion WHERE IdUsuario=".$id;
		$resultado=mysqli_query($con,$sql);
		While($row = mysqli_fetch_assoc($resultado)){
			array_push($arreglo,array('id'=>$row['idAplicacion'], 'name'=>$row['nombre'],'description'=>$row['Descripcion']));
		}
		echo json_encode($arreglo);
	}
	function getEvaluationsDeveloper($id) {
		$con=Conectarse();
		$arreglo=array();
		$sql="SELECT * FROM evaluacion WHERE idAplicacion IN (SELECT idAplicacion FROM aplicacion WHERE IdUsuario=".$id.")";
		$resultado=mysqli_query($con,$sql);
		While($row = mysqli_fetch_assoc($resultado)){
			array_push($arreglo,array('id'=>$row['idEvaluacion'], 'name'=>$row['titulo'],'description'=>$row['Descripcion']));
		}
		echo json_encode($arreglo);
	}
	
	/*
	$resultado=mysqli_query($con,$sql);
		While($row = mysqli_fetch_assoc($resultado)){
			array_push($arreglo,array('id'=>$row['idAplicacion'], 'name'=>$row['nombre']));
		}
		echo json_encode($arreglo);*/
 ?>