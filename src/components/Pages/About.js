import React from "react";
import profileImage from '../../assets/images/profileImage.jpg'

export default function About() {
    return (
        <div>
            <h1>About Me</h1>
            
            <img src={profileImage} alt="Reed" />

            <p>Hey there!</p>
            <p>I started my career in brand marketing after graduating from Colorado State University. But after spending 6 years in the field, I realized I needed a career path that would give me an oppertunity to be more creative and allow me a place to really build things. And since I have always been interested in tech I made the leap to being a programmer!</p>
            <p>Take a look around and if you like what you see, feel free to reachout via LinkedIn or through the contact form!</p>
        </div>
    )
}