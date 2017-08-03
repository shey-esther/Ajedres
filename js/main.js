function genera_tabla() {
  var idImput =document.getElementById("tabla").value;
  // Obtener la referencia del elemento body
  var body = document.getElementsByTagName("body")[0];
 
  // Crea un elemento <table> y un elemento <tbody>
  var tabla   = document.createElement("table");
  tabla.border="1";
  var tblBody = document.createElement("tbody");
 
  // Creamos columnas
  for (var i = 0; i < 7; i++) {
    // Crea las hileras=columnas de la tabla
    var columna = document.createElement("tr");
 
    for (var j = 0; j < 7; j++) {
      // Crea un elemento <td> y un nodo de texto, haz que el nodo de texto sea el contenido de <td>, ubica el elemento <td> al final de la columna de la tabla.....filas==celda
      var filas = document.createElement("td");
      // if(i%2==0&&j%2!=0||i%2!=0&&j%2==0){
        // filas.setAttribute('class','negro');
      var textoFilas = document.createTextNode("0"+i+"0"+j);
      filas.appendChild(textoFilas);
      columna.appendChild(filas);
    }
 
    // agrega la columna al final de la tabla (al final del elemento tblbody)
    tblBody.appendChild(columna);
  }
 
  // posiciona el <tbody> debajo del elemento <table>
  tabla.appendChild(tblBody);
  // appends <table> into <body>
  body.appendChild(tabla);
  // modifica el atributo "border" de la tabla y lo fija a "2";
  // tabla.setAttribute("border", "1");
  }
