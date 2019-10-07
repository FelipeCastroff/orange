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
        content="Ejemplo bien bonito en Python"
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
        size="huge"
        href="https://www.youtube.com/watch?v=SdXeoBZDJJQ&list=RDSdXeoBZDJJQ&start_radio=1"
      >
        Vamos a ver monitos Chinos.
        <Icon name="right arrow" />
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
<<<<<<< HEAD
                <Menu.Item
                  as="a" /*Ojo con esto en el boton1 onClick={this.toggleShow}*/
                >
                  <a href="/">HOME</a>
                </Menu.Item>
                <Menu.Item as="a">
                  <a href="/boton1"> BOTON 1</a>
                </Menu.Item>
                <Menu.Item as="a">
                  <a href="/boton2"> BOTON 2</a>
                </Menu.Item>
                <Menu.Item as="a" active>
                  <a href="/boton3"> BOTON 3</a>
=======
                <Menu.Item as="a" /*Ojo con esto en el boton1 onClick={this.toggleShow}*/>
                  <a href='/'>HOME</a>
                </Menu.Item>
                <Menu.Item as="a">
                  <a href='/boton1'> BOTON 1</a>
                </Menu.Item>
                <Menu.Item as="a">
                  <a href='/boton2'> BOTON 2</a>
                </Menu.Item>
                <Menu.Item as="a" active>
                  <a href='/boton3' > BOTON 3</a>
>>>>>>> 53bf99382028aacad72564a068267f267e20100b
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

<<<<<<< HEAD
=======

>>>>>>> 53bf99382028aacad72564a068267f267e20100b
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
<<<<<<< HEAD
    <Segment style={{ padding: "8em 0em" }} vertical>
      {/*De aquí para abajo es la aprte de abajo*/}
=======
    <Segment style={{ padding: "8em 0em" }} vertical>{/*De aquí para abajo es la aprte de abajo*/}
>>>>>>> 53bf99382028aacad72564a068267f267e20100b
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
