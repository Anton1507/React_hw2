
import './App.css';
import Display from './items/display';
import ListTime from './items/timeList'
import { useState } from 'react';

import { useEffect } from 'react';

function App() {
  const [time,setTime]=useState(0);
  const [timerId,setTimerId]=useState(null);
  const [saveTime,setSaveTime]=useState([]);
  const [showBut,setShowBut]=useState(true);
  
  useEffect(()=>{document.addEventListener('click',handelClick)},[timerId])
  
  let handelClick=()=>{
    let playAudio=true;


    {<audio autoPlay src="./soung.mp3"></audio>}
  }
  let handelStart =()=>{
      const id = setInterval(()=>setTime(time=>time+1), 1000)
      setTimerId(id)
      
  }
 
  const handelStop = ()=>{
      clearInterval(timerId)
      setShowBut(!showBut)
      setSaveTime([...saveTime,time])
      
      let a = localStorage.setItem(timerId,time);
     
  }
  const handelReset=()=>{
      handelStop();
      setSaveTime([...saveTime,time]);
      
      let a = localStorage.setItem(timerId,time);
      setTime(0);
  }

  return (<div>
   <Display  showBut={showBut}  handelStart={handelStart} handelStop={handelStop} handelReset={handelReset} time={time}/>
   <ListTime  saveTime={saveTime}/>
   <audio controls autoPlay src="./soung.mp3"></audio>
   </div>
  );
}

export default App;
