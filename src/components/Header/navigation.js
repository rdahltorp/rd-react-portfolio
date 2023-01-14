import React from "react";

export default function Nav({ currentPage, handlePageChange }) {
    return (
        <header>
            <h1>Reed Dahltorp</h1>
            <nav>
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <a 
                            href="#AboutMe"
                            onClick={() => handlePageChange('AboutMe')}
                            className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link' }
                        >
                            About Me
                        </a>
                    </li>
                    <li className="nav-item">
                        <a 
                            href="#Portfolio"
                            onClick={() => handlePageChange('Portfolio')}
                            className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link' }
                        >
                            Portfolio
                        </a>
                    </li>
                    <li className="nav-item">
                        <a 
                            href="#Resume"
                            onClick={() => handlePageChange('Resume')}
                            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link' }
                        >
                            Resume
                        </a>
                    </li>
                    <li className="Contact">
                        <a 
                            href="#AboutMe"
                            onClick={() => handlePageChange('Contact')}
                            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link' }
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
