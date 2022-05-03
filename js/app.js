const main = () => {
  let weight = prompt("Ingresa el columnas: "); //ancho
  let height = prompt("Ingresa el filas: ");  //alto
  let matrizTablero = crearTablero(weight, height);
};

//Función para declarar la matriz
function crearTablero(w,h){
    var matriz = new Array();
    for (let x = 0; x < w; x++) {
        matriz[x] = new Array();
        for (let y = 0; y < h; y++) {
            matriz[x][y] = "-";
        }
        
    }
    console.log(matriz)
    return matriz;
}
function reglasVida(){
    
}

function counter (tablero, x, y) {
    // Movimiento hacia los vecinos
    let moveX = new Array(0, 0, 1, -1, -1, -1, 1, 1);
    let moveY = new Array(1, -1, 0, 0, 1, -1, -1, 1);
    let cnt = 0;
    for (let cell = 0; cell < 8; cell++) {
      let mox = x + moveX[cell];
      let moy = y + moveY[cell];
      if (tablero[mox][moy] == '*') {
        cnt += 1;
      }
    }
    return cnt;
}
/*  

1 toda celda viva con menos de 2 vecinos vivos muere
2 toda celda viva con mas de 3 vecinos vivos muere
3 toda celda viva con 2 o mas vecinos vivos permanece viva en la siguente generacion
4 toda celda muerta con exactamente 3 vecinos muertos se convierte en una celda viva

*/