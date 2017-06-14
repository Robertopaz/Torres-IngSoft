<?php 
	include 'conex.php';
	$flag=$_POST['flag'];
	$con=Conectarse();
	session_start();
	if ($flag=="loadProfileEvaluator") {
			echo "Perfil";	
	}
	elseif ($flag=="availableEvaluations") {
		availableEvaluations();
	}
	elseif ($flag=="acceptedEvaluations") {
		echo "Aceptadas";
	}
	elseif ($flag=="acceptEvaluation") {
		# code...
	}
	elseif ($flag=="notDoneEvaluations") {
		echo "No realizadas pero aceptadas";
	}
	elseif ($flag=="doneEvaluations") {
		echo "Realizadas";
	}

	function availableEvaluations()
	{
		$con=Conectarse();
		$usuario=getSession();
		$sql= "SELECT gustos FROM usuario WHERE IdUsuario=".$usuario;
		$resultado=mysqli_query($con,$sql);
		$row=mysqli_fetch_array($resultado,MYSQLI_NUM);
		$gustos= explode(',', $row[0]);
		$sql="SELECT * FROM evaluacion WHERE idAplicacion IN(SELECT idAplicacion FROM aplicacion WHERE Categoria='".$gustos[0]."' OR Categoria='".$gustos[1]."')";
		$resultado=mysqli_query($con,$sql);
		while($row=mysqli_fetch_assoc($resultado)){
			echo $row['idEvaluacion'].'<br>';		
			 	
		}

	}
	function acceptEvaluation($idEvaluation)
	{
		$usuario=getSession();
		$sql="SELECT * FROM asignacion WHERE IdUsuario=".$usuario." AND fechaEvaluado";
	}
	function acceptedEvaluations()
	{
		$usuario=getSession();
	}
?>