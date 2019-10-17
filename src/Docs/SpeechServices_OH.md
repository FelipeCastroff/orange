# Speech Services de Microsoft Azure

<img src="https://www.nvidia.com/content/dam/en-zz/en-ce/svg-logos/nvidia-partner-microsoft-azure-logo.svg" width="900" />

---

## Introducción

En la medida que avanzan a pasos agigantados las nuevas tecnologias, es posible apreciar las multiples areas de desarrollo que estos avances generan, es dado a esto, que muchas empresas buscan el optimizar los procesos de distintas indoles que estas manejan, para mejorar rendimiento, obtener mejores oportunidades de ingresos y lograr tareas con mayor eficacia u eficiencia. Dentro de estas empresas que han logrado gran desarrollo tecnologico en este ultimo tiempo, tenemos presente a la reconocida "Microsoft", la cual cuenta hoy en dia, con un sin fin de tecnologias en distintas areas de investigacion y desarrollo, dentro de estas tecnologias tenemos presente los servicios de "Microsoft Azure", un servicio capaz de otorgarle a los desarrolladores un mundo de informatica en la nube para las distintas herramientas que se implementan a la hora de crear, manejar y utilizar las distintas tecnologias del mundo hoy ne dia. Hoy vamos a hablar principalmente de una de estas tantas tecnologias que mas nos llaman la atencion: **Speech Service** el cual es un servicio de voz que busca expandir la traduccion de charlas y conferencias a simples caracteres, ayudando en distintas areas que aun desconocemos.

---

#### Ustedes se Preguntaran...

#### ¿A que nos referimos con los servicios de Voz?

Los servicios de voz de Azure se dividen en 3 categorías las cuales estan formadas por los servicios de voz a texto, texto a voz y traducción de voz. Ademas de facilitar este trabajo con el SDK de voz, el SDK de dispositivos de voz o las API de Rest.

## Estos son los servicios de voz

#### Speech to Text

La transcripción de conversaciones captura la voz en tiempo real para que todos los participantes de la reunión puedan participar de lleno en la discusión, identificar lo que ha dicho cada uno y cuándo se ha dicho y continuar rápidamente con los pasos siguientes.

#### Text to Speech

Su funcion es compilar aplicaciones y servicios que se dirijan a los usuarios de forma natural, por lo que mejorarán la accesibilidad y la usabilidad. Esto posibilita el convertir texto en audio en tiempo casi real, reproducirlo y guárdarlo como archivo para usarlo más adelante. Text to Speech está disponible en las versiones Neural y Standard.

#### Traducción de voz

Incorporar a su aplicación funcionalidad de traducción de voz en tiempo real para cualquiera de los idiomas admitidos y reciba la traducción en forma de texto o de voz. Los modelos de Speech Translation se basan en tecnologías vanguardistas de reconocimiento de voz y traducción automática neuronal (NMT). Están optimizados para comprender la forma de hablar de las personas en la vida real y generar traducciones de una calidad excepcional.

---

## Documentacion y Detalles

Es posible implementar Speech Services en distintos tipos de lenguajes, estableciendo el uso de este servicio en un corto periodo de tiempo. Para utilizar el **SDK** puede escoger uno de estos lenguajes de programacion [C#][1], [.NET][2], [Unity][3], [Python][4], [Node.JS][5] y [JavaScript][6]

[1]: https://docs.microsoft.com/en-us/azure/cognitive-services/speech-service/quickstart-csharp-dotnet-windows
[2]: https://docs.microsoft.com/en-us/azure/cognitive-services/speech-service/quickstart-csharp-dotnet-windows
[3]: https://docs.microsoft.com/es-mx/azure/cognitive-services/speech-service/quickstart-csharp-unity
[4]: https://docs.microsoft.com/es-mx/azure/cognitive-services/speech-service/quickstart-csharp-unity
[5]: https://docs.microsoft.com/es-mx/azure/cognitive-services/speech-service/quickstart-js-node
[6]: https://docs.microsoft.com/es-mx/azure/cognitive-services/speech-service/quickstart-js-browser

#### Permite realizar varias tareas:

- Texto a Voz
- Palabras de Activacion Personalizadas
- Traduccion
- Transcripcion de Conversaciones
- Asistente Virtual por Voz
- Personalizacion Listas de Frases

## Conversion de Voz a Texto

La conversión de voz a texto de Servicios de voz de Azure, también conocida simplemente como voz a texto, permite la transcripción en tiempo real de secuencias de audio a texto que las aplicaciones, herramientas o dispositivos pueden usar, mostrar o actuar como ante una entrada de comandos. Este servicio funciona con la misma tecnología de reconocimiento que Microsoft utiliza para los productos de Cortana y Office, y funciona sin problemas con la traducción y el servicio de texto a voz.

## Personalizacion

Además del modelo de línea de base estándar usado por Servicios de voz, puede personalizar modelos para sus necesidades con los datos disponibles para superar barreras de reconocimiento de voz tales como el estilo de habla, el vocabulario y el ruido de fondo. Puede consultar todo esto en [Custom Speech](https://docs.microsoft.com/es-mx/azure/cognitive-services/speech-service/how-to-custom-speech).

## Además...

Este servicio busca además, ser utilizado en escenarios empresariales, imagine las ventajas de transcibir facilmente llamadas, conferencias u reuniones, donde quede plasmado en texto cada una de las cosas que se hablaron y ademas saber quien dijo que cosa. Speech Service es un servicio prometedor que optimiza buscando de manera eficiente el registrar informacion al hablar, dentro de sus capacidades.

---

# **Conceptos Clave de los Servicios**

- ## ¿Que es el Speech SDK?

  Speech SDK es un kit de desarrollo de software (SDK) que proporciona aplicaciones de acceso a las funciones del servicio Voz, lo que facilita el desarrollo de software habilitado para la voz. Actualmente, los SDK proporcionan acceso a voz a texto, texto a voz, traducción de voz ,entre otras.[ (mas informacion)](https://docs.microsoft.com/es-es/azure/cognitive-services/speech-service/speech-sdk)

- ## ¿Que son los Speech Devices?

  Speech Devices SDK es una biblioteca preajustada que se combina con kits de desarrollo de matriz de micrófono especialmente diseñados. Funcionan con una amplia variedad de dispositivos y fuentes de audio, puede llevar sus aplicaciones de voz al siguiente nivel con hardware y software compatibles

  Speech Devices SDK emplea Speech SDK para enviar el audio procesado por un algoritmo avanzado de procesamiento de audio desde la matriz de micrófonos del dispositivo a los Servicios de voz que son los tres nombrados anteriormente.[ (mas informacion)](https://docs.microsoft.com/en-us/azure/cognitive-services/speech-service/overview)

  &nbsp;

  <img src="https://docs.microsoft.com/en-us/azure/cognitive-services/speech-service/media/scenarios/conversation-transcription-service.png" width="800" />

  &nbsp;

---

# **Tipos de Servicios de Voz**

## 1. Servicio de Texto a Voz

La opción de texto a voz de los servicios de voz de Azure es un servicio que permite que sus aplicaciones, herramientas o dispositivos conviertan el texto en una voz sintetizada natural similar a la humana. Puede elegir entre voces estándar y neuronales, o puede crear su propia voz personalizada única para su producto o marca. Tiene más de 75 voces estándar disponibles en más de 45 idiomas y configuraciones regionales y 5 voces neuronales que están disponibles en 4 idiomas y configuraciones regionales

### **Voces del Servicio**

La opción de texto a voz de los servicios de voz de Azure es un servicio que permite que sus aplicaciones, herramientas o dispositivos conviertan el texto en una voz sintetizada natural similar a la humana. Puede elegir entre voces estándar y neuronales, o puede crear su propia voz personalizada única para su producto o marca. Tiene más de 75 voces estándar disponibles en más de 45 idiomas y configuraciones regionales y 5 voces neuronales que están disponibles en 4 idiomas y configuraciones regionales

## 2. Servicio de Conversacion de Voz a Texto

La conversión de voz a texto de Servicios de voz de Azure, también conocida simplemente como voz a texto, permite la transcripción en tiempo real de secuencias de audio a texto que las aplicaciones, herramientas o dispositivos pueden usar, mostrar o actuar como ante una entrada de comandos. Este servicio funciona con la misma tecnología de reconocimiento que Microsoft utiliza para los productos de Cortana y Office, y funciona sin problemas con la traducción y el servicio de texto a voz

De forma predeterminada, el servicio de voz a texto utiliza el modelo de lenguaje universal. Este modelo se entrenó con datos propiedad de Microsoft y se implementa en la nube. Resulta óptimo para escenarios de conversación y dictado. Si usa voz a texto para el reconocimiento y la transcripción en un entorno único, puede crear y entrenar modelos acústicos, lenguaje y pronunciación personalizados para dirigir el sonido ambiental o vocabulario específico del sector.

## 3. Servicio de Traduccion de voz

La traducción de voz de Servicios de voz de Azure permite la traducción voz a voz y voz a texto de secuencias de audio en varios idiomas en tiempo real. Con el SDK de voz, sus aplicaciones, herramientas y los dispositivos tienen acceso a las transcripciones de origen y a las salidas de traducción del audio proporcionadas. Se devuelven resultados provisionales de transcripción y traducción cuando se detecta la voz y los resultados finales se pueden convertir en voz sintetizada.

De forma predeterminada, el servicio de voz a texto utiliza el modelo de lenguaje universal. Este modelo se entrenó con datos propiedad de Microsoft y se implementa en la nube. Resulta óptimo para escenarios de conversación y dictado. Si usa voz a texto para el reconocimiento y la transcripción en un entorno único, puede crear y entrenar modelos acústicos, lenguaje y pronunciación personalizados para dirigir el sonido ambiental o vocabulario específico del sector.

### Mas informacion sobre los servicios de azure en el siguiente [enlace](https://azure.microsoft.com/es-es/services/).

---

## Ejemplo en Python

### Introducción:

El ejemplo a continuación tiene por objetivo mostrar un funcionamiento básico de como speech service puede ser utilizado para un gran numero de tareas y ejemplos.

Se presentará una sección en el código la cual será la encargada de transformar voz a texto y otra se encargará de texto a voz descritas dentro del código.

#### Requisitos Previos:

- Una clave de suscripción de Azure para los servicios de voz. [Obtenga una gratis](https://docs.microsoft.com/es-es/azure/cognitive-services/speech-service/get-started)!
- Python 3.5 o versiones posteriores. Puedes descargarlo [aquí!](https://www.python.org/downloads/)
- El paquete del SDK de Voz de Python está disponible para estos sistemas operativos:
  - Windows: x64 y x86.
  - Linux: Ubuntu 16.04, Ubuntu 18.04, Debian 9 en x64
  - Mac: macOS X versión 10.12 o posterior.
- Para Window se necesita [Microsoft Visual C++ Redistributable para Visual Studio 2019](https://support.microsoft.com/es-cl/help/2977003/the-latest-supported-visual-c-downloads).

#### Instalación de Speech SDK:

Para la instalción de Speech SDK debemos ejecutar este comando para instalar el paquete de Python desde PyPl para el SDK de voz:

##### `pip install azure-cognitiveservices-speech`

## Instalacion y uso del SDK de voz con Visual Studio Code

Una vez ya cumplidos los requisitos previos para windows necesitaremos que abra Visual Studio Code e instale la extensión de Python. Seleccione **File** > **Preferences** > **Extensions** en el menú. Busque Python.

<img src="https://orange-heist.netlify.com/static/media/I-Example1.5744cd73.png" width="850" />

- Cree una carpeta en la que almacenar el proyecto. Por ejemplo, puede usar para ello el Explorador de Windows.
- En Visual Studio Code, seleccione el icono de File. A continuación, abra la carpeta que creó.

<img src="https://orange-heist.netlify.com/static/media/I-Example2.fb75d2e8.png" width="850" />

- Deberá crear un archivo de código fuente de Python speechsdk.py mediante la selección del icono de nuevo archivo.
- Copie, pegue y guarde el código de Python en el archivo recién creado. [Aquí el código.](https://drive.google.com/file/d/1Z6EodCTFLgRArOt2TX4-EnW5PTtX5i_P/view?usp=sharing)

<img src="https://orange-heist.netlify.com/static/media/I-Example3.21e92b63.png" width="850" />

- Inserte la información de la suscripción de los servicios de voz la cual se obtuvo en los requisitos previos.
- **_IMPORTANTE_** Puede instalar el paquete de Python del SDK de Voz desde dentro de Visual Studio Code. Hágalo si no está instalado aún para el intérprete de Python seleccionado. Para instalar el paquete del SDK de Voz, abra un terminal. Abra de nuevo la paleta de comandos (Ctrl+Mayús+P) y escriba Terminal: Create New Integrated Terminal (Crear terminal integrado). En el terminal que se abre, escriba el comando python. O el que sea apropiado para su sistema.

#### `-m pip install azure-cognitiveservices-speech`

- Para ejecutar el código de ejemplo, haga clic con el botón derecho en algún lugar dentro del editor. Seleccione Run Python File in Terminal (Ejecutar archivo de Python en terminal). Diga algunas palabras cuando se le pida. El texto transcrito se muestra poco después.

<img src="https://orange-heist.netlify.com/static/media/I-Example4.3586521a.png" width="850" />
