import React, { useEffect, useState, Component } from 'react'
import NavBar from './components/NavBar'
import JobSearchService from './services/JobSearchService';
// import Link from 'next/link';

class ManageSearches extends Component {
    constructor(props) {
        super(props)
        this.state = {
            jobSearches: []
        }
        this.viewJobSearch = this.viewJobSearch.bind(this);
    }

    componentDidMount() {
        JobSearchService.getJobSearches().then((res) => {
            this.setState({ jobSearches: res.data });
        });
    }

    viewJobSearch(id) {
        this.props.history.push(`/view-job-search/${id}`);
    }
    // const [jobSearchesData, setJobSearchesData] = useState([])
    // useEffect(() => {
    //     JobSearchService.getJobSearches().then((res) => {
    //         setJobSearchesData(res.data);
    //     });
    // });
    // let addJobSearch = () => {
    //     return props.history.push('/add-job-search');
    // };

    // let viewJobSearch = (id) => {
    //     props.history.push(`/View-Job-Search/${id}`);
    // }
    render() {
        return (
            <>
                <NavBar />
                <div className="job-searches-list">

                    {this.state.jobSearches.map(search =>
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
            </>
        )
    }
}

export default ManageSearches
