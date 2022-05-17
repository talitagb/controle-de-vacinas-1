package br.com.nava.entities;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.modelmapper.ModelMapper;

import com.fasterxml.jackson.annotation.JsonIgnore;

import br.com.nava.dtos.VacinaDTO;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "tab_vacina")
public class VacinaEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	@Column(name = "nome_vacina")
	private String nomeVacina;
	
	@Column(name = "fabricante_vacina")
	private String fabricanteVacina;
	
	@Column(name = "qntd_doses")
	private String qntdDoses;
	
	@Column(name = "qntd_dias_doses")
	private String qntdDiasDoses;
	
	@JsonIgnore
	@OneToMany(mappedBy = "vacina")
	private List<VacinacaoEntity> vacinacao;
	
	public VacinaDTO toDTO() {												
		ModelMapper mapper = new ModelMapper();
		VacinaDTO dto = mapper.map(this, VacinaDTO.class);
		return dto;
	}
}
