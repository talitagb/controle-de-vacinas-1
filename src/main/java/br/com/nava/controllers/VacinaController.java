package br.com.nava.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.nava.dtos.VacinaDTO;
import br.com.nava.services.VacinaService;

@RestController
@RequestMapping("vacinas")
@CrossOrigin(origins = "http://localhost:4200")
public class VacinaController {
	@Autowired
	private VacinaService vacinaService;
	
	@GetMapping()
	public ResponseEntity<List<VacinaDTO>> getAll(){
		return ResponseEntity.status(HttpStatus.OK).body(vacinaService.getAll());
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<VacinaDTO> getOne(@PathVariable int id) {
		return ResponseEntity.status(HttpStatus.OK).body(vacinaService.getOne(id));
	}
	
	@PostMapping()
	public ResponseEntity<VacinaDTO> save(@Valid @RequestBody VacinaDTO vacina) {
		return ResponseEntity.status(HttpStatus.OK).body(vacinaService.save(vacina.toEntity()));
	}
	
	@PatchMapping("/{id}")
	public ResponseEntity<VacinaDTO> update(@PathVariable int id, @RequestBody VacinaDTO vacina) {
		return ResponseEntity.status(HttpStatus.OK).body(vacinaService.update(id, vacina.toEntity()));
	}
	
	@DeleteMapping("{id}")
	public ResponseEntity<Void> delete(@PathVariable int id) {
		vacinaService.delete(id);
		return ResponseEntity.ok().build();
	}
}
