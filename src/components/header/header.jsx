import React from 'react'
import './index.scss'

const Head = () => {
  return (
    <div className='static'>
      <header className='static__header'>  
        <ul>
          <li>Organização</li>
          <li className='static__selected'>Tarefas</li>
        </ul>
      </header>
      <h1>Otimize seu tempo e se organize com o nosso Planejador Diário.</h1>
    </div>
  )
}

export default Head