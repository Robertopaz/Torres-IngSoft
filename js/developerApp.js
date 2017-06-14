name="nombr eejemplo 1"
urls="https://www.youtube.com/watch?v=nntGTK2Fhb2"
descripcion="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod"+
"tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"+
"quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo"+
"consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse"+
"cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non"+
"proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();
var objtActivities=[]
var objtQuestions=[]

fecha=yyyy+'/'+mm+'/'+dd;
function addApp() {
	enviar=new XMLHttpRequest;
	enviar.open('POST','php/developerApplication.php');
	enviar.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	enviar.send('flag='+'addApp'+'&name='+localStorage.nombre+'&url='+localStorage.urlApp+'&description='+localStorage.descripcion+'&date='+fecha+'&edadmin='+localStorage.edadmin+'&edadmax='+localStorage.edadmax+'&cat='+arreglo.toString());
		enviar.onreadystatechange = function(){
	  	if(enviar.readyState == 4 && enviar.status == 200){
	  		respuesta=enviar.responseText;
	  		alert(respuesta)

	  	}
	  }
}
function addEvaluation(){
	enviar=new XMLHttpRequest;
	enviar.open('POST','php/developerEvaluation.php');
	enviar.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	enviar.send('flag='+'addApp'+'&name='+name+'&url='+urls+'&description='+descripcion+'&date='+fecha);
		enviar.onreadystatechange = function(){
	  	if(enviar.readyState == 4 && enviar.status == 200){
	  		respuesta=enviar.responseText;
	  		alert(respuesta)

	  	}
	  }
}
/*Crea un json para mandar posteriormente por ajax al archivo php y registrar actividades*/
function addActivity(){
	nombre=document.getElementById('nameActivity').value;
	description=document.getElementById('descriptionActivity').value;
	listaActividades=document.getElementById('listaActividades');
	objActivity={"name": nombre, "description": description};
	objJson= JSON.stringify(objActivity);
	alert(objActivity)
	listaActividades.innerHTML+="<li>Titulo:"+objActivity.name+" Descipción:"+objActivity.description+"</li>";
	listActivities(objActivity)
}
function listActivities(obj){
	objtActivities.push(obj);
}
function jsonActivities(){
	objtActivities=JSON.stringify(objtActivities);
	alert(objtActivities);
}
/*Crea un json para mandar posteriormente por ajax al archivo php y registrar Preguntas al formulario*/
function addQuestion(){
	nombre=document.getElementById('nameQuestion').value;
	description=document.getElementById('descriptionQuestion').value;
	listaPreguntas=document.getElementById('listaPreguntas');
	objActivity={"name": nombre, "description": description};
	objJson= JSON.stringify(objActivity);
	alert(objActivity)
	listaPreguntas.innerHTML+="<li>Titulo:"+objActivity.name+" Descipción:"+objActivity.description+"</li>";
	listQuestions(objActivity)
}
function listQuestions(obj){
	objtQuestions.push(obj);
}
function jsonQuestions(){
	objtQuestions=JSON.stringify(objtQuestions);
	alert(objtQuestions);
}

arreglo=[];
localStorage.setItem('preferencias',"")
function getEvaluationDescription() {
	urlApp=document.getElementById('url').value;
	nombre=document.getElementById('nombre').value;
	descripcion=document.getElementById('descripcion').value;
	genero=document.getElementById('genero').value
	edadmin=document.getElementById('edmenor').value;
	edadmax=document.getElementById('edmayor').value;
	setEvaluationDescription(urlApp,nombre,descripcion,genero,edadmin,edmayor)
}
function setEvaluationDescription(urlApp,nombre,descripcion,genero,edadmin,edadmax) {
	localStorage.setItem('urlApp',urlApp)
	localStorage.setItem('nombre',nombre)
	localStorage.setItem('descripcion',descripcion)
	localStorage.setItem('genero',genero)
	localStorage.setItem('edadmin',edadmin)
	localStorage.setItem('edadmax',edadmax)
	goToPreferenciasApp()
	
}
function addPref(value) {
	alert(value)
	if (arreglo.indexOf(value)==-1) {
		arreglo.push(value)
	}
	else{
		
		arreglo.pop(value)
	}
}

function goToPreferenciasApp() {
	window.location.assign('subirevalprefe.html')
}