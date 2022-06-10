import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate, useParams } from "react-router-dom";
import Auth from "./components/Auth"
import Login from "./components/Login"
import Home from "./components/Home"
import Doctors from './components/Doctors'
import DoctorItem from './components/DoctorItem'
import Patients from './components/Patients'
import Medications from './components/Medications'
import MedicationItem from './components/MedicationItem'
import NavBar from "./components/NavBar"

function App() {
  const [patient, setPatient] = useState(null)
  // const [patients, setPatients] = useState([])
  // const [doctor, setDoctor] = useState([])
  // const [medications, setMedications] = useState([])

  let navigate = useNavigate();

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((patient) => setPatient(patient));
      }
    });
}, []);

// useEffect(() => {
//   fetch("/doctors").then((r) => {
//     if (r.ok) {
//       r.json().then((doctor) => setDoctor(doctor));
//     }
//   });
// }, []);

// useEffect(() => {
//   fetch("/patients").then((r) => {
//     if (r.ok) {
//       r.json().then((patients) => setPatients(patients));
//     }
//   });
// }, []);

// useEffect(() => {
//   fetch("/medications").then((r) => {
//     if (r.ok) {
//       r.json().then((medications) => setMedications(medications));
//     }
//   });
// }, []);




if (!patient) {
  return (
    <>
    
    <h1 className="mainhead">Med Muncher</h1>
    <Auth setPatient={setPatient} />
    <Login
      error={"please login"}
      setPatient={setPatient}
    />
    </>
  );
}


return (
  <>
    {/* <NavBar
      setPatient={setPatient}
      patient={patient}
    /> */}
    <Routes>
      <Route
        exact
        path="/"
        element={<Home setPatient={setPatient} patient={patient} />}
      />


      <Route
        path='/doctors/:id'
        element={<DoctorItem />}
      /> 
      <Route
        path='/doctors'
        element={<Doctors />}
      /> 
      {/* <Route
        path='/patients/:id'
        element={<PatientItem />}
      />  */}
      <Route 
        path="/medications" 
        element={<Medications />} />
      <Route 
        path="medications/:id" 
        element={<MedicationItem />} />
    </Routes>  
  </>
);
}


//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
