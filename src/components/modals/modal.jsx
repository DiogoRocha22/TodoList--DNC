import React from 'react'
import './index.scss'

const Modals = (props) => {

  return (
    <div style={{display: props.display}} className='modal'>
      <div className='modal__container'>
        <h1>Deseja {props.action} esse item?</h1>
        <h3>{props.task}</h3>
        <p>{props.descript}</p>
        <button onClick={props.close} id='button-nop'>Não</button>  <button onClick={props.close} id='button-yes'>Sim</button>
      </div>  
    </div>
  )
}

export default Modals