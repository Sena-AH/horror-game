package group1.horrorgame.demo.repository;

import org.springframework.data.repository.CrudRepository;
import group1.horrorgame.demo.models.DTO.PlayerItemDTO;

public interface PlayerItemRepository extends CrudRepository<PlayerItemDTO, Integer> {
}