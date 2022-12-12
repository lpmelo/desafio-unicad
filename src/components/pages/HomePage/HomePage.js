import React from "react";
import {
  Container,
  Grid,
  GridColumn,
  Header,
  Image,
  Segment,
} from "semantic-ui-react";
import "./HomePage.css";

const HomePage = () => {
  return (
    <Segment>
      <Grid stackable columns={2}>
        <Grid.Row columns={1}>
          <GridColumn textAlign="left">
            <Container fluid>
              <Header as="h2">Desafio Unicad - Desenvolvedor Fullstack</Header>
              <p>
                O desafio consiste em desenvolver um sistema que será a versão
                mais simples possível de um sistema de entregas de mercadorias a
                clientes. Ele deve possuir um cadastro de entrega, visualização
                de entregas cadastradas e o percurso no mapa.
              </p>
            </Container>
          </GridColumn>
        </Grid.Row>
      </Grid>
    </Segment>
  );
};

export default HomePage;
