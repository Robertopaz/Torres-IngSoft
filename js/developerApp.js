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

fecha=yyyy+'/'+mm+'/'+dd;
function addApp() {
	enviar=new XMLHttpRequest;
	enviar.open('POST','php/developerApplication.php');
	enviar.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	enviar.send('flag='+'addApp'+'&name='+name+'&url='+urls+'&description='+descripcion+'&date='+fecha);
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
function addActivity(){
	nombre=document.getElementById('nameActivity').value;
	description=document.getElementById('descriptionActivity').value;
	objActivity={"name": nombre, "description": description};
	objJson= JSON.stringify(objActivity);

	alert(objActivity)
	listActivities(objActivity)
}
function listActivities(obj){
	objtActivities.push(obj);
}
function jsonActivities(){
	objtActivities=JSON.stringify(objtActivities);
	alert(objtActivities);
}