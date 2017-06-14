<?php 
/**
 * 
 */
 class Actividad
 {
 	public $tituloActividad='';
 	public $descipcionActividad='';

 	public function __construct(){

 	}
 	public function getTituloActividad(){
 		return $this->tituloActividad;
 	}
 	public function setTituloActividad($titulo){
 		$this->tituloActividad=$titulo;
 	}
 	public function getDescripcionActividad(){
 		return $this->descipcionActividad;
 	}
 	public function setDescipcionActividad($descipcion){
 		$this->descipcionActividad=$descipcion;
 	}

 } 

 ?>