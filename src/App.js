import './App.css';
import freeCodeCampLogo from './images/freecodecamp-logo.png'
import Boton from './Components/Boton';
import Pantalla from './Components/Pantalla';
import BotonClear from './Components/BotonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  const agregarInput = val => {
    setInput(input + val)
  }

  const calcularResultado = () => {
    if (input){
      setInput(evaluate(input))
    }else{
      alert("Por favor ingrese valores para realizar los calculos!")
    }
    
  }

  return (
    <div className='App'>

      <div className='freecodecamp-logo-contenedor'>

        <img 
        src = {freeCodeCampLogo}
        className='freecodecamp-logo'
        alt='Logo de freeCodeCamp' />
      </div>

      <div className='contenedor-calculadora'>
        
        <Pantalla input={input}/>

        <div className='fila'>
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>

        <div className='fila'>
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>

        <div className='fila'>
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>

        <div className='fila'>
          <BotonClear manejarClear={() => setInput('')}>Clear</BotonClear>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>

        <div className='fila'>          
          <Boton manejarClic={calcularResultado}>=</Boton>
        </div>
        
      </div>

    </div>
  );
}

export default App;

//5:26