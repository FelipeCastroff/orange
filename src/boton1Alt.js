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
  Visibility,
  Table
} from "semantic-ui-react";
import styled, { keyframes } from "styled-components";
import ReactPlayer from "react-player";
import Vista_inicial from "../src/VistaInicial/Vista_inicial";
import SpotifyPlayer from "react-spotify-player";
import Boton1 from "./boton1";
import ScrollAnimation from "react-animate-on-scroll";

export const Input = styled.input`
  border: 1px solid #333;
  font-size: 30px;
  height: 50px;
  width: ${props => (props.fullWidth ? "100%" : "500px")};
`;
// Heads up!
// We using React Static to prerender our docs with server side rendering, this is a quite simple solution.
// For more advanced usage please check Responsive docs under the "Usage" section.
const getWidth = () => {
  const isSSR = typeof window === "undefined";

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
};
const HeaderStyled = styled.header`
  background: white;
  border-radius: 3px;
  border: none;
  color: black;
`;
// creamos el keyframe y como se movera
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
//Creamos el componente a rotar
const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`;

/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */

const HomepageHeading = ({ mobile }) => (
  <div className="FondoAlternativo">
    <Container>
      <Header as="h1" style={{ margintop: "1em" }} styled />
      <ScrollAnimation
        animateIn="bounce"
        initiallyVisible={true}
        animateOnce={true}
      >
        <HeaderStyled>
          <Header
            as="h1"
            content="Documentacion y Detalles"
            style={{
              fontSize: mobile ? "2em" : "4em",
              fontWeight: "normal",
              marginBottom: mobile ? "0m" : "0em",
              marginTop: mobile ? "0.5em" : "1em"
            }}
          />
          <Rotate>
            <Image
              size="mini"
              src="https://pbs.twimg.com/profile_images/1037189134182432768/s9bGsnz__400x400.jpg"
            />
          </Rotate>
        </HeaderStyled>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn">
        <Header
          as="h2"
          content="Speech Services esta disponible para su desarrollo en diversos lenguajes"
          inverted
          style={{
            fontSize: mobile ? "2em" : "2em",
            fontWeight: "normal",
            marginTop: mobile ? "0em" : "1em"
          }}
        />
      </ScrollAnimation>
    </Container>
  </div>
);

HomepageHeading.propTypes = {
  mobile: PropTypes.bool
};
//Boton1 extra
/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
  state = {
    show: true
  };

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });
  toggleShow = () => {
    this.setState({ show: false });
  };

  render() {
    const { children } = this.props;
    const { fixed } = this.state;
    if (this.state.show === true) {
      return (
        <Responsive
          getWidth={getWidth}
          minWidth={Responsive.onlyTablet.minWidth}
        >
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
                    <a href="/"> Home</a>
                  </Menu.Item>
                  <Menu.Item as="a" active>
                    <a href="/boton1"> Lo Basico </a>
                  </Menu.Item>
                  <Menu.Item as="a">
                    <a href="/boton2"> Speech Device SDK</a>
                  </Menu.Item>
                  <Menu.Item as="a">
                    <a href="/boton3">Implementacion Simple</a>
                  </Menu.Item>
                  <Menu.Item position="right">
                    <Button as="a" inverted={!fixed}>
                      Log in
                    </Button>
                    <Button
                      as="a"
                      inverted={!fixed}
                      style={{ marginLeft: "0.5em" }}
                    >
                      Sign Up
                    </Button>
                    <Button
                      as="a"
                      active
                      primary={fixed}
                      style={{ marginLeft: "0.5em" }}
                      onClick={this.toggleShow}
                    >
                      Regresar estilo original
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
    } else {
      return <Boton1></Boton1>;
    }
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
            <ScrollAnimation animateIn="bounce" initiallyVisible={true}>
              <Header as="h3" style={{ fontSize: "2em" }}>
                ¡Puede Aprender a usar el SDK en solo 5 minutos!
                <Header as="h3" style={{ fontSize: "0.8em" }}>
                  Escoja uno de estos lenguajes de programacion y comience ya!
                </Header>
              </Header>
            </ScrollAnimation>
            <Table className="dataMatrix">
              <tbody>
                <tr>
                  <th></th>
                  <th>
                    <a href="https://docs.microsoft.com/en-us/azure/cognitive-services/speech-service/quickstart-csharp-dotnet-windows">
                      <img
                        alt="column 1"
                        src="https://docs.microsoft.com/es-mx/azure/cognitive-services/speech-service/media/index/logo_csharp.svg"
                        width="48px"
                        data-linktype="relative-path"
                      />
                    </a>
                  </th>
                  <th>
                    <a href="https://docs.microsoft.com/en-us/azure/cognitive-services/speech-service/quickstart-csharp-dotnet-windows">
                      <img
                        alt="column 2"
                        src="https://docs.microsoft.com/es-mx/azure/cognitive-services/speech-service/media/index/logo_netcore.svg"
                        width="48px"
                        data-linktype="relative-path"
                      />
                    </a>
                  </th>
                  <th>
                    <a href="https://docs.microsoft.com/es-mx/azure/cognitive-services/speech-service/quickstart-csharp-unity">
                      <img
                        alt="column 3"
                        src="https://docs.microsoft.com/en-us/media/logos/logo_unity.svg"
                        width="48px"
                        data-linktype="relative-path"
                      />
                    </a>
                  </th>
                  <th>
                    <a href="/boton3">
                      <img
                        alt="column 4"
                        src="https://docs.microsoft.com/es-mx/azure/cognitive-services/speech-service/media/index/logo_python.svg"
                        width="48px"
                        data-linktype="relative-path"
                      />
                    </a>
                  </th>
                  <th>
                    <a href="https://docs.microsoft.com/es-mx/azure/cognitive-services/speech-service/quickstart-js-node">
                      <img
                        alt="column 5"
                        src="https://docs.microsoft.com/es-mx/azure/cognitive-services/speech-service/media/index/logo_nodejs.svg"
                        width="48px"
                        data-linktype="relative-path"
                      />
                    </a>
                  </th>
                  <th>
                    <a href="https://docs.microsoft.com/es-mx/azure/cognitive-services/speech-service/quickstart-js-browser">
                      <img
                        alt="column 6"
                        src="https://docs.microsoft.com/es-mx/azure/cognitive-services/speech-service/media/index/logo_js.svg"
                        width="48px"
                        data-linktype="relative-path"
                      />
                    </a>
                  </th>
                </tr>
              </tbody>
            </Table>
            <Header as="h3" style={{ fontSize: "2em" }}>
              Speech Service permite:
            </Header>
            <Container className="punto">
              <tr style={{ fontSize: "1.33em" }}>&bull; Texto a voz</tr>
              <tr style={{ fontSize: "1.33em" }}>
                &bull; Palabras de activacion personalizadas
              </tr>
              <tr style={{ fontSize: "1.33em" }}>&bull; Traduccion</tr>
              <tr style={{ fontSize: "1.33em" }}>
                &bull; Transcripcion de Conversaciones
              </tr>
              <tr style={{ fontSize: "1.33em" }}>
                &bull; Asistente Virtual por Voz
              </tr>
              <tr style={{ fontSize: "1.33em" }}>
                &bull; Personalizacion Listas de Frases
              </tr>
            </Container>
            <Header as="h4" style={{ fontSize: "2em" }}>
              Conversion Voz a Texto
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              La conversión de voz a texto de Servicios de voz de Azure, también
              conocida simplemente como voz a texto, permite la transcripción en
              tiempo real de secuencias de audio a texto que las aplicaciones,
              herramientas o dispositivos pueden usar, mostrar o actuar como
              ante una entrada de comandos. Este servicio funciona con la misma
              tecnología de reconocimiento que Microsoft utiliza para los
              productos de Cortana y Office, y funciona sin problemas con la
              traducción y el servicio de texto a voz.
            </p>
            <Header as="h4" style={{ fontSize: "2em" }}>
              Personalización
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              Además del modelo de línea de base estándar usado por Servicios de
              voz, puede personalizar modelos para sus necesidades con los datos
              disponibles para superar barreras de reconocimiento de voz tales
              como el estilo de habla, el vocabulario y el ruido de fondo. Puede
              consultar todo esto en{" "}
              <a
                href="https://docs.microsoft.com/es-mx/azure/cognitive-services/speech-service/how-to-custom-speech"
                data-linktype="relative-path"
              >
                Custom Speech
              </a>
              .
            </p>
          </Grid.Column>
          <Grid.Column floated="right" width={7}>
            <ScrollAnimation
              animateIn="bounceInRight"
              animateOut="bounceOutLeft"
            >
              <div class="c">
                <div class="i">
                  <a href="https://www.youtube.com/watch?v=s-yVQzCCRMs">
                    <img
                      class="img"
                      src="https://66.media.tumblr.com/1626aeafe407c94627a05a79024c4f36/tumblr_pz0uk3ioYZ1ywg6aio1_1280.jpg"
                    />
                  </a>
                </div>
                <div class="s1"></div>
                <div class="s2"></div>
                <div class="s3"></div>
              </div>
            </ScrollAnimation>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign="center">
            <Button
              primary
              size="huge"
              href="https://azure.microsoft.com/es-es/services/cognitive-services/speech-services/"
            >
              Mas sobre Speech Services
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <ScrollAnimation animateIn="flipInX" animateOut="flipOutX">
      <Segment style={{ padding: "2em" }} vertical>
        <Grid celled="internally" columns="2" stackable>
          <Grid.Row textAlign="center">
            <Grid.Column
              style={{
                paddingBottom: "4em",
                paddingTop: "5em",
                paddingLeft: "10em"
              }}
            >
              <Header as="h3" style={{ fontSize: "2em" }}>
                "Escenarios empresariales basados en servicios de voz"
              </Header>
              <p style={{ fontSize: "1.5em" }}>
                Transcriba fácilmente las llamadas y optimice los resultados con
                servicios de transcripción por lotes y de voz personalizada
                mejorados para centros de llamadas.
              </p>
            </Grid.Column>

            <Grid.Column style={{ paddingBottom: "1em", paddingTop: "1em" }}>
              <p style={{ fontSize: "9em" }}>
                <Image
                  avatar
                  src="https://azurecomcdn.azureedge.net/cvt-add6f4a23186e176ede2ce0357a4c26bb9352332c93c37a18e80bd3245a301b9/images/page/services/cognitive-services/speech-services/speech-category.svg"
                />
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </ScrollAnimation>
    <Segment style={{ padding: "8em 0em" }} vertical>
      <Container text>
        <Header as="h3" textAlign="center" style={{ fontSize: "2em" }}>
          Azure Speech Service
        </Header>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=EYinMnQWgfU"
          className="react-player"
          width="720px"
          height="480px"
          playsinline
        ></ReactPlayer>
        <Divider
          as="h4"
          className="header"
          horizontal
          style={{ margin: "3em 0em", textTransform: "uppercase" }}
        >
          <a href="#">Case Studies</a>
        </Divider>
        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
          <Header as="h3" style={{ fontSize: "2em" }}>
            Les comentamos que esta seccion...
          </Header>
          <p style={{ fontSize: "1.33em" }}>
            ...Esta seccion no busca explicar nada necesariamente concreto pero
            si bastante necesario en algunos ambitos de dudosa procedencia,
            siendo un caso bastante concreto el cuestionamiento que engendra en
            la mente del lector a la hora de buscar cierto sentido a las
            palabras colocadas en esta seccion sin cubrir un espectro de
            atencion lo suficientemente alto como para dejar de lado la tarea de
            terminar de leer este parrafo para saber como concluira pero siempre
            sabiendo que todo se acabara con un punto Final.
          </p>

          <Input placeholder="Escriba Comentarios(no enviables)"></Input>
        </ScrollAnimation>
      </Container>
    </Segment>
    <Segment style={{ padding: "8em 0em" }} vertical>
      {/*Footer de la Pagina*/}
    </Segment>
    <Segment style={{ padding: "2em" }} vertical>
      <Grid celled="internally" columns="3" stackable>
        <Grid.Row textAlign="center">
          <Grid.Column
            style={{
              paddingBottom: "2em",
              paddingTop: "2em",
              paddingLeft: "5em"
            }}
          >
            <Header as="h3" style={{ fontSize: "2em" }}>
              "SpotifyPlayer"
            </Header>
            <SpotifyPlayer
              textAlign="center"
              uri="spotify:playlist:2MR1jTLD2pWNKNNEfZc8Hr"
              size="large"
              view="list"
              theme="black"
              playing
            />
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: "1em", paddingTop: "1em" }}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              "Youtube"
            </Header>
            <ReactPlayer
              url="https://www.youtube.com/watch?v=Gs069dndIYk"
              className="react-player"
              playing
              width="480px"
              height="270px"
            ></ReactPlayer>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: "1em", paddingTop: "1em" }}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              "Soundcloud"
            </Header>
            <ReactPlayer
              url="https://soundcloud.com/laurent-decarvin/bag-raiders-shooting-stars"
              className="react-player"
              width="480px"
              height="270px"
            ></ReactPlayer>
          </Grid.Column>
        </Grid.Row>
      </Grid>
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
