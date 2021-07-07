
import { useState } from "react/cjs/react.development";
import parsetTime from "./helpers/helpTime";


 




const Display = (props)=>{
   
function handelShow (){
   
}
    return(
        <div>
            <h1 className="time">{parsetTime(props.time)}</h1>
            {  props.showBut==true ?
                <button className="start" onClick={props.handelStart} >Start</button>
                :
                    <button className="continue" onClick={props.handelStart}>Continue</button>
                }
            <button className="stop" onClick={ props.handelStop} >Stop</button>
            <button className="reset" onClick={props.handelReset}>Reset</button>
        </div>
    );
}
export default Display;