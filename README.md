## Exercise - asynchronicity

Crea un módulo con tres funciones asíncronas:

- `getUserId`: debe recibir un nombre de usuario y devolver, dos segundos después, una id (inventada). Si el nombre de usuario que recibe es "Luis", debe devolver un error con el mensaje "I'm sick of you!".

- `getUserDataById`: debe recibir una id y devolver, dos segundos después, un objeto (inventado, pero al menos con una propiedad `dni`) con datos del usuario. Si la id que recibe es 100, debe devolver un error con el mensaje "Luis, don't cheat on me!".

- `getFinesByDNI`: debe recibir un DNI y devolver, dos segundos después, un array de objetos (inventado) con información sobre multas de tráfico. Si el DNI recibido es "11111111A", debe devolver un error con el mensaje "Luis, really? 😒".

Crea después el módulo de entrada `index.js`, que será el _director de orquesta_.

También tienes un módulo `speak.js` con una función a la que le tienes que pasar un elemento HTML y un delay. La función se encargará de ir metiendo frases aleatorias en el elemento. Desde tu `index.js`, haz que esta función meta frases aleatorias en el elemento con clase _display_.

Haz que, cuando el usuario haga clic en el botón _Search_, se llame a la función `getUserId` (pásale el nombre de usuario que quieras). Cuando llegue la id, haz que se muestre en en el recuadro correspondiente y haz que se llame a la función `getUserDataById` pasándole la id. Cuando lleguen los datos, haz que se muestre el DNI en el recuadro correspondiente y que se llame a la función `getFinesByDNI` pasándole el DNI. Cuando lleguen las multas, muestra los importes en el recuadro correspondiente.

Cada vez que se haga una petición, durante el tiempo que tarda el dato en llegar debe verse el mensaje "Loading" que tienes en el HTML (se muestra poniéndole una clase `on`).

Si alguna de las funciones devuelve un error, debe mostrarse el texto del error en el elemento con clase `error` (el elemento se muestra añadiéndole la clase `on`).
