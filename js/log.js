function login() {
	correo=document.getElementById('Cor').value;
	pass=document.getElementById('pass').value;
	enviar=new XMLHttpRequest;
	enviar.open('POST','php/usuario.php');
	enviar.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	enviar.send('flag='+'log-val'+'&p='+pass+'&u='+correo);
		enviar.onreadystatechange = function(){
	  	if(enviar.readyState == 4 && enviar.status == 200){
	  		respuesta=enviar.responseText;
	  		if (respuesta=="Si") {
	  			window.location.assign('main.html')
	  		}
	  		
	  	}
	  }

}
function registerUser(argument) {
	nombre=document.getElementById('n').value;
	appellido=document.getElementById('a').value;
	nacimiento=document.getElementById('u').value
	sexo=document.getElementById('s').value;
	correo=document.getElementById('c').value;
	pass1=document.getElementById('p').value;
	pass2=document.getElementById('p2').value;
	nombre=nombre+" "appellido;
	if (pass1==pass2) {
		enviar=new XMLHttpRequest;
	enviar.open('POST','php/usuario.php');
	enviar.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	enviar.send('flag='+'regiter'+'&name='+nombre'&email='+correo+'&pass'+pass1+"&sex="+sexo+"&old="+nacimiento);
		enviar.onreadystatechange = function(){
	  	if(enviar.readyState == 4 && enviar.status == 200){
	  		respuesta=enviar.responseText;
	  		alert(respuesta)
	  		
	  	}
	  }

	}

}