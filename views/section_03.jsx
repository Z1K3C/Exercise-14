//Seccion de codigo la cual genera una tabla
import React, { Component } from 'react';     //Solicito a REACT desde node modules
var var01 = [];                               //Genero una variable array

class Section_01 extends Component {           //Genero una clase SECTION_1

  constructor(props) {                        //Genero al constructor para inicializar propiedas y variables
    super(props);                             //Declaramos super para adaptar las propiedades en React
    this.state = {                            //Declaramos los estados de las propiedades
      prop1: 1,
      prop2: 1,
      prop3: 1
    };          
  }

  componentDidMount() {                                   //Metodo de REACT encargada de mandar llamar una funcion antes de montar el componente de REACT
    this.timerID = setInterval(()=>this.refesh(),1000);   //Mediante una funcion flecha ejecuto la subrutina refresh cada segundo
  }

  componentWillUnmount() {                                //Metodo de REACT encargado de mandar llamar una fucnion despues de montar el componente de REACT
    clearInterval(this.timerID);                          //Detiene o limpia al timer "timerID"
  }

  refesh() {                                              //Declaro a la funcion refresh

    this.setState({                                       //En la funcion seteo o asigno estados a las propiedades
      prop1: var01[0],                                    
      prop2: var01[1],
      prop3: var01[2]
    });

  }
  
  render() {                                              //En el metodo render genero el codigo a imprimir en pantalla

    return (
      <div> 
        <section className="container-flow">
          <div className="row mx-0">
            <div className="col-md-12 col-lg-6 p-4" style={{minHeight:"20vh"}}>

              <div className="card mx-4" style={{backgroundColor:"rgb(52,73,94)"}}>

                <div className="card-header text-center text-white p-1">React y base de datos desde el server</div>

                <section className="container-flow">
                  <div className="row mx-0 justify-content-around">
                    <div className="col-lg-12 card p-0" style={{backgroundColor:"transparent",minHeight:"10vh",borderColor:"rgb(26,188,156)"}}>

                      <table className="table text-white table-borderless"> 
                        <thead>
                          <tr className="text-center" style={{fontSize:"24px"}}> 
                            <th scope="col">#</th>
                            <th scope="col">DATA 01</th>
                            <th scope="col">DATA 02</th>
                            <th scope="col">DATA 03</th>
                            <th scope="col">DATA 04</th>
                            <th scope="col">DATA 05</th>
                          </tr>
                        </thead>
                        <tbody id="TABLE_B">                       
                          <tr className="text-center" style={{fontSize:"24px"}}>
                            <th scope="row" > # </th>
                            <td id="ROW_00"> {this.state.prop1} </td>         {/* Usando las propiedades imprimo los datos en pantalla */}
                            <td id="ROW_01"> {this.state.prop2} </td>
                            <td id="ROW_02"> {this.state.prop3}  </td>
                          </tr>                                       
                        </tbody>
                      </table>

                    </div>
                  </div>
                </section>


              </div>

            </div>
          </div>
        </section>
      </div>
     );
  }
}

export default Section_01;