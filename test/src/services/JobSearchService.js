import axios from 'axios';

const JOB_SEARCH_API_BASE_URL = "http://localhost:8080/api";
class JobSearchService {

    getJobSearches() {
        return axios.get(JOB_SEARCH_API_BASE_URL + "/job-searches");
    }
    createJobSearch(jobSearch) {
        return axios.post(JOB_SEARCH_API_BASE_URL + "/add-job-search", jobSearch);
    }

    getJobSearchById(id) {
        return axios.get(JOB_SEARCH_API_BASE_URL + "/job-searches/" + id);
    }

    updateJobSearch(jobSearch, id) {
        return axios.put(JOB_SEARCH_API_BASE_URL + "/job-searches/" + id, jobSearch);
    }

    deleteJobSearch(id) {
        return axios.delete(JOB_SEARCH_API_BASE_URL + "/job-searches/" + id);
    }
}
export default new JobSearchService();