import PropTypes from "prop-types";
import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
  GridColumn
} from "semantic-ui-react";
import Vista_inicial from "../src/VistaInicial/Vista_inicial";

// Heads up!
// We using React Static to prerender our docs with server side rendering, this is a quite simple solution.
// For more advanced usage please check Responsive docs under the "Usage" section.
const getWidth = () => {
  const isSSR = typeof window === "undefined";

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
};

/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */

const HomepageHeading = ({ mobile }) => (
  <div className="Fondo2">
    <Container>
      <Header as="h1" style={{ margintop: "1em" }} />
      <Header
        as="h1"
        content="Speech Devices SDK"
        inverted
        style={{
          fontSize: mobile ? "2em" : "4em",
          fontWeight: "normal",
          marginBottom: mobile ? "0em" : "0em",
          marginTop: mobile ? "1em" : "2em"
        }}
      />
      
    </Container>
  </div>
);

HomepageHeading.propTypes = {
  mobile: PropTypes.bool
};

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
  state = {};

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  render() {
    const { children } = this.props;
    const { fixed } = this.state;

    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign="center"
            style={{ minHeight: 300, padding: "1em 0em" }}
            vertical
          >
            <Menu
              fixed={fixed ? "top" : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size="large"
            >
              <Container>
                <Menu.Item as="a">
                  <a href="/"> HOME</a>
                </Menu.Item>
                <Menu.Item as="a">
                  <a href="/boton1"> BOTON 1 </a>
                </Menu.Item>
                <Menu.Item as="a" active>
                  <a href="/boton2"> Speech Devices SDK</a>
                </Menu.Item>
                <Menu.Item as="a">
                  <a href="/boton3"> BOTON 3 </a>
                </Menu.Item>
                <Menu.Item position="right">
                  <Button as="a" inverted={!fixed}>
                    Log in
                  </Button>
                  <Button
                    as="a"
                    inverted={!fixed}
                    primary={fixed}
                    style={{ marginLeft: "0.5em" }}
                  >
                    Sign Up
                  </Button>
                </Menu.Item>
              </Container>
            </Menu>
            <HomepageHeading />
          </Segment>
        </Visibility>

        {children}
      </Responsive>
    );
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node
};

class MobileContainer extends Component {
  state = {};

  handleSidebarHide = () => this.setState({ sidebarOpened: false });

  handleToggle = () => this.setState({ sidebarOpened: true });

  render() {
    const { children } = this.props;
    const { sidebarOpened } = this.state;

    return (
      <Responsive
        as={Sidebar.Pushable}
        getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}
      >
        <Sidebar
          as={Menu}
          animation="push"
          inverted
          onHide={this.handleSidebarHide}
          vertical
          visible={sidebarOpened}
        >
          <Menu.Item as="a" active>
            Home
          </Menu.Item>
          <Menu.Item as="a">Work</Menu.Item>
          <Menu.Item as="a">Company</Menu.Item>
          <Menu.Item as="a">Careers</Menu.Item>
          <Menu.Item as="a">Log in</Menu.Item>
          <Menu.Item as="a">Sign Up</Menu.Item>
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment
            inverted
            textAlign="center"
            style={{ minHeight: 350, padding: "1em 0em" }}
            vertical
          >
            <Container>
              <Menu inverted pointing secondary size="large">
                <Menu.Item onClick={this.handleToggle}>
                  <Icon name="sidebar" />
                </Menu.Item>
                <Menu.Item position="right">
                  <Button as="a" inverted>
                    Log in
                  </Button>
                  <Button as="a" inverted style={{ marginLeft: "0.5em" }}>
                    Sign Up
                  </Button>
                </Menu.Item>
              </Menu>
            </Container>
            <HomepageHeading mobile />
          </Segment>

          {children}
        </Sidebar.Pusher>
      </Responsive>
    );
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node
};

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node
};

const HomepageLayout = () => (
  <ResponsiveContainer>
    <Segment basic  vertical>
    <Divider
          as="h4"
          className="header"
          horizontal
          style={{ margin: "5em 0em", textTransform: "uppercase" }}
        >
          <a >conceptos clave</a>
    </Divider>
    <ScrollAnimation animateIn="fadeIn" >
      <Grid container stackable >
        <Grid.Row>
        
          <Grid.Column width={8} verticalAlign="top">
            <Header as="h3" style={{ fontSize: "2em" }}>
              ¿Que son los Speech Devices?
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              Speech Devices SDK es una biblioteca preajustada que se 
              combina con kits de desarrollo de matriz de micrófono especialmente diseñados.
              Funcionan con una amplia variedad de dispositivos y fuentes de audio,
              puede llevar sus aplicaciones de voz 
              al siguiente nivel con hardware y software compatibles
            </p>
            <p style={{ fontSize: "1.33em" }}>
              Speech Devices SDK emplea  Speech SDK para enviar el audio procesado por un algoritmo 
              avanzado de procesamiento de audio desde la matriz de micrófonos 
              del dispositivo a los Servicios de voz que son  los tres nombrados anteriormente.
            </p>

    
          </Grid.Column>{" "}
          <Grid.Column verticalAlign= "middle" floated="right" width={7} >
            <div class="c">
              <div class="i">
                <img class="img" src="https://dv-website.s3.amazonaws.com/uploads/2015/09/Voice-Processing.jpg" />
              </div>
              <div class="s1"></div>
              <div class="s2"></div>
              <div class="s3"></div>
              
            </div>
          </Grid.Column>
          <Grid.Column floated= "left" width={7} style={{ margin: "8em 0em" }} >
            <div>
              <div >
                <img  src = "https://docs.microsoft.com/es-es/azure/media/index/api_bing_speech.svg" height="400" width="400" />
              </div>

              
            </div>
          </Grid.Column>
          <Grid.Column width={7} floated="right" verticalAlign= "middle">
            <Header as="h3" style={{ fontSize: "2em" } }>
              ¿Que es el Speech SDK?
            </Header>
              <p style={{ fontSize: "1.33em" }}>
                Speech SDK es un kit de desarrollo de software (SDK) que proporciona  aplicaciones de
                acceso a las funciones del servicio Voz, lo que facilita el desarrollo de software 
                habilitado para la voz. Actualmente, los SDK proporcionan acceso a voz a 
                texto, texto a voz, traducción de voz ,entre otras.
              </p>
          </Grid.Column>

        </Grid.Row>
       
       
      </Grid>
    </ScrollAnimation>

    </Segment>
    <Segment basic style={{ padding: "0em" }} vertical>
        <Divider
          as="h4"
          className="header"
          horizontal
          style={{ margin: "2em 0em", textTransform: "uppercase" }}>
          <a >Tipos de servicios de voz</a>
        </Divider>
        <ScrollAnimation animateIn="fadeIn">
        <Grid container columns={2} >
          <Grid.Column verticalAlign="middle">
              <Header as="h3" style={{ fontSize: "2em " } }>
                Servicio Texto a Voz
              </Header>
              <p style={{ fontSize: "1.33em" }}>
                La opción de texto a voz de los servicios de voz de Azure es un servicio que 
                permite que sus aplicaciones, herramientas o dispositivos conviertan el texto 
                en una voz sintetizada natural similar a la humana. Puede elegir entre voces estándar 
                y neuronales, o puede crear su propia voz personalizada única para su producto o marca. 
                Tiene más de 75 voces estándar disponibles en más de 45 idiomas y configuraciones regionales
                y 5 voces neuronales que están disponibles en 4 idiomas y configuraciones regionales
              </p>

          </Grid.Column>

          <Grid.Column width={8} floated="right" >
              <div >
                <img  size = "small" src= "https://addons.cdn.mozilla.net/user-media/previews/thumbs/219/219717.png?modified=1558605872" />
              </div>
          </Grid.Column>
              
              
              <Grid style={{ margin: "0em 0em" }}>
                <header as = "h6" style = {{ fontSize: "2em" ,margin: "1em 0em"}}>voces del servicio</header>

                <p style={{ fontSize: "1.33em" }}> Las voces estándar se crean mediante técnicas de Síntesis paramétrica 
                    estadística y de Síntesis de concatenación. Estas voces son realmente inteligibles y suenan muy 
                    naturales. Puede habilitar fácilmente sus aplicaciones para que hablen en más de 45 idiomas, 
                    con una amplia gama de opciones de voz. Estas voces proporcionan una alta precisión de 
                    pronunciación, admiten abreviaturas, expanden acrónimos, interpretan la fecha y la hora, son
                    polifónicas y ofrecen muchas cosas más. Use la voz estándar para mejorar la
                    accesibilidad de sus aplicaciones y servicios al permitir que los usuarios}
                    interactúen con su contenido de manera audible.
                </p>
               <p style={{ fontSize: "1.33em" }}>
                    Las voces neuronales usan redes neuronales profundas para superar los límites de los sistemas
                    tradicionales de texto a voz y así poder hacer coincidir los patrones de acentuación y 
                    entonación en el lenguaje hablado y sintetizar las unidades del habla en una voz del equipo. 
                    La conversión de texto a voz estándar divide la prosodia en análisis lingüísticos separados 
                    y pasos de predicción acústica que se rigen por modelos independientes, lo que puede resultar
                    en una síntesis de voz que se oye amortiguada. La capacidad neuronal se encarga de la 
                    predicción de la prosodia y la síntesis de voz simultáneamente, lo que resulta en una voz más 
                    fluida y natural.
                </p>
                <p style={{ fontSize: "1.33em" }}>
                    La personalización de la voz le permite crear una voz reconocible y única para su marca.
                    Para crear su fuente de voz, haga que un estudio grabe y cargue los scripts asociados como 
                    datos de aprendizaje. A continuación, el servicio crea un modelo de voz único ajustado a la
                    grabación. Asimismo, puede usar esta fuente de voz personalizada para sintetizar la voz
                </p>
              </Grid>

         </Grid>
        </ScrollAnimation>

          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <ScrollAnimation animateIn="fadeIn">
          <Grid container columns={2} style = {{margin: "0em 0em"}}>
            <Grid.Column verticalAlign="middle">
                <div >
                  <img  size = "small" src= "https://miro.medium.com/max/556/1*NhOH4X9wKWfO6o8faYFf-w.png" />
                </div>
                
            </Grid.Column>
            <Grid.Column width={7} floated="right" >
              <Header as="h3" style={{ fontSize: "2em" } }>
                Servicio de conversacion de voz a texto
              </Header>
              <p style={{ fontSize: "1.33em" }}>
                La conversión de voz a texto de Servicios de voz de Azure, 
                también conocida simplemente como voz a texto, permite la 
                ranscripción en tiempo real de secuencias de audio a texto que las 
                aplicaciones, herramientas o dispositivos pueden usar, mostrar o actuar 
                como ante una entrada de comandos. Este servicio funciona con la misma 
                tecnología de reconocimiento que Microsoft utiliza para los productos de Cortana 
                y Office, y funciona sin problemas con la traducción y el servicio de texto a voz
              </p>
             </Grid.Column>

          </Grid>
          <Grid style={{ margin: "0em 4em" }}>
              <p style={{ fontSize: "1.33em" }}>
              De forma predeterminada, el servicio de voz a texto utiliza el modelo de lenguaje universal.
               Este modelo se entrenó con datos propiedad de Microsoft y se implementa en la nube. 
               Resulta óptimo para escenarios de conversación y dictado. Si usa voz a texto para el 
               reconocimiento y la transcripción en un entorno único, puede crear y entrenar modelos acústicos,
                lenguaje y pronunciación personalizados para dirigir el sonido ambiental o vocabulario 
                específico del sector.
              </p>
          </Grid>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeIn">
          <Grid container columns={2} >
          <Grid.Column verticalAlign="middle">
              <Header as="h3" style={{ fontSize: "2em " } }>
                Servicio de Traduccion de voz
              </Header>
              <p style={{ fontSize: "1.33em" }}>
                La traducción de voz de Servicios de voz de Azure permite la 
                traducción voz a voz y voz a texto de secuencias de audio en varios 
                idiomas en tiempo real. Con el SDK de voz, sus aplicaciones, herramientas 
                y los dispositivos tienen acceso a las transcripciones de origen y a las 
                salidas de traducción del audio proporcionadas. Se devuelven resultados 
                provisionales de transcripción y traducción cuando se detecta la voz y los 
                resultados finales se pueden convertir en voz sintetizada.
              </p>
            </Grid.Column>
             <Grid.Column width={6} floated="right" >
              <div >
                <img  height="300" width="300" src= "https://images-na.ssl-images-amazon.com/images/I/41b6XVDD39L._SY355_.png" />
              </div>
            </Grid.Column>

          </Grid>
          <Grid width={5} style={{ margin: "0em 4em" }}>
              <p style={{ fontSize: "1.33em" }}>
              De forma predeterminada, el servicio de voz a texto utiliza el modelo de lenguaje universal.
               Este modelo se entrenó con datos propiedad de Microsoft y se implementa en la nube. 
               Resulta óptimo para escenarios de conversación y dictado. Si usa voz a texto para el 
               reconocimiento y la transcripción en un entorno único, puede crear y entrenar modelos acústicos,
                lenguaje y pronunciación personalizados para dirigir el sonido ambiental o vocabulario 
                específico del sector.
              </p>
          </Grid>
          </ScrollAnimation>

          
    </Segment>
    <br></br>
    <br></br>
    <br></br>

    <Segment inverted vertical style={{ padding: "5em 0em" }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as="h4" content="Contactanos" />
              <List link inverted>
                <List.Item
                  as="a"
                  href="https://p7.hiclipart.com/preview/405/543/746/dio-brando-internet-meme-know-your-meme-rage-comic-jojo-s-bizarre-adventure-others.jpg"
                >
                  Dio
                </List.Item>
                <List.Item as="a" href="https://www.trifenix.io">
                  Contact Us
                </List.Item>
                <List.Item as="a">+56952984672</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as="h4" content="Instagrams" />
              <List link inverted>
                <List.Item
                  as="a"
                  href="https://www.instagram.com/_alondra_hg/?hl=es-la"
                >
                  Sofia Gallardo
                </List.Item>
                <List.Item
                  as="a"
                  href="https://www.instagram.com/weon.simio/?hl=es-la"
                >
                  Fernando Del Pino
                </List.Item>
                <List.Item
                  as="a"
                  href="https://www.instagram.com/ignacio_lopez_nicolas/?hl=es-la"
                >
                  Ignacio Lopez
                </List.Item>
                <List.Item
                  as="a"
                  href="https://www.instagram.com/felipe_castro.exe/?hl=es-la"
                >
                  Felipe Castro
                </List.Item>
                <List.Item
                  as="a"
                  href="https://www.instagram.com/trifenix.io/?hl=es-la"
                >
                  Trifeniz.io
                </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as="h4" inverted>
                Footer Header
              </Header>
              <p>
                Extra space for a call to action inside the footer that could
                help re-engage users.
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </ResponsiveContainer>
);
export default HomepageLayout;