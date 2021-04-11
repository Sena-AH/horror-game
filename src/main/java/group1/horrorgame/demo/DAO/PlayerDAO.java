package group1.horrorgame.demo.DAO;

import org.springframework.stereotype.Repository;
import group1.horrorgame.demo.models.DTO.PlayerDTO;
import group1.horrorgame.demo.repository.PlayerRepository;

import java.util.Optional;

@Repository
public class PlayerDAO {

    private final PlayerRepository repository;

    public PlayerDAO(PlayerRepository repository) {
        this.repository = repository;
    }

    public PlayerDTO addPlayer(PlayerDTO animalDTO) {
        return repository.save(animalDTO);
    }

    public Iterable<PlayerDTO> getAllPlayers() {
        return repository.findAll();
    }

    public Optional<PlayerDTO> findPlayerByID(Integer id) {
        return repository.findById(id);
    }

    public void deletePlayer(Integer id) {
        repository.deleteById(id);
    }

    public void deleteAllPlayers() {
        repository.deleteAll();
    }
}
