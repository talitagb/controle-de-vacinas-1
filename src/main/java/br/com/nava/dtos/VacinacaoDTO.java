package br.com.nava.dtos;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@AllArgsConstructor
@NoArgsConstructor
@Data
public class VacinacaoDTO {
	private LocalDateTime dataAplic;
	private String numDose;
	private LocalDateTime dataProxAplic;
	private Integer idUsuario;
	
//	public VacinacaoEntity toEntity() {											
//		ModelMapper mapper = new ModelMapper();
//		return mapper.map(this, VacinacaoEntity.class);
//	}
}
