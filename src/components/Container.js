import React from "react";
import ReactCalenderMapbox from "./ReactCalenderHeatmap";

const Container = () => {
    return (
        <div className="container">
            <div className="about-me-box">
                <div className="mp-top-row">
                    <div className="mp-left-header">ABOUT ME</div>
                    <div className="mp-right-header">Edit</div>
                </div>
                <div className="mp-input-box">
                    <textarea
                        className="mp-about-text"
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
                    <ReactCalenderMapbox />
                </div>
                <div className="mp-heat-map-foot">
                    <span>Less</span>
                    <svg width="12" height="12">
                        <rect width="12" height="12" fill="white"></rect>
                    </svg>
                    <svg width="12" height="12">
                        <rect width="12" height="12" fill="#f3dcc4"></rect>
                    </svg>
                    <svg width="12" height="12">
                        <rect width="12" height="12" fill="#e5b583"></rect>
                    </svg>
                    <svg width="12" height="12">
                        <rect width="12" height="12" fill="#f6ad62"></rect>
                    </svg>
                    <svg width="12" height="12">
                        <rect width="12" height="12" fill="#f3912e"></rect>
                    </svg>
                    <span>More</span>
                </div>
                <div className="mp-underline"></div>
                <div className="mp-web-links-box">
                    <div className="mp-top-row">
                        <div className="mp-left-header">On the web</div>
                        <div className="mp-right-header">Edit</div>
                    </div>
                    <div className="mp-links-container">
                        <div className="mp-links-box">
                            <div className="mp-link">
                                <div className="input-title">
                                    Linkedin
                                </div>
                                <div className="input-box">
                                    <div className="input-icon">
                                        <i class="fa-brands fa-linkedin"></i>
                                    </div>
                                    <div className="input-field">
                                        <input type="text" name="Linkedin" id="Linkedin" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mp-links-box">
                            <div className="mp-link">
                                <div className="input-title">
                                    Github
                                </div>
                                <div className="input-box">
                                    <div className="input-icon">
                                        <i class="fa-brands fa-github"></i>
                                    </div>
                                    <div className="input-field">
                                        <input type="text" name="Github" id="Github" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mp-links-box">
                            <div className="mp-link">
                                <div className="input-title">
                                    Facebook
                                </div>
                                <div className="input-box">
                                    <div className="input-icon">
                                        <i class="fa-brands fa-facebook"></i>
                                    </div>
                                    <div className="input-field">
                                        <input type="text" name="Facebook" id="Facebook" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mp-links-box">
                            <div className="mp-link">
                                <div className="input-title">
                                    Twitter
                                </div>
                                <div className="input-box">
                                    <div className="input-icon">
                                        <i class="fa-brands fa-twitter"></i>
                                    </div>
                                    <div className="input-field">
                                        <input type="text" name="Twitter" id="Twitter" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mp-links-box">
                            <div className="mp-link">
                                <div className="input-title">
                                    Instagram
                                </div>
                                <div className="input-box">
                                    <div className="input-icon">
                                        <i class="fa-brands fa-instagram"></i>
                                    </div>
                                    <div className="input-field">
                                        <input type="text" name="Instagram" id="Instagram" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mp-links-box">
                            <div className="mp-link">
                                <div className="input-title">
                                    Website
                                </div>
                                <div className="input-box">
                                    <div className="input-icon">
                                        <i class="fa-thin fa-globe"></i>
                                    </div>
                                    <div className="input-field">
                                        <input type="text" name="Website" id="Website" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Container;
