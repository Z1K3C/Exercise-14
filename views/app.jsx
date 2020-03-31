import React, { Component } from 'react';                   //Solicito a REACT desde node modules
import Section_02 from './section_02.jsx';
import Section_03 from './section_03.jsx';

class App extends Component {                               //Renderizo las etiquetas
  render() {
    return (
      <div>
        <br></br>
        <Section_02/>
        <Section_03/>
      </div>
    );
  }
}

export default App;