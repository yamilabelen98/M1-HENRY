"use strict";
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length <= 1) return array;
  let pivot = array[0];
  let left = [];
  let right = [];
  for (let i = 1; i < array.length; i++) {
    if (array[i] <= pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }
  return quickSort(left).concat(pivot).concat(quickSort(right));
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length === 1) return array;
  let medio = Math.floor(array.length / 2);
  let left = array.slice(0, medio);
  let right = array.slice(medio);
  return union(mergeSort(left), mergeSort(right));
}
function union(left, right) {
  let i = 0;
  let x = 0;
  let array = [];
  while (i < left.length && x < right.length) {
    if (left[i] < right[x]) {
      array.push(left[i]);
      i++;
    } else {
      array.push(right[x]);
      x++;
    }
  }
  return array.concat(left.slice(i)).concat(right.slice(x));
}
// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
