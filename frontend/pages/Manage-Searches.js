import axios from 'axios';
import React, { useEffect, useState } from 'react'
import NavBar from './components/NavBar'
import JobSearchService from './services/JobSearchService';
import Link from 'next/link';

const ManageSearches = () => {
    const [jobSearchesData, setJobSearchesData] = useState([])
    useEffect(() => {
        JobSearchService.getJobSearches().then((res) => {
            setJobSearchesData(res.data);
        });
    });
    return (
        <>
            <NavBar />
            <div className="job-searches-list">
                {jobSearchesData.map(search =>
                    <div className="job-search-items">
                        <p className="search-id">#{search.id}</p>
                        <p className="date-applied">{search.dateApplied}</p>
                        <p className="job-title">{search.jobTitle}</p>
                        <p className="company-name">{search.name}</p>
                        <a href={search.jobPostingURL} rel="noreferrer" target="_blank"className="job-posting-url">{search.jobPostingURL}</a>
                        <p className="contact-num">{search.contactNum}</p>
                        <button className="see-more-btn">+</button>
                    </div>
                )}
            </div>
        </>
    )
}

export default ManageSearches
