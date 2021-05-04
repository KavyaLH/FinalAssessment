package com.example.demo.Resource;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Dto.EmployeeDto;
import com.example.demo.exception.UserNotFoundException;
import com.example.demo.repository.EmployeeRepo;
import com.example.demo.service.EmployeeService;

@RestController
@RequestMapping("/")
@CrossOrigin(origins = "http://localhost:4200")
public class EmployeeResource {

	@Autowired
	EmployeeService service;

	@Autowired
	EmployeeRepo repo;

	private static final Logger logger = LoggerFactory.getLogger(EmployeeResource.class);

	@GetMapping("get")
	public ResponseEntity<List<EmployeeDto>> getEmp() throws Exception {
		logger.info("Inside getEmp():");
		List<EmployeeDto> listOfEmployees = new ArrayList<>();
		try {
			logger.info("Inside try of getEmp()");
			listOfEmployees = service.getEmpl();
			if (listOfEmployees.isEmpty()) {
				logger.info("Inside if of getEmp()");
				throw new UserNotFoundException("No record found");
			}
		} catch (Exception e) {
			logger.info("Inside catch of getEmp()");
			e.printStackTrace();
		}
		logger.info("Inside getEmp(): Returning list of employees");
		return new ResponseEntity<List<EmployeeDto>>(listOfEmployees, HttpStatus.OK);
	}

	@PostMapping("save")
	public EmployeeDto saveEmp(@RequestBody EmployeeDto dto) {
		EmployeeDto ed = new EmployeeDto();
		EmployeeDto emailID = new EmployeeDto();
		logger.info("Inside saveEmp: save() method");
		try {
			emailID = service.findByEmailid(dto.getEmail());
			logger.info("Inside try block of saveEmp: emailID= " + emailID);
			if (emailID == null) {
				logger.info("Inside try block of saveEmp");
				ed = service.saveEmpl(dto);
				logger.info("Inside try block of saveEmp: ed= " + ed);
			}
		} catch (Exception e) {
			logger.info("Inside catch block of saveEmp");
			e.printStackTrace();
		}
		if (emailID == null) {
			logger.info("Inside if of saveEmp");
			return ed;
		} else {
			logger.info("Inside else of saveEmp");
			return null;
		}
	}

	@DeleteMapping("delete/{eid}")
	public void deleteEmp(@PathVariable int eid) {
		logger.info("Inside else of deleteEmp()");
		EmployeeDto em = repo.getOne(eid);
		service.deleteEmpl(em);
	}

	@PutMapping("/putByEmail/{email}")
	public EmployeeDto updateEmplByEmail(@PathVariable String email, @RequestBody EmployeeDto dto) {
		boolean val = false;
		EmployeeDto updateVal = new EmployeeDto();
		try {
			logger.info("Inside updateEmplByEmail: upadate() method");
			if ((service.updateEmpByEmail(dto.getName(), dto.getContact(), dto.getDob(), dto.getGender(), email)
					.equals("Email ID not found"))) {
				val = false;
				logger.info("Inside " + val);
			} else {
				val = true;
				logger.info("Inside else" + val);
			}

		} catch (Exception e) {
			logger.info("Inside catch of updateEmplByEmail ");
			e.printStackTrace();
		}
		if (val == true) {
			logger.info("Inside if of updateEmplByEmail ");
			return updateVal;
		} else
			logger.info("Inside else of updateEmplByEmail ");
			return null;
	}

	@GetMapping("/getByNamePasswrd/{name}/{password}")
	public String getByNamePassword(@PathVariable(name = "name") String name, @PathVariable(name = "password") String password) {
		logger.info("Inside getByNamePassword");
		String data = service.findIdByNamePassword(name, password);
		logger.info("Inside getByNamePassword: data = " +data);
		if (data.equals("ID found")) {
			logger.info("Inside if of getByNamePassword ");
			return "Login successful";
		} else
			logger.info("Inside else of getByNamePassword ");
			return null;
	}
	/*
	 * @GetMapping("getByEmailID/{email}") public EmployeeDto
	 * getByEmailID(@PathVariable(name ="email") String email) { return
	 * service.findByEmailid(email); }
	 */
}
