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
    <Grid stackable columns={2}>
      <Grid.Row columns={1}>
        <GridColumn textAlign="left">
          <Container fluid>
            <Header as="h2">Desafio Unicad - Desenvolvedor Fullstack</Header>
            <p>
              O desafio consiste em desenvolver um sistema que será a versão
              mais simples possível de um sistema de entregas de mercadorias a
              clientes. Ele deve possuir um cadastro de entrega, visualização de
              entregas cadastradas e o percurso no mapa.
            </p>
            <p>
              The dogs' value to early human hunter-gatherers led to them
              quickly becoming ubiquitous across world cultures. Dogs perform
              many roles for people, such as hunting, herding, pulling loads,
              protection, assisting police and military, companionship, and,
              more recently, aiding handicapped individuals. This impact on
              human society has given them the nickname "man's best friend" in
              the Western world. In some cultures, however, dogs are also a
              source of meat.
            </p>
          </Container>
        </GridColumn>
      </Grid.Row>
      <Grid.Column>
        <Segment className="card-container">
          <h1>Grande teste</h1>
        </Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>
          <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
        </Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>
          <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
        </Segment>
      </Grid.Column>
    </Grid>
  );
};

export default HomePage;
