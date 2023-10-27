import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.scss'
import Inicial from './initial/inicial'
import { MOCK_LIST } from './mockup'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <Inicial data={MOCK_LIST}/>
  </React.StrictMode>,
)
