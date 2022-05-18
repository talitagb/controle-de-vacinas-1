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

import br.com.nava.dtos.VacinacaoDTO;
import br.com.nava.services.VacinacaoService;

@RestController
@RequestMapping("vacinacao")
@CrossOrigin(origins = "http://localhost:4200")
public class VacinacaoController {
	@Autowired
	private VacinacaoService vacinacaoService;
	
	@GetMapping()
	public ResponseEntity<List<VacinacaoDTO>> getAll(){
		return ResponseEntity.status(HttpStatus.OK).body(vacinacaoService.getAll());
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<VacinacaoDTO> getOne(@PathVariable int id) {
		return ResponseEntity.status(HttpStatus.OK).body(vacinacaoService.getOne(id));
	}
	
	@PostMapping()
	public ResponseEntity<VacinacaoDTO> save(@Valid @RequestBody VacinacaoDTO vacinacao) {
		return ResponseEntity.status(HttpStatus.OK).body(vacinacaoService.save(vacinacao.toEntity()));
	}
	
	@PatchMapping("/{id}")
	public ResponseEntity<VacinacaoDTO> update(@PathVariable int id, @RequestBody VacinacaoDTO vacinacao) {
		return ResponseEntity.status(HttpStatus.OK).body(vacinacaoService.update(id, vacinacao.toEntity()));
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Void> delete(@PathVariable int id) {
		vacinacaoService.delete(id);
		return ResponseEntity.ok().build();
	}
}
