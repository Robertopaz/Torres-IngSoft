function loadProfile() {
	enviar2=new XMLHttpRequest;
	enviar2.open('POST','php/usuario.php');
	enviar2.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	enviar2.send('flag='+'load-profile');
	enviar2.onreadystatechange = function(){
	  	if(enviar2.readyState == 4 && enviar2.status == 200){
	  		respuesta=enviar2.responseText;
	  		var myObj=JSON.parse(respuesta);
	  		imagenPerfil=document.getElementById('imagenUsuario');
	  		nombre=document.getElementById('nombre');
	  		nombre.innerHTML=myObj.name;
	  		imagenPerfil.src="img/"+myObj.img;

	  	}
	  	getApps()
	  }
	  
	  
	  
}
function getApps(){
	
	listApps=document.getElementById('apps')
	contadorapps=document.getElementById('contadorApps')
	enviar=new XMLHttpRequest;
	enviar.open('POST','php/usuario.php');
	enviar.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	enviar.send('flag='+'prueba');

	enviar.onreadystatechange = function(){

	  	if(enviar.readyState == 4 && enviar.status == 200){
	  		respuesta=enviar.responseText;
	  		
	  		var myObj=JSON.parse(respuesta);
	  		contadorapps.innerHTML=myObj.length;
	  		for (var i = 0; i <= myObj.length-1; i++) {
	  			listApps.innerHTML+="<div class='evaluacion' id='"+myObj[i].id+"'>"+
				"<div class='evaluacion-info'>"+
					"<h1>"+myObj[i].name+"</h1>"+
					"<p>"+myObj[i].description+"</p>"+
				"</div>"+
				"<div class='evaluacion-datos'>"+
					"<p class='usuarios green'>19/20 Evaluaciones</p>"+
					"<p class=fecha-termino red>Faltan: 2 días</p>"+
				"</div>"+
			"</div>";
	  		}
	  		getEvaluations()
	  	}
	  }
}
function getEvaluations(){

	listaEval=document.getElementById('evaluations')
	enviar=new XMLHttpRequest;
	enviar.open('POST','php/usuario.php');
	enviar.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	enviar.send('flag='+'getEvals');
	enviar.onreadystatechange = function(){
	  	if(enviar.readyState == 4 && enviar.status == 200){
	  		respuesta=enviar.responseText;
	  		var myObj=JSON.parse(respuesta);
	  		for (var i = 0; i <= myObj.length-1; i++) {
	  			listaEval.innerHTML+="<div class='evaluacion' id='"+myObj[i].id+"'>"+
				"<div class='evaluacion-info'>"+
					"<h1>"+myObj[i].name+"</h1>"+
					"<p>"+myObj[i].description+"</p>"+
				"</div>"+
				"<div class='evaluacion-datos'>"+
					"<p class='usuarios green'>19/20 Evaluaciones</p>"+
					"<p class=fecha-termino red>Faltan: 2 días</p>"+
				"</div>"+
			"</div>";
	  		}
	  		 getPoints()
	  	}
	  }
}
function getPoints(){

	contadorPuntos=document.getElementById('contadorPuntos');
	enviar.open('POST','php/usuario.php');
	enviar.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	enviar.send('flag='+'getPoints');
	enviar.onreadystatechange = function(){
	  	if(enviar.readyState == 4 && enviar.status == 200){
	  		respuesta=enviar.responseText;
	  		if (respuesta=="") {
	  			respuesta=0;
	  		}
	  		contadorPuntos.innerHTML=respuesta
	  	}
	  }
}
function addEvaluation(){
	window.location.assign('addEvaluation.html')
}
function addApplication(){
	window.location.assign('addApplication.html')
}