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

const MedicationItem = ({ medications, patient }) => {
    const { name, dosage, frequency, instructions, initial_amount, fill_date, refill_date, refills, refills_remaining, taken} = medications
    const { points, level} = patient
    const [patientPoints, setPatientPoints] = useState(points)
    const [patientsLevel, setPatientsLevel] = useState(level)
    const [remainingDoses, setRemainingDoses] = useState(initial_amount)
    const [Refresh, setRefresh] = useState(false)


    const [data, setData] = useState(
        { date: Date.now(), delay: (frequency)*10000 } //10 seconds
    );

    let navigate = useNavigate();

    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        
        if (completed) {
          // Render a complete state
            return (
            <>      
            <Popup trigger={<button class="nes-balloon from-left" > Click to open popup </button>} 
             position="right center">
              <div>GeeksforGeeks</div>
              <button class="nes-balloon from-left" onClick={handleCompleteCount}>Click here</button>
            </Popup></>
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

                window.location.reload(false);
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





    return (
        <>
        <div class="nes-container is-dark with-title is-centered"> 
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
        <h2 class="title">{name}</h2>
        <div class="nes-table-responsive">


 


            {/* <SpriteAnimator
            sprite="../assets/DinoSprites1.png"
            width={100}
            height={100}
            /> */}

            {/* //     () => { 
            //     if (localStorage.getItem("end_date") != null)
            //         localStorage.removeItem("end_date");
            //         alert(`Take ${dosage} of ${name}`)
            // 
            
    
            {/* <Countdown date={Date.now() + (frequency)*10000} onComplete={() => alert(`Take ${dosage} pills`) } >
                <Completionist />
            </Countdown>, */}
            <table class="nes-table is-bordered is-dark" >
            <h3>Med name:{name}</h3>
            <h3>Med dosage:{dosage}</h3>
            <h3>Med frequency:{frequency}</h3>
            <h3>Med instructions:{instructions}</h3>
            <h3>Med initial_amount:{initial_amount}</h3>
            <h3>Med refills:{refills}</h3>
            <h3>Med refills_remaining:{refills_remaining}</h3>
            <h3>Med fill date:{fill_date}</h3>
            <h3>Med refill date:{refill_date}</h3>
            <h3>Med refills left:{refills}</h3>
            <h3>Med taken:{taken}</h3>
            <br></br>
            </table>
            </div>
            
            </div>
            <br></br>
        </>
    )
}

export default MedicationItem