import { useState, useEffect } from "react";
import EditPatient from "./EditPatient";

const Patients = ({patient}) => {
    const { name, username, avatar, image, points, level } = patient

    return (
        <div class="nes-container is-dark with-title is-centered"> 
        <h2 class="title">Profile</h2>
       
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
            <h2 >Character</h2>
            <section class="message-list">
            <section class="message -left"></section>
         
            <i class={`${avatar}`} />
               <div class="nes-balloon from-left is-dark">
          <p>Hello NES.css</p>
        </div>
            </section>
            
            
            {/* <h2>image:{image}</h2> */}
          
       
        </div>
        </div>    
    )
}

export default Patients