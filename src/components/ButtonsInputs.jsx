import React from 'react'
import  './buttons.css'

export const ButtonMinus = ({click}) => {
  return(
    <button onClick={click} className='buttonsInputs'>-</button>
  )
}

export const ButtonPlus = ({click}) => {
  return(
    <button onClick={click} className='buttonsInputs'>+</button>
  )
}

export const ButtonCheck = ({selection, click}) => {

  if(selection) {
    return (
      <button className="buttonCheck" onClick={click}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check buttonCheck" viewBox="0 0 16 16">
          <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
        </svg>
      </button>
    )
  } else {
      return(
      <button className="buttonClose" onClick={click}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg buttonClose" viewBox="0 0 16 16">
          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
        </svg>
      </button>
    );
  }
};

export const ButtonGenerator = () => {
  return(
    <button  className="buttonCreate" type='submit'>Create
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="lock" viewBox="0 0 16 16">
        <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
      </svg>
    </button>
  )
}