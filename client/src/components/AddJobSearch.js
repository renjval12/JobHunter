import React, { Component } from 'react';
import JobSearchService from '../services/JobSearchService';
import Footer from './Footer';
import NavBar from './NavBar';

class UpdateJobSearch extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: '',
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
        this.addJobSearch = this.addJobSearch.bind(this);

    }//constructor

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

    addJobSearch = (e) => {
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

        JobSearchService.addJobSearch(jobSearch)
            .then((res) => {
                this.props.history.push('/manage-job-searches');
            })
            .catch(err => {
                console.log("record not saved.");
            });;
    }

    cancel() {
        this.props.history.push('/manage-job-searches');
    }

    render() {
        return (
            <div className="search-pg-container pg">
                <NavBar />
                <div className="search-pg add-search-pg">
                    <h3 className="text-center">Add Job Search</h3>
                    <form>
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
                            <input placeholder={this.state.jobPostingURL}  name="job-posting-url" className="form-control"
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
                        <button className="btn btn-success" onClick={this.addJobSearch}> Add </button>
                        <button className="btn btn-danger" onClick={this.cancel.bind(this)}> Cancel </button>
                    </form>
                </div>
                <Footer />
            </div>
        );
    }
}

export default UpdateJobSearch;