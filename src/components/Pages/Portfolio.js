import React from "react";

export default function Portfolio() {
    return (
        <div>
            <h1>Previous Work</h1>
            <div className="Project-1 box">
                <h4>Tech Blog</h4>
                <p>JavaScript, Handlebars, Bootstrap, Express, MySQL</p>
                <p><a href='https://github.com/rdahltorp/tech-blog' target="_blank" rel="noreferrer">Repo</a></p>
                <p><a href='https://fast-woodland-06373.herokuapp.com/' target="_blank" rel="noreferrer">Live App</a></p>
            </div>
            <div className="Project-2 box">
                <h4>Note Taker</h4>
                <p>JavaScript, Express, Node</p>
                <p><a href='https://github.com/rdahltorp/work-day-scheduler' target="_blank" rel="noreferrer">Repo</a></p>
                <p><a href='https://protected-journey-05055.herokuapp.com/' target="_blank" rel="noreferrer">Live App</a></p>
            </div>
            <div className="Project-3 box">
                <h4>Employee Tracker (CLI App)</h4>
                <p>JavaScript, MySQL, Node</p>
                <p><a href='https://github.com/rdahltorp/employee-tracker' target="_blank" rel="noreferrer">Repo</a></p>
            </div>
            <div className="Project-4 box">
                <h4>Work Day Scheduler</h4>
                <p>JavaScript</p>
                <p><a href='https://github.com/rdahltorp/work-day-scheduler' target="_blank" rel="noreferrer">Repo</a></p>
                <p><a href='https://rdahltorp.github.io/work-day-scheduler/' target="_blank" rel="noreferrer">Live App</a></p>
            </div>
            <div className="Project-5 box">
                <h4>VeggieBook</h4>
                <p>JavaScript, Express, Bootstrap, Handlebars, Node, MySQL</p>
                <p><a href='https://github.com/bornoflightning/veggiebook' target="_blank" rel="noreferrer">Repo</a></p>
                <p><a href='https://hidden-lake-21615.herokuapp.com/' target="_blank" rel="noreferrer">Live App</a></p>
            </div>
            <div className="Project-6 box">
                <h4>Park Search</h4>
                <p>Handlebars, Materialize</p>
                <p><a href='https://github.com/dcavinder/park_search' target="_blank" rel="noreferrer">Repo</a></p>
                <p><a href='https://dcavinder.github.io/park_search/' target="_blank" rel="noreferrer">Live App</a></p>
            </div>
        </div>
    )
}