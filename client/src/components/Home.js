import React , { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Patients from './Patients'
import MedicationItem from "./MedicationItem";
import DoctorItem from "./DoctorItem";

const Home = ({ setPatient, patient }) => {
    const [medications, setMedications] = useState([]);
    const [doctors, setDoctors] = useState([]);
    const [textBubble, setTextBubble] = useState(null);

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

    const onUpdateScore = (updatedScore) => {
        setPatient(updatedScore)
    }

    const onDeleteMeds = (deletedMeds) => {
        const updatedMeds = medications.filter(medication => medication.id !== deletedMeds.id)
        setMedications(updatedMeds)
        console.log('delete', deletedMeds);
    }

    const onUpdateMeds = (updatedMeds) => {
        const updatedMedications = medications.map(ogmed => {
            if(ogmed.id === updatedMeds.id){
                return updatedMeds
            } else {
                return ogmed
            }
        })
        setMedications(updatedMedications)
    }

    const medicationsList = medications.map((medications) => (
        <MedicationItem 
            key={medications.id} 
            medications={medications} 
            setMedications={setMedications} 
            patient={patient} 
            setTextBubble={setTextBubble} 
            onUpdateScore={onUpdateScore} 
            onUpdateMeds={onUpdateMeds} 
            onDeleteMeds={onDeleteMeds} />
    ));

    const doctorsList = doctors.map((doctors) => (
        <DoctorItem 
            key={doctors.id} 
            doctors={doctors} 
            setDoctors={setDoctors} />
    ));

    return (
        <div >
                <Patients 
                    patient={patient}
                    setPatient={setPatient} 
                    textBubble={textBubble} 
                    setTextBubble={setTextBubble}/>

            <div class="nes-container is-dark with-title is-centered">
                <h2 class="title">Medications</h2>
                <br></br>
                {medicationsList}
            </div>
        </div>
    )
}

export default Home;