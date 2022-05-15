package br.com.nava.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.nava.dtos.VacinaDTO;
import br.com.nava.entities.VacinaEntity;
import br.com.nava.repositories.VacinaRepository;

@Service
public class VacinaService {
	@Autowired
	private VacinaRepository vacinaRepository;

	public List<VacinaDTO> getAll() {
		List<VacinaEntity> lista = vacinaRepository.findAll();
		List<VacinaDTO> listaDTO = new ArrayList<>();
		for (VacinaEntity vacinaEntity : lista) {
			listaDTO.add(vacinaEntity.toDTO());
		}
		return listaDTO;
	}

	public VacinaDTO getOne(int id) {
		Optional<VacinaEntity> optional = vacinaRepository.findById(id);
		VacinaEntity vacina = optional.orElse(new VacinaEntity());
		return vacina.toDTO();
	}

	public VacinaDTO save(VacinaEntity vacinaEntity) {
		return vacinaRepository.save(vacinaEntity).toDTO();
	}

	public VacinaDTO update(int id, VacinaEntity vacina) {
		Optional<VacinaEntity> optional = vacinaRepository.findById(id);
		if (optional.isPresent() == true) {
			VacinaEntity vacinaBD = optional.get();
			vacinaBD.setFabricanteVacina(vacina.getFabricanteVacina());
			vacinaBD.setNomeVacina(vacina.getNomeVacina());
			vacinaBD.setQntdDiasDoses(vacina.getQntdDiasDoses());
			vacinaBD.setQntdDoses(vacina.getQntdDoses());
			vacinaBD.setVacinacao(vacina.getVacinacao());
			

			return vacinaRepository.save(vacinaBD).toDTO();
		} else {
			return new VacinaEntity().toDTO();
		}
	}
	
	public void delete(int id) {
		vacinaRepository.deleteById(id);
		
	}
}
