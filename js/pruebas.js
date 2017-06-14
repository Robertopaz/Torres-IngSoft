function createEvaluation(){
	enviar=new XMLHttpRequest;
	enviar.open('POST','php/interfazEvaluacion.php');
	enviar.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	enviar.send('flag='+'crearEvaluacion');
		enviar.onreadystatechange = function(){
	  	if(enviar.readyState == 4 && enviar.status == 200){
	  		respuesta=enviar.responseText;
	  		alert(respuesta)

	  	}
	  }
}
function addPregunta(){
	titulo="titulo";
	enviar=new XMLHttpRequest;
	enviar.open('POST','php/interfazEvaluacion.php');
	enviar.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	enviar.send('flag='+'agregarPregunta'+'&titulo='+titulo);
		enviar.onreadystatechange = function(){
	  	if(enviar.readyState == 4 && enviar.status == 200){
	  		respuesta=enviar.responseText;
	  		alert(respuesta)

	  	}
	  }
}
function getPreguntas(){
	enviar=new XMLHttpRequest;
	enviar.open('POST','php/interfazEvaluacion.php');
	enviar.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	enviar.send('flag='+'obtenerPreguntas');
		enviar.onreadystatechange = function(){
	  	if(enviar.readyState == 4 && enviar.status == 200){
	  		respuesta=enviar.responseText;
	  		alert(respuesta)

	  	}
	  }
}