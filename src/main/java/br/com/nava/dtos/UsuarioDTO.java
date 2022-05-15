package br.com.nava.dtos;

import java.time.LocalDateTime;

//import org.modelmapper.ModelMapper;

//import br.com.nava.entities.UsuarioEntity;
//import br.com.nava.entities.VacinaEntity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UsuarioDTO {
	private String nomeUsuario;
	private String cpfUsuario;
	private LocalDateTime dataNasc;
	private String enderecoUsuario;
	private String telefoneUsuario;
	
//	public UsuarioEntity toEntity() {											
//		ModelMapper mapper = new ModelMapper();
//		return mapper.map(this, UsuarioEntity.class);
//	}
}
