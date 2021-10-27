import React, { Component } from 'react';
import JobSearchService from '../services/JobSearchService';
import NavBar from './NavBar';

class ManageJobSearches extends Component {
    constructor(props) {
        super(props)
        this.state = {
            jobSearches: []
        }
        // this.addJobSearch  = this.addJobSearch.bind(this);
        // this.editJobSearch  = this.editJobSearch.bind(this);
        // this.deleteJobSearch  = this.deleteJobSearch.bind(this);
        // this.viewJobSearch  = this.viewJobSearch.bind(this);
    }

    componentDidMount() {
        JobSearchService.getJobSearches().then((res) => {
            this.setState({ jobSearches: res.data });
        });
    }

    addJobSearch() {
        this.props.history.push('/add-job-search');
    }

    // editStudent(id) {
    //     this.props.history.push(`/update-job-search/${id}`);
    // }

    // deleteStudent(id) {
    //     this.props.history.push(`/delete-job-search/${id}`);
    // }

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
                    <button onClick={() => this.addJobSearch()}  id="manage-pg-add-btn">Add Search</button>
                </div>
                <div className="job-searches-list">
                    {this.state.jobSearches.reverse().map(search =>
                        <div className="job-search-items">
                            <p className="search-id">#{search.id}</p>
                            <p className="date-applied">{search.dateApplied}</p>
                            <p className="job-title">{search.jobTitle}</p>
                            <p className="company-name">{search.name}</p>
                            <a href={search.jobPostingURL} rel="noreferrer" target="_blank" className="job-posting-url">{search.jobPostingURL}</a>
                            <p className="contact-num">{search.contactNum}</p>
                            <button onClick={() => this.viewJobSearch(search.id)} className="view-btn">View</button>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default ManageJobSearches;