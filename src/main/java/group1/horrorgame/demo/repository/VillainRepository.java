package group1.horrorgame.demo.repository;

import group1.horrorgame.demo.models.DTO.VillainDTO;
import org.springframework.data.repository.CrudRepository;

public interface VillainRepository extends CrudRepository<VillainDTO,Integer> {
}
