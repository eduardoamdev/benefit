# Benefit

## Descripción:

Benefit es una aplicación creada para ser desplegada en la cadena de bloques de Ethereum y su proposito es el de crear una interfaz que nos permita comprar el token nativo ERC-20 del contrato (BNF) depositando ETH.  
La idea principal es que los fondos almacenados en el contrato pueden ser retirados por el propietario del mismo para luego reingresarlos con beneficios añadidos que aumentarían el valor de los tokens. En una situación así, el usuario podría cambiar sus tokens por una cantidad de ETH superior a la que ingresó.
En caso de no ingresarse ganancias, el usuario podría vender sus tokens al precio de compra ya que el propietario del contrato deposita un soporte a este efecto.
La aplicación permite, además, el intercambio de tokens entre usuarios y la consulta en todo momento de la información del contrato.

## Instalación:

Para poner en marcha este proyecto debemos tener instalado:
  - # NodeJs:  
  Nos permitirá ejecutar código escrito en Javascript del lado del servidor.  
  Información en: https://nodejs.org/en/
  - # Npm: 
  Es un gestor de paquetes para NodeJs.   
  Información el: https://nodejs.org/es/download/package-manager/
  - # Nvm:  
  Nos permite cambiar con facilidad nuestra versión de NodeJs.  
  Si somos usuarios de Ubuntu podemos emplear el siguiente enlace para instalar Node, Npm y Nvm: https://www.hostinger.es/tutoriales/instalar-node-js-ubuntu/
  - # Truffle:  
  Es un entorno de desarrollo que nos ayuda a crear aplicaciones descentralizadas.  
  Para instalarlo ejecutaremos el comando: npm install -g truffle  
  Para más información visitar: https://blog.desdelinux.net/truffle-framework-herramientas-codigo-abierto-blockchain/?utm_source=dlvr.it&utm_medium=facebook
  - # Ganache:  
  Descargaremos Ganache para nuestro sistema operativo.  
  Debemos acudir al siguiente enlace: https://www.trufflesuite.com/ganache
  - # Metamask:  
  Se trata de una billetera que custodia claves privadas de la cadena de bloques de Ethereun además de servir como intermediario entre nuestro sitio web y la blockchain y otras muchas funcionalidades.  
  Quedará instalada com una extensión de nuestro navegador.  
  Enlace de descarga en: https://metamask.io/

## Primeros pasos:

  - # Clonar el repositorio:  
  Copiaremos el repositorio y lo clonaremos utilizando el comando "git clone" seguido del repositorio en el directorio que deseemos.
  - # Instalar paquetes dentro del proyecto:  
  El proyecto consta de tres directorios: benefit-api, benefit-customer y benefit-owner. Debemos entrar en cada uno de ellos y ejecutar el comando "npm i" para instalar los paquetes correspondientes.
  - # Abrir Ganache:   
  Abriremos Ganache y, de esta manera, empezará a ejecutarse nuestro entorno de desarrollo simulado la red de Ethereum.
  - # Despegar nuestro proyecto en la red de Ganache:  
  Para ello, nos dirigiremos al directorio "benefit-api" de nuestro proyecto y ejecutaremos el comando "truffle compile". Este comando compilará los contratos inteligentes dejándolos listos para el despliegue.  
  El siguiente paso, una vez la compilación se haya realizado con éxito, será ejecutar, en este mismo directorio, el comando "truffle migrate" el cual desplegará nuestros contratos inteligentes en Ganache.  
  Para comprobar que el proceso se ha realizado correctamente nos dirigiremos a Ganache y, en la barra de navegación superior, haremos click en "transactions". Deberan aparecernos dos con el marcador "contract creation".
  - # Abrir Metamask:  
  Para que el cliente pueda interactuar con Ganache será necesario abrir Metamask y crear una cuenta. En el siguiente enlace podemos encontrar un tutorial que nos muestra el proceso: https://www.youtube.com/watch?v=l_1OBHB3Lc0&t=252s
  - # Agregar a Metamask nuestra red de Ganache:
  Metamask puede trabajar con varias redes. Si queremos trabajar con esta aplicación tendrá que ser en una red de pruebas como es la de Ganache. Para ello, tendremos que agregarla a Metamask.  
  Primeramente, nos dirigiremos a Metamask y haremos click en la parte superior donde nos dice "Red principal de Ethereum". Se nos desplegará un menú y allí seleccionaremos "RPC personalizado" para introducir una nueva red.  
  Seguidamente, le daremos a la red el nombre que queramos y en la URL le pasaremos la de nuestro servidor local de Ganache: HTTP://127.0.0.1:7545  
  En el id pondremos un número cualquiera, ya que se trata de un proyecto de desarrollo, le daremos a guardar y nos dirá que el id no es válido sugiriéndonos otro a su vez. Pondremos el nuevo y guardaremos.  
  Ya tenemos Metamask conectado a la red de Ganache.
  - # Importar cuentas en Metamask:  
  Para trabajar con la aplicación necesitaremos cuentas que se encuentren en Ganache. Nos dirigiremos al apartado "Accounts" dentro de la barra de navegación de Ganache y allí nos aparecerán las cuentas de nuestro servidor.  
  Si queremos importar una cuenta necesitaremos la clave privada. Para obtener la clave privada haremos click en el símbolo de llave de la parte derecha. Una vez hecho esto copiaremos la clave privada en el portapapeles.  
  El siguiente paso es dirigirnos a Metamask. En la parte superior derecha desplegaremos el menú y haremos click en "importar cuenta". Se nos abrirá un input en el cual deberemos escribir nuestra clave privada.  
  La cuenta ya estará importada. Para probar la aplicación sería recomendable hacer lo mismo con varias cuentas de las que nos ha generado Ganache.
  - # Arrancar la parte del cliente:  
  Para ello nos dirigiremos al directorio "benefit-api" y ejecutaremos el comando "npm start". Esto hará que se arranque la aplicación en el puerto conrrespondiente y nuestro navegador la ejecute automáticamente.  
  Haremos lo mismo en el directorio "benefit-customer".
  - # Conectar la aplicación con Metamask:  
  Para ello nos ubicaremos en la pestaña del navegador en la que se encuentra cualquiera de las dos aplicaciones que hemos arrancado.  
  Una vez allí, abriremos la extensión de Metamask y entraremos en nuestra cuenta. Una vez dentro, abriremos el menú de la cuenta y entraremos en "sitios conectados". Allí podremos conectar las cuentas que queramos con nuestra aplicación.  
  Seguiremos los mismos pasos en la otra aplicación.
