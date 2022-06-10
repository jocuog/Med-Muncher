import { useParams, useNavigate} from "react-router-dom";
import { useState } from 'react'

const NewMedication = ({ patient, doctors })=> {
    const [selectedDoctor, setSelectedDoctor] = useState("")
    const [ newMedication, setNewMedication ] = useState({
        patient_id: patient.id,
        doctor_id: selectedDoctor.id,
        name: "",
        dosage: "",
        frequency: 0,
        instructions: "",
        count: 0,
        refills: 0,
        taken: false,
        // fill_date:
        // refill_date:

    })

    const handleChange = (e) => {
        const { name,  value} = e.target
        setNewMedication((newMedication) => ({...newMedication, [name]: value}))
    }
    

    let navigate = useNavigate();

    // const createMedication = (value) => {
        // const newMedication = {
        //     patient_id: patient.id,
        //     doctor_id: selectedDoctor.id,
        // };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        fetch("/medications", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newMedication),
        }).then((res) => {
            if (res.ok) {
                res.json().then((user) => {
                console.log("success");
                navigate('/medications')
                });
            } else {
                res.json().then((json) => console.log("wrong"));
            }
        });
    };

    return (
        <div>
        <section>
        <form className="form" autoComplete="off" onSubmit={handleSubmit}>
            <h2>Add Medication</h2>
            <label htmlFor="name" className="form-text">Name</label>
            <input
                type="text"
                id="name"
                name="name"
                onChange={handleChange}
                value={newMedication.name} />
    
            <label htmlFor="doctor_id">Doctor</label>
            <select
                name="doctor_id"
                id="doctor_id"
                onChange={handleChange}
                value={newMedication.doctor_id} >
        
            </select>
            
            <label htmlFor="location" className="form-text">Location</label>
            <input
                className="beer-form"
                type="text"
                id="location"
                name="location"
                onChange={handleChange}
                value={newMedication.location} />
    
            <label htmlFor="dosage" className="form-text">Dosage</label>
            <input
                type="text"
                id="dosage"
                name="dosage"
                onChange={handleChange}
                value={newMedication.dosage} />
     
            <label htmlFor="frequency">Frequency</label>
            <input
                type="number"
                step="1"
                id="frequency"
                name="frequency"
                onChange={handleChange}
                value={newMedication.frequency} />
    
            <label htmlFor="instructions" className="form-text">instructions</label>
            <input
                className="beer-form"
                type="text"
                id="instructions"
                name="instructions"
                onChange={handleChange}
                value={newMedication.instructions} />

            <label htmlFor="count">count</label>
            <input
                type="number"
                id="count"
                name="count"
                onChange={handleChange}
                value={newMedication.count} />

            <label htmlFor="refills">refills</label>
            <input
                type="number"
                step="1"
                id="refills"
                name="refills"
                onChange={handleChange}
                value={newMedication.refills} />

            {/* <label htmlFor="taken">taken</label>
            <input
                type="boolean"
                id="taken"
                name="taken"
                onChange={handleChange}
                value={newMedication.taken} /> */}

            <button className="submit-button" type="submit" >Add Beer</button>
        </form>
    </section>
    </div>
    )

}

export default NewMedication