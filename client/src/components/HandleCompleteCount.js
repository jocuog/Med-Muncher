import { useState, useEffect } from "react";
import Countdown from "react-countdown";
import { useNavigate, useParams } from "react-router-dom";

const HandleCompleteCount = ({ patient, medications}) => {

const { name, dosage, frequency, instructions, initial_amount, fill_date, refill_date, refills, refills_remaining, taken} = medications
const { points, level} = patient
const [patientPoints, setPatientPoints] = useState(points)
const [patientsLevel, setPatientsLevel] = useState(level)
const [remainingDoses, setRemainingDoses] = useState(initial_amount)


let navigate = useNavigate();

const Completionist = () => <h2 style={{ color: 'red'}}>You are good to go!</h2>;

const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a complete state
        return <Completionist />;
    } else {
      // Render a countdown
        return (
        <span>
            {days}:{hours}:{minutes}:{seconds}
        </span>
        );
    }
};

const getLocalStorageValue = (s) => localStorage.getItem(s);


const [data, setData] = useState(
    { date: Date.now(), delay: (frequency)*1000 } //10 seconds
);



const wantedDelay = 100; //10 ms

const incrementPoints = () => {
    setPatientPoints(patientPoints + 10)
    if (patientPoints%100 === 0) {
        setPatientsLevel(patientsLevel + 1)
    }
}

const decrementMeds = () => {
    if (remainingDoses === 0) {
        alert('time to get more')
    } else {
    setRemainingDoses(remainingDoses - dosage)
}}
console.log(patientPoints, remainingDoses, medications)


    if (localStorage.getItem("end_date") != null)
                localStorage.removeItem("end_date");
                alert(`Take ${dosage} of ${name}`)
                incrementPoints()
                decrementMeds()


  //[START] componentDidMount
  //Code runs only one time after each reloading
useEffect(() => {
    async function fetchData() {
    const savedDate = getLocalStorageValue("end_date");
        if (savedDate != null && !isNaN(savedDate)) {
            const currentTime = Date.now();
            const delta = parseInt(savedDate, 10) - currentTime;

      //Do you reach the end?
        if (delta > wantedDelay) {
        //Yes we clear uour saved end date
        if (localStorage.getItem("end_date").length > 0)
            localStorage.removeItem("end_date");
        } else {
        //No update the end date with the current date
        setData({ date: currentTime, delay: delta });
        }
    }  
        fetch(`/patients/${patient.id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ points: patientPoints, level: patientsLevel}),
        }).then((res) => {
            if (res.ok) {
                res.json().then((user) => {
                    console.log("success", patientPoints);
                });
            } else {
                res.json().then((json) => console.log("wrong"));
            }
    });                 

        fetch(`/medications/${medications.id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ initial_amount: remainingDoses }),
        }).then((res) => {
            if (res.ok) {
                res.json().then((user) => {
                    console.log("success", remainingDoses);
                });
            } else {
                res.json().then((json) => console.log("wrong", medications.id));
            }
    });  
}               
fetchData();

});
  //[END] componentDidMount
};

export default HandleCompleteCount;
