import JobSearchService from './services/JobSearchService';

import React, { useEffect, useState } from 'react'
import NavBar from './components/NavBar';
// import {useHistory, useParams} from "react-router"

// const UpdateJobSearch = (props) => {
// let {id} = useParams()
// const history = useHistory
//     const [jobSearch, setJobSearchData] = useState({
//         id: "",
//         name: "",
//         comments: "",
//         dateApplied: "",
//         jobTitle: "",
//         jobPostingURL: "",
//         contactNum: ""
//     })

//     useEffect(() => {
//         JobSearchService.getJobSearchById(jobSearch.id).then((res) => {
//             let jobSearch = res.data;
//             setJobSearchData({
//                 id: jobSearch.id,
//                 name: jobSearch.name,
//                 comments: jobSearch.comments,
//                 dateApplied: jobSearch.dateApplied,
//                 jobTitle: jobSearch.jobTitle,
//                 jobPostingURL: jobSearch.jobPostingURL,
//                 contactNum: jobSearch.contactNum
//             });
//         });
//     }, [id])

//     let idHandler = (event) => {
//         setJobSearchData({
//             id: event.target.value
//         });
//     }

//     let nameHandler = (event) => {
//         setJobSearchData({
//             name: event.target.value
//         });
//     }
//     let commentsHandler = (event) => {
//         setJobSearchData({
//             comments: event.target.value
//         });
//     }

//     let dateAppliedHandler = (event) => {
//         setJobSearchData({
//             dateApplied: event.target.value
//         });
//     }
//     let jobTitleHandler = (event) => {
//         setJobSearchData({
//             jobTitle: event.target.value
//         });
//     }
//     let URLHandler = (event) => {
//         setJobSearchData({
//             jobPostingURL: event.target.value
//         });
//     }
//     let contactNumHandler = (event) => {
//         setJobSearchData({
//             contactNum: event.target.value
//         });
//     }
//     let updateJobSearch = (event) => {
//         event.preventDefault();
//         let jobSearchObj = {
//             id: jobSearch.id,
//             name: jobSearch.name,
//             comments: jobSearch.comments,
//             dateApplied: jobSearch.dateApplied,
//             jobTitle: jobSearch.jobTitle,
//             jobPostingURL: jobSearch.jobPostingURL,
//             contactNum: jobSearch.contactNum
//         };

//         JobSearchService.updateJobSearch(jobSearchObj, jobSearch.id).then((res) => {
//             props.history.push('/job-searches');
//         });
//     }

//     return (
//         <div>
//             <NavBar />
//         </div >
//     )
// }

// export default UpdateJobSearch

class UpdateJobSearch extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            name: '',
            grade: ''
        }

        this.idHandler = this.idHandler.bind(this);
        this.nameHandler = this.nameHandler.bind(this);
        this.gradeHandler = this.gradeHandler.bind(this);
        this.updateJobSearch = this.updateJobSearch.bind(this);
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
            grade: this.state.grade
        };

        JobSearchService.updateJobSearch(jobSearch, this.state.id).then((res) => {
            this.props.history.push('/job-searches');
        });


    }

    cancel() {
        this.props.history.push('/job-search');
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Update JobSearch</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Job Search ID: </label>
                                        <input placeholder={this.state.id} readOnly="true" name="id" className="form-control"
                                            value={this.state.id} onChange={this.idHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Job Search Name: </label>
                                        <input placeholder="Name" name="name" className="form-control"
                                            value={this.state.name} onChange={this.nameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Job Search Grade: </label>
                                        <input placeholder="Grade" name="grade" className="form-control"
                                            value={this.state.grade} onChange={this.gradeHandler} />
                                    </div>
                                    <button className="btn btn-success" onClick={this.updateJobSearch}> Update </button>
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

// export default UpdateJobSearch;