const main = () => {

  let weight = prompt("Ingresa las columnas: ");  //alto
  if (weight < 3){
    weight = prompt("Ingresa una valor(altura) mayor que 3: ");
  }
  let height = prompt("Ingresa el filas: ");  //ancho
  if (height < 3){
    height = prompt("Ingresa una valor(anchura) mayor que 3: "); 
  }
  
  
  let matrizTablero = crearTablero(weight, height);
  console.log(matrizTablero);
};

//

//Función para declarar la matriz
function crearTablero(w,h){
    var matriz = new Array();
    for (let x = 0; x < w; x++) {
        matriz[x] = new Array();
        for (let y = 0; y < h; y++) {
            const randomNumber = Math.random();
            if(randomNumber < 0.9){
                matriz[x][y] = "-";
            }else{
                if(x != 0 && x != w  && y != 0 && y != h){
                    matriz[x][y] = "*";
                }else{
                    matriz[x][y] = "-";
                }
                
            }
        }
    }
    return matriz;
}
function rules(array) {
    let vivas = 0;
    let posicion = [];
    let posX, posY;
    let arrayCopy = array.slice();
    for (let i= 1; i < array.length() - 1; i++){
        for(let j = 1; j <= array.length() -1; j++){
            vivas = counter(array,i,j);
            if (array[i][j] == '*' && vivas < 2) {
                arrayCopy[i][j] = '.';
            } else if (array[i][j] == '*' && vivas > 3) {
                arrayCopy[i][j] = '.';
            } else if (array[i][j] == '.' && vivas == 3) {
                arrayCopy[i][j] = '*';
            }
        }
    }
    return arrayCopy;
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
["-"],["-"],["-"],["-"]
["-"],["*"],["-"],["-"]
["-"],["*"],["-"],["-"]
["-"],["-"],["-"],["-"]
*/
/*  
1 toda celda viva con menos de 2 vecinos vivos muere
2 toda celda viva con mas de 3 vecinos vivos muere
3 toda celda viva con 2 o mas vecinos vivos permanece viva en la siguente generacion
4 toda celda muerta con exactamente 3 vecinos muertos se convierte en una celda vivo
*/