import { useState, useEffect } from "react";
import EditPatient from "./EditPatient";
import Popup from 'reactjs-popup';


const Patients = ({patient, textBubble, setTextBubble}) => {
    const { name, username, avatar, image, points, level } = patient

    const textShow = () => {
        if (textBubble === null) {
            return (
                <div>

               <div class="nes-balloon from-right"> 
               
               <p className='bubble-text'>
               <i class="nes-icon is-small star"></i>
               <i class="nes-icon is-small star"></i>
               <i class="nes-icon is-small star"></i>
               Hello {name}!
               <i class="nes-icon is-small star"></i>
               <i class="nes-icon is-small star"></i>
               <i class="nes-icon is-small star"></i>
               </p>
               <p className='bubble-text'>I'm your reminder buddy!</p>
               <i class="nes-icon is-medium like"></i>
      </div>  
      </div>
            )
        } else if (textBubble === 1) { 
            return (
                <div>
                 {/* <Popup trigger={ */}
                 {/* <button class="nes-balloon from-left"  > Click to open popup </button> */}
                {/*  }  position="right center"> */}
                  <div style={{ color: 'green'}}class="nes-balloon from-right">Good Job {name}!
                  <br></br>
                  <button onClick={() => setTextBubble(null)} class="nes-btn is-success is-small" > 
                  <i class="nes-icon coin is-small"></i>
                    CLaim Points! 
                  <i class="nes-icon coin is-small"></i>
                  </button>
                  </div>
                {/* /</Popup>  */}
                </div>
                )
        } else if ( textBubble === 2 ) {
            return (
            <div>

            <div class="nes-balloon from-right"> 
            
            <p className='bubble-text'>
            <i class="nes-icon is-small star"></i>
            <i class="nes-icon is-small star"></i>
            <i class="nes-icon is-small star"></i>
            Hello {name}!
            <i class="nes-icon is-small star"></i>
            <i class="nes-icon is-small star"></i>
            <i class="nes-icon is-small star"></i>
            </p>
            <p className='bubble-text'>Youre out of a</p>
            <i class="nes-icon is-medium like"></i>
   </div>  
   </div>
   )
        }
}


    return (
        <div class="nes-container is-rounded is-dark with-title is-centered"> 
        
        <h2 class="title">Profile</h2>
       <div className="med-doc-container">
        <div class="nes-table-responsive">
         <table class="nes-table is-bordered is-dark" >
            <thead>
            <tr>
            <th>
            
            <img src={image} alt={name} />
            </th>
            <th>
            <h2 >Name:{name}</h2>
            <h2>Username:{username}</h2>
            <h2>points:{points}</h2>
            <h2>level:{level}</h2>
            </th>
            </tr>
            </thead>
            </table>  
        </div>
        <div>
            <h2></h2>
            
            {textShow()}
            <i style={{ position: 'relative', left: '180px'}} class={`${avatar}`} />
         
       </div>
        </div>
        </div>    
    )
}

export default Patients