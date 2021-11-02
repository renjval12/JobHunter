import React, { Component } from 'react';
import JobSearchService from '../services/JobSearchService';
import Footer from './Footer';
import NavBar from './NavBar';
class ManageJobSearches extends Component {
    constructor(props) {
        super(props)
        this.state = {
            jobSearches: []
        }
    }

    componentDidMount() {
        JobSearchService.getJobSearches().then((res) => {
            this.setState({ jobSearches: res.data });
        });
    }

    addJobSearch() {
        this.props.history.push('/add-job-search');
    }

    viewJobSearch(id) {
        this.props.history.push(`/job-search/${id}`);
    }

    render() {
        return (
            <div>
                <header>
                    <NavBar />
                </header>
                <div id="manage-pg-heading">
                    <button id="filter-btn"> <span>Filter By: </span>Newest to Oldest</button>
                    <h1><span id="job-search-total">Job Searches</span> ({this.state.jobSearches.length})</h1>
                    <button onClick={() => this.addJobSearch()} id="manage-pg-add-btn">Add Search</button>
                </div>
                <div className="job-searches-list">
                    <div className="table-fields">
                        <p>Id</p>
                        <p>Date Applied</p>
                        <p>Job Title</p>
                        <p>Company Name</p>
                        <p>Job Posting URL</p>
                        <p>Contact Number</p>
                        {/* <p>View More Button</p> */}
                    </div>
                    {this.state.jobSearches.reverse().map(search =>
                        <div className="job-search-items">
                            <p className="search-id">#{search.id}</p>
                            <p className="date-applied">{search.dateApplied}</p>
                            <p className="job-title">{search.jobTitle}</p>
                            <p className="company-name">{search.name}</p>
                            <a href={search.jobPostingURL} rel="noreferrer" target="_blank" className="job-posting-url">{search.jobPostingURL}</a>
                            <p className="contact-num">{search.contactNum}</p>
                            <button onClick={() => this.viewJobSearch(search.id)} className="view-btn">+</button>
                        </div>
                    )}
                </div>
                <Footer />
            </div>
        );
    }
}

export default ManageJobSearches;