import React, { useState } from 'react'
import './index.scss'
import Head from '../components/header/header'
import Modals from '../components/modals/modal'

function Inicial({data}) {

  const [check, setCheck] = useState(true)
  const [modalInfo, setModalInfo] = useState({display:'none', action: '', descript: '', title:''})
  const [task, setTask] = useState({id: '', title:'', description:'', completed: false })

  const AddTask = () => {
    if(task.description !== ''){
      data.push(task)
      window.document.getElementById('new-task').value = ''
      setCheck(!check)
      setTask({id: '', title:'', description:'', completed: false })
    }
  }
  
  
  return (
    <div className='container'>
      <div>
        <Head/>
      </div>

      <div className='container__content'>
        
        <div className='container__flex'>
          <h3>Tarefa</h3><h3 id='centeredHead'>Status</h3><h3>Edições</h3>
        </div>

          <div className='container__line'></div>

        {data.map((item) => (
          <div className='container__flex' key={item.id}>
            <h4>{item.title}</h4>
            
            <div id='centered'>
            {item.completed == true ? (
              <img onClick={() => {
                item.completed = !item.completed
                setCheck(!check)
                console.log(item)
              }} src='check.svg' alt=''/>
            ):(
              <img onClick={() => {
                item.completed = !item.completed
                setCheck(!check)
                console.log(item)
              }} src='notcheck.svg' alt=''/>
              )}
            </div>
            
            <div ><img onClick={() => {
              setModalInfo({display:'block', action: 'editar', descript: item.description, title: item.title})
            }} src='edit.svg'/>
            
            <img onClick={() => {
              setModalInfo({display:'block', action: 'excluir', descript: item.description, title: item.title})
            }} src="delete.svg" alt="" />
            </div>
          
          </div> 
        ))}

        <div className='container__flex'>
            <input id='new-task' onChange={(event) => {
              const newtask = event.target.value
              setTask({...task,id: data.length+1 ,description:'Coloque a descriçaõ', title: newtask})
            }} onKeyDown={(event) => {
              if(event.key == 'Enter'){
                AddTask()
              }
            }} placeholder='Nova tarefa...'></input>

            <button onClick={AddTask} id='add_item'>+</button>

        </div>
      </div>
      <Modals close={() => {
        setModalInfo({...modalInfo, display:'none'})
      }} display={modalInfo.display} task={modalInfo.title} action={modalInfo.action} descript={modalInfo.descript}/>
    </div>
  )
}

export default Inicial
