function loadProfile() {
	enviar=new XMLHttpRequest;
	enviar.open('POST','php/usuario.php');
	enviar.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	enviar.send('flag='+'load-profile');
	enviar.onreadystatechange = function(){
	  	if(enviar.readyState == 4 && enviar.status == 200){
	  		respuesta=enviar.responseText;
	  		var myObj=JSON.parse(respuesta);
	  		imagenPerfil=document.getElementById('img-perfil');
	  		nombre=document.getElementById('nombre');
	  		
	  		nombre.innerHTML=myObj.name;

	  	}
	  }
	  getApps()
	  alert("empieza")
	  
}
function getApps(){
	alert("getaapp")
	listApps=document.getElementById('apps')
	contadorapps=document.getElementById('contadorApps')
	enviar=new XMLHttpRequest;
	enviar.open('POST','php/usuario.php');
	enviar.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	enviar.send('flag='+'prueba');

	enviar.onreadystatechange = function(){

	  	if(enviar.readyState == 4 && enviar.status == 200){
	  		respuesta=enviar.responseText;
	  		alert(respuesta)
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
	alert("getEvaluations")
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
	  	}
	  }
}
function addEvaluation(){
	window.location.assign('addEvaluation.html')
}
function addApplication(){
	window.location.assign('addApplication.html')
}