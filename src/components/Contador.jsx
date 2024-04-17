import React from 'react';
import '../styles/Contador.css';

class Contador extends React.Component{
  render(){
    const estiloContador = {
      color: this.props.numClics % 2 === 0 ? 'green' : '#d4666b'
    };
    return (
      <div className='contador' style={estiloContador}>
        { this.props.numClics }
      </div>
    );
  };
};

/*function Contador({ numClics }){

  const estiloContador = {
    color: numClics % 2 === 0 ? 'green' : '#d4666b'
  };
  return (
    <div className='contador' style={estiloContador}>
      { numClics }
    </div>
  );
};*/

export default Contador;