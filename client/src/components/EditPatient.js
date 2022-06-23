import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Patients from "./Patients";

const EditPatient = ({patient, onUpdatePatient}) => {
    const { username, avatar, image, name } = patient
    const [patientData, setPatientData] = useState({
        username,
        avatar,
        image
    })
    
    const handleChange = (e) => {
        const { name,  value} = e.target
        setPatientData((patientData) => ({...patientData, [name]: value}))
    }

    let navigate = useNavigate();

    useEffect(() => {
        fetch(`/patients/${patient.id}`).then((r) => {
            if (r.ok) {
            r.json().then((a) => setPatientData(a));
            }
        });
    }, [patient.id,setPatientData]);
        
    const handleSubmit = (e) => {
        e.preventDefault();   
    fetch(`/patients/${patient.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(patientData),
        }).then((res) => {
            if (res.ok) {
                res.json().then((user) => {
                    console.log("success",user);
                    onUpdatePatient(user)
                    navigate('/')
                });
            } else {
                res.json().then((json) => console.log("wrong"));
            }
        });
    };

    return (
        <div className="edit-profile-container">
            <div>
                    <Patients patient={patient}/>
                <div style={{ opacity: '.9'}} class="nes-container is-dark is-rounded with-title is-centered" >
                    <h2 class="title">Edit Profile</h2>

                    <section>
                        <form autoComplete="off" onSubmit={handleSubmit}>
                            <div class="nes-table-responsive">
                                <table style={{width: '98%', margin: '0 auto', marginBottom: '20px'}} class="nes-table is-bordered is-dark" >
                                    <thead>
                                        <tr>
                                            <th>
                                                <img src={image} alt={name} />
                                            </th>
                                            <th>
                                                <div>
                                                    <label htmlFor="username" class='nes-field'> Change Username</label>
                                                        <br></br>
                                                    <input
                                                        class="nes-input is-warning"
                                                        style={{ borderRadius: '5px', backgroundColor: 'pink' }}
                                                        type="text"
                                                        id="username"
                                                        name="username"
                                                        onChange={handleChange}
                                                        value={patientData.username} />
                                                </div>
                                                        <br></br>
                                                    <label htmlFor="image" class='nes-field'> Enter an Image</label>
                                                            <br></br>
                                                        <div>
                                                            <input
                                                                class="nes-input is-warning"
                                                                style={{ borderRadius: '5px', backgroundColor: 'pink' }}
                                                                type="text"
                                                                id="image"
                                                                name="image"
                                                                onChange={handleChange}
                                                                value={patientData.image} />       
                                                        </div>         
                                                </th>
                                                <th>
                                                    <div>
                                                        <label htmlFor="avatar" class='nes-field'>Pick Your Buddy</label>    
                                                    </div>
                                                        <i class={`${patientData.avatar}`} />
                                                    <div class="nes-select is-error">
                                                        <br></br>

                                                        <select
                                                            style={{ borderRadius: '5px', backgroundColor: 'pink' }}
                                                            type="text"
                                                            id="avatar"
                                                            name="avatar"
                                                            onChange={handleChange}
                                                            value={patientData.avatar}>
                                                                <option value='nes-mario'>Mario</option>
                                                                <option value='nes-ash'>Ash Ketchum</option>
                                                                <option value='nes-pokeball'>Pokeball</option>
                                                                <option value='nes-bulbasaur'>Bulbasaur</option>
                                                                <option value='nes-charmander'>Charmander</option>
                                                                <option value='nes-squirtle'>Squirtle</option>
                                                                <option value='nes-kirby'>Kirby</option>
                                                                <option value='nes-octocat animate'>Octocat</option>
                                                        </select>
                                                    </div>

                                                </th>
                                                            
                                            </tr>  
                                    </thead>     
                                </table> 
                                    <button class="nes-btn is-error" type="submit" >SUBMIT</button>
                            </div>
                        </form>
                    </section>
                </div> 
            </div>
        </div>
    )
}

export default EditPatient