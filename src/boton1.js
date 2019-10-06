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
import Vista_inicial from '../src/VistaInicial/Vista_inicial';

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
  <div className="Fondo">
    <Container>
      <Header as="h1" style={{ margintop: "2em" }} />
      <Header
        as="h1"
        content="JOJO"
        inverted
        style={{
          fontSize: mobile ? "2em" : "4em",
          fontWeight: "normal",
          marginBottom: mobile ? "0em" : "0em",
          marginTop: mobile ? "1.6em" : "3.5em"
        }}
      />
      <Header
        as="h2"
        content=" 'Kono Dio Da'"
        inverted
        style={{
          fontSize: mobile ? "1.5em" : "1.7em",
          fontWeight: "normal",
          marginTop: mobile ? "0.5em" : "2em"
        }}
      />
      <Button
        primary
        size="huge"
        href="https://www.crunchyroll.com/es/jojos-bizarre-adventure/episode-1-dio-the-invader-652081"
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
                  <Menu.Item as="a" onClick={this.toggleShow}>
                    Home
                  </Menu.Item>
                  <Menu.Item as="a" active>
                    JOJO'S
                  </Menu.Item>
                  <Menu.Item as="a">Company</Menu.Item>
                  <Menu.Item as="a">Careers</Menu.Item>
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
    } else {
      return <Vista_inicial></Vista_inicial>;
    }
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node
};

class MobileContainer extends Component {
  state = {
    show: true
  };

  handleSidebarHide = () => this.setState({ sidebarOpened: false });
  handleToggle = () => this.setState({ sidebarOpened: true });
  toggleShow = () => {
    this.setState({ show: false });
  };

  render() {
    const { children } = this.props;
    const { sidebarOpened } = this.state;
    if (this.state.show === true) {
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
            <Menu.Item as="a" onClick={this.toggleShow}>
              Work
            </Menu.Item>
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
    } else {
      return <Vista_inicial></Vista_inicial>;
    }
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
              The Crusaders needs you!
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              After all this time Dio has returned again, and now with new
              powers, this is why the Crusaders have come together to end the
              evil that is from their roots, join the Crusaders on their trip to
              Egypt to face Dio's world
            </p>
            <Header as="h3" style={{ fontSize: "2em" }}>
              Meet Jotaro!
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              Yes that's right, Jotaro is the new jojo of this season, which is
              our hero on duty to face Dio
            </p>
            <Header as="h4" style={{ fontSize: "2em" }}>
              Cagamos
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              Despues de todo este tiempo esta temporada va a estar de la
              bastarda.
            </p>
          </Grid.Column>{" "}
          <Grid.Column floated="right" width={7}>
            <div class="c">
              <div class="i">
                <img class="img" src="https://i.imgur.com/jLEfHF1.png" />
              </div>
              <div class="s1"></div>
              <div class="s2"></div>
              <div class="s3"></div>
            </div>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign="center">
            <Button
              primary
              size="huge"
              href="https://www.crunchyroll.com/es/jojos-bizarre-adventure/episode-1-the-man-possessed-by-an-evil-spirit-652155"
            >
              Go to Stardust Crusaders!
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment style={{ padding: "0em" }} vertical>
      <Grid celled="internally" columns="equal" stackable>
        <Grid.Row textAlign="center">
          <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              "What a Company"
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              That is what they all say about us
            </p>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              "I shouldn't have gone with their competitor."
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              <Image
                avatar
                src="https://fsmedia.imgix.net/79/fe/e8/24/2647/4c79/89d9/3c75e1ecf00c/shrek-2jpg.jpeg?auto=compress&h=1200&w=1200&crop=edges&fit=crop"
              />
              <b>Nan</b> Chief Fun Officer Acme Toys
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment style={{ padding: "8em 0em" }} vertical>
      <Container text>
        <Header as="h3" style={{ fontSize: "2em" }}>
          Breaking The Grid, Grabs Your Attention
        </Header>
        <p style={{ fontSize: "1.33em" }}>
          Instead of focusing on content creation and hard work, we have learned
          how to master the art of doing nothing by providing massive amounts of
          whitespace and generic content that can seem massive, monolithic and
          worth your attention.
        </p>
        <Button as="a" size="large">
          Read More
        </Button>
        <Divider
          as="h4"
          className="header"
          horizontal
          style={{ margin: "3em 0em", textTransform: "uppercase" }}
        >
          <a href="#">Case Studies</a>
        </Divider>
        <Header as="h3" style={{ fontSize: "2em" }}>
          Did We Tell You About Our Bananas?
        </Header>
        <p style={{ fontSize: "1.33em" }}>
          Yes I know you probably disregarded the earlier boasts as non-sequitur
          filler content, but it's really true. It took years of gene splicing
          and combinatory DNA research, but our bananas can really dance.
        </p>
        <Button as="a" size="large">
          I'm Still Quite Interested
        </Button>
      </Container>
    </Segment>
    <Segment style={{ padding: "8em 0em" }} vertical>{/*De aquí para abajo es la aprte de abajo*/}
    </Segment>
    <Segment inverted vertical style={{ padding: "5em 0em" }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as="h4" content="Contactanos" />
              <List link inverted>
                <List.Item as="a" href='https://p7.hiclipart.com/preview/405/543/746/dio-brando-internet-meme-know-your-meme-rage-comic-jojo-s-bizarre-adventure-others.jpg'>
                  Dio</List.Item>
                <List.Item as="a" href='https://www.trifenix.io'>Contact Us</List.Item>
                <List.Item as="a" >+56952984672</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as="h4" content="Instagrams" />
              <List link inverted>
                <List.Item as="a" href='https://www.instagram.com/_alondra_hg/?hl=es-la'>
                  Sofia Gallardo</List.Item>
                <List.Item as="a" href='https://www.instagram.com/weon.simio/?hl=es-la'>
                  Fernando Del Pino</List.Item>
                <List.Item as="a" href='https://www.instagram.com/ignacio_lopez_nicolas/?hl=es-la'>
                  Ignacio Lopez</List.Item>
                <List.Item as="a" href='https://www.instagram.com/felipe_castro.exe/?hl=es-la'>
                  Felipe Castro</List.Item>
                <List.Item as='a' href='https://www.instagram.com/trifenix.io/?hl=es-la'>
                  Trifeniz.io</List.Item>
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
