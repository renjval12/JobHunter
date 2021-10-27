import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav>
            <img src="./images/jobhunterlogo.svg" alt="job hunter logo" />
            <ul>
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/manage-job-searches" className="nav-link">Manage Searches</Link>
                <Link to="/add-job-search" className="nav-link">Add Search</Link>
            </ul>
            <img src="../images/usericon.svg" alt="profile icon" />
        </nav>
    )
}

export default NavBar
