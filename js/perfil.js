function loadProfile(argument) {
	enviar=new XMLHttpRequest;
	enviar.open('POST','php/usuario.php');
	enviar.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	enviar.send('flag='+'load-profile');
	enviar.onreadystatechange = function(){
	  	if(enviar.readyState == 4 && enviar.status == 200){
	  		respuesta=enviar.responseText;
	  		var myObj=JSON.parse(respuesta);
	  		alert(myObj.img)
	  		imagenPerfil=document.getElementById('img-perfil');
	  		nombre=document.getElementById('nombre');
	  		imagenPerfil.src="img/"+myObj.img;
	  		nombre.innerHTML=myObj.name;

	  	}
	  }
}