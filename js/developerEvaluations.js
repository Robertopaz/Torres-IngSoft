arreglo=[];
localStorage.setItem('preferencias',"")
function getEvaluationDescription(argument) {
	urlApp=document.getElementById('url');
	nombre=document.getElementById('nombre');
	descripcion=document.getElementById('descripcion');
	genero=document.getElementById('genero')
	edadmin=document.getElementById('edmenor');
	edadmax=document.getElementById('edmayor');
	setEvaluationDescription(urlApp.value,nombre.value,descripcion.value,genero.value,edadmin.value,edmayor.value)
}
function setEvaluationDescription(urlApp,nombre,descripcion,genero,edadmin,edadmax) {
	localStorage.setItem('urlApp',urlApp)
	localStorage.setItem('nombre',nombre)
	localStorage.setItem('descripcion',descripcion)
	localStorage.setItem('genero',edadmin)
	localStorage.setItem('edadmax',edadmax)

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
function prueba(argument) {
	localStorage.setItem('preferencias',arreglo)
	alert(localStorage.preferencias)

}
function registrarApp
