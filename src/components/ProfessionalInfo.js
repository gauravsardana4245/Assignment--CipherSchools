import React from 'react'

const ProfessionalInfo = () => {

    return (
        <div>
            <div className="mp-top-row">
                <div className="mp-left-header">Professional Information</div>
                <div className="mp-right-header">Edit</div>
            </div>
            <div className="personal-info">
                <div className="info-cell">
                    <div className="info-head">
                        Highest education
                    </div>
                    <div className="dropdown">
                        <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" id="dropdownMenuButton2" aria-expanded="false">
                            Graduation
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <li><a className="dropdown-item" href="/">Action</a></li>
                            <li><a className="dropdown-item" href="/">Another action</a></li>
                            <li><a className="dropdown-item" href="/">Something else here</a></li>
                        </ul>
                    </div>
                </div>
                <div className="info-cell">
                    <div className="info-head">
                        What do you do currently
                    </div>
                    <div className="dropdown">
                        <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            College Student
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="/">Action</a></li>
                            <li><a className="dropdown-item" href="/">Another action</a></li>
                            <li><a className="dropdown-item" href="/">Something else here</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfessionalInfo
