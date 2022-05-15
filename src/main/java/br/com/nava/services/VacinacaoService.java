package br.com.nava.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.nava.dtos.VacinacaoDTO;
import br.com.nava.entities.VacinacaoEntity;
import br.com.nava.repositories.VacinacaoRepository;

@Service
public class VacinacaoService {
	@Autowired
	private VacinacaoRepository vacinacaoRepository;

	public List<VacinacaoDTO> getAll() {
		List<VacinacaoEntity> lista = vacinacaoRepository.findAll();
		List<VacinacaoDTO> listaDTO = new ArrayList<>();
		for (VacinacaoEntity vacinacaoEntity : lista) {
			listaDTO.add(vacinacaoEntity.toDTO());
		}
		return listaDTO;
	}

	public VacinacaoDTO getOne(int id) {
		Optional<VacinacaoEntity> optional = vacinacaoRepository.findById(id);
		VacinacaoEntity vacinacao = optional.orElse(new VacinacaoEntity());
		return vacinacao.toDTO();
	}

	public VacinacaoDTO save(VacinacaoEntity vacinacaoEntity) {
		return vacinacaoRepository.save(vacinacaoEntity).toDTO();
	}

	public VacinacaoDTO update(int id, VacinacaoEntity vacinacao) {
		Optional<VacinacaoEntity> optional = vacinacaoRepository.findById(id);
		if (optional.isPresent() == true) {
			VacinacaoEntity vacinacaoBD = optional.get();
			vacinacaoBD.setDataAplic(vacinacao.getDataAplic());
			vacinacaoBD.setDataProxAplic(vacinacao.getDataProxAplic());
			vacinacaoBD.setIdUsuario(vacinacao.getIdUsuario());
			vacinacaoBD.setIdVacina(vacinacao.getIdVacina());
			vacinacaoBD.setNumDose(vacinacao.getNumDose());
			vacinacaoBD.setUsuario(vacinacao.getUsuario());
			vacinacaoBD.setVacina(vacinacao.getVacina());

			return vacinacaoRepository.save(vacinacaoBD).toDTO();
		} else {
			return new VacinacaoEntity().toDTO();
		}
	}

	public void delete(int id) {
		vacinacaoRepository.deleteById(id);

	}
}
