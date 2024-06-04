package com.Server.Server.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Server.Server.Repository.Repository;
import com.Server.Server.model.Commentupdate;
import com.Server.Server.model.model;
import com.Server.Server.model.model2;
import com.Server.Server.model.updaterating;

import jakarta.transaction.Transactional;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping
public class Controller {
    @Autowired
    private Repository repository;

    @PutMapping("/getdata")
    public model createuser(@RequestBody model2 model2){
        try {
            return repository.getdata(model2.getId());
        } catch (Exception e) {
            e.printStackTrace(); // Log the exception for debugging purposes
            return null;
        }
    }

    @PutMapping("/updatecomment")
    @Transactional
    public String updateData(@RequestBody Commentupdate Commentupdate){
        repository.updateData(Commentupdate.getComment(), Commentupdate.getId());
        return "Success";
    }

    @PutMapping("/updaterating")
    @Transactional
    public String updaterating(@RequestBody updaterating updaterating){
        repository.updaterating(updaterating.getNo_stars(), updaterating.getNo_ratings(), updaterating.getId());
        return "Success";
    }

    @PutMapping("/updatequt")
    @Transactional
    public String updatequnt(@RequestBody List<Integer> list) {
    for (Integer id : list) {
        repository.updatequnt(id);
    }
    return "success";
}

 
}
