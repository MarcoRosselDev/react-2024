1. What do we need to 'import React from  "react" in our files?
React es lo que define JSX

2. If I were to console.log(page) in index.js, what would show up?
Un objeto javaScript. Luego React describe que deveria eventualmente agregar al DOM por nosotros.

3. What's wring with this code:

const page = (
  <h1>Hello</h1>
  <h1>This is my website!</h1>
)

JSX requiere que solo se envie un elemento, por lo que si cerramos estos dos elementos
dentro de un div o un elemento vacio se soluciona el problema

4. What does it mean for something to be "declarative" instead of "imperative"?
Declarativo significa que le digo a la computadora que hacer y como deveria manejar los detalles.
  actua como reactivo, esperando a que el usuario interactue con la aplicacion.
Imperativo significa decirle a la computadora cada paso a realizar para hacer algo.