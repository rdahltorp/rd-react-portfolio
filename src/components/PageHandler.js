import React, { useState } from "react";
import Navigation from "./Header/navigation";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Portfolio from "./Pages/Portfolio";
import Resume from "./Pages/Resume";
import Footer from "./Footer/footer"

export default function PageHandler() {
    
    //Sets up the state of the page with the defualt being the "About" page
    const [currentPage, setCurrentPage] = useState('AboutMe');

    const renderPage = () => {
        if (currentPage === 'AboutMe') {
            return <About />
        }
        if (currentPage === 'Contact') {
            return <Contact />
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio />
        }
        if (currentPage === 'Resume') {
            return <Resume />
        }
    }

    const handlePageChange = (page) => setCurrentPage(page)
    
    return (
        <div>
            <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
            <main>
                {renderPage()}
            </main>
            <Footer />
        </div>
    )
}
