import { useState, useEffect } from "react";
import Countdown from "react-countdown";

const getLocalStorageValue = (s) => localStorage.getItem(s);

const MedicationItem = ({ medications, patient, setTextBubble, onUpdateScore, onUpdateMeds, onDeleteMeds }) => {
    const { name, dosage, frequency, instructions, initial_amount, fill_date, refill_date} = medications
    const { points, level} = patient
    const [patientPoints, setPatientPoints] = useState(points)
    const [patientsLevel, setPatientsLevel] = useState(level)
    const [remainingDoses, setRemainingDoses] = useState(initial_amount)

    const dayMultiplier = (freq) => {
        return (
            ((freq)*1000*60*60*24)  
        )
    }

    const [data, setData] = useState(
        { date: Date.now(), delay: (frequency)*10000 } //10 seconds
    );

        const dateFormat = (date) => {
            if(date)
            return (
                date.split('T')[0]
        )}

    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        
        const handleCompleteCount = () => {
            if (localStorage.getItem("end_date") != null)
                        localStorage.removeItem("end_date");
                            setPatientPoints((patientPoints) => patientPoints + 10)
        
                            if (patientPoints%100 === 0) {
                                setPatientsLevel((patientsLevel) => patientsLevel + 1)
                            }
        
                            if (remainingDoses <= 1)
                                
                                setRemainingDoses((remainingDoses) => remainingDoses - dosage)
                                setTextBubble(2)
                            if (remainingDoses <= 1) {
                                fetch(`medications/${medications.id}`, {
                                    method: "DELETE"
                                })
                                    onDeleteMeds(medications) 
                    
                            } else {
                                setTextBubble(1)
                                setRemainingDoses((remainingDoses) => remainingDoses - dosage)
                    }
                return(
                    setData({ date: Date.now(), delay: (frequency)*10000 })
                    )
            }
        
        if (completed) {
          // Render a complete state
            return (
                <> 
                    <button style={{ position: 'relative', bottom: '50px'}}  class="nes-balloon from-right" > 
                        Time To take {dosage} of {name}.
                        <br></br>
                        {instructions}
                        <br></br>
                        - Dr. {medications.doctor.name}
                        <br></br>

                        <button class="nes-btn is-success is-small" onClick={handleCompleteCount}>
                            I did it! 
                        </button>
                        
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
            //Yes we clear our saved end date
            
            if (localStorage.getItem("end_date").length > 0)
                localStorage.removeItem("end_date")

            } else {
            //No update the end date with the current date
            setData({ date: currentTime, delay: delta });
                    
            }
        }  
        
    },[setData,points] );

    const handleDelete = (medications) => {
        fetch(`medications/${medications.id}`, {
            method: "DELETE"
        })
        onDeleteMeds(medications) 
        console.log(medications)
    }
    
useEffect(() => {

    fetch(`/patients/${patient.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ points: patientPoints, level: patientsLevel}),
    }).then((res) => {
        if (res.ok) {
            res.json().then((user) => {
                console.log("success", patientPoints, user);
                onUpdateScore(user)
            });
        } else {
            res.json().then((json) => console.log("wrong"));
        }
});                
}, [patientPoints, patientsLevel, patient.id, ]) 

useEffect(() => {

    fetch(`/medications/${medications.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ initial_amount: remainingDoses }),
    }).then((res) => {
        if (res.ok) {
            res.json().then((user) => {
                console.log("success", remainingDoses, user);
                onUpdateMeds(user)
            });
        } else {
            res.json().then((json) => console.log("wrong", medications.id));
        }
});                 
}, [remainingDoses, medications.id]);

    return (
        <>
        
        <div class="nes-container is-dark is-rounded with-title is-centered">

            <h2 class="title">{name}</h2>

                <div class="nes-container is-rounded is-dark with-title is-centered">
                <div class="title">Countdown</div>
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
                    />
                </div>
            <div className="med-doc-container">
                <div class="nes-container is-rounded is-dark with-title is-centered">
                    <div  class='title'>Medication</div>
                        <div className='medication-container' >
                        <h3>Medicine:{name}</h3>
                        <h3>Dosage:{dosage}</h3>
                        <h3>Frequency(Days):{frequency}</h3>
                        <h3>Instructions:{instructions}</h3>
                        <h3>Remaining:{initial_amount}</h3>
                        <h3>Fill Date:{dateFormat(fill_date)}</h3>
                        <h3>Refill Date:{dateFormat(refill_date)}</h3>
                        </div>
                    </div>
                        {/* <div >
                            <img src="" alt="pills" />
                        </div> */}
                    <div class="nes-container is-rounded is-dark with-title is-centered">
                        <div class='title'>Doctor</div>
                        <div className="doctor-container">
                            <i class="nes-icon is-small heart"></i>
                            <i class="nes-icon is-small heart"></i>
                            <i class="nes-icon is-small heart"></i>
                            <i class="nes-icon is-small heart"></i>
                            <i class="nes-icon is-small heart"></i>
                            <br></br>
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
                        <button className="remove-button" onClick={() => handleDelete(medications)}>Remove Medicine</button>
            </div>
        </>
    )
}

export default MedicationItem