package br.com.nava.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.nava.dtos.UsuarioDTO;
import br.com.nava.entities.UsuarioEntity;
import br.com.nava.repositories.UsuarioRepository;

@Service
public class UsuarioService {
	@Autowired
	private UsuarioRepository usuarioRepository;

	public List<UsuarioDTO> getAll() {
		List<UsuarioEntity> lista = usuarioRepository.findAll();
		List<UsuarioDTO> listaDTO = new ArrayList<>();
		for (UsuarioEntity usuarioEntity : lista) {
			listaDTO.add(usuarioEntity.toDTO());
		}
		return listaDTO;
	}

	public UsuarioDTO getOne(int id) {
		Optional<UsuarioEntity> optional = usuarioRepository.findById(id);
		UsuarioEntity usuario = optional.orElse(new UsuarioEntity());
		return usuario.toDTO();
	}

	public UsuarioDTO save(UsuarioEntity usuarioEntity) {
		return usuarioRepository.save(usuarioEntity).toDTO();
	}

	public UsuarioDTO update(int id, UsuarioEntity usuario) {
		Optional<UsuarioEntity> optional = usuarioRepository.findById(id);
		if (optional.isPresent() == true) {
			UsuarioEntity usuarioBD = optional.get();
			usuarioBD.setCpfUsuario(usuario.getCpfUsuario());
			usuarioBD.setDataNasc(usuario.getDataNasc());
			usuarioBD.setEnderecoUsuario(usuario.getEnderecoUsuario());
			usuarioBD.setNomeUsuario(usuario.getNomeUsuario());
			usuarioBD.setTelefoneUsuario(usuario.getTelefoneUsuario());
			usuarioBD.setVacinacao(usuario.getVacinacao());

			return usuarioRepository.save(usuarioBD).toDTO();
		} else {
			return new UsuarioEntity().toDTO();
		}
	}
	
	public void delete(int id) {
		usuarioRepository.deleteById(id);
		
	}
}
