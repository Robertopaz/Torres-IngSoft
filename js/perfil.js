function loadProfile(argument) {
	enviar=new XMLHttpRequest;
	enviar.open('POST','php/usuario.php');
	enviar.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	enviar.send('flag='+'load-profile'+'&u='+id);
	enviar.onreadystatechange = function(){
	  	if(enviar.readyState == 4 && enviar.status == 200){
	  		respuesta=enviar.responseText;
	  		alert(respuesta)
	  		if (respuesta=="Si") {
	  			window.location.assign('perfil.html')
	  		}
	  		
	  	}
	  }
}