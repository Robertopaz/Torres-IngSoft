<?php 
  function Conectarse() {

   $host = "localhost";
   $user = "root";
   $pass = "";
   $database = "torres";

   $link = new mysqli($host, $user, $pass, $database);
   $acentos = $link->query("SET NAMES 'utf8'");

   if($link->connect_errno > 0) {
      echo "ERROR CONECTANDO A LA BASE DE DATOS<br />";
   } else {
      return $link;
   }

}
function setSession($id,$type){
   $_SESSION['idUser']=$id;
   $_SESSION['type']=$type;
}
function getSession(){
   return $_SESSION['idUser'];
}
function getTypeSession(){
   return $_SESSION['type'];
}

		
 ?>