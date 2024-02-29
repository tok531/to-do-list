import { useRef, useState } from 'react';
import './App.css';
import './all.css';
import list from "./images/list.png" 
import { react } from "react-icons/fa";


function App() {
  const [x, setx] = useState([])
  const inputRef = useRef()
  const addDiv = useRef()
  const buttonwrite = useRef()
  const itemRef = useRef()

  const add = ()=>{
    const value = inputRef.current.value
    if(value !== ""){
      const newData = {completed: false, value}
      setx([...x, newData ])
      addDiv.current.style.display = "none"
      buttonwrite.current.style.display = "block"
      inputRef.current.value = ""

    }
    
  }
  const write =()=>{
    addDiv.current.style.display = "block"
    buttonwrite.current.style.display = "none"
  }

  const changestate = (index)=> {
    const targetitem = [...x]
    targetitem[index].completed = !targetitem[index].completed
    setx(targetitem)
  }
  const deleteItem = (index) => {
    const targetitem = [...x]
    targetitem.splice(index,1)
    setx(targetitem)
  }

  return (
    <div className='to-do-list'>
      <h1><img src={list} style={{width:"40px", height:"40px"}}/> To Do List:</h1>
      <ul>
        {x.map((item, index)=>{
          return (
            <div style={{display:"flex", justifyContent: "space-around"}}>
              <li ref={itemRef} onClick={()=>changestate(index)} className={item.completed? "diffstyle":"ordstyle"}>&nbsp; &nbsp;{item.value}</li>
              <span onClick={()=>deleteItem(index)}><i class="fas fa-trash-alt"></i></span>
            </div>
          )

        })}
        
      </ul>
      
      <button className='appearbutton' onClick={write} ref={buttonwrite}> + New task</button>
      <div className='add' ref={addDiv} style={{display: "none"}}>
        <input type="text" placeholder="Add new task" ref={inputRef}/>
        <button onClick={add}>+</button>
      </div>
      
    </div>
  );
}

export default App;
