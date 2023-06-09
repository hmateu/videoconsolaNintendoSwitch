# Videoconsola Nintendo Switch

**Proyecto 1** - Videoconsola con HTML, CSS Y JS.

Esta videoconsola ha sido desarrollada por Hétor Mateu, como primer proyecto del Bootcamp de Full Stack Developer de Geekshubs Academy.

## Tabla de contenidos
* [💻 Tecnologías utilizadas](#tecnologías-utilizadas)
* [🕹️ Cómo funciona](#cómo-funciona)
* [💡 Referencias](#referencias)
* [:pick: Desarrollo](#desarrollo)
* [📃 Licencia y Copyright](#licencia-y-copyright)

### Tecnologías utilizadas
<img src="https://camo.githubusercontent.com/49fbb99f92674cc6825349b154b65aaf4064aec465d61e8e1f9fb99da3d922a1/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f68746d6c352d2532334533344632362e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d68746d6c35266c6f676f436f6c6f723d7768697465" alt="HTML5" data-canonical-src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&amp;logo=html5&amp;logoColor=white" style="max-width: 100%;"> <img src="https://camo.githubusercontent.com/e6b67b27998fca3bccf4c0ee479fc8f9de09d91f389cccfbe6cb1e29c10cfbd7/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f637373332d2532333135373242362e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d63737333266c6f676f436f6c6f723d7768697465" alt="CSS3" data-canonical-src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&amp;logo=css3&amp;logoColor=white" style="max-width: 100%;"> <img src="https://camo.githubusercontent.com/ecd0d6fc3da2be7f3a92b0a5bb2d8a5ed5a97fba21dc59ae638caa548d79d88d/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6a61766173636970742d4546443831443f7374796c653d666f722d7468652d6261646765266c6f676f3d6a617661736372697074266c6f676f436f6c6f723d626c61636b" data-canonical-src="https://img.shields.io/badge/javascipt-EFD81D?style=for-the-badge&amp;logo=javascript&amp;logoColor=black" style="max-width: 100%;">
<img src="https://user-images.githubusercontent.com/121863208/227808612-8d3f0fee-99d9-45d8-8274-6584c9ac0b38.svg" style="max-width: 100%;"> <img src="https://user-images.githubusercontent.com/121863208/227808620-cd6e5d5c-dd63-4a9d-b19d-0983807cae95.svg" style="max-width: 100%;">

También se ha utilizado, para mejorar el resultado final: **Adobe Photoshop**.

### Cómo funciona
Esta réplica de la videoconsola Nintendo Switch, es capaz de realizar un par de interacciones con el usuario.
**Encender / Apagar** la videoconsola:

* Para **encender la videoconsola**, basta con **pulsar** el botón situado en la parte inferior del control derecho. El botón con el **icono de una casa**. Una vez encendida, **si lo vuelves a pulsar, se apagará**.
<br>

  >**El botón que enciende la pantalla se hunde al pulsarlo**.
  >![image](./img/encenderSwitch.jpg)

* El **cursor** del ratón **cambia** cada vez que se sitúa sobre algún botón.
* Los diferentes botones tienen una animación al ser pulsados.

### Referencias
Para la realización de este proyecto, me he basado en la videoconsola **Nintendo Switch**. Fue lanzada al mercado el **20 de septiembre del 2019** y rápidamente se convirtió en la consola de sobremesa que más rápido se ha vendido en la historia de la propia compañía.
>![image](./img/switchReal.jpg)

### Desarrollo

La videoconsola Nintendo Switch, ha sido desarrollada en gran parte con tan solo **HTML5** y **CSS3**. Finalmente se ha utilizado un poco de **Javascript** para la interacción del encendido de la pantalla con el usuario.

El proyecto se ha llevado a cabo utilizando una estructura sólida de elementos **&lt;div&gt;**, distribuidos ordenadamente mediante el diseño de caja flexible, comúnmente conocido como **Flexbox**.

**1.** Lo primero que se ha hecho ha sido dividir la consola en **3 grandes bloques**: El **control de la izquierda**, la **pantalla central** y el **control de la derecha**.
 >![image](./img/divsPricipales.jpg)
 
 **2.** A continuación, cada uno de los divs contiene más divs y así sucesivamente hasta llegar a la estructura actual. Donde cada uno de los divs principales tiene un alto número de divs en su interior, para poder representar la videoconsola de la mejor manera posible.  

**Un ejemplo de la estructura actual de divs que se ha utilizado es el siguiente:**

>![image](./img/divsSecundarios.jpg)

### Licencia y Copyright
* Este proyecto se ha realizado bajo la **licencia MIT**.
* El material multimedia utilizado para la realización de este proyecto, es propiedad de ***Nintendo Co., Ltd***.