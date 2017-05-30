window.onscroll=function(){

	console.log(document.body.scrollTop);

	if (document.body.scrollTop >120 || document.documentElement.scrollTop >120) {
		document.querySelector('.usuario').classList.add('fijo');
	}else{

	
		document.querySelector('.usuario').classList.remove('fijo');
	}

}