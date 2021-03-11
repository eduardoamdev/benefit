# Benefit

## Descripción:

  Benefit es una aplicación creada para ser desplegada en la cadena de bloques de Ethereum y su proposito es el de crear una interfaz que nos permita comprar el token nativo ERC-20 del contrato (BNF) depositando ETH.  
  La idea principal es que los fondos almacenados en el contrato pueden ser retirados por el propietario del mismo para luego reingresarlos con beneficios añadidos que aumentarían el valor de los tokens. En una situación así, el usuario podría cambiar sus tokens por una cantidad de ETH superior a la que ingresó.
  En caso de no ingresarse ganancias, el usuario podría vender sus tokens al precio de compra ya que el propietario del contrato deposita un soporte a este efecto.
  La aplicación permite, además, el intercambio de tokens entre usuarios y la consulta en todo momento de la información del contrato.

## Clonar el repositorio:

  Copiaremos el repositorio y lo clonaremos utilizando el comando "git clone" seguido del repositorio en el directorio que deseemos.

## Instalación de paquetes:

  - ### NodeJs:  
    Nos permite ejecutar código escrito en Javascript del lado del servidor.  
    Información en: https://nodejs.org/en/
  - ### Npm: 
    Es un gestor de paquetes para NodeJs.   
    Información en: https://nodejs.org/es/download/package-manager/
  - ### Nvm:  
    Nos permite cambiar con facilidad nuestra versión de NodeJs.  
    Si somos usuarios de Ubuntu podemos emplear el siguiente enlace para instalar Node, Npm y Nvm: https://www.hostinger.es/tutoriales/instalar-node-js-ubuntu/
  - ### Truffle:  
    Es un entorno de desarrollo que nos ayuda a crear aplicaciones descentralizadas.  
    Para instalarlo ejecutaremos el comando: npm install -g truffle  
    Para más información visitar: https://blog.desdelinux.net/truffle-framework-herramientas-codigo-abierto-blockchain/?utm_source=dlvr.it&utm_medium=facebook
  - ### Ganache:  
    Descargaremos Ganache para nuestro sistema operativo.  
    Debemos acudir al siguiente enlace: https://www.trufflesuite.com/ganache
  - ### Metamask:  
    Se trata de una billetera que custodia claves privadas de la cadena de bloques de Ethereun además de servir como intermediario entre nuestro sitio web y la blockchain y otras muchas funcionalidades.  
    Quedará instalada como una extensión de nuestro navegador.  
    Enlace de descarga en: https://metamask.io/
  - ### Instalar paquetes dentro del proyecto con npm:  
    El proyecto consta de tres directorios: benefit-api, benefit-customer y benefit-owner. Debemos entrar en cada uno de ellos y ejecutar el comando "npm i" para instalar los paquetes correspondientes.

## Primeros pasos:

  - ### Abrir Ganache:   
    Abriremos Ganache , seleccionaremos la opción "quick start" para empezar a trabajar y, de esta manera, empezará a ejecutarse nuestro entorno de desarrollo simulando la red de Ethereum.
  - ### Desplegar nuestro proyecto en la red de Ganache:  
    Para ello, nos dirigiremos al directorio "benefit-api" de nuestro proyecto y ejecutaremos el comando "truffle compile". Este comando compilará los contratos inteligentes dejándolos listos para el despliegue.  
    El siguiente paso, una vez la compilación se haya realizado con éxito, será ejecutar, en este mismo directorio, el comando "truffle migrate" el cual desplegará nuestros contratos inteligentes en Ganache.  
    Para comprobar que el proceso se ha realizado correctamente nos dirigiremos a Ganache y, en la barra de navegación superior, haremos click en "transactions". Deberan aparecernos dos transacciones con el marcador "contract creation".
  - ### Abrir Metamask:  
    Para que el cliente pueda interactuar con Ganache será necesario abrir Metamask y crear una billetera. En el siguiente enlace podemos encontrar un tutorial que nos muestra el proceso: https://www.youtube.com/watch?v=l_1OBHB3Lc0&t=252s
  - ### Agregar a Metamask nuestra red de Ganache:
    Metamask puede trabajar con varias redes. Si queremos trabajar con esta aplicación tendrá que ser en una red de pruebas como es la de Ganache. Para ello, tendremos que agregarla a Metamask.  
    Primeramente, nos dirigiremos a Metamask y haremos click en la parte superior donde nos dice "Red principal de Ethereum". Se nos desplegará un menú y allí seleccionaremos "RPC personalizado" para introducir una nueva red.  
    Seguidamente, le daremos a la red el nombre que queramos y en la URL le pasaremos la de nuestro servidor local de Ganache: HTTP://127.0.0.1:7545  
    En el id pondremos un número cualquiera, ya que se trata de un proyecto de desarrollo, le daremos a guardar y nos dirá que el id no es válido sugiriéndonos otro a su vez. Pondremos el id que nos propone y guardaremos.  
    Ya tenemos Metamask conectado a la red de Ganache.
  - ### Importar cuentas en Metamask:  
    Para trabajar con la aplicación necesitaremos cuentas que se encuentren en Ganache. Nos dirigiremos al apartado "Accounts" dentro de la barra de navegación de Ganache y allí nos aparecerán las cuentas de nuestro servidor.  
    Si queremos importar una cuenta necesitaremos la clave privada. Para obtener la clave privada haremos click en el símbolo de llave de la parte derecha. Una vez hecho esto copiaremos la clave privada en el portapapeles.  
    El siguiente paso es dirigirnos a Metamask. En la parte superior derecha desplegaremos el menú y haremos click en "importar cuenta". Se nos abrirá un input en el cual deberemos escribir nuestra clave privada.  
    La cuenta ya estará importada. Para probar la aplicación sería recomendable hacer lo mismo con varias cuentas de las que nos ha generado Ganache.
  - ### Arrancar la parte del cliente:  
    Para ello nos dirigiremos al directorio "benefit-api" y ejecutaremos el comando "npm start". Esto hará que se arranque la aplicación en el puerto conrrespondiente y nuestro navegador la ejecute automáticamente.  
    Haremos lo mismo en el directorio "benefit-customer".
  - ### Conectar la aplicación con Metamask:  
    Para ello nos ubicaremos en la pestaña del navegador en la que se encuentra cualquiera de las dos aplicaciones que hemos arrancado.  
    Una vez allí, abriremos la extensión de Metamask y entraremos en nuestra cuenta. Una vez dentro, abriremos el menú de la cuenta y entraremos en "sitios conectados". Allí podremos conectar las cuentas que queramos con nuestra aplicación.  
    Seguiremos los mismos pasos en la otra aplicación.

## Cómo utilizar la aplicación:

  - ### Explicación de los apartados de Benefit Owner:
    En primer lugar debemos dirigirnos a Benefit Owner, que es la aplicación del propietario o administrador del contrato. Allí nos encontraremos una barra de navegación con varios apartados.  
    El primero de ellos es Home, el cual nos ofrece la portada del sitio.  
    Seguidamente, encontraremos Dapp Info, que nos permite ver la información de nuestro contrato. De momento tan solo nos enseñará que la aplicación tiene 100 tokens existentes pero ninguno está disponible para su compra, por lo que el apartado available tokens marca 0. De la misma forma los fondos de nuestro contrato todavía son 0 ETH, así como el soporte y el precio de cada token.  
    Begin sold nos permitirá añadir al contrato el soporte y los tokens para que queden a disponibilidad del usuario.  
    Credit ether servirá para que el propietario ingrese fondos en el contrato.  
    Extract ether da la opción al propietario de extraer los fondos que no formen parte del soporte.  
    End sold permite al usuario cerrar el contrato y retirar tanto los tokens como los fondos que contenga el mismo.

  - ### Poniendo nuestros tokens a disposición del cliente:
  
    Antes de nada decir que para lo que vamos a hacer en esta parte debemos de tener seleccionada la cuenta número uno, ya que esta es la dirección del propietario del contrato.
    Nos ubicamos en Benefit Owner y nos dirigimos a begin sold. Aquí ingresaremos el soporte que permitirá a los usuarios recuperar sus fondos aunque hayamos retirado la parte que ellos han ingresado.  
    Para ello, introduciremos en support la cantidad que queremos ingresar. Para testear la aplicación utilizo una cantidad redonda como es un ether.
    Hay que decir, antes de nada, que la cadena de bloques no trabaja con ether si no con weys, así que ingresaremos la cantidad de weys que corresponden a un ether: 1000000000000000000  
    Tras pulsar confirmar se nos abrirá metamask indicándonos la cantidad de ETH que vamos a ingresar, en este caso uno, y pidiéndonos confirmación.  
    Si confirmamos la transacción se hará efectiva. Ahora, tanto en Metamask como en Ganache podemos ver que de nuestra cuenta número uno se ha descontado la cantidad correspondiente.  
    Ahora, si nos dirigimos a Dapp info, tanto en Benefit Owner como en Benefit, podremos ver como la información ha cambiado ya que tenemos 100 BNFs disponibles para la venta, un ether de balance total del contrato, un ether de soporte y un precio por token que es básicamente el balance del contrato dividido entre el número total de tokens.

  - ### Ya podemos utilizar todas las funcionalidades:

    Llegados a este punto, ya nos encontramos en condiciones de que, tanto el propietario como el cliente, puedan utilizar todas las funcionalidades en las aplicaciones.