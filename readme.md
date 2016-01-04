1- Creamos el archivo package JSON y ajustamos el titulo.
2- Corremos npm Install
3- Creamos el archivo tsconfig.json
4- Creamos una carpeta app
5- Creamos un archivo llamado app.component.ts
6- Creamos nuestro primer componente: Notese que creamos un componente que exportable, es decir que otros componentes pueden invocarlo mediante clausulas import {AppComponent} from './app.component'
incluimos a Component del core de angular2 el cual podemos llamar usando typescript con el @
7- Creamos el archivo boot.ts donde importamos el componente que hemos creado y el angular2platformbrowser We only call "core" those capabilities that are the same across all platform targets. True, most Angular applications run only in a browser and we'll call the bootstrap function from this library most of the time. It's pretty "core" if we're always writing for a browser.

But it is possible to load a component in a different enviroment. We might load it on a mobile device with Apache Cordova We might wish to render the first page of our application on the server to improve launch performance or facilitate SEO.
8- Creamos el archivo index.html donde incluimos las librerias e inicializamos la aplicacion

luego corremos el npm start para inicializar el motor de typescript y corremos el live server

9- Incluimos los estilos preparados

10- Creamos nuestro form component incluimos simplemente la vista y el component, hacemos la clase exportable y vamos al archivo boot.ts alli importamos el componente y lo incluimos en nuestra app, sin embargo tambien es necesario poner en nuestro archivo index.html la etiqueta que hemos hecho.

11- Anadimos una funcion a nuestro boton y anadimos modelos a los inputs, esto con el fin de que el componente pueda leerlos y mostrarlos por consola, aca es importante hablar de la funcionalidad las clases y como puedo definir metodos dentro de ella.

12- Creamos el componente article y lo incluimos en boot.ts, aqui se aplica el concepto de constructor. No se pueden incluir mas de una etiqueta en un componente

13- Anadimos return false para que no reinicie la pagina cada vez que votamos. Vamos meter dentro de nuestro componente form el reddit articulo para ello debemos quitar todas las inclusiones del boot.ts y simplemente lo importamos desde el form component, ademas le decimos que la vista va a tener una directiva llamada ArticleComponent e incluimos la etiqueta, tambien esta etiqueta la tuvimos que quitar del index.html

14- Creamos una clase llamada article la cual permite crear objetos de tipo articulo y cambiamos el constructor para que en vez de crear un elemento hardcodeado, cree un objeto de tipo articulo, notese que desde la vista tambien se hace necesario trabajar con article.atributo, sin embargo esto todavia esta mal.

15- Simplemente pasamos la funciones de votos a la clase y accedemos a ellas desde la vista con article. notese que al incluir un componente como directiva, este puede ser llamado mediante la etiqueta las veces que sea necesario.

16- Primero hemos pasado nuestra clase articulo a un archivo aparte llamado article.class, las clases deben ser almacenadas en archivos class.ts, tambien hemos hecho la clase exportable, por tanto puede ser llamada desde cualquier otro archivo, siempre y cuando sea exportable y se debe incluir mediante import {Article} from './article.class' este archivo toca incluirlo en el articleComponent y en el FormComponent, luego hemos cambiado el construtor del form component para que por defecto cree dos articulos y los meta en el array de articulos, tambien hemos cambiado la funcion addArticle para que introduzca el nuevo articulo en el array de articulos.

17-En el article component decimos que la vista va a tener un input llamado article, ese es leido y renderizado por la vista por tanto no hay que hacer nada mas, sin embargo en el FormComponent hemos hecho un ngFor para cada uno de los articulos en el componente, lo cual nos sirve para que ahora si veamos dinamicamente los articulo cambiando a medida que los anadimos.

18- Removimos el codigo del articleComponent porque no necesitamos nada dentro de el, anadimos el target blank y arreglamos el link del articulo, tambien creamos una funcion que nos permite mostrar los articulos por el orden de los votos.
