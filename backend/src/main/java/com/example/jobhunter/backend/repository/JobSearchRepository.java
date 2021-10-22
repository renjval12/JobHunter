
package com.example.jobhunter.backend.repository;

import com.example.jobhunter.backend.model.JobSearchModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface JobSearchRepository extends JpaRepository<JobSearchModel,Integer> {
    List<JobSearchModel> findByName(String name);
}