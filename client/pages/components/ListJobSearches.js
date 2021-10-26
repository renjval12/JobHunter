import React, { Component } from 'react';
import JobSearchService from '../services/JobSearchService';

class ListJobSearches extends Component {
    constructor(props) {
        super(props)
        this.state = {
            jobSearches: []
        }
        this.addJobSearch = this.addJobSearch.bind(this);
        this.editJobSearch = this.editJobSearch.bind(this);
        this.deleteJobSearch = this.deleteJobSearch.bind(this);
        this.viewJobSearch = this.viewJobSearch.bind(this);
    }

    componentDidMount() {
        JobSearchService.getJobSearches().then((res) => {
            this.setState({ jobSearches: res.data });
        });
    }

    addJobSearch() {

        this.props.history.push('/add-job-search');
    }

    editJobSearch(id) {
        this.props.history.push(`/update-job-search/${id}`);

    }

    deleteJobSearch(id) {
        this.props.history.push(`/delete-job-search/${id}`);
        // JobSearchService.deleteJobSearch(id).then(res => {
        //     this.setState({
        //          student: this.state.jobSearches.filter(student => jobSearch.id !== id)
        //     })
        // })

    }

    viewJobSearch(id) {
        this.props.history.push(`/view-job-search/${id}`);

    }

    render() {
        return (
            <div>
                <h2 className="text-center">Job Searches List</h2>
                <div>
                    <button className="btn btn-primary" onClick={this.addJobSearch}> Add Job Search</button>
                </div>
                <div>
                    <p></p>
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Job Search Id</th>
                                <th>Job Search Name</th>
                                <th>Job Search Grade</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.jobSearches.map(
                                    student =>
                                        <tr key={jobSearch.id}>
                                            <td>{jobSearch.id}</td>
                                            <td>{jobSearch.name}</td>
                                            <td>{jobSearch.grade}</td>
                                            <td>
                                                <button onClick={() => this.editJobSearch(jobSearch.id)} className="btn btn-primary">Update</button>
                                                <button onClick={() => this.deleteJobSearch(jobSearch.id)} className="btn btn-danger">Delete</button>
                                                <button onClick={() => this.viewJobSearch(jobSearch.id)} className="btn btn-primary">View</button>
                                            </td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>

            </div>
        );
    }
}

export default ListJobSearches;