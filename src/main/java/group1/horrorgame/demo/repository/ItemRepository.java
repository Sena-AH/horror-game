package group1.horrorgame.demo.repository;

import group1.horrorgame.demo.models.DTO.ItemDTO;
import org.springframework.data.repository.CrudRepository;

public interface ItemRepository extends CrudRepository<ItemDTO, Integer> {
}
