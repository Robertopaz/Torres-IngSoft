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
			setSession($row[0],$row[8]);
			echo "Si";
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
			elseif($row[4]=="F"){
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
	elseif ($flag=='getPoints') {
		$session=getSession();
		getPuntos($session);
	}
	elseif ($flag=="register") {
		$nombre=$_POST['name'];
		$correo=$_POST['email'];
		$contrasena=$_POST['pass'];
		$sexo=$_POST['sex'];
		$edad=$_POST['old'];
		registerUser($nombre,$correo,$contrasena,$sexo,$edad);
	}
	function registerUser($nombre,$correo,$contrasena,$sexo,$edad)
	{
		$sql="SELECT * FROM usuario WHERE correo='".$correo."'";
		echo $sql;
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
	function getPuntos($id){
		$con=Conectarse();
		$sql="SELECT SUM(util) as util,SUM(Aporta) as Aporta,SUM(tiempoRespuesta) as tiempoRespuesta FROM valoracion  WHERE IdUsuario=".$id.";";
		$resultado=mysqli_query($con,$sql);
		While($row = mysqli_fetch_assoc($resultado)){
			$puntos=$row['util']+$row['Aporta']+$row['tiempoRespuesta'];
			echo $puntos;
		}
	}
	
	/*
	$resultado=mysqli_query($con,$sql);
		While($row = mysqli_fetch_assoc($resultado)){
			array_push($arreglo,array('id'=>$row['idAplicacion'], 'name'=>$row['nombre']));
		}
		echo json_encode($arreglo);*/
 ?>