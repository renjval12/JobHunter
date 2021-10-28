import { useEffect, useState } from 'react'
import JobSearchService from '../services/JobSearchService'
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import axios from 'axios';

export default function Home() {
    const [recentlyAppliedData, setRecentlyAppliedData] = useState([])
    useEffect(() => {
        JobSearchService.getJobSearches().then((res) => {
            setRecentlyAppliedData(res.data)
        });
    }, []);
//     .ajax({url: 'http://public.api.careerjet.net/search?locale_code=US_en&pagesize=1&sort=salary&keywords=java&page=124&location=new+york"',
// success: function(data)
    axios.get("http://public.api.careerjet.net/search?locale_code=US_en&pagesize=1&sort=salary&keywords=java&page=124&location=new+york").then(data => console.log(data))
    .catch(error => console.log(error))
    return (
        <div>
            <header>
                <NavBar />
            </header>
            <main>
                <section className="landing-section">
                    <h1 className="landing-section-heading">Recently Applied</h1>
                    <div id="recently-applied-section" className="landing-section-container">
                        {recentlyAppliedData.reverse().map((recent, index) => index > 2 ? null :
                            <div className="recently-applied">
                                <p><span>Date Applied:</span> {recent.dateApplied}</p>
                                <p><span>Job Title:</span> {recent.jobTitle}</p>
                                <p><span>Company Name:</span> {recent.name}</p>
                                <p><span>Job Posting URL:</span> {recent.jobPostingURL}</p>
                                <Link to="/manage-job-searches"><button>More Info</button></Link>
                            </div>
                        )}
                    </div>
                    <div className="landing-add-search-section">
                        <span>Add New Search</span>
                        <Link to="/add-job-search"><button className="landing-add-btn">✚</button></Link>
                    </div>
                </section>
                <hr />
                <section id="status-check-section" className="landing-section">
                    <h1 className="landing-section-heading">Status Check</h1>

                    <div id="status-check-section" className="landing-section-container">
                        <img src="/clipboard.png" id="clipboard1" alt="clipboard clip art" />
                        <img src="/clipboard.png" id="clipboard2" alt="clipboard clip art" />
                        <img src="/clipboard.png" id="clipboard3" alt="clipboard clip art" />
                    </div>
                </section>
                <hr />
                <section className="landing-section">
                    <h1 className="landing-section-heading">Manage Searches</h1>

                    <div id="manage-searches-section" className="landing-section-container">
                        <div className="landing-manage-add landing-manage">
                            <p className="landing-manage-heading">Add Search</p>
                            <Link to="/add-job-search"><button><i class="fas fa-plus"></i></button></Link>

                        </div>
                        <div className="landing-manage-update landing-manage">
                            <p className="landing-manage-heading">Update Search</p>
                            <Link to="/manage-job-searches"><button><i className="fas fa-sync-alt"></i></button></Link>
                        </div>
                        <div className="landing-manage-delete landing-manage">
                            <p className="landing-manage-heading">Delete Search</p>
                            <Link to="/manage-job-searches"><button><i className="fas fa-trash-alt"></i></button></Link>
                        </div>
                    </div>
                </section>
            </main>
        </div >
    )
}
