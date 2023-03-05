import React from "react";
import resumeImage from "../../assets/images/resumeImage.png"

export default function Contact() {
    const downloadFile = () => {
        //Need to add logic to download on click.
        fetch('ReedDahltorp-FullStack-Engineer-Resume.pdf').then(response => {
            response.blob().then(blob => {
                const fileURL = window.URL.createObjectURL(blob);
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'reed-dahltorp-resume.pdf';
                alink.click();
            })
        })
    }
    
    return (
        <div className="mainContainer">
            <h1>Resume</h1>
            
            <img src={resumeImage} alt="Resume" className="resumeImg" />

            <div>
                <button id="downloadBtn" onClick={downloadFile}>Download a copy</button>
            </div>
        </div>
    )
}