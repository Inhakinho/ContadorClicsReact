import './App.css';
import React from 'react'
import plexusLogo from './images/logo_plexus.jpg'
import Boton from './components/Boton';
import Contador from './components/Contador';


class App extends React.Component{
  constructor(){
    super();
    this.state = {
      numClics: 0
    };
    this.manejarClick = this.manejarClick.bind(this);
    this.reiniciarContador = this.reiniciarContador.bind(this);
  };

  manejarClick(){
    this.setState(({ numClics }) => ({ numClics: numClics + 1 }));
  };

  reiniciarContador(){
    this.setState({ numClics: 0 });
  };

  render(){
    return (
      <div className='App'>
        <div className='contenedor-logo-plexus'>
          <img
          className='plexus-logo'
          src={plexusLogo}
          alt='Logo de Plexus'
          />
          <div className='titulo-contador'>Contador de clics
          </div>
        </div>
        <div className='contenedor-contador'>
          <Contador 
          numClics={this.state.numClics} />
          <Boton 
            texto='Clic'
            esBtnDeClick={true}
            manejarClick={this.manejarClick} />
          <Boton
            texto='Reiniciar'
            esBtnDeClick={false}
            manejarClick={this.reiniciarContador} />
  
        </div>
      </div>
    );
  };
};








/*function App() {

  const [numClics, setNumClics] = useState(0);

  const manejarClick = () =>{
    setNumClics(numClics + 1);
  };

  const reiniciarContador = () =>{
    setNumClics(0);
  };


  return (
    <div className='App'>
      <div className='contenedor-logo-plexus'>
        <img
        className='plexus-logo'
        src={plexusLogo}
        alt='Logo de Plexus'
        />
        <div className='titulo-contador'>Contador de clics
        </div>
      </div>
      <div className='contenedor-contador'>
        <Contador 
        numClics={numClics} />
        <Boton 
          texto='Clic'
          esBtnDeClick={true}
          manejarClick={manejarClick} />
        <Boton
          texto='Reiniciar'
          esBtnDeClick={false}
          manejarClick={reiniciarContador} />

      </div>
    </div>
  );
}*/

export default App;
