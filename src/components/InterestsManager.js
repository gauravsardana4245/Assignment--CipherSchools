import React, { useRef, useState } from 'react'

const InterestsManager = (e) => {
    const [interests, setInterests] = useState([])
    const ref = useRef(null);
    const ref2 = useRef(null);

    const handleInterest = (elementno) => {
        let bgcolor = window.getComputedStyle(document.querySelector(`#interest-item-${elementno}`)).backgroundColor;
        let element = document.getElementById(`interest-item-${elementno}`);
        if (bgcolor === 'rgba(10, 30, 50, 0.1)') {
            element.style.backgroundColor = "#f3912e"
            element.style.color = "white"

            setInterests(
                (previnterests) => [...previnterests, element.textContent])

            console.log("myArray is not defined or is not an array");
        }
        else {
            element.style.backgroundColor = "rgba(10, 30, 50, 0.1)"
            element.style.color = "black"
            setInterests(interests.filter((interest) => interest !== element.textContent))
        }
        console.log(interests);
    }
    const submitHandler = () => {
        ref2.current.click()
    }
    return (
        <div>


            <button type="button" ref={ref} class="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#interestsModal">
                Launch demo modal
            </button>


            <div class="modal fade" id="interestsModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-body interest-modal-body">
                            <div content='App Development' onClick={() => handleInterest(1)} className="interest-item" id='interest-item-1'>
                                App Development
                            </div>
                            <div content='App Development' onClick={() => handleInterest(2)} className="interest-item" id='interest-item-2'>
                                Web Development
                            </div>
                            <div content='App Development' onClick={() => handleInterest(3)} className="interest-item" id='interest-item-3'>
                                Game Development
                            </div>
                            <div content='App Development' onClick={() => handleInterest(4)} className="interest-item" id='interest-item-4'>
                                Data Structures
                            </div>
                            <div content='App Development' onClick={() => handleInterest(5)} className="interest-item" id='interest-item-5'>
                                Programming
                            </div>
                            <div content='App Development' onClick={() => handleInterest(6)} className="interest-item" id='interest-item-6'>
                                Machine Learning
                            </div>
                            <div content='App Development' onClick={() => handleInterest(7)} className="interest-item" id='interest-item-7'>
                                Data Science
                            </div>
                            <div content='App Development' onClick={() => handleInterest(8)} className="interest-item" id='interest-item-8'>
                                Others
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" ref={ref2} class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button onClick={submitHandler} type="button" class="btn btn-primary">Save</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mp-top-row">
                <div className="mp-left-header">INTERESTS</div>
                <div onClick={() => { ref.current.click() }} className="mp-right-header">Edit</div>
            </div>
            <div className="interests">
                {interests.map((interest) => {
                    return <div className='interest-box'>
                        {interest}
                    </div>
                })}
            </div>
        </div>
    )
}

export default InterestsManager
