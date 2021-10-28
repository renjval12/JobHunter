import React, { Component } from 'react';
import JobSearchService from '../services/JobSearchService';
import NavBar from '../components/NavBar';
import { Link } from 'react-router-dom'
import axios from 'axios';
class ViewJobSearch extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            jobSearches: {}
        }
    }//constructor

    componentDidMount() {
        JobSearchService.getJobSearchById(this.state.id).then(res => {
            this.setState({ jobSearches: res.data })
            console.log(this.state.jobSearches)
        });
        axios.get(`https://api.smartrecruiters.com/v1/companies/{companyIdentifier}/postings?q={query}&limit={3}&country={US}&region={region}&city={city}&department={department}&custom_field.{customFieldId}={customFieldValueId}&language={en-GB}`)
            .then(data => console.log(data))
            .catch(error => console.log(error))
    }


    updateJobSearch(id) {
        this.props.history.push(`/update-job-search/${id}`);
    }

    deleteJobSearch(id) {
        this.props.history.push(`/delete-job-search/${id}`);
    }



    render() {
        return (
            <div className="search-pg-container">
                <NavBar />
                <div className="search-pg">
                    <h1>Job Search # {this.state.jobSearches.id}</h1>
                    <h2><span>Job Title:</span> {this.state.jobSearches.jobTitle} </h2>
                    <h2><span>Company: </span> {this.state.jobSearches.name} </h2>
                    <h2><span>Job Posting URL: </span> {this.state.jobSearches.jobPostingURL} </h2>
                    <h2><span>Comments: </span>  </h2>
                    <p>{this.state.jobSearches.comments}</p>
                    <section
                        className="actions-taken-section-container">
                        <h2>Actions Taken</h2>
                        <div className="actions-taken-section">
                            <div>
                                <h3>Followed Up</h3>
                                <input type="radio" id="yes" name="follow-up1" value="1" />
                                <label for="yes">Yes</label><br />
                                <input type="radio" id="no" name="follow-up1" value="0" checked />
                                <label for="no"> No</label><br />
                            </div>
                            <div>
                                <h3>Interviewed For</h3>
                                <input type="radio" id="yes" name="follow-up2" value="1" />
                                <label for="yes">Yes</label><br />
                                <input type="radio" id="no" name="follow-up2" value="0" checked />
                                <label for="no"> No</label><br />
                            </div>
                            <div>
                                <h3>Rejected</h3>
                                <input type="radio" id="yes" name="follow-up3" value="1" />
                                <label for="yes">Yes</label><br />
                                <input type="radio" id="no" name="follow-up3" value="0" checked />
                                <label for="no"> No</label><br />
                            </div>
                        </div>
                        <div className="update-delete-back-btns">
                            <button onClick={() => this.updateJobSearch(this.state.jobSearches.id)} >Update</button>
                            <button onClick={() => this.deleteJobSearch(this.state.jobSearches.id)} className="delete-btn">Delete</button>
                            <Link to="/manage-job-searches"><button>Cancel</button></Link>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

export default ViewJobSearch;