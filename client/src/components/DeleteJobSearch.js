import React, { Component } from 'react';
import JobSearchService from '../services/JobSearchService';
import NavBar from './NavBar';

class UpdateStudent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            name: '',
            comments: "",
            dateApplied: "",
            jobTitle: "",
            jobPostingURL: "",
            contactNum: ""
        }
        this.deleteJobSearch = this.deleteJobSearch.bind(this);

    }//constructor

    componentDidMount() {
        JobSearchService.getJobSearchById(this.state.id).then((res) => {
            let jobSearch = res.data;
            this.setState({
                name: jobSearch.name,
                comments: jobSearch.comments,
                dateApplied: jobSearch.dateApplied,
                jobTitle: jobSearch.jobTitle,
                jobPostingURL: jobSearch.jobPostingURL,
                contactNum: jobSearch.contactNum
            });
        });
    }

    deleteJobSearch = (e) => {
        e.preventDefault();
        JobSearchService.deleteJobSearch(this.state.id).then((res) => {
            this.props.history.push('/manage-job-searches');
        });
    }

    cancel() {
        this.props.history.push('/manage-job-searches');
    }

    render() {
        return (
            <div className="search-pg-container">
                <NavBar />
                <div className="search-pg">
                    <h1>Job Search # {this.state.id}</h1>
                    <h2><span>Job Title:</span> {this.state.jobTitle} </h2>
                    <h2><span>Company: </span> {this.state.name} </h2>
                    <h2><span>Job Posting URL: </span> {this.state.jobPostingURL} </h2>
                    <h2><span>Comments: </span>  </h2>
                    <p>{this.state.comments}</p>
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
                        <button className="btn btn-success" onClick={this.deleteJobSearch}> Delete </button>
                        <button className="btn btn-danger" onClick={this.cancel.bind(this)}> Cancel </button>
                    </section>
                </div>
            </div>
        );
    }
}

export default UpdateStudent;