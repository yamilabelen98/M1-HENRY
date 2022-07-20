# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

```javascript
x = 1;
var a = 5;
var b = 10;
var c = function (a, b, c) {
  var x = 10;
  console.log(x); //10
  console.log(a); //8
  var f = function (a, b, c) {
    b = a;
    console.log(b); //8
    b = c;
    var x = 5;
  };
  f(a, b, c);
  console.log(b); //9
};
c(8, 9, 10);
console.log(b); //10
console.log(x); //1 pq declara la x poniendo un var enfrente
```

```javascript
console.log(bar); //undefined
console.log(baz); //error pq no esta definido
foo(); //no llega pq tira error antes
function foo() {
  console.log("Hola!");
}
var bar = 1;
baz = 2;
```

```javascript
var instructor = "Tony";
if (true) {
  var instructor = "Franco";
}
console.log(instructor); //"Franco" pq el var lo puedo volver a declarar
```

```javascript
var instructor = "Tony";
console.log(instructor); //"Tony"
(function () {
  if (true) {
    var instructor = "Franco";
    console.log(instructor); //"Franco" pq dice true, se cumple la funcion
  }
})(); //IIFE no se redeclaro, es un espacio privado pq esta deentro de parentesis
console.log(instructor); //"Tony"
```

```javascript
var instructor = "Tony";
let pm = "Franco";
if (true) {
  var instructor = "The Flash";
  let pm = "Reverse Flash";
  console.log(instructor); //"The Flash"
  console.log(pm); //"Reverse Flash"
}
console.log(instructor); //The Flassh
console.log(pm); //Franco
```

### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3"//2 pq toma el del lado izquierdo de referencia y busca la operacion posible
"2" * "3"//6 busca la unica operacion posible
4 + 5 + "px"//9px resuelve primero la cuenta y despues trata de sumar 9+"px" y la unica forma es juntarlos y q sean strings
"$" + 4 + 5//$45 pq empieza con el string
"4" - 2//2
"4px" - 2//NaN (not a number) ==> no tine solucion pq tine un menos, operacion solo de numeros
7 / 0//Infinity pq divide por cero
{}[0]//Undefined
parseInt("09")//9 parseInt pasa string a numero y solo numeros enteros
5 && 2//2 ejecuta de izquierda a derecha y queda 2 pq es el ultimo
2 && 5//5
5 || 0//5 solo necesita q uno sea verdadero
0 || 5//5 el cero no lo toma pq en binario es falso (falsy)
[3]+[3]-[10]//23 pq la suma los concatena entonces queda 33-10 y como el menos es solo para numeros, los toma como una resta de numeros
3>2>1//false hace 3>2 y es true==> true>1 te da false
[] == ![]//true pq el primero actua como objeto=a string vacio=0 y el segundo es falso=0 ==> 0==0=true
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).

### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
  console.log(a); //undefined
  console.log(foo()); //2

  var a = 1;
  function foo() {
    return 2;
  }
}

test(); //undefined no tine return dentro de la funcion test
```

Y el de este código? :

```javascript
var snack = "Meow Mix"; //preguntar

function getFood(food) {
  if (food) {
    var snack = "Friskies";
    return snack; //no se ejecuto la funcion
  }
  return snack; //undefined
}

getFood(false); //undefined
```

### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = "Juan Perez";
var obj = {
  fullname: "Natalia Nerea",
  prop: {
    fullname: "Aurelio De Rosa",
    getFullname: function () {
      return this.fullname;
    },
  },
};

console.log(obj.prop.getFullname()); //Aurelio De Rosa

var test = obj.prop.getFullname;

console.log(test()); //undefined
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
  console.log(1);
  setTimeout(function () {
    console.log(2);
  }, 1000);
  setTimeout(function () {
    console.log(3);
  }, 0);
  console.log(4);
}

printing(); //1 4 3 2
```
