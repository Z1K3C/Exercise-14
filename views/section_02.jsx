//Usando Reactstrap sin en CSS renderizado

import React, { Component } from 'react';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
var var02 = 0;

console.log("HOLA");
class Section_02 extends Component {    
  
  constructor(props) {                        //Genero al constructor para inicializar propiedas y variables
    super(props);                             //Declaramos super para adaptar las propiedades en React
    this.state = {                            //Declaramos los estados de las propiedades
      prop1: 1
    };          
  }

  mifuncion() {   
    console.log("PERRO");                                           //Declaro a la funcion refresh
    this.setState({                                       //En la funcion seteo o asigno estados a las propiedades
      prop1: var02                                   
    });
    
  }

    render() {
      console.log("MALDITO");
      return (
        <div>

          <Row className="justify-content-around">
            <Col sm="5" className="mx-3">
              <Card body outline color="info" style={{borderWidth: "3px"}}>
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                <Button outline color="secondary" onClick={this.mifuncion}>Go somewhere</Button>
              </Card>
            </Col>
            <Col sm="5" className="mx-3">
              <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                <Button outline color="warning" onClick={this.mifuncion}>Go somewhere</Button>
              </Card>
            </Col>
          </Row>

        </div>
      );
    }
  }
  
  export default Section_02;