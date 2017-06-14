<?php
class Pregunta
{
	private $tituloPregunta;
	public function __construct($parameter){
		$this->tituloPregunta=$parameter;
	}
	public function setTituloPregunta($titulo){
		$this->tituloPregunta=$titulo;
	}
	public function getTituloPregunta(){
		return $this->tituloPregunta;
	}

} ?>