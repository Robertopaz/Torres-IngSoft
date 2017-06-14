function loadAvalaible() {
	enviar=new XMLHttpRequest;
	enviar.open('POST','php/evaluator.php');
	enviar.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	enviar.send('flag='+'availableEvaluations');
	enviar.onreadystatechange = function(){
	  	if(enviar.readyState == 4 && enviar.status == 200){
			respuesta=enviar.responseText;
	  		alert(respuesta);
	  	}
	  }
}
function loadNotDone() {
	enviar=new XMLHttpRequest;
	enviar.open('POST','php/evaluator.php');
	enviar.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	enviar.send('flag='+'acceptedEvaluations');
	enviar.onreadystatechange = function(){
	  	if(enviar.readyState == 4 && enviar.status == 200){
	  		respuesta=enviar.responseText;
	  		alert(respuesta);
	  	}
	  }
}
function loadAccepted() {
	enviar=new XMLHttpRequest;
	enviar.open('POST','php/evaluator.php');
	enviar.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	enviar.send('flag='+'acceptedEvaluations');
	enviar.onreadystatechange = function(){
	  	if(enviar.readyState == 4 && enviar.status == 200){
	  		respuesta=enviar.responseText;
	  		alert(respuesta);
	  	}
	  }
}
function acceptEvaluation(id){
	enviar=new XMLHttpRequest;
	enviar.open('POST','php/evaluator.php');
	enviar.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	enviar.send('flag='+'acceptedEvaluations');
	enviar.onreadystatechange = function(){
	  	if(enviar.readyState == 4 && enviar.status == 200){
	  		respuesta=enviar.responseText;
	  		alert(respuesta);
	  	}
	  }
}