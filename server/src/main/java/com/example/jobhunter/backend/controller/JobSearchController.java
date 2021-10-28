package com.example.jobhunter.backend.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.jobhunter.backend.exception.ResourceNotFoundException;
import com.example.jobhunter.backend.model.JobSearchModel;
import com.example.jobhunter.backend.repository.JobSearchRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/")
public class JobSearchController {
	@Autowired
	private JobSearchRepository jobSearchRepo;

	// get all students

	@GetMapping("/job-searches")
	public List<JobSearchModel> getAllStudents() {
		return jobSearchRepo.findAll();
	}
//add job search
	@PostMapping("/add-job-search")
	public JobSearchModel newJobSearch(@RequestBody  JobSearchModel j) {

		return jobSearchRepo.save(j);
	}

	@GetMapping("/job-searches/{id}")
	public ResponseEntity<JobSearchModel> getJobSearchById(@PathVariable int id) {
		JobSearchModel j = jobSearchRepo.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("JobSearch not found"));
		return ResponseEntity.ok(j);
	}


	@PutMapping("/job-searches/{id}")
	public ResponseEntity<JobSearchModel> updateJobSearch(@PathVariable int id, @RequestBody JobSearchModel jobSearch) {
		JobSearchModel j = jobSearchRepo.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Job search not found"));
		j.setDateApplied(jobSearch.getDateApplied());
		j.setJobTitle(jobSearch.getJobTitle());
		j.setName(jobSearch.getName());
		j.setJobPostingURL(jobSearch.getJobPostingURL());
		j.setComments(jobSearch.getComments());
		j.setContactNum(jobSearch.getContactNum());
		JobSearchModel updatedJobSearch = jobSearchRepo.save(j);
		return ResponseEntity.ok(updatedJobSearch);
	}

//	@DeleteMapping("/job-searches/{id}")
//	public String deleteJobSearch(@PathVariable int id) {
//		jobSearchRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Job search not found"));
//		jobSearchRepo.deleteById(id);
//		return "The job search item with id: " + id + " is removed from the database.";
//	}
	@DeleteMapping("/job-searches/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteJobSearch(@PathVariable int id){
		JobSearchModel j = jobSearchRepo.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Job Search not exist with id :" + id));
		
		jobSearchRepo.delete(j);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
}