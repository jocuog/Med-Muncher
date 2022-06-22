
import './App.css';
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Auth from "./components/Auth"
import Login from "./components/Login"
import Home from "./components/Home"
import DoctorItem from './components/DoctorItem'
import MedicationItem from './components/MedicationItem'
import NavBar from "./components/NavBar"
import NewMedication from './components/NewMedication';
import AddDoctor from './components/AddDoctor'
import EditPatient from './components/EditPatient';

function App() {
  const [patient, setPatient] = useState(null)
  const [medications, setMedications] = useState([]);
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((patient) => setPatient(patient));
      }
    });
}, []);

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

const onUpdatePatient = (updatedPat) => {
  setPatient(updatedPat)
}

if (!patient) {
  return (
    <div className='main-container'>
    
    <h1 className="mainhead">Med Muncher</h1>
    
    <Login
      error={"please login"}
      setPatient={setPatient}
    />
    <br></br>
    <Auth setPatient={setPatient} />
    </div>
  );
}


return (
  <div className='main-container'>
    <NavBar
      setPatient={setPatient}
      patient={patient}
    />
    <Routes>
      <Route
        exact
        path="/"
        element={<Home setPatient={setPatient} patient={patient} medications={medications} setMedications={setMedications} doctors={doctors} setDoctors={setDoctors}/>}
      />
      <Route
        path='/doctors/:id'
        element={<DoctorItem />}
      /> 
      <Route
        path='/new_medication'
        element={<NewMedication patient={patient} doctors={doctors} setDoctors={setDoctors}/>}
      /> 
      <Route
        path='/add_doctor'
        element={<AddDoctor patient={patient} />}
      /> 
      <Route
        path='/edit-patient'
        element={<EditPatient patient={patient} onUpdatePatient={onUpdatePatient} />}
      /> 
      <Route 
        path="medications/:id" 
        element={<MedicationItem />} />
    </Routes>  
  </div>
);
}


export default App;
