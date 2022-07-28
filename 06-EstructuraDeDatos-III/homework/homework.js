"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(valor) {
  this.value = valor;
  this.left = null;
  this.right = null;
}
BinarySearchTree.prototype.size = function () {
  if (!this.left && !this.right) {
    return 1;
  } else if (this.left && this.right) {
    return 1 + this.left.size() + this.right.size();
  } else if (this.left) {
    return 1 + this.left.size();
  } else if (this.right) {
    return 1 + this.right.size();
  }
};

BinarySearchTree.prototype.insert = function (value) {
  let hoja = new BinarySearchTree(value);
  if (value > this.value) {
    if (!this.right) {
      this.right = hoja;
    } else {
      this.right.insert(value);
    }
  } else {
    if (!this.left) {
      this.left = hoja;
    } else {
      this.left.insert(value);
    }
  }
};

BinarySearchTree.prototype.contains = function (value) {
  if (value === this.value) {
    return true;
  }
  if (value > this.value) {
    if (!this.right) {
      return false;
    } else {
      return this.right.contains(value);
    }
  }
  if (value < this.value) {
    if (!this.left) {
      return false;
    } else {
      return this.left.contains(value);
    }
  }
};

BinarySearchTree.prototype.depthFirstForEach = function (callBack, order) {
  if (order === "pre-order") {
    callBack(this.value);
    if (this.left) {
      this.left.depthFirstForEach(callBack, order);
    }
    if (this.right) {
      this.right.depthFirstForEach(callBack, order);
    }
  } else if (order === "post-order") {
    if (this.left) {
      this.left.depthFirstForEach(callBack, order);
    }
    if (this.right) {
      this.right.depthFirstForEach(callBack, order);
    }
    callBack(this.value);
  } else {
    if (this.left) {
      this.left.depthFirstForEach(callBack, order);
    }
    callBack(this.value);
    if (this.right) {
      this.right.depthFirstForEach(callBack, order);
    }
  }
};

BinarySearchTree.prototype.breadthFirstForEach = function (callBack, array) {
  if (array == null) {
    var array = [];
  }
  if (this.left) {
    array.push(this.left);
  }
  if (this.right) {
    array.push(this.right);
  }
  callBack(this.value);
  array.length > 0 && array.shift().breadthFirstForEach(callBack, array);
};
const arbolito = new BinarySearchTree(20);
// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
