import React from "react";
import ReactCalenderMapbox from "./ReactCalenderHeatmap";
import WebLinksBox from "./WebLinksBox";
import ProfessionalInfo from "./ProfessionalInfo";
import MapFoot from "./MapFoot";
import PasswordManager from "./PasswordManager";
import InterestsManager from "./InterestsManager";

const Container = (props) => {
    const { mode } = props;
    return (
        <div className={`container-box container bg-color-${mode === 'light' ? 'light' : 'dark'}`}>
            <div className="about-me-box">
                <div className="mp-top-row">
                    <div className="mp-left-header">ABOUT ME</div>
                    <div className="mp-right-header">Edit</div>
                </div>
                <div className={`mp-input-box`}>
                    <textarea
                        className={`mp-about-text`}
                        name=""
                        id=""
                        cols="30"
                        rows="10"
                        placeholder="Add something about you"
                    ></textarea>
                </div>
            </div>
            <div className="mp-underline"></div>
            <div className="mp-achievement-box">
                <div className="mp-top-row">
                    <div className="mp-left-header">CIPHER MAP</div>
                </div>
                <div>
                    <ReactCalenderMapbox mode={mode} />
                </div>
                <div className="mp-heat-map-foot">
                    <MapFoot />
                </div>
                <div className="mp-underline"></div>
                <WebLinksBox mode={mode} />
                <div className="mp-underline"></div>
                <ProfessionalInfo mode={mode} />
                <div className="mp-underline"></div>
                <PasswordManager />
                <div className="mp-underline"></div>
                <InterestsManager />
            </div>
        </div>
    );
};

export default Container;
