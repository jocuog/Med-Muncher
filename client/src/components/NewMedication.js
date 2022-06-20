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
                console.log("success", newMedication);
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

    console.log(newMedication)

    return (
    <div className='new-medication'>

    {/* <section> */}

    <form>

        <div class="nes-container is-success is-rounded is centered" >

            <h2 class="title">NEW MEDICATION</h2>

            

            <div className='new-med-container' >

                <div className='new-med-sub-container'>
        
                    <div className="form" autoComplete="off" onSubmit={handleSubmit}>
                        <div className='med-form'>
                            <div>
            
                                <label className="form-text" htmlFor="name" >NAME</label>
                                <br></br>
                                    <input
                                        placeholder="ENTER NAME..."
                                        class="nes-input is-success"
                                        type="text"
                                        id="name"
                                        name="name"
                                        onChange={handleChange}
                                        value={newMedication.name} />
                                </div>

                                <div>
                                <label className="form-text" htmlFor="instructions" >INSTRUCTIONS</label>
                                <br></br>
                                    <input
                                        placeholder="INSTRUCTIONS..."
                                        class="nes-input is-success"
                                        type="text"
                                        id="instructions"
                                        name="instructions"
                                        onChange={handleChange}
                                        value={newMedication.instructions} />
                                </div>    

                                <div>
                                <label className="form-text" htmlFor="dosage" >DOSAGE</label>
                                <br></br>
                                <input
                                    class="nes-input is-success"
                                    type="number"
                                    min='0'
                                    step="1"
                                    id="dosage"
                                    name="dosage"
                                    onChange={handleChange}
                                    value={newMedication.dosage} />
                                </div>    
                        
                                <div>
                                <label className="form-text" htmlFor="frequency" >FREQUENCY</label>
                                <br></br>
                                <input
                                    class="nes-input is-success"
                                    type="number"
                                    min='0'
                                    step="1"
                                    id="frequency"
                                    name="frequency"
                                    onChange={handleChange}
                                    value={newMedication.frequency} />
                                </div>    
    
                                <div>
                                <label className="form-text" htmlFor="initial_amount" >STARTING QUANTITY</label>
                                <br></br>
                                <input
                                    class="nes-input is-success"
                                    type="number"
                                    min='0'
                                    id="initial_amount"
                                    name="initial_amount"
                                    onChange={handleChange}
                                    value={newMedication.initial_amount} />
                                </div>

                            </div>

                    </div>
    
                </div>

            </div>

        </div>

            <div className="med-form2" >
                <div >
                    <label htmlFor="doctor_id" >Doctor</label>
                    <br></br>
                    <select
                        class="nes-input is-warning"
                        name="doctor_id"
                        id="doctor_id"
                        onChange={handleChange}
                        value={newMedication.doctor_id} >
                        <option value="Select Doctor" >Select Doctor</option>
                        {doctors.map((doctor) => {return <option key={doctor.id} value={doctor.id} >{doctor.name}</option>})}
                    </select>
                </div>

                <div>
                    <label htmlFor="fill_date" >Fill Date</label>
                    <br></br>
                    <input
                        class="nes-input is-warning"
                        type="text"
                        id="fill_date"
                        name="fill_date"
                        onChange={handleChange}
                        value={newMedication.fill_date} />
                </div>    

                <div>
                <label htmlFor="refill_date" >Refill Date</label>
                <br></br>
                <input
                    class="nes-input is-warning"
                    type="text"
                    id="refill_date"
                    name="refill_date"
                    onChange={handleChange}
                    value={newMedication.refill_date} />
                </div>

                <br></br>
            
            </div>

                <button className="submit-button" type="submit" >ADD <br></br><h1>?</h1>MEDICATION</button>
            </form> 
        {/* </section> */}
    </div>
    )

}

export default NewMedication