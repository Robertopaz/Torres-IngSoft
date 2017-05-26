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
function setSession($id){
   $_SESSION['idUser']=$id;
}
function getSession(){
   return $_SESSION['idUser'];
}

		
 ?>