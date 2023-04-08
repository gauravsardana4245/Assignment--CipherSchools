import React from 'react'

const WebLinksBox = (props) => {
    const { mode } = props;
    if (mode === "dark") {
        document.getElementsByClassName("")
    }
    return (
        <div>
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
    )
}

export default WebLinksBox
