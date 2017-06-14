<?php 
/**
 * 
 */
include 'pregunta.php';
include 'Actividad.php';

	
	
 class Evaluacion
 {
 	private $arregloPreguntas;
 	private $objetoActividad;

 	public function __construct(){
 		$objetoActividad = new Actividad();
 		$arregloPreguntas=[];
 	}

 	public function agregarPregunta($titulo)
 	{
 		$objetoPregunta= new Pregunta('quique');
 		$objetoPregunta->setTituloPregunta($titulo);
 		$arregloPreguntas[] = $objetoPregunta;
 		return $arregloPreguntas;
 	}
 	public function obtenerPreguntas()
 	{

 		return $arregloPreguntas;
 	}
 } ?>