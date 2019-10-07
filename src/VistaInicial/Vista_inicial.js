import PropTypes from "prop-types";
import React, { Component } from "react";
import {
  Button,
  Container,
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
import ScrollAnimation from "react-animate-on-scroll";

import Imagen1 from "../Imagenes/Imagen1.png";
import VozTexto from "../Imagenes/speech-text.png";
import TextoVoz from "../Imagenes/text-to-speech.png";
import TextoTra from "../Imagenes/speech-translation.png";

import Java from "./java.png";
import Python from "./python.png";
import Net from "./net.png";

import "./inicial.css";
import "../App.css";
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
  <div className="Fondo_Inicial">
    <Container>
      <Header as="h1" style={{ margintop: "2em" }} />
      <Container text>
        <div className="PanelImagen">
          <Header
            as="h1"
            content="Speech Service"
            inverted
            style={{
              fontSize: mobile ? "2em" : "4em",
              fontWeight: "normal",
              marginBottom: 0,
              marginTop: mobile ? "1.5em" : "3em"
            }}
          />
        </div>

        <Header
          as="h2"
          content="Convierta audio en texto, traduzca voz y convierta texto en voz con los servicios de voz unificados"
          inverted
          style={{
            fontSize: mobile ? "1.5em" : "1.7em",
            fontWeight: "normal",
            marginTop: mobile ? "0.5em" : "1.5em"
          }}
        />
        <Button
          primary
          size="huge"
          href="https://www.youtube.com/watch?v=n7ovPp1RAew&feature=youtu.be"
        >
          Get Started
          <Icon name="right arrow" />
        </Button>
      </Container>
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
            style={{ minHeight: 700, padding: "1em 0em" }}
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
                <Menu.Item as="a" active>
                  <a href="/"> HOME</a>
                </Menu.Item>
                <Menu.Item as="a">
                  <a href="/boton1"> BOTON 1</a>
                </Menu.Item>
                <Menu.Item as="a">
                  <a href="/boton2"> BOTON 2</a>
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
    <Segment style={{ padding: "8em 0em" }} vertical>
      <Grid container stackable verticalAlign="middle">
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              ¿Qué son los servicios Voz?
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              Los servicios de voz de Azure se dividen en 3 categorías las
              cuales estan formadas por los servicios de voz a texto, texto a
              voz y traducción de voz. Ademas de facilitar este trabajo con el
              SDK de voz, el SDK de dispositivos de voz o las API de Rest.
            </p>
          </Grid.Column>
          <Grid.Column floated="right" width={6}>
            <Image bordered rounded size="medium" src={Imagen1} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row></Grid.Row>
      </Grid>
    </Segment>
    <Segment textAlign="center" basic>
      <ScrollAnimation animateIn="fadeIn">
        <Header as="h2">
          {" "}
          Estos son los servicios de voz
          <Header.Subheader>
            <br></br>
            Convierta audio en texto, traduzca voz y convierta texto en voz con
            los servicios de voz unificados
          </Header.Subheader>
        </Header>
        <br></br>
      </ScrollAnimation>

      <ScrollAnimation animateIn="bounceInRight">
        <Grid centered columns={4}>
          <Grid.Row>
            <Grid.Column>
              <Image src={VozTexto} centered />
            </Grid.Column>
            <Grid.Column>
              <Image src={TextoVoz} centered />
            </Grid.Column>
            <Grid.Column>
              <Image src={TextoTra} centered />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column>
              <h3> Speech to Text </h3>
            </Grid.Column>
            <Grid.Column>
              <h3> Text to Speech </h3>
            </Grid.Column>
            <Grid.Column>
              <h3> Traducción de voz </h3>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column>
              <span>
                {" "}
                La transcripción de conversaciones captura la voz en tiempo real
                para que todos los participantes de la reunión puedan participar
                de lleno en la discusión, identificar lo que ha dicho cada uno y
                cuándo se ha dicho y continuar rápidamente con los pasos
                siguientes.
              </span>
            </Grid.Column>
            <Grid.Column>
              <span>
                {" "}
                Compile aplicaciones y servicios que se dirijan a los usuarios
                de forma natural, por lo que mejorarán la accesibilidad y la
                usabilidad. Convierta texto en audio en tiempo casi real,
                reprodúzcalo y guárdelo como archivo para usarlo más adelante.
                Text to Speech está disponible en las versiones Neural y
                Standard.
              </span>
            </Grid.Column>
            <Grid.Column>
              <span>
                {" "}
                Incorpore a su aplicación funcionalidad de traducción de voz en
                tiempo real para cualquiera de los idiomas admitidos y reciba la
                traducción en forma de texto o de voz. Los modelos de Speech
                Translation se basan en tecnologías vanguardistas de
                reconocimiento de voz y traducción automática neuronal (NMT).
                Están optimizados para comprender la forma de hablar de las
                personas en la vida real y generar traducciones de una calidad
                excepcional.
              </span>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </ScrollAnimation>

      <br></br>
    </Segment>

    <Segment textAlign="center" basic>
      <ScrollAnimation animateIn="fadeIn">
        <Header as="h2">
          {" "}
          Desarrollo de aplicaciones
          <Header.Subheader>
            <br></br>
            Desarrolle aplicaciones en estos 3 principales lenguajes
          </Header.Subheader>
        </Header>{" "}
        <br></br>
      </ScrollAnimation>

      <ScrollAnimation animateIn="bounceInLeft">
        <Grid centered columns={4}>
          <Grid.Row>
            <Grid.Column>
              <Image src={Net} centered />
            </Grid.Column>
            <Grid.Column>
              <Image src={Python} centered size="small" />
            </Grid.Column>
            <Grid.Column>
              <Image src={Java} centered size="small" />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column>
              <h3> .NET </h3>
            </Grid.Column>
            <Grid.Column>
              <h3> Python </h3>
            </Grid.Column>
            <Grid.Column>
              <h3> Java </h3>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column>
              <span>
                {" "}
                Aprenda a compilar aplicaciones de .NET y .NET Core con los
                servicios de Azure y C#.
              </span>
            </Grid.Column>
            <Grid.Column>
              <span>
                {" "}
                Las bibliotecas de Azure para Python le permiten usar los
                servicios de Azure y administrar los recursos de Azure desde el
                código de su aplicación.
              </span>
            </Grid.Column>
            <Grid.Column>
              <span>
                {" "}
                App Service en Linux proporciona un servicio de alojamiento web
                altamente escalable y auto-parcheado que utiliza el sistema
                operativo Linux. Este inicio rápido muestra cómo usar la CLI de
                Azure con el complemento de Maven para Azure App Service para
                implementar un archivo Java web archive (WAR) en el sistema
                operativo Linux.
              </span>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </ScrollAnimation>
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
                  Trifenix.io
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
