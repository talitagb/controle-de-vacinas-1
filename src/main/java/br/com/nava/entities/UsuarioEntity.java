package br.com.nava.entities;

import java.time.LocalDate;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.modelmapper.ModelMapper;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;

import br.com.nava.dtos.UsuarioDTO;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "tab_usuarios")
public class UsuarioEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	@Column(name = "nome_usuario")
	private String nomeUsuario;
	
	@Column(name = "cpf_usuario")
	private String cpfUsuario;
	
	@Column(name = "data_nasc")
	@JsonFormat(pattern = "yyyy-MM-dd")
	private LocalDate dataNasc;
	
	@Column(name = "endereco_usuario")
	private String enderecoUsuario;
	
	@Column(name = "telefone_usuario")
	private String telefoneUsuario;
	
	@JsonIgnore
	@OneToMany(mappedBy = "usuario")
	private List<VacinacaoEntity> vacinacao;
	
	public UsuarioDTO toDTO() {												
		ModelMapper mapper = new ModelMapper();
		UsuarioDTO dto = mapper.map(this, UsuarioDTO.class);
		return dto;
	}
}
