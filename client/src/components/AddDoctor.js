    import { useParams, useNavigate} from "react-router-dom";
    import { useState } from 'react'

const AddDoctor = ({patient}) => {
    console.log(patient)

        const [ newDoctor, setNewDoctor ] = useState({
            // patient_id: patient.id,
            name: "",
            location: "",
            phone: "",
            email: ""
        })
    
    
    
        const handleChange = (e) => {
            const { name,  value} = e.target
            setNewDoctor((newDoctor) => ({...newDoctor, [name]: value}))
        }
        
    
        let navigate = useNavigate();

    
        const handleSubmit = (e) => {
            e.preventDefault();
            
            fetch("/doctors", {
                method: "POST",
                headers: { "Content-Type": "application/json",
                Accept: "application/json" },
                body: JSON.stringify(newDoctor),
            }).then((res) => {
                if (res.ok) {
                    res.json().then((user) => {
                    console.log("success");
                    navigate('/')
                    });
                } else {
                    res.json().then((json) => console.log("wrong",newDoctor));
                    
                }
            });
        };

        
        return (
            <div>
            <div class="nes-container is-dark with-title">
            <h2 class="title">Add Doctor</h2>
                <section>
                    <div>
                    <form>
                    <div>
                    <label htmlFor="name" class='nes-input'>Name</label>
                    <br></br>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            onChange={handleChange}
                            value={newDoctor.name} />
                        </div>

                        <div>
                        <label htmlFor="location" class='nes-input'>location</label>
                        <br></br>
                        <input
                            type="text"
                            id="location"
                            name="location"
                            onChange={handleChange}
                            value={newDoctor.location} />
                        </div>

                        <div>
                        <label htmlFor="phone" class='nes-input'>phone</label>
                        <br></br>
                        <input
                            type="text"
                            id="phone"
                            name="phone"
                            onChange={handleChange}
                            value={newDoctor.phone} />
                        </div>

                        <div>
                        <label htmlFor="email" class='nes-input'>email</label>
                        <br></br>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            onChange={handleChange}
                            value={newDoctor.email} />
                        </div>
                        <br></br>
                        <button onClick={handleSubmit} class="nes-btn is-primary" type="submit" >Add Doctor</button>
                    
                    </form>
                    </div>
                </section>
                </div>
            </div>


        )
}

export default AddDoctor