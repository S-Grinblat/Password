import React, {useState} from 'react'
import './App.css'
import Logo from '../imgs/seguridad-informatica.webp'
import { ButtonMinus, ButtonPlus, ButtonCheck, ButtonGenerator, } from './components/ButtonsInputs'
import {generatorPassword, copyOutput} from './functions/GeneratorPassword.js'

function App() {

  const [conf, setConf] = useState({
    characters: 13,
    symbol: false,
    numbers: false,
    capitalLetter: false
  });

  const [Password, setPassword] = useState('Password')

  const incrementCharacter = (e) => {
    if(conf.characters < 20) {
      setConf((confBefore) => {
        const newConf = {...confBefore};
        newConf.characters += 1;
        return newConf;
      })
    } else {
      e.preventDefault()
    }
  } 
  const decreaseCharacter = (e) => {

    if(conf.characters > 2) {
      setConf((confBefore) => {
        const newConf = {...confBefore};
        newConf.characters -= 1;
        return newConf;
      });
    } else {
      e.preventDefault()
    }
  }

  const toggleSymbol = () => {
    setConf((confBefore) => {
      const newConf = {...confBefore};
      newConf.symbol = !newConf.symbol
      return newConf;
    })
  }

  const toggleNumbers = () => {
    setConf((confBefore) => {
      const newConf = {...confBefore};
      newConf.numbers= !newConf.numbers
      return newConf;
    })
  }

  const toggleCapitalLetter = () => {
    setConf((confBefore) => {
      const newConf = {...confBefore};
      newConf.capitalLetter= !newConf.capitalLetter
      return newConf;
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    setPassword(generatorPassword(conf))
  }

  const copyOutputBtn = (e) => {
    e.preventDefault()
    copyOutput()
  }

  return (
    <div className="contenedor">
      <picture>
        <img src={Logo} alt="Logo" className="Logo"/>
      </picture>
      <h1 className="title">Password Generator</h1>

      <form onSubmit={onSubmit}>

        <div className='sectionInputs'>
          <label>Caracteres:</label>
          <div className='containerInputs'>
            <ButtonMinus click={decreaseCharacter} />
            <span>{conf.characters}</span>
            <ButtonPlus click={incrementCharacter}/>
          </div>
        </div>

        <div className="sectionInputs">
          <label>¿Special Symbol?</label>
          <ButtonCheck selection={conf.symbol} click={toggleSymbol} />
        </div>

        <div className="sectionInputs">
          <label>¿Includes Number?</label>
          <ButtonCheck selection={conf.numbers} click={toggleNumbers}/>
        </div>

        <div className="sectionInputs">
          <label>¿Capital Letter?</label>
          <ButtonCheck selection={conf.capitalLetter} click={toggleCapitalLetter}/>
        </div>

        <div className="sectionInputsPassword">
          <ButtonGenerator/>
          <input id='input' type="text" readOnly={true} value={Password}></input>
          <button onClick={copyOutputBtn} id='copyInput' title='copy'>
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 16 16" id="copy">
              <path fill="#fff"  d="M4.00029246,4.08524952 L4,10.5 C4,11.8254834 5.03153594,12.9100387 6.33562431,12.9946823 L6.5,13 L10.9143985,13.000703 C10.7082819,13.5829319 10.1528467,14 9.5,14 L6,14 C4.34314575,14 3,12.6568542 3,11 L3,5.5 C3,4.84678131 3.41754351,4.29108512 4.00029246,4.08524952 Z M11.5,2 C12.3284271,2 13,2.67157288 13,3.5 L13,10.5 C13,11.3284271 12.3284271,12 11.5,12 L6.5,12 C5.67157288,12 5,11.3284271 5,10.5 L5,3.5 C5,2.67157288 5.67157288,2 6.5,2 L11.5,2 Z"></path>
            </svg>
          </button>
        </div>

        <p className="infoPassword">the password will have lowercase letters by default! </p>

      </form>
    </div>
  );
}

export default App
