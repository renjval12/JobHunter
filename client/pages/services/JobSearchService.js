import axios from 'axios';

const STUDENT_API_BASE_URL = "http://localhost:8080/api";
class JobSearchService {

    getJobSearches() {
        return axios.get(STUDENT_API_BASE_URL + "/all-job-searches");
    }

    createJobSearch(jobSearch) {
        return axios.post(STUDENT_API_BASE_URL + "/add-job-search", jobSearch);
    }

    getJobSearchById(id) {
        return axios.get(STUDENT_API_BASE_URL + "/job-search/" + id);
    }

    updateJobSearch(jobSearch, id) {
        return axios.put(STUDENT_API_BASE_URL + "/job-search/" + id, jobSearch);
    }

    deleteJobSearch(id) {
        return axios.delete(STUDENT_API_BASE_URL + "/job-search/" + id);
    }

}

export default new JobSearchService();