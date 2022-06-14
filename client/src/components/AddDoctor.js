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
                <section>
                    <form>
                    <h2>Add Doctor</h2>
                    <label htmlFor="name" className="form-text">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            onChange={handleChange}
                            value={newDoctor.name} />
                
                    <label htmlFor="location" className="form-text">location</label>
                        <input
                            type="text"
                            id="location"
                            name="location"
                            onChange={handleChange}
                            value={newDoctor.location} />
                
                    <label htmlFor="phone" className="form-text">phone</label>
                        <input
                            type="text"
                            id="phone"
                            name="phone"
                            onChange={handleChange}
                            value={newDoctor.phone} />
                
                    <label htmlFor="email" className="form-text">email</label>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            onChange={handleChange}
                            value={newDoctor.email} />
                        <button onClick={handleSubmit} className="submit-button" type="submit" >Add Doctor</button>
                    </form>
                </section>
            </div>


        )
}

export default AddDoctor