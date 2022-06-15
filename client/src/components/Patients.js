import { useState, useEffect } from "react";
import EditPatient from "./EditPatient";

const Patients = ({patient}) => {
    const { name, username, avatar, image, points, level } = patient

    return (
        <> 
            <EditPatient patient={patient} />
            <img src={image} alt={name} />
            <h2>Name:{name}</h2>
            <h2>Username:{username}</h2>
            <h2>avatar:{avatar}</h2>
            {/* <h2>image:{image}</h2> */}
            <h2>points:{points}</h2>
            <h2>level:{level}</h2>
           
        </>    
    )
}

export default Patients