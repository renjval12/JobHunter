package com.example.jobhunter.backend.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "jobsearches")
public class JobSearchModel {
	@Id
	private int id;
	private String date_applied;
	private String job_title;
	private String name;
	private String job_postingurl;
	private String comments;
	private String contact_num;

	public JobSearchModel() {

	}

	public JobSearchModel(int id, String date_applied, String name, String job_postingurl, String comments,
			String contact_num, int quantity) {
		super();
		this.id = id;
		this.date_applied = date_applied;
		this.name = name;
		this.job_postingurl = job_postingurl;
		this.comments = comments;
		this.contact_num = contact_num;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getDateApplied() {
		return date_applied;
	}

	public void setDateApplied(String date_applied) {
		this.date_applied = date_applied;
	}

	public String getJobTitle() {
		return job_title;
	}

	public void setJobTitle(String job_title) {
		this.job_title = job_title;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getJobPostingURL() {
		return job_postingurl;
	}

	public void setJobPostingURL(String job_postingurl) {
		this.job_postingurl = job_postingurl;
	}

	public String getComments() {
		return comments;
	}

	public void setComments(String comments) {
		this.comments = comments;
	}

	public String getContactNum() {
		return contact_num;
	}

	public void setContactNum(String contact_num) {
		this.contact_num = contact_num;
	}

}