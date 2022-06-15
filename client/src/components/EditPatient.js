import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditPatient = ({patient}) => {
    const { username, avatar, image } = patient
    const [patientData, setPatientData] = useState({
        username,
        avatar,
        image
    })
    

    const handleChange = (e) => {
        const { name,  value} = e.target
        setPatientData((newMedication) => ({...newMedication, [name]: value}))
    }

    let navigate = useNavigate();


    useEffect(() => {
        fetch(`/patients/${patient.id}`).then((r) => {
            if (r.ok) {
            r.json().then((a) => setPatientData(a));
            }
        });
    }, []);
        
    const handleSubmit = (e) => {
        e.preventDefault();
        
    fetch(`/patients/${patient.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(patientData),
        }).then((res) => {
            if (res.ok) {
                res.json().then((user) => {
                    console.log("success");
                    navigate('/')
                });
            } else {
                res.json().then((json) => console.log("wrong"));
            }
        });
    };

    return (
        <>
        <section>
        <form className="form" autoComplete="off" onSubmit={handleSubmit}>
            <h2>Edit Patient</h2>
            <label htmlFor="username" className="form-text">Username</label>
            <input
                type="text"
                id="username"
                name="username"
                onChange={handleChange}
                value={patientData.username} />
    
    
            <label htmlFor="avatar" className="form-text">avatar</label>
            <input
                type="text"
                id="avatar"
                name="avatar"
                onChange={handleChange}
                value={patientData.avatar} />

            <label htmlFor="image" className="form-text">image</label>
            <input
                type="text"
                id="image"
                name="image"
                onChange={handleChange}
                value={patientData.image} />
    
    <button className="submit-button" type="submit" >Edit </button>
    </form>
    </section>
        </>  
    )
}

export default EditPatient