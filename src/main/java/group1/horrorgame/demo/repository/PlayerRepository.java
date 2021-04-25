package group1.horrorgame.demo.repository;

import org.springframework.data.repository.CrudRepository;
import group1.horrorgame.demo.models.DTO.PlayerDTO;

public interface PlayerRepository extends CrudRepository<PlayerDTO, Integer> {
}
