package br.com.nava.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

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
	private Integer qntdDoses;
	
	@Column(name = "qntd_dias_doses")
	private Integer qntdDiasDoses;
}
