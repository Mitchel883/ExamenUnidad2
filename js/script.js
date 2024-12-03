function showContent(id) {
    const contents = document.querySelectorAll('.content');
    contents.forEach(content => content.classList.remove('active'));
    const content = document.getElementById(id);
    content.classList.add('active');
}

function showCode(id) {
    // Ocultar todas las secciones de código
    const codeSections = document.querySelectorAll('.content');
    codeSections.forEach(code => code.classList.remove('active'));

    // Mostrar el código relacionado con la estructura de datos
    const code = document.getElementById(id + "Code");
    code.classList.add('active');
}
// Definición de la clase Nodo para el árbol binario
class Nodo {
    constructor(valor) {
      this.valor = valor;
      this.izquierda = null;
      this.derecha = null;
    }
  }
  
  // Definición de la clase ArbolBinario
  class ArbolBinario {
    constructor() {
      this.raiz = null;
    }
  
    // Insertar un valor en el árbol binario
    insertar(valor) {
      const nuevoNodo = new Nodo(valor);
      if (!this.raiz) {
        this.raiz = nuevoNodo;
      } else {
        this.insertarEnNodo(this.raiz, nuevoNodo);
      }
    }
  
    // Función auxiliar para insertar el nodo en el lugar correcto
    insertarEnNodo(nodo, nuevoNodo) {
      if (nuevoNodo.valor < nodo.valor) {
        if (!nodo.izquierda) {
          nodo.izquierda = nuevoNodo;
        } else {
          this.insertarEnNodo(nodo.izquierda, nuevoNodo);
        }
      } else if (nuevoNodo.valor > nodo.valor) {
        if (!nodo.derecha) {
          nodo.derecha = nuevoNodo;
        } else {
          this.insertarEnNodo(nodo.derecha, nuevoNodo);
        }
      }
    }
  
    // Eliminar un nodo del árbol binario
    eliminar(valor) {
      this.raiz = this.eliminarNodo(this.raiz, valor);
    }
  
    // Función auxiliar para eliminar un nodo recursivamente
    eliminarNodo(nodo, valor) {
      if (!nodo) {
        return null;
      }
  
      if (valor < nodo.valor) {
        nodo.izquierda = this.eliminarNodo(nodo.izquierda, valor);
      } else if (valor > nodo.valor) {
        nodo.derecha = this.eliminarNodo(nodo.derecha, valor);
      } else {
        // Nodo encontrado
  
        if (!nodo.izquierda && !nodo.derecha) {
          return null; // Nodo hoja
        }
        if (!nodo.izquierda) {
          return nodo.derecha;
        }
        if (!nodo.derecha) {
          return nodo.izquierda;
        }
  
        // Nodo con dos hijos
        const minValorDerecha = this.obtenerMinimo(nodo.derecha);
        nodo.valor = minValorDerecha;
        nodo.derecha = this.eliminarNodo(nodo.derecha, minValorDerecha);
      }
      return nodo;
    }
  
    // Obtener el valor mínimo en el subárbol derecho
    obtenerMinimo(nodo) {
      let actual = nodo;
      while (actual.izquierda) {
        actual = actual.izquierda;
      }
      return actual.valor;
    }
  
    // Buscar un número en el árbol
    buscar(valor) {
      return this.buscarEnNodo(this.raiz, valor);
    }
  
    // Función auxiliar para buscar recursivamente en el árbol
    buscarEnNodo(nodo, valor) {
      if (!nodo) {
        return null;
      }
      if (valor === nodo.valor) {
        return nodo;
      }
      if (valor < nodo.valor) {
        return this.buscarEnNodo(nodo.izquierda, valor);
      }
      return this.buscarEnNodo(nodo.derecha, valor);
    }
  
    // Mostrar el recorrido en preorden del árbol
    recorrerPreorden() {
      const resultado = [];
      this.preorden(this.raiz, resultado);
      return resultado;
    }
  
    preorden(nodo, resultado) {
      if (!nodo) return;
      resultado.push(nodo.valor);
      this.preorden(nodo.izquierda, resultado);
      this.preorden(nodo.derecha, resultado);
    }
  }
  
  // Crear una instancia del árbol binario
  const arbolBinario = new ArbolBinario();
  
  // Función para ingresar un número al árbol desde el HTML
  function ingresarNumeroArbol() {
    const numero = parseInt(prompt("Ingresa un número para agregar al árbol:"));
    if (!isNaN(numero)) {
      arbolBinario.insertar(numero);
      mostrarArbol();
    } else {
      alert("Por favor, ingresa un número válido.");
    }
  }
  
  // Función para eliminar un número del árbol
  function eliminarNumeroArbol() {
    const numero = parseInt(prompt("Ingresa el número que deseas eliminar del árbol:"));
    if (!isNaN(numero)) {
      arbolBinario.eliminar(numero);
      mostrarArbol();
    } else {
      alert("Por favor, ingresa un número válido.");
    }
  }
  
  // Función para buscar un número en el árbol
  function buscarNumeroArbol() {
    const numero = parseInt(prompt("Ingresa el número que deseas buscar en el árbol:"));
    if (!isNaN(numero)) {
      const resultado = arbolBinario.buscar(numero);
      if (resultado) {
        alert(`Número ${numero} encontrado en el árbol.`);
      } else {
        alert(`Número ${numero} no encontrado en el árbol.`);
      }
    } else {
      alert("Por favor, ingresa un número válido.");
    }
  }
  
  // Función para mostrar el árbol en consola (preorden)
  function mostrarArbol() {
    const recorrido = arbolBinario.recorrerPreorden();
    console.log("Recorrido en Preorden del árbol:", recorrido.join(", "));
    alert("Recorrido en Preorden del árbol: " + recorrido.join(", "));
  }  



//Ejecucion de cola
class Cola {
    constructor() {
      this.items = [];
    }
  
    enqueue(elemento) {
      this.items.push(elemento);
    }
  
    dequeue() {
      return this.items.shift();
    }
  
    verFrente() {
      return this.items[0];
    }
  
    estaVacia() {
      return this.items.length === 0;
    }
  }
  
  function correrCola(){
  let cola = new Cola();
  cola.enqueue(1);
  cola.enqueue(2);
  cola.enqueue(3);
  console.log(cola.dequeue());  // 1
  console.log(cola.verFrente());  // 2
  }



  //Ejecucion lista circular
  class ListaCircular {
    constructor() {
      this.primero = null;
    }
  
    insertar(valor) {
      let nuevoNodo = new Nodo(valor);
      if (!this.primero) {
        this.primero = nuevoNodo;
        nuevoNodo.siguiente = this.primero;
      } else {
        let temp = this.primero;
        while (temp.siguiente !== this.primero) {
          temp = temp.siguiente;
        }
        temp.siguiente = nuevoNodo;
        nuevoNodo.siguiente = this.primero;
      }
    }
  
    recorrer() {
      if (this.primero === null) return;
      let temp = this.primero;
      do {
        console.log(temp.valor);
        temp = temp.siguiente;
      } while (temp !== this.primero);
    }
  }
  function correrListaCircular(){
    let lista = new ListaCircular();
    lista.insertar(1);
    lista.insertar(2);
    lista.insertar(3);
    lista.recorrer();
}


  //Ejecucion PILA
class Pila {
    constructor() {
      this.items = [];
    }
  
    push(elemento) {
      this.items.push(elemento);
    }
  
    pop() {
      return this.items.pop();
    }
  
    verCima() {
      return this.items[this.items.length - 1];
    }
  
    estaVacia() {
      return this.items.length === 0;
    }
  }

  function correrPila(){
  let pila = new Pila();
  pila.push(1);
  pila.push(2);
  pila.push(3);
  console.log(pila.pop());  // 3
  console.log(pila.verCima());  // 2
}