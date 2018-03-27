function imagenes(){
var imagenes= new Array();
var contador=0;
//var imagen=document.getElementById("miImagen");
imagenes [0]="img/img1.jpg";
imagenes [1]="img/img2.jpg";
imagenes [2]="img/img3.jpg";
imagenes [3]="img/img4.jpg";

setInterval(function() {
var imagen = document.getElementById('miImagen');
var actual = contador >= (imagenes.length-1)? 0: contador+1;
imagen.src = imagenes[actual];
contador = actual;
},3000);
}
