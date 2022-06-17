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
        <div class="nes-container is-dark with-title"> 
        <h2 class="title">Add Medication</h2>
        <section>
        <div>
        <form className="form" autoComplete="off" onSubmit={handleSubmit}>
            <div>
            
            <label htmlFor="name" class='nes-input'>Name</label>
            <br></br>
            <input
                type="text"
                id="name"
                name="name"
                onChange={handleChange}
                value={newMedication.name} />
            </div>

            <div>
            <label htmlFor="doctor_id" class='nes-input'>Doctor</label>
            <br></br>
            <select
                name="doctor_id"
                id="doctor_id"
                onChange={handleChange}
                value={newMedication.doctor_id} >
                <option value="Select Doctor" >Select Doctor</option>
                {doctors.map((doctor) => {return <option key={doctor.id} value={doctor.id} >{doctor.name}</option>})}
            </select>
            </div>

            <div>
            <label htmlFor="dosage" class='nes-input'>Dosage</label>
            <br></br>
            <input
                type="number"
                min='0'
                step="1"
                id="dosage"
                name="dosage"
                onChange={handleChange}
                value={newMedication.dosage} />
            </div>    
    
            <div>
            <label htmlFor="frequency" class='nes-input'>Frequency</label>
            <br></br>
            <input
                type="number"
                min='0'
                step="1"
                id="frequency"
                name="frequency"
                onChange={handleChange}
                value={newMedication.frequency} />
            </div>    
    
            <div>
            <label htmlFor="instructions" class='nes-input'>instructions</label>
            <br></br>
            <input
                type="text"
                id="instructions"
                name="instructions"
                onChange={handleChange}
                value={newMedication.instructions} />
            </div>    

            <div>
            <label htmlFor="initial_amount" class='nes-input'>initial_amount</label>
            <br></br>
            <input
                type="number"
                min='0'
                id="initial_amount"
                name="initial_amount"
                onChange={handleChange}
                value={newMedication.initial_amount} />
            </div>

            <div>
            <label htmlFor="refills" class='nes-input'>refills</label>
            <br></br>
            <input
                type="number"
                min='0'
                step="1"
                id="refills"
                name="refills"
                onChange={handleChange}
                value={newMedication.refills} />
            </div>

            <div>
            <label htmlFor="fill_date" class='nes-input'>fill_date</label>
            <br></br>
            <input
                type="date"
                id="fill_date"
                name="fill_date"
                onChange={handleChange}
                value={newMedication.fill_date} />
            </div>    

            <div>
            <label htmlFor="refill_date" class='nes-input'>refill_date</label>
            <br></br>
            <input
                type="date"
                id="refill_date"
                name="refill_date"
                onChange={handleChange}
                value={newMedication.refill_date} />
            </div>
            <br></br>
            <button className="submit-button" type="submit" >Add Medication</button>
        </form>
        </div>
    </section>
    </div>
    </div>
    )

}

export default NewMedication