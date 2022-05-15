package br.com.nava.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class VacinaDTO {
	private String nomeVacina;
	private String fabricanteVacina;
	private Integer qntdDoses;
	private Integer qntdDiasDoses;
	
//	public VacinaEntity toEntity() {											
//		ModelMapper mapper = new ModelMapper();
//		return mapper.map(this, VacinaEntity.class);
//	}
}