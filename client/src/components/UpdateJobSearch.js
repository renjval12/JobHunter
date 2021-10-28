import React, { Component } from 'react';
import JobSearchService from '../services/JobSearchService';
import NavBar from './NavBar';

class UpdateJobSearch extends Component {
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

        this.idHandler = this.idHandler.bind(this);
        this.nameHandler = this.nameHandler.bind(this);
        this.dateAppliedHandler = this.dateAppliedHandler.bind(this)
        this.jobTitleHandler = this.jobTitleHandler.bind(this)
        this.URLHandler = this.URLHandler.bind(this)
        this.contactNumHandler = this.contactNumHandler.bind(this)
        this.commentsHandler = this.commentsHandler.bind(this)
        this.updateJobSearch = this.updateJobSearch.bind(this);

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

    idHandler = (event) => {
        this.setState({
            id: event.target.value
        });
    }

    nameHandler = (event) => {
        this.setState({
            name: event.target.value
        });
    }

    commentsHandler = (event) => {
        this.setState({
            comments: event.target.value
        });
    }

    dateAppliedHandler = (event) => {
        this.setState({
            dateApplied: event.target.value
        });
    }
    jobTitleHandler = (event) => {
        this.setState({
            jobTitle: event.target.value
        });
    }
    URLHandler = (event) => {
        this.setState({
            jobPostingURL: event.target.value
        });
    }
    contactNumHandler = (event) => {
        this.setState({
            contactNum: event.target.value
        });
    }

    updateJobSearch = (e) => {
        e.preventDefault();
        let jobSearch = {
            id: this.state.id,
            name: this.state.name,
            comments: this.state.comments,
            dateApplied: this.state.dateApplied,
            jobTitle: this.state.jobTitle,
            jobPostingURL: this.state.jobPostingURL,
            contactNum: this.state.contactNum
        };

        JobSearchService.updateJobSearch(jobSearch, this.state.id).then((res) => {
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
                    <h3 className="text-center">Update Student</h3>
                    <form>
                        <div className="form-group">
                            <label>Job Search ID: </label>
                            <input placeholder={this.state.id} readOnly="true" name="id" className="form-control"
                                value={this.state.id} onChange={this.idHandler} />
                        </div>
                        <div className="form-group">
                            <label>Date Applied: </label>
                            <input placeholder={this.state.dateApplied} name="date-applied" className="form-control"
                                value={this.state.dateApplied} onChange={this.dateAppliedHandler} />
                        </div>
                        <div className="form-group">
                            <label>Job Title: </label>
                            <input placeholder={this.state.jobTitle} name="job-title" className="form-control"
                                value={this.state.jobTitle} onChange={this.jobTitleHandler} />
                        </div>
                        <div className="form-group">
                            <label>Company Name: </label>
                            <input placeholder={this.state.name} name="name" className="form-control"
                                value={this.state.name} onChange={this.nameHandler} />
                        </div>
                        <div className="form-group">
                            <label>Job Posting URL: </label>
                            <input placeholder={this.state.jobPostingURL} readOnly="true" name="job-posting-url" className="form-control"
                                value={this.state.jobPostingURL} onChange={this.URLHandler} />
                        </div>
                        <div className="form-group">
                            <label>Contact Num: </label>
                            <input placeholder={this.state.contactNum} name="name" className="form-control"
                                value={this.state.contactNum} onChange={this.contactNumHandler} />
                        </div>

                        <div className="form-group">
                            <label>Comments: </label>
                            <textarea placeholder={this.state.comments} name="name" className="form-control"
                                value={this.state.comments} onChange={this.commentsHandler} > </textarea>
                        </div>
                        <button className="btn btn-success" onClick={this.updateJobSearch}> Update </button>
                        <button className="btn btn-danger" onClick={this.cancel.bind(this)}> Cancel </button>
                    </form>
                </div>
            </div>
        );
    }
}

export default UpdateJobSearch;