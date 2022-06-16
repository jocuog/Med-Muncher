import { useParams, useNavigate} from "react-router-dom";
import { useState, useEffect } from 'react'
import "react-datepicker/dist/react-datepicker.css";

const NewMedication = ({ patient })=> {
    const [selectedDoctor, setSelectedDoctor] = useState("")
    const [doctors, setDoctors] = useState([]);
    const [ newMedication, setNewMedication ] = useState({
        patient_id: patient.id,
        doctor_id: selectedDoctor,
        name: "",
        dosage: 0,
        frequency: 0,
        instructions: "",
        initial_amount: 0,
        refills: 0,
        fill_date: 0,
        refill_date: 0

    })

    const handleChange = (e) => {
        const { name,  value} = e.target
        setNewMedication((newMedication) => ({...newMedication, [name]: value}))
    }

    let navigate = useNavigate();

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
                navigate('/')
                });
            } else {
                res.json().then((json) => console.log("wrong", newMedication, doctors));
            }
        });
    };

    useEffect(() => {
        fetch("/doctors").then((r) => {
            if (r.ok) {
                r.json().then((doctors) => setDoctors(doctors));
            }
        });
    }, []);

    
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
                <option value="Select Doctor" >Select Doctor</option>
                {doctors.map((doctor) => {return <option key={doctor.id} value={doctor.id} >{doctor.name}</option>})}
            </select>
    
            <label htmlFor="dosage" className="form-text">Dosage</label>
            <input
                type="number"
                min='0'
                step="1"
                id="dosage"
                name="dosage"
                onChange={handleChange}
                value={newMedication.dosage} />
    
            <label htmlFor="frequency">Frequency</label>
            <input
                type="number"
                min='0'
                step="1"
                id="frequency"
                name="frequency"
                onChange={handleChange}
                value={newMedication.frequency} />
    
            <label htmlFor="instructions" className="form-text">instructions</label>
            <input
                type="text"
                id="instructions"
                name="instructions"
                onChange={handleChange}
                value={newMedication.instructions} />

            <label htmlFor="initial_amount">initial_amount</label>
            <input
                type="number"
                min='0'
                id="initial_amount"
                name="initial_amount"
                onChange={handleChange}
                value={newMedication.initial_amount} />

            <label htmlFor="refills">refills</label>
            <input
                type="number"
                min='0'
                step="1"
                id="refills"
                name="refills"
                onChange={handleChange}
                value={newMedication.refills} />

            <br></br>

            <label htmlFor="fill_date">fill_date</label>
            <input
                type="date"
                id="fill_date"
                name="fill_date"
                onChange={handleChange}
                value={newMedication.fill_date} />

            <label htmlFor="refill_date">refill_date</label>
            <input
                type="date"
                id="refill_date"
                name="refill_date"
                onChange={handleChange}
                value={newMedication.refill_date} />

            <button className="submit-button" type="submit" >Add Medication</button>
        </form>
    </section>
    </div>
    )

}

export default NewMedication