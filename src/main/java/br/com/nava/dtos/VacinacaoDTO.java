package br.com.nava.dtos;

import java.time.LocalDate;

import org.modelmapper.ModelMapper;

import br.com.nava.entities.UsuarioEntity;
import br.com.nava.entities.VacinaEntity;
import br.com.nava.entities.VacinacaoEntity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@AllArgsConstructor
@NoArgsConstructor
@Data
public class VacinacaoDTO {
	private Integer id;
	private LocalDate dataAplic;
	private String numDose;
	private LocalDate dataProxAplic;
	private String idUsuario;
	private String idVacina;
	private UsuarioEntity usuario;
	private VacinaEntity vacina;
	
	public VacinacaoEntity toEntity() {											
		ModelMapper mapper = new ModelMapper();
		return mapper.map(this, VacinacaoEntity.class);
	}
}
