import React from "react";
import profileImage from '../../assets/images/profileImage.jpg'

export default function About() {
    return (
            <div className="withBkgdImg">
                <div className="mainContainer ">
                    <img src={profileImage} alt="Reed" className="profileImg" />

                    <div className="profileDesc">
                        <h1 className="aboutMeTitle">I'm Reed - It's good to meet you!</h1>
                        {/* <h2 className="aboutMeBoxHeading">Who am I?</h2> */}
                        <p>I'm a new grad from the University of Denver's Full-Stack engineering bootcamp, with a passion for Front-End development.</p>
                        <p>With 7+ years of experience in Brand Marketing, I have a mind for strategy and branding throughout a consumer's journey, plus skills in project management, cross-orginization collaboration, and adaptibility.</p>
                        <p>Want to work together to build something cool? Curious about one of my projects or background? Want to talk Dungeons and Dragons or Star Wars? feel free to reachout via <a className="contactLink" href="https://www.linkedin.com/in/reeddahltorp/" target="_blank" rel="noreferrer">LinkedIn</a> or you can email me at <a className="contactLink" href="mailto:rdahltorp+portfolio@gmail.com">rdahltorp@gmail.com</a>!</p>
                    </div>
                </div>
                <div className="mainContainer techs">
                    <div className="techDesc">
                        <h2>Technologies & Tools</h2>
                            <div className="frontEndTech">
                                <h3>Front-End</h3>
                                <p>HTML | CSS | JavaScript | React | jQuery</p>
                            </div>
                            <div className="backEndTech">
                                <h3>Back-End</h3>
                                <p>Node.js | Express.js | MySQL | MongoDB | Jest | Rest APIs</p>
                            </div>
                            <div className="otherTech">
                                <h3>Additional</h3>
                                <p>Git | GitHub | Adobe Creative Cloud</p>
                            </div>
                    </div>
                </div>
            </div>
    )
}