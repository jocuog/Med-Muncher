import React , { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Doctors from './Doctors'
import Patients from './Patients'
import Medications from './Medications'
import MedicationItem from "./MedicationItem";
import DoctorItem from "./DoctorItem";
import NavBar from "./NavBar"



const Home = ({ setPatient, patient }) => {
    const [medications, setMedications] = useState([]);
    const [doctors, setDoctors] = useState([]);
    const [textBubble, setTextBubble] = useState(false);
    // const { name, username, avatar, image, points, level } = patient

    useEffect(() => {
        fetch("/my_medications").then((r) => {
            if (r.ok) {
                r.json().then((medications) => setMedications(medications));
            }
        });
    }, []);

    useEffect(() => {
        fetch("/my_doctors").then((r) => {
            if (r.ok) {
                r.json().then((doctors) => setDoctors(doctors));
            }
        });
    }, []);

    let navigate = useNavigate();

    const logout = () => {
        fetch("/logout", {
            method: "DELETE",
        }).then(() => {
            setPatient(null);
        });
            navigate("/");
    };


    const medicationsList = medications.map((medications) => (
        <MedicationItem key={medications.id} medications={medications} setMedications={setMedications} patient={patient} setTextBubble={setTextBubble}/>
    ));
    const doctorsList = doctors.map((doctors) => (
        <DoctorItem key={doctors.id} doctors={doctors} setDoctors={setDoctors}   />
    ));

    return (
        <div>
        

            {/* <NavBar
                setPatient={setPatient}
                patient={patient}
                setDoctors={setDoctors}
                doctors={doctors}
            /> */}
            <Patients patient={patient} setPatient={setPatient} textBubble={textBubble} setTextBubble={setTextBubble}/>
            {/* <h2>Name:{name}</h2>
            <h2>Username:{username}</h2>
            <h2>avatar:{avatar}</h2>
            <h2>image:{image}</h2>
            <h2>points:{points}</h2>
            <h2>level:{level}</h2> */}
            <div class="nes-container is-dark with-title is-centered">
        <h2 class="title">Medications</h2>
            <br></br>
            {medicationsList}
            {/* <br></br>
            {doctorsList} */}
            </div>
        </div>
    )
}

export default Home;