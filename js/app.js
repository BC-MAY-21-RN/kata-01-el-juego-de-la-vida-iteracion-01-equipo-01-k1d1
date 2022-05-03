
const main = () =>{
    let weight = prompt("Ingresa el ancho: ");
    let height = prompt("Ingresa el alto: ");
    let matrizTablero = crearTablero(weight,height);

}

function crearTablero(x,y){
  var tablero = new Array(x);
  for(i=0;i<=x;i++){
      tablero[i] = new Array(y);
  }
  return tablero;
}

