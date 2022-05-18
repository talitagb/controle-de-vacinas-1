package br.com.nava.entities;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.modelmapper.ModelMapper;

import com.fasterxml.jackson.annotation.JsonFormat;

import br.com.nava.dtos.VacinacaoDTO;
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
	private LocalDate dataAplic;
	
	@Column(name = "num_dose")
	private String numDose;
	
	@Column(name = "data_prox_aplic")
	@JsonFormat(pattern = "yyyy-MM-dd")
	private LocalDate dataProxAplic;
	
	@Column(name = "id_usuario")
	private String idUsuario;
	
	@Column(name = "id_vacina")
	private String idVacina;
	
	//Relacionamento com o Usuario 
	@ManyToOne
	@JoinColumn(name = "USUARIO_ID")
	private UsuarioEntity usuario;
	
	@ManyToOne
	@JoinColumn(name = "VACINA_ID")
	private VacinaEntity vacina;
	
	public VacinacaoDTO toDTO() {												
		ModelMapper mapper = new ModelMapper();
		VacinacaoDTO dto = mapper.map(this, VacinacaoDTO.class);
		return dto;
	}
}
