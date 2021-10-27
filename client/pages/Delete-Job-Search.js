import React, { Component } from 'react';
import JobSearchService from './services/JobSearchService';

class DeleteJobSearch extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            name: '',
            grade: ''
        }
        this.deleteJobSearch = this.deleteJobSearch.bind(this);
    }//constructor
    componentDidMount() {
        JobSearchService.getJobSearchById(this.state.id).then((res) => {
            let jobSearch = res.data;
            this.setState({
                name: jobSearch.name,
                grade: jobSearch.grade
            });
        });
    }

    deleteJobSearch = (e) => {
        e.preventDefault();
        let jobSearch = {
            id: this.state.id,
            name: this.state.name,
            grade: this.state.grade
        };
        console.log(jobSearch);
        JobSearchService.deleteJobSearch(this.state.id).then(res => {
            this.props.history.push('/job-searches');
        })


    }

    cancel() {
        this.props.history.push('/job-searches');
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Delete Job Search</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Job Search ID: </label>
                                        <input placeholder="Id" readOnly="true" name="id" className="form-control"
                                            value={this.state.id} onChange={this.idHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Job Search Name: </label>
                                        <input placeholder="Name" readOnly="true" name="name" className="form-control"
                                            value={this.state.name} onChange={this.nameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Job Search Grade: </label>
                                        <input placeholder="Grade" readOnly="true" name="grade" className="form-control"
                                            value={this.state.grade} onChange={this.gradeHandler} />
                                    </div>
                                    <button className="btn btn-success" onClick={this.deleteJobSearch}> Delete </button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)}> Cancel </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DeleteJobSearch;