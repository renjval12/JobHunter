import React, { Component } from 'react';
import JobSearchService from '../services/JobSearchService';
import NavBar from '../components/NavBar';
class ViewJobSearch extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            jobSearch: {}
        }
    }//constructor

    componentDidMount() {
        JobSearchService.getJobSearchById(this.state.id).then(res => {
            this.setState({ jobSearch: res.data })
            console.log(this.state.jobSearch)
        });
    }



    render() {
        return (
            <div>
                <NavBar />
                <div className="search-pg">
                    <h1>Job Search # {this.state.jobSearch.id}</h1>
                    <h2><span>Job Title:</span> {this.state.jobSearch.jobTitle} </h2>
                    <h2><span>Company: </span> {this.state.jobSearch.name} </h2>
                    <h2><span>Job Posting URL: </span> {this.state.jobSearch.jobPostingURL} </h2>
                    <h2><span>Comments: </span>  </h2>
                    <p>{this.state.jobSearch.comments}</p>
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
                    </section>
                </div>
            </div>
        );
    }
}

export default ViewJobSearch;