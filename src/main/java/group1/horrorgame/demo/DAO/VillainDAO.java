package group1.horrorgame.demo.DAO;


import group1.horrorgame.demo.models.DTO.VillainDTO;

import java.util.Optional;

@Repoistory
public class VillainDAO {
    private final VillainRepository repository;

    public VillainDAO(VillainRepository repository) {
        this.repository = repository;
    }

    public VillainDTO addVillain(VillainDTO animalDTO) {
        return repository.save(animalDTO);
    }

    public Iterable<VillainDTO> getAllVillains() {
        return repository.findAll();
    }


    public void deleteAllVillains() {
        repository.deleteAll();
    }
}

}


