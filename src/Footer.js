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
  Visibility,
  Comment,
  Form
} from "semantic-ui-react";
import Modal from "./Modal";

export default () => (
  <Container>
    <Grid divided inverted stackable>
      <Grid.Row>
        <Grid.Column width={3}>
          <Header inverted as="h4" content="Acerca De..." />
          <List link inverted>
            <List.Item>
              <Modal></Modal>
            </List.Item>
            <List.Item as="a" href="https://www.trifenix.io">
              Contactanos!
            </List.Item>
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
            Ultimas novedades
          </Header>
          <p>Me gustaria decir que existen pero lamentablemente no.</p>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Container>
);
