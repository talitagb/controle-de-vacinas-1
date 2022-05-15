package br.com.nava.dtos;

import java.time.LocalDate;

import org.modelmapper.ModelMapper;

import br.com.nava.entities.UsuarioEntity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UsuarioDTO {
	private Integer id;
	private String nomeUsuario;
	private String cpfUsuario;
	private LocalDate dataNasc;
	private String enderecoUsuario;
	private String telefoneUsuario;
	
	public UsuarioEntity toEntity() {											
		ModelMapper mapper = new ModelMapper();
		return mapper.map(this, UsuarioEntity.class);
	}
}
