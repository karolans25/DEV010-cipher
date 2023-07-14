# Cifrado César

## Índice

* [1. Contexto del proyecto](#1-contexto)
* [2. Experiencia de Usuario e Interfaz](#2-experiencia-de-usuario-e-interfaz)
* [3. Requerimientos Funcionales y No Funcionales](#3-requerimientos-funcionales-y-no-funcionales)
* [4. Hitos Opcionales](#4-hitos-opcionales)
* [5. Para considerar Project Feedback](#5-para-considerar-project-feedback)

***

## 1. Contexto

Hoy en día tenemos muchas cuentas en diversas aplicaciones y es fácil olvidar las
contraseñas de ingreso. Por tanto, un servicio importante es poder cifrar y descifrar
tus contraseñas de tal manera que puedas cifrar tu contraseña y guardarla tranquilamente 
en un fichero con extensión *.txt* sin riesgo de ser descifrada por alguna persona que 
no cuente con acceso al número de offset que utilizaste para cifrarla.

Cifrar significa ocultar el contenido de un mensaje a simple vista, de manera
que sólo las partes autorizadas pueden descifrar un texto cifrado.
El [cifrado César](https://en.wikipedia.org/wiki/Caesar_cipher)
es uno de los primeros métodos de cifrado conocidos. El emperador romano Julio
César lo usaba para enviar órdenes secretas a sus generales en los campos de
batalla.

![caeser-cipher](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Caesar3.svg/2000px-Caesar3.svg.png)


El cifrado césar es una de las técnicas más simples para cifrar un mensaje. Es
un tipo de cifrado por sustitución, es decir que cada letra del texto original
es reemplazada por otra que se encuentra un número fijo de posiciones
(desplazamiento) más adelante en el mismo alfabeto.


Por ejemplo, si usamos un desplazamiento (_offset_) de 3 posiciones:

* La letra A se cifra como D.
* La palabra CASA se cifra como FDVD.
* Alfabeto sin cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* Alfabeto cifrado: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C

En la actualidad, todos los cifrados de sustitución simple se descifran con
mucha facilidad y, aunque en la práctica no ofrecen mucha seguridad en la
comunicación por sí mismos; el cifrado César sí puede formar parte de sistemas
más complejos de codificación, como el cifrado Vigenère, e incluso tiene
aplicación en el sistema ROT13.

#### ¿A quién va dirigido?

A todas las personas que cuenten con acceso a redes sociales, correo electrónico, 
plataformas educativas, registros empresariales, y demás aplicaciones o servidores
en los que se requiera un *login*.

En este proyecto se tiene una aplicación web que servirá para que tu usuaria
pueda cifrar y descifrar un texto en el navegador indicando un desplazamiento
específico de caracteres (_offset_). De esta manera desde adolescentes hasta 
personas de la tercera edad se benefician con este servicio porque ya pueden 
copiar el texto cifrado y pegarlo en un documento para mayor seguridad y sin riesgo
a olvidar las contraseñas.

## 2. Experiencia de Usuario e Interfaz

### 2.1 Comportamiento esperado

La estructura general de la primera vista que ve el usuario es la siguiente:
![Bosquejo de ventana inicial](src/img/flujo_bosquejo/paso1.png)

En la parte inferior derecha hay un botón con una flecha hacia la derecha, la cual servirá para 
navegar entre escoger la opción de cifrar o descifrar. Al hacer click se observa el cambio en el 
botón que acompaña la flecha indicando si el proceso de de cifrado o de descifrado.

![Paso 2](src/img/flujo_bosquejo/paso2.png)

Luego se observa qu es el momento de ingresar el texto para el cifrado: Las restricciones en el tipo
de datos que puede ingresar el usuario es que no puede utilizar minúsuclas, la ñ, números ni algún 
otro caracter especial.

![Paso 3](src/img/flujo_bosquejo/paso3.png)

Ahora queremos que cifre el texto *LAROSADEGUADALUPE* y lo ingresamos en el recuadro donde dice 
*Ingrese su texto aquí...*. Por defecto el valor de offset que aparece es de *13*; sin embargo, el 
usuario debe poder ingresar el valor que desee siempre y cuando sea positivo y mayor que 0. Luego se 
da click sobre el botón de **Cifrar**, donde el texto que se había escrito en principio se reescribe 
con el texto ya cifrado y ahora se el botón nos da la opción de **Descifrar** o de con la flecha izquierda volver a la opción de **Cifrar**.

![Paso 4](src/img/flujo_bosquejo/paso4.png)

![Paso 5](src/img/flujo_bosquejo/paso5.png)
![Paso 6](src/img/flujo_bosquejo/paso6.png)
![Paso 7](src/img/flujo_bosquejo/paso7.png)
![Paso 8](src/img/flujo_bosquejo/paso8.png)
![Paso 9](src/img/flujo_bosquejo/paso9.png)


#### 2.1.1 Historia 1: Poder escoger si codificar o decodificar

Bosquejos iniciales para 
Descripción del flujo de historias de usuario

Descripción de las interacciones entre eventos 


## 3. Requerimientos Funcionales y No Funcionales

**1. Una interfaz que debe permitir a la usuaria:**

* **Cifrar un mensaje**
  - Insertar el mensaje (texto) que quiere cifrar. El mensaje usa alfabeto
    simplificado (solamente mayúsculas y sin ñ).
  - Elegir un numero de desplazamiento (_offset_) indicando cuántas
    posiciones quieres que el cifrado desplace cada caracter en el alfabeto.
    El numero sera positivo y entero (positive integer).
  - Ver el resultado del mensaje cifrado.

* **Descifrar un mensaje**
  - Insertar el mensaje (texto) que quieres descifrar. El mensaje usa alfabeto
    simplificado (solamente mayúsculas y sin ñ).
  - Elegir un numero desplazamiento (_offset_, que corresponda al que usamos
    para cifrar) indicando cuántas posiciones quieres que
    el cifrado desplace cada caracter en el alfabeto. El numero sera positivo y
    entero (positive integer).
  - Ver el resultado del mensaje descifrado.

**2. Pruebas unitarios de los métodos.**  
Los metódos de `cipher` (`encode` y `decode`) deben tener cobertura con
pruebas unitarias.

**3. Código de tu proyecto subido a tu repo y interfaz "desplegada".**  
El código final debe estar subido en un repositorio en GitHub.  
La interfaz o pagina web, debe ser "desplegada" usando GitHub Pages.

**4. Un README que contiene una definición del producto.**  
En el README cuéntanos cómo pensaste en los usuarios y cuál fue tu proceso
para definir el producto final a nivel de experiencia y de interfaz. Estas
preguntas sirven como guia:

* Quiénes son los principales usuarios de producto
* Cuáles son los objetivos de estos usuarios en relación con tu producto
* Cómo crees que el producto que estás creando está resolviendo sus problemas

## 4. Hitos Opcionales: 

*1. Agrega soporte para ñ, minúsculas, números y otros caracteres*

*2. Permitir cargar ficheros con extensión **.txt** para descifrar su contenido*  

*3. Permitir escribir un fichero con extensión **.txt** para guardar el texto cifrado*  


## 5. Para considerar Project Feedback

En resumen, los criterios de aceptación mínimos del proyecto para considerar
Project Feedback:

* [ ] Tiene una interfaz que permite a la usuaria cifrar y descifrar.
* [ ] El proyecto será entregado incluyendo pruebas unitarios de los métodos de `cipher`
(`encode` y `decode`).
* [ ] El proyecto será entregado libre de _errores_ de `eslint` (_warnings_ son ok).
* [ ] El proyecto será entregado subiendo tu código a GitHub.
* [ ] La interfaz será "desplegada" usando GitHub Pages.
* [ ] El README contiene una definición del producto.


*[Project 1 - Cipher in Trello](https://trello.com/invite/b/96ys0Mn4/ATTI6b8d992774ca310bcd278605f1ebe2214CA3BB25/project-1-cipher)*
