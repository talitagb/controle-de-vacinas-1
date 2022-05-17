package br.com.nava.dtos;

import org.modelmapper.ModelMapper;

import br.com.nava.entities.VacinaEntity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class VacinaDTO {
	private Integer id;
	private String nomeVacina;
	private String fabricanteVacina;
	private String qntdDoses;
	private String qntdDiasDoses;
	
	public VacinaEntity toEntity() {											
		ModelMapper mapper = new ModelMapper();
		return mapper.map(this, VacinaEntity.class);
	}
}
