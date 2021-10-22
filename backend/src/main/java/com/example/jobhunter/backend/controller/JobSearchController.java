package com.example.jobhunter.backend.controller;

import com.example.jobhunter.backend.model.JobSearchModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.jobhunter.backend.repository.JobSearchRepository;
import com.example.jobhunter.backend.exception.ResourceNotFoundException;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/")
public class JobSearchController {
	@Autowired
	private JobSearchRepository jobSearchRepo;

	// get all students

	@GetMapping("/all-job-searches")
	public List<JobSearchModel> getAllStudents() {
		return jobSearchRepo.findAll();
	}

	@PostMapping("/add-job-search")
	public JobSearchModel newJobSearch(@RequestBody JobSearchModel j) {

		return jobSearchRepo.save(j);
	}

	@GetMapping("/job-search/{id}")
	public ResponseEntity<JobSearchModel> getJobSearchById(@PathVariable int id) {
		JobSearchModel j = jobSearchRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("JobSearch not found"));
		return ResponseEntity.ok(j);
	}

	@GetMapping("/job-search/{name}")
	public List<JobSearchModel> getJobSearchByName(@PathVariable String name) {
		// return studentRepo.findByName(name);

		List<JobSearchModel> jobSearches = jobSearchRepo.findByName(name);
		if (jobSearches.isEmpty()) {
			System.out.println(new ResourceNotFoundException("JobSearch(j) with the name " + name + " not found"));
		}

		return jobSearchRepo.findByName(name);
	}

	@PutMapping("/job-search/{id}")
	public ResponseEntity<JobSearchModel> updateJobSearch(@PathVariable int id, @RequestBody JobSearchModel jobSearch) {
		JobSearchModel j = jobSearchRepo.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Job search not found"));
		j.setDateApplied(jobSearch.getDateApplied());
		j.setName(jobSearch.getName());
		j.setJobPostingURL(jobSearch.getJobPostingURL());
		j.setComments(jobSearch.getComments());
		j.setContactNum(jobSearch.getContactNum());
		JobSearchModel updatedJobSearch = jobSearchRepo.save(j);
		return ResponseEntity.ok(updatedJobSearch);
	}

	@DeleteMapping("/job-search/{id}")
	public String deleteJobSearch(@PathVariable int id) {
		jobSearchRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Job search not found"));
		jobSearchRepo.deleteById(id);
		return "The job search item with id: " + id + " is removed from the database.";
	}
}