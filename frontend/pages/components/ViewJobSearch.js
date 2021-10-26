import React, { Component } from 'react';
import JobSearchService from '../services/JobSearchService';

class ViewJobSearch extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            jobSearch: {}
        }
    }

    componentDidMount() {
        JobSearchService.getJobSearchById(this.state.id).then((res) => {
            this.setState({ jobSearch: res.data })
        });
    }


    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">View JobSearch Details</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Job Search ID: </label>
                                        <input placeholder={this.state.jobSearch.id} readOnly={true} name="id" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label>Job Search Name: </label>
                                        <input placeholder={this.state.jobSearch.name} readOnly={true} name="name" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label>Job Search Grade: </label>
                                        <input placeholder={this.state.jobSearch.grade} readOnly={true} name="grade" className="form-control" />
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ViewJobSearch;