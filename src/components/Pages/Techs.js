import * as React from 'react';

export default function Techs() {
    return (
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
    )
}
