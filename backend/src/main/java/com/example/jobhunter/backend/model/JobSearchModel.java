package com.example.jobhunter.backend.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "jobsearches")
public class JobSearchModel {
	@Id
	private int id;
	private String dateApplied;
	private String name;
	private String jobPostingURL;
	private String comments;
	private String contactNum;

	public JobSearchModel() {

	}

	public JobSearchModel(int id, String dateApplied, String name, String jobPostingURL, String comments,
			String contactNum, int quantity) {
		super();
		this.id = id;
		this.dateApplied = dateApplied;
		this.name = name;
		this.jobPostingURL = jobPostingURL;
		this.comments = comments;
		this.contactNum = contactNum;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getDateApplied() {
		return dateApplied;
	}

	public void setDateApplied(String dateApplied) {
		this.dateApplied = dateApplied;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getJobPostingURL() {
		return jobPostingURL;
	}

	public void setJobPostingURL(String jobPostingURL) {
		this.jobPostingURL = jobPostingURL;
	}

	public String getComments() {
		return comments;
	}

	public void setComments(String comments) {
		this.comments = comments;
	}

	public String getContactNum() {
		return contactNum;
	}

	public void setContactNum(String contactNum) {
		this.contactNum = contactNum;
	}

}