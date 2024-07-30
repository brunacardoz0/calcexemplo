import { useState } from 'react'
import './App.css'
import Mensagem from './components/Mensagem';
import Frase from './components/frase';
import Calculadora from './components/Calculadora';



function Saudacao() {
 return <h1>Olá mundo</h1>;
}

function App(){
  return(

  <>
    <Saudacao/>
    <Mensagem texto="seu texto"/>
    <Frase/>
    <Calculadora/>
  </>
  )
}

export default App