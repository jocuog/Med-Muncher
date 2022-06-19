import { useState, useEffect } from "react";
import Countdown from "react-countdown";
import { useNavigate, useParams } from "react-router-dom";
import Popup from 'reactjs-popup';
import { SpriteAnimator } from 'react-sprite-animator'



const Completionist = () => 
    <div>
    <h2 style={{ color: 'red'}}>You are good to go!</h2>
    </div>;



const getLocalStorageValue = (s) => localStorage.getItem(s);

const MedicationItem = ({ medications, patient, setTextBubble }) => {
    const { name, dosage, frequency, instructions, initial_amount, fill_date, refill_date, refills, refills_remaining, taken} = medications
    const { points, level} = patient
    const [patientPoints, setPatientPoints] = useState(points)
    const [patientsLevel, setPatientsLevel] = useState(level)
    const [remainingDoses, setRemainingDoses] = useState(initial_amount)


    const [data, setData] = useState(
        { date: Date.now(), delay: (frequency)*10000 } //10 seconds
    );

    let navigate = useNavigate();

    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        
        if (completed) {
          // Render a complete state
          
            return (
            <> 
               {/* <button  class="nes-balloon from-right">Click here</button> */}
             <button style={{ position: 'relative', bottom: '50px'}} onClick={handleCompleteCount} class="nes-balloon from-right" > 
             Time To take {dosage} of {name}.
            <br></br>
            {instructions}
             <br></br>
             - Dr. {medications.doctor.name}
             <br></br>
             <button class="nes-btn is-success is-small" > I did it! </button>
             </button> 
              
            <i style={{ position: 'relative', top: '135px'}} class="nes-bcrikko"></i> 
            </>
            )              
        } else {
          // Render a countdown
            return (
            <span>
                Days{days}:Hours{hours}:Minutes{minutes}:Seconds{seconds}
            </span>
            );
        }
    };

    const wantedDelay = 60000; //10 ms

    useEffect(() => {
        const savedDate = getLocalStorageValue("end_date");
            if (savedDate != null && !isNaN(savedDate)) {
                const currentTime = Date.now();
                const delta = parseInt(savedDate, 10) - currentTime;
          //Do you reach the end?
            if (delta > wantedDelay) {
            //Yes we clear uour saved end date
            
            if (localStorage.getItem("end_date").length > 0)
                localStorage.removeItem("end_date")
                
            } else {
            //No update the end date with the current date
            setData({ date: currentTime, delay: delta });

            }
        }  
    

    },[] );
    
    const handleCompleteCount = () => {
    if (localStorage.getItem("end_date") != null)
                localStorage.removeItem("end_date");
                // alert(`Take ${dosage} of ${name}`)
                incrementPoints()
                decrementMeds()
                setTextBubble(true)
                // window.location.reload(false);
    }

    const incrementPoints = () => {
        setPatientPoints((patientPoints) => patientPoints + 10)
        if (patientPoints%100 === 0) {
            setPatientsLevel((patientsLevel) => patientsLevel + 1)
        }
        return patientPoints
    }

    const decrementMeds = () => {
            if (remainingDoses === 1) {
                alert('time to get more')
                fetch(`medications/${medications.id}`, {
                    method: "DELETE",
                });
            } else {
                setRemainingDoses((remainingDoses) => remainingDoses - dosage)
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



console.log(medications.doctor.name)

    return (
        <>
        
        <div class="nes-container is-dark with-title is-centered"> 
        <h2 class="title">{name}</h2>
            <div class="nes-container is-rounded is-dark">
            <Countdown
            date={data.date + data.delay}
            renderer={renderer}
            onStart={(delta) => {
            //Save the end date
                if (localStorage.getItem("end_date") == null)
                    localStorage.setItem(
                    "end_date",
                    JSON.stringify(data.date + data.delay)
                    );
            }}
            // onComplete={handleCompleteCount}
             />
            </div>
            <div className="med-doc-container">
             <div class="nes-container is-rounded is-dark with-title is-centered">
             <div class='title'>Medication</div>
            <h3>Medicine:{name}</h3>
            {/* <h1>{medications.doctor}</h1> */}
            <h3>Dosage:{dosage}</h3>
            <h3>Frequency(Days):{frequency}</h3>
            <h3>Instructions:{instructions}</h3>
            <h3>Remaining:{initial_amount}</h3>
            {/* <h3>Med refills:{refills}</h3>
            <h3>Med refills_remaining:{refills_remaining}</h3> */}
            <h3>Fill Date:{fill_date}</h3>
            <h3>Refill Date:{refill_date}</h3>
            </div>
            <div class="nes-container is-rounded is-dark with-title is-centered">
            <div class='title'>Doctor</div>
            {/* <br></br> */}
            <i class="nes-icon is-small heart"></i>
            <i class="nes-icon is-small heart"></i>
            <i class="nes-icon is-small heart"></i>
            <i class="nes-icon is-small heart"></i>
            <i class="nes-icon is-small heart"></i>
                <h3>Name:{medications.doctor.name}</h3>
            <br></br>
                <h3>Location:{medications.doctor.location}</h3>
            <br></br>
                <h3>Phone:{medications.doctor.phone}</h3>
            <br></br>
                <h3>Email:{medications.doctor.email}</h3>
            <br></br>
            </div>
            </div>
            </div>
        </>
    )
}

export default MedicationItem