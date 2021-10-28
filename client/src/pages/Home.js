import { useEffect, useState } from 'react'
import JobSearchService from '../services/JobSearchService'
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

export default function Home() {
    const [recentlyAppliedData, setRecentlyAppliedData] = useState([])
    useEffect(() => {
        JobSearchService.getJobSearches().then((res) => {
            setRecentlyAppliedData(res.data)
        });
    }, []);
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
                            <div key={recent.id} className="recently-applied">
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
                <section className="landing-section">
                    <h1 className="landing-section-heading">Status Check</h1>
                    <div id="status-check-section">
                        <div id="followed-up">
                            <h2>Followed Up</h2>
                            {recentlyAppliedData.map((recent, index) => index > 3 ? null :
                                <div key={recent.id} className="action-status-followed-up">
                                    <p>{recent.jobTitle} - {recent.name}</p>
                                    <p><span>Job Posting URL:</span> {recent.jobPostingURL}</p>
                                    <Link to="/manage-job-searches"><button>More Info</button></Link>
                                </div>
                            )}
                        </div>
                        <div id="interviewed">
                            <h2> Interviewed For</h2>
                            {recentlyAppliedData.map((recent, index) => index > 3 ? null :
                                <div key={recent.id} className="action-status-followed-up">
                                    <p>{recent.jobTitle} - {recent.name}</p>
                                    <p><span>Job Posting URL:</span> {recent.jobPostingURL}</p>
                                    <Link to="/manage-job-searches"><button>More Info</button></Link>
                                </div>
                            )}
                        </div>
                        <div>
                            <h2> Rejected</h2>
                            {recentlyAppliedData.map((recent, index) => index > 3 ? null :
                                <div key={recent.id} className="action-status-followed-up">
                                    <p>{recent.jobTitle} - {recent.name}</p>
                                    <p><span>Job Posting URL:</span> {recent.jobPostingURL}</p>
                                    <Link to="/manage-job-searches"><button>More Info</button></Link>
                                </div>
                            )}
                        </div>
                    </div>
                </section>
                <hr />
                <section className="landing-section">
                    <h1 className="landing-section-heading">Manage Searches</h1>

                    <div id="manage-searches-section" className="landing-section-container">
                        <div className="landing-manage-add landing-manage">
                            <p className="landing-manage-heading">Add Search</p>
                            <Link to="/add-job-search"><button><i className="fas fa-plus"></i></button></Link>

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
            <Footer />
        </div >
    )
}
