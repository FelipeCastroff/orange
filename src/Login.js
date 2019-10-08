import React from 'react';
import { Form, Grid, Header, Message, Segment, Checkbox, Icon, Image, Container, GridColumn, Menu, Button } from 'semantic-ui-react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './App.css';


export default () => (
  <div className="bg">
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 900 }}>
        <Header as='h2' dividing style = {{color: 'white'}}>
          Inicio de sesión
    <Header.Subheader style = {{color: 'white'}}>
            *Estamos trabajando para un mejor modulo
    </Header.Subheader>
        </Header>
        <Grid as='Contenedor' textAlign='center' verticalAlign='middle' style={{ height: '45vh' }}>
          <Grid.Column style={{ maxWidth: 10000 }}>
            <Grid as='bloques' columns='3'>
              <Grid.Row>
                <Grid.Column style={{ maxWidth: 300 }}>
                  <Segment>
                    <Header as='h4' dividing>
                      Information
              </Header>
                    <Segment>
                      <p>Informacion util para el usuario</p>
                    </Segment>
                    <Segment>Más noticias</Segment>
                  </Segment>
                </Grid.Column>
                <Grid.Column style={{ maxWidth: 300 }}>
                  <Form size='large'>
                    <Segment>
                      <Form.Input fluid icon='user' iconPosition='left' placeholder='Correo electrónico' />
                      <Form.Input
                        fluid
                        icon='lock'
                        iconPosition='left'
                        placeholder='Contraseña'
                        type='password'
                      />
                      <Checkbox label='Guardar informacion' />
                    </Segment>
                  </Form>
                </Grid.Column>
                <Grid.Column style={{ maxWidth: 300 }}>
                  <Segment>
                    <Header as='h4' dividing>
                      Information
              </Header>
                    <Segment>
                      <p>Se entregará la informacion necesaria a los usuarios </p>
                    </Segment>
                    <Button position='left' as='a'><a href='/'>Volver</a></Button>
                    <Button position='rigth' as='a'><a href='/SignUp'>Sign Up</a></Button>

                  </Segment>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Grid.Column>
        </Grid>
      </Grid.Column>
    </Grid>
    
  </div>
);