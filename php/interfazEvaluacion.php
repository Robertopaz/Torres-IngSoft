<?php 
	/*include 'pregunta.php';
	include 'actividad.php';
	$objetoActiviad= new Actividad();
	$objetoPregunta= new Pregunta('quique');
	$objetoActiviad->setTituloActividad('tituloActividad');
	$objetoActiviad->setDescipcionActividad('Descripcion de la actividad');
	echo $objetoActiviad->getTituloActividad();
	echo $objetoActiviad->getDescripcionActividad();
	$objetoPregunta->setTituloPregunta("titulo de pregunta");

	echo $objetoPregunta->getTituloPregunta();*/
	$flag=$_POST['flag'];
	include 'evaluacion.php';
	 $objetoEvaluacion;
$objetoEvaluacion= new Evaluacion();
	if ($flag=="agregarPregunta") {
		$tituloPregunta=$_POST['titulo'];
		$objetoEvaluacion->agregarPregunta($tituloPregunta);
	}
	elseif ($flag=="obtenerPreguntas") {
		echo $objetoEvaluacion->obtenerPreguntas();
	}

 ?>