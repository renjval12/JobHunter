import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
            <div className="job-hunter-logo-footer">
                <img src="/jobhunterlogo.svg" alt="job hunter logo" />
                <h1><span>J</span>ob Hunter</h1>
            </div>
            <hr/>
            <div className="footer-links">
                <Link to="/manage-job-searches">Manage Job Searches</Link>
                <Link to="/add-job-search">Add Job Search</Link>
                <Link to="/resources">Resource Center</Link>
                <Link to="/contact">Contact</Link>
            </div>
            <hr/>

            <span>Job Hunter LLC <i class="fas fa-copyright"></i></span>
        </footer>
    )
}

export default Footer
