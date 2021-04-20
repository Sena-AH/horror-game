package group1.horrorgame.demo.DAO;


import group1.horrorgame.demo.models.DTO.PlayerDTO;
import group1.horrorgame.demo.models.DTO.VillainDTO;
import group1.horrorgame.demo.repository.VillainRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
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
    public Optional<VillainDTO> findVillainByID(Integer id) {
        return repository.findById(id);
    }
    public void deleteVillain(Integer id) {
        repository.deleteById(id);
    }
    public void deleteAllVillains() {
        repository.deleteAll();
    }

}




