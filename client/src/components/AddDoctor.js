    import { useNavigate} from "react-router-dom";
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
            <div className="add-doctor"  >
            <div style={{position: 'relative'}}>
            <div style={{  maxWidth: '30%', color: 'white', opacity: 0.8,position: 'absolute', top: '150px', left: '50%' }} class="nes-container is-rounded is-dark with-title">
            <h2 class="title">Add Doctor</h2>
                <section>
                    <div>
                    <form>
                    <div>
                    <label htmlFor="name" >Name</label>
                    <br></br>
                        <input
                        class='nes-input is-dark is-success'
                            type="text"
                            id="name"
                            name="name"
                            onChange={handleChange}
                            value={newDoctor.name} />
                        </div>

                        <div>
                        <label htmlFor="location" >location</label>
                        <br></br>
                        <input
                        class='nes-input is-dark is-success'
                            type="text"
                            id="location"
                            name="location"
                            onChange={handleChange}
                            value={newDoctor.location} />
                        </div>

                        <div>
                        <label htmlFor="phone" >phone</label>
                        <br></br>
                        <input
                        class='nes-input is-dark is-success'
                            type="text"
                            id="phone"
                            name="phone"
                            onChange={handleChange}
                            value={newDoctor.phone} />
                        </div>

                        <div>
                        <label htmlFor="email" >email</label>
                        <br></br>
                        <input
                        class='nes-input is-dark is-success'
                            type="text"
                            id="email"
                            name="email"
                            onChange={handleChange}
                            value={newDoctor.email} />
                        </div>
                        <br></br>
                        <button style={{}} onClick={handleSubmit} class="nes-btn is-success" type="submit" >Add Doctor</button>
                    
                    </form>
                    </div>
                </section>
                </div>
                </div>
            </div>


        )
}

export default AddDoctor