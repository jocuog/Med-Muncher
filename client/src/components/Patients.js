import { Link, useNavigate } from "react-router-dom";

const Patients = ({patient, textBubble, setTextBubble}) => {
    const { name, username, avatar, image, points, level } = patient

    let navigate = useNavigate();

    const imageBox = () => {
        if (image === null ) {
            return (
                <div>
                    <p>Hey, if you want an image here,</p>
                        <button onClick={() => navigate('/edit-patient')} class="nes-btn is-success is-small" > 
                            Go edit profile
                        </button>
                </div>
            )
        } else {
            return (
                <img src={image} alt={name} />
            )
        }
    }

    const textShow = () => {
        if (textBubble === null && avatar === null) {
            console.log('hey')
            return (
                <div>
                    <p>Hey {name}!</p>
                    <p>Set your reminder buddy</p>
                    <button onClick={() => navigate('/edit-patient')} class="nes-btn is-success is-small" > 
                    Go edit profile
                    </button>
                </div>
            )

        } if (textBubble === null) {
            return (
                <div>
                    <div class="nes-balloon from-right"> 
                        <p className='bubble-text'>
                            <i class="nes-icon is-small star"></i>
                            <i class="nes-icon is-small star"></i>
                            <i class="nes-icon is-small star"></i>
                                Hello {name}!
                            <i class="nes-icon is-small star"></i>
                            <i class="nes-icon is-small star"></i>
                            <i class="nes-icon is-small star"></i>
                        </p>
                        <p className='bubble-text'>I'm your reminder buddy!</p>
                    <i class="nes-icon is-medium like"></i>
                    </div>  
                </div>
            )

        } else if (textBubble === 1) { 
            return (
                
                <div>
                    <div style={{ color: 'green'}}class="nes-balloon from-right">Good Job {name}!
                    <br></br>
                        <button onClick={() => setTextBubble(null)} class="nes-btn is-success is-small" > 
                            <i class="nes-icon coin is-small"></i>
                                Thanks! 
                            <i class="nes-icon coin is-small"></i>
                        </button>
                    </div>
                </div>
                )

        } else if ( textBubble === 2 ) {
            return (

            <div>
                <div class="nes-balloon from-right"> 
                    <p className='bubble-text'>
                        <i class="nes-icon is-small star"></i>
                        <i class="nes-icon is-small star"></i>
                        <i class="nes-icon is-small star"></i>
                            Hello {name}!
                        <i class="nes-icon is-small star"></i>
                        <i class="nes-icon is-small star"></i>
                        <i class="nes-icon is-small star"></i>
                    </p>
                            <p className='bubble-text'>Youre out of a</p>
                    <button onClick={() => setTextBubble(null)} class="nes-btn is-success is-small" > 
                        <i class="nes-icon coin is-small"></i>
                            Thanks! 
                        <i class="nes-icon coin is-small"></i>
                    </button>
                </div>  
            </div>
        )
    }
}


    return (

        <div class="nes-container is-rounded is-dark with-title is-centered"> 
            <h2 class="title">Profile</h2>

            <div className="med-doc-container">
                <div class="nes-table-responsive">
                    <table style={{width: '98%', margin: '0 auto', marginBottom: '20px'}} class="nes-table is-bordered is-dark" >
                        <thead>
                            <tr>
                                <th>
                                    {imageBox()}
                                </th>
                                <th>
                                    <h2 >Name:{name}</h2>
                                    <h2>Username:{username}</h2>
                                    <h2>points:{points}</h2>
                                    <h2>level:{level}</h2>
                                </th>
                                <th>
                                    {textShow()}
                                    <i style={{ position: 'relative', left: '180px'}} class={`${avatar}`} />   
                                </th>
                            </tr>
                        </thead>
                    </table>  
                </div>
            </div>
        </div>    
    )
}

export default Patients