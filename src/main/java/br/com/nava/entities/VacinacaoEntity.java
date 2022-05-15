package br.com.nava.entities;

import java.time.LocalDateTime;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;


import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "tab_vacinacao")
public class VacinacaoEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	@Column(name = "data_aplic")
	@JsonFormat(pattern = "yyyy-MM-dd")
	private LocalDateTime dataAplic;
	
	@Column(name = "num_dose")
	private String numDose;
	
	@Column(name = "data_prox_aplic")
	@JsonFormat(pattern = "yyyy-MM-dd")
	private LocalDateTime dataProxAplic;
	
	@Column(name = "id_usuario")
	private Integer idUsuario;
	
	//Relacionamento com o Usuario 
	@ManyToOne
	@JoinColumn(name = "USUARIO_ID")
	private UsuarioEntity usuario;
	
	@ManyToOne
	@JoinColumn(name = "VACINA_ID")
	private VacinaEntity vacina;
	
//	public VacinacaoDTO toDTO() {												
//		ModelMapper mapper = new ModelMapper();
//		VacinacaoDTO dto = mapper.map(this, VacinacaoDTO.class);
//		return dto;
//	}
}
