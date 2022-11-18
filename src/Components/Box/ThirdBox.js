import React from 'react'
import './ThirdBox.css'
import { useState } from 'react'

function ThirdBox(props) {
  const[visible, setvisibility] = useState(true)
  if(visible){ return (
    <div className='thirdmainbox'>
       <div className='thirdinnerbox'>
            <div  className='thirdinsidebox'>
                <div id="insidebox">
                <span>{props.title}</span>
                <span>{props.note}</span>
                </div>
                <span className="material-symbols-outlined hover color">
                        push_pin
                </span>
            </div>
            <div className='thirdiconsbox'>
                    <span className="material-symbols-outlined hover color">
                    add_alert
                    </span>
                    <span className="material-symbols-outlined hover color">
                    palette
                    </span>
                    <span className="material-symbols-outlined hover color">
                    image
                    </span>
                    <span className="material-symbols-outlined hover color">
                    system_update_alt
                    </span>
                    <span class="material-symbols-outlined hover color" onClick={()=>{
                      setvisibility(false)
                    }}>
                    delete
                    </span>
                    <span className="material-symbols-outlined hover color">
                    more_vert
                    </span>
            </div>
       </div>
    </div>
  )}
}

ThirdBox.defaultProps = {
  title: "Title",
  note: "Take a note..."
}

export default ThirdBox