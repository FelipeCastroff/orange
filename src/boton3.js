import PropTypes from "prop-types";
import React, { Component } from "react";
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
  Modal,
  Visibility
} from "semantic-ui-react";
import Imagen1 from './Imagenes/I-Example1.png'
import Imagen2 from './Imagenes/I-Example2.png'
import Imagen3 from './Imagenes/I-Example3.png'
import Imagen4 from './Imagenes/I-Example4.png'
import DownloadLink from "react-download-link";
import ScrollAnimation from "react-animate-on-scroll";

const getWidth = () => {
  const isSSR = typeof window === "undefined";

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
};

const HomepageHeading = ({ mobile }) => (
  <div className="Fondo3">
    <Container>
      <Header as="h1" style={{ margintop: "1em" }} />
      <Header
        as="h1"
        content="Ejemplo en Python"
        inverted
        style={{
          fontSize: mobile ? "2em" : "4em",
          fontWeight: "normal",
          marginBottom: mobile ? "0em" : "0em",
          marginTop: mobile ? "1em" : "2em"
        }}
      />
      <Button
        primary
        animated
        size="huge"
        href="https://docs.microsoft.com/es-es/azure/cognitive-services/speech-service/"
      >
        <Button.Content visible>Sigue explorando</Button.Content>
        <Button.Content hidden>
          <Icon name='arrow right' />
        </Button.Content>
      </Button>
    </Container>
  </div>
);

HomepageHeading.propTypes = {
  mobile: PropTypes.bool
};

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
                <Menu.Item
                  as="a" >
                  <a href="/">HOME</a>
                </Menu.Item>
                <Menu.Item as="a">
                  <a href="/boton1"> Lo Basico</a>
                </Menu.Item>
                <Menu.Item as="a">
                  <a href="/boton2"> Speech Devices SDK</a>
                </Menu.Item>
                <Menu.Item as="a" active>
                  <a href="/boton3"> Implementacion Simple</a>
                </Menu.Item>
                <Menu.Item position="right">
                  <Button as="a" inverted={!fixed}
                    href='/Login'>
                    Log in
                  </Button>
                  <Button
                    as="a"
                    inverted={!fixed}
                    primary={fixed}
                    style={{ marginLeft: "0.5em" }}
                    href='/SignUp'
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
//Puede ser la vista de celular//
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
          <Menu.Item as="a"><a href='/'>HOME</a></Menu.Item>
          <Menu.Item as="a"><a href='boton1'>Lo Basico</a></Menu.Item>
          <Menu.Item as="a"><a href='/boton2'>Speech Devices SDK</a></Menu.Item>
          <Menu.Item as="a"><a href='/boton3'>Implementacion Simple</a></Menu.Item>
          <Menu.Item as="a"><a href='/Login'>Log in</a></Menu.Item>
          <Menu.Item as="a"><a href='/SignUp'>Sign Up</a></Menu.Item>
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
    <Segment style={{ padding: "8em 0em" }} vertical>
    <ScrollAnimation animateIn='bounceInRight'
  animateOut='bounceOutLeft'>
      <Grid container stackable verticalAlign='top'>
        <Grid.Row>
          <Grid.Column width={8}>
              <Header as='h2' style={{ fontSize: '2em' }}>
                Requisitos previos
              </Header>
            <Container className='puntonegro'>
              <t style={{ fontSize: '1.33me' }}>&bull; Una clave de suscripción de Azure para los servicios de voz. </t>
              <a href='https://docs.microsoft.com/es-es/azure/cognitive-services/speech-service/get-started'>
                Obtenga una gratis!
                            </a>
              <tr style={{ fontSize: '1.33me' }}>&bull; Python 3.5 o versiones posteriores. <a href='https://www.python.org/downloads/'> Puedes descargarlo aquí!</a> </tr>
              <tr style={{ fontSize: '1.33me' }}>&bull; El paquete del SDK de Voz de Python está disponible para estos sistemas operativos: </tr>
              <tr style={{ fontSize: '1.33me' }}>&bull; Windows: x64 y x86.</tr>
              <tr style={{ fontSize: '1.33me' }}>&bull; Linux: Ubuntu 16.04, Ubuntu 18.04, Debian 9 en x64.</tr>
              <tr style={{ fontSize: '1.33me' }}>&bull; Mac: macOS X versión 10.12 o posterior.</tr>
              <t style={{ fontSize: '1.33me' }}>&bull; Para Window se necesita</t> <a href='https://support.microsoft.com/es-cl/help/2977003/the-latest-supported-visual-c-downloads'> Microsoft Visual C++ Redistributable para Visual Studio 2019.</a>
            </Container>
          </Grid.Column>
          <Grid.Column width={8}>
            <Header as='h2' style={{ fontSize: '2em' }}>
              Instalación de Speech SDK
                      </Header>
            <p style={{ fontSize: '1.33me' }}>
              Para la instalción de Speech SDK debemos ejecutar este comando para instalar el paquete de Python
              desde PyPl para el SDK de voz:
                      </p>
            <t>pip install azure-cognitiveservices-speech</t>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      </ScrollAnimation>
    </Segment>
    <Divider
      as="h4"
      className="header"
      horizontal
      style={{ margin: "5em 0em", textTransform: "uppercase" }}
    >
      <a >Instalación y uso del SDK de Voz con Visual Studio Code</a>
    </Divider>
    <ScrollAnimation animateIn='fadeIn'>
    <Grid container stackable verticalAlign='middle'>
      <Grid.Row>
        <Grid.Column width={8}>
          <p>Una vez ya cumplidos los requisitos previos para windows necesitaremos que abra Visual Studio Code e instale la extensión de Python. Seleccione
            <t style={{ fontWeight: "bold" }}> File</t> >
            <t style={{ fontWeight: "bold" }}> Preferences</t> >
            <t style={{ fontWeight: "bold" }}> Extensions</t> en el menú. Busque Python.</p>
        </Grid.Column>
        <Grid.Column width={8}>
          <Image
            fluid
            src={Imagen1}
          />
        </Grid.Column>
      </Grid.Row>
      <Divider />
    </Grid>
    </ScrollAnimation>
    <ScrollAnimation animateIn='fadeIn'>
    <Grid container stackable verticalAlign='middle'>
      <Grid.Row>
        <Grid.Column width={8}>
          <Image
            fluid
            src={Imagen2}
          />
        </Grid.Column>
        <Grid.Column width={8}>
          <Container className='puntonegro'>
            <tr style={{ fontSize: '1.33me' }}>&bull; Cree una carpeta en la que almacenar el proyecto. Por ejemplo, puede usar para ello el Explorador de Windows.</tr>
            <tr style={{ fontSize: '1.33me' }}>&bull; En Visual Studio Code, seleccione el icono de <t style={{ fontWeight: 'bold' }}> File</t>. A continuación, abra la carpeta que creó.</tr>
          </Container>
        </Grid.Column>
      </Grid.Row>
      <Divider />
    </Grid>
    </ScrollAnimation>
    <ScrollAnimation animateIn='fadeIn'>
    <Grid container stackable verticalAlign='middle'>
      <Grid.Row>
        <Grid.Column width={8}>
          <Container className='puntonegro'>
            <tr style={{ fontSize: '1.33me' }}>&bull; Deberá crear un archivo de código fuente de Python speechsdk.py mediante la selección del icono de nuevo archivo.</tr>
            <tr style={{ fontSize: '1.33me' }}>&bull; Copie, pegue y guarde el código de Python en el archivo recién creado.</tr>
            {/*<CPython Centered></CPython>*/}
            <DownloadLink
              label="Aquí el código"
              filename="Aún no puedo hacer funcionar esto.py"
              exportFile={() => ""}
            />
          </Container>
        </Grid.Column>
        <Grid.Column width={8}>
          <Image
            fluid
            src={Imagen3}
          />
        </Grid.Column>
      </Grid.Row>
      <Divider />
    </Grid>
    </ScrollAnimation>
    <ScrollAnimation animateIn='fadeIn'>
    <Grid container stackable verticalAlign='middle'>
      <Grid.Row>
        <Grid.Column width={8}>
          <Image
            fluid
            src={Imagen4}
          />
        </Grid.Column>
        <Grid.Column width={8}>
          <Container className='puntonegro'>
            <tr style={{ fontSize: '1.33me' }}>&bull; Inserte la información de la suscripción de los servicios de voz la cual se obtuvo en los requisitos previos.</tr>
            <tr style={{ fontSize: '1.33me' }}>&bull; <t style={{ fontWeight: 'bold' }}> *IMPORTANTE*</t> Puede instalar el paquete de Python del SDK de Voz desde dentro de Visual Studio Code. Hágalo si no está instalado
            aún para el intérprete de Python seleccionado. Para instalar el paquete del SDK de Voz, abra un terminal. Abra de nuevo la paleta de comandos (Ctrl+Mayús+P)
            y escriba Terminal: Create New Integrated Terminal (Crear terminal integrado). En el terminal que se abre, escriba el comando python -m pip install
                        azure-cognitiveservices-speech o el que sea apropiado para su sistema.</tr>
            <tr style={{ fontSize: '1.33me' }}>&bull; Para ejecutar el código de ejemplo, haga clic con el botón derecho en algún lugar dentro del editor. Seleccione Run Python File in Terminal
                        (Ejecutar archivo de Python en terminal). Diga algunas palabras cuando se le pida. El texto transcrito se muestra poco después.</tr>
          </Container>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    </ScrollAnimation>
    <Segment style={{ padding: "8em 0em" }} vertical>
      {/*Footer*/}
    </Segment>
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
