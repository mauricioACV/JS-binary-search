console.clear();

// **********************************************************
// **********************************************************
// Búsqueda Binaria
// **********************************************************
// **********************************************************

// Este tipo de algoritmo de búsqueda se utiliza para encontrar la
// posición de un valor específico contenido en una matriz ordenada.
// El algoritmo de búsqueda binaria funciona según el principio de divide y
// vencerás y se considera el mejor algoritmo de búsqueda porque
// es más rápido de ejecutar.

const orderArr = [2, 12, 15, 17, 27, 29, 45];

// Supongamos que el elemento objetivo que se va a buscar es   17.

const target = 17;

// Enfoque para la búsqueda binaria
// 1.- Compare el elemento de destino con el elemento medio de la matriz.
// 2.- Si el elemento de destino es mayor que el elemento del medio, la
// búsqueda continúa en la mitad derecha.
// 3.- De lo contrario, si el elemento de destino es menor que el valor medio,
//  la búsqueda continúa en la mitad izquierda.
// 4.- Este proceso se repite hasta que el elemento del medio es igual al elemento
// de destino, o el elemento de destino no está en la matriz
// 5.- Si se encuentra el elemento de destino, se devuelve su índice;
// de ​​lo contrario, se devuelve -1.

function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    const mid = start + (end - start) / 2;
    if (arr[mid] > target) {
      end = mid - 1;
    } else if (arr[mid] < target) {
      start = mid + 1;
    } else {
      return mid;
    }
  }
  return -1;
}

console.log("Índice target: ", binarySearch(orderArr, target));

// Análisis de la complejidad del tiempo
// El mejor caso ocurre cuando el elemento de destino es el elemento
// medio de la matriz. El número de comparaciones, en este caso, es 1.
// Entonces, la complejidad del tiempo es O(1).

// El caso promedio: en promedio, el elemento de destino estará en algún
// lugar de la matriz. Entonces, la complejidad del tiempo será O(logN).

// El peor de los casos ocurre cuando el elemento de destino no está
// en la lista o está lejos del elemento del medio. Entonces, la complejidad
// del tiempo será O(logN).

// ******** Cómo calcular la complejidad del tiempo: ***********************
// Digamos que la iteración en Binary Search termina después de k iteraciones.

// En cada iteración, la matriz se divide por la mitad. Así que
// digamos que la longitud de la matriz en cualquier iteración es N .

// En la iteración 1:
// Length of array = N

// En la iteración 2:
// Length of array = N/2

// En la iteración 3:
// Length of array = (N/2)/2 = N/2^2

// En la iteración k:
// Length of array = N/2^k

// Además, sabemos que después de k divisiones, la longitud del arreglo
// se convierte en 1 :
// Longitud del arreglo = N⁄ 2 k = 1 => N = 2 k

// Si aplicamos una función logarítmica en ambos lados:
// log 2 (N) = log 2 (2 k ) => log 2 (N) = k log 2 (2)

// Como (log a (a) = 1)
// Por lo tanto, => k = log 2 (N)

// Ahora podemos ver por qué la complejidad temporal de la búsqueda binaria es
// log 2(N)
