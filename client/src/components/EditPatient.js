import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Patients from "./Patients";
import { SpriteAnimator } from 'react-sprite-animator'
import Spritesheet from 'react-responsive-spritesheet';


const EditPatient = ({patient}) => {
    const { username, avatar, image } = patient
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
                    console.log("success");
                    navigate('/')
                });
            } else {
                res.json().then((json) => console.log("wrong"));
            }
        });
    };

    return (

        
        <div>
        
        {/* <Spritesheet
          className={`my-element__class--style`}
          image={`https://github.com/jocuog/Med-Muncher-project/blob/main/client/src/assets/DinoSprites%20-%20vita.png`}
          widthFrame={420}
          heightFrame={500}
          steps={14}
          fps={10}
          autoplay={true}
          loop={true}
        /> */}

        {/* <SpriteAnimator
            sprite="client/src/assets/DinoSprites1.svg"
            width={100}
            height={100}
        /> */}
        <div class="nes-container is-dark with-title" >
        <h2 class="title">Edit Profile</h2>
        <section>
        <div>
        <form autoComplete="off" onSubmit={handleSubmit}>
            <div>      
            <label htmlFor="username" class='nes-field'>Username</label>
            <br></br>
            <input
                type="text"
                id="username"
                name="username"
                onChange={handleChange}
                value={patientData.username} />
            </div>
            
            <div>
            <label htmlFor="avatar" class='nes-field'>avatar</label>
            <br></br>
            <select
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
            <i class={`${patientData.avatar}`} />
            <label htmlFor="image" class='nes-field'>image</label>
            <br></br>
            <div>
            <input
                type="text"
                id="image"
                name="image"
                onChange={handleChange}
                value={patientData.image} />
            </div> 
    <button class="nes-btn is-primary" type="submit" >Edit </button>
    </form>
    </div>
    </section>
        </div> 
        <div class="nes-container is-dark with-title" >
        <Patients patient={patient}/>
        </div>
</div>

    )
}

export default EditPatient