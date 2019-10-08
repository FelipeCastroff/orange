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
  Visibility
} from "semantic-ui-react";
import Vista_inicial from "../src/VistaInicial/Vista_inicial";
import Imagen1 from './Imagenes/I-Example1.png'

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
      <Header
        as="h2"
        content=" 'Kono Dio Da'"
        inverted
        style={{
          fontSize: mobile ? "1em" : "1em",
          fontWeight: "normal",
          marginTop: mobile ? "0em" : "1em"
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
                <Menu.Item
                  as="a" /*Ojo con esto en el boton1 onClick={this.toggleShow}*/
                >
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
          <Menu.Item href="/" as="a">Home</Menu.Item>
          <Menu.Item href="/boton1" as="a">Lo Basico</Menu.Item>
          <Menu.Item href="/boton2" as="a">Speech Devices SDK</Menu.Item>
          <Menu.Item href="/boton3" as="a">Implementacio simple</Menu.Item>
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
                            <t style={{ fontSize: '1.33me' }}>&bull; Para Window se necesita</t> <a href = 'https://support.microsoft.com/es-cl/help/2977003/the-latest-supported-visual-c-downloads'> Microsoft Visual C++ Redistributable para Visual Studio 2019.</a>
                        </Container>
                    </Grid.Column>
                    <Grid.Column width ={8}>
                      <Header as = 'h2' style ={{fontSize: '2em'}}>
                      Instalación de Speech SDK
                      </Header>
                      <p style ={{ fontSize: '1.33me' }}>
                        Para la instalción de Speech SDK debemos ejecutar este comando para instalar el paquete de Python
                        desde PyPl para el SDK de voz:
                      </p>
                      <t>pip install azure-cognitiveservices-speech</t>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
        <Segment basic style={{ padding: '2em'}} vertical>
        <Divider
          as="h4"
          className="header"
          horizontal
          style={{ margin: "5em 0em", textTransform: "uppercase" }}
        >
          <a >Instalación y uso del SDK de Voz con Visual Studio Code</a>
    </Divider>
        <Grid container stackable verticalAlign='middle'>
          <Grid.Row>
            <Grid.Column width={8}>
          <p>Una vez ya cumplidos los requisitos previos para windows necesitaremos que abra Visual Studio Code e instale la extensión de Python. Seleccione 
            <t style={{fontWeight: "bold"}}> File</t> > 
            <t style={{fontWeight: "bold"}}> Preferences</t> > 
            <t style={{fontWeight: "bold"}}> Extensions</t> en el menú. Busque Python.</p>
        </Grid.Column>
        <Grid.Column width ={8}>
              <Image
              fluid
                src={Imagen1}
              />
          </Grid.Column>
        </Grid.Row>
        </Grid>
        <Grid container stackable verticalAlign='middle'>
          <Grid.Row>
            <Grid.Column width={8}>

            </Grid.Column>
            <Grid.Column width ={8}>
              <Container className='puntonegro'>
                <tr style={{ fontSize: '1.33me' }}>&bull; Cree una carpeta en la que almacenar el proyecto. Por ejemplo, puede usar para ello el Explorador de Windows.</tr>
                <tr style={{ fontSize: '1.33me' }}>&bull; En Visual Studio Code, seleccione el icono de <t style={{fontWeight: 'bold'}}> File</t>. A continuación, abra la carpeta que creó.</tr>
              </Container>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        </Segment>
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
