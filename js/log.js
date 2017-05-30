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