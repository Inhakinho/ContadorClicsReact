import React from 'react';
import '../styles/Boton.css';

class Boton extends React.Component{
  render(){
    return(
      <button 
        className={ this.props.esBtnDeClick ? 'btn-click' : 'btn-reiniciar' }
        onClick={this.props.manejarClick}>
        {this.props.texto}
      </button>
    );
  };
};

/*function Boton({ texto, esBtnDeClick, manejarClick }){
  return(
    <button 
      className={ esBtnDeClick ? 'btn-click' : 'btn-reiniciar' }
      onClick={manejarClick}>
      {texto}
    </button>
  );
};*/

export default Boton;