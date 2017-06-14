window.onscroll=function(){

	console.log(document.body.scrollTop);

	if (document.body.scrollTop >120 || document.documentElement.scrollTop >120) {
		document.querySelector('.usuario').classList.add('fijo');
	}else{

	
		document.querySelector('.usuario').classList.remove('fijo');
	}

}

function valor1(){
	val1 = document.getElementById('edmenor').value;
	document.getElementById('edadmen').innerHTML=val1+" años";
}

function valor2(){
	val1 = document.getElementById('edmenor').value;
	val2 = document.getElementById('edmayor').value;
	document.getElementById('edadmay').innerHTML=val2+" años";
	if (val1>val2) {
		alert("el valor tiene que ser mayor que el anterior")
	}
}