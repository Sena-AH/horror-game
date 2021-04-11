package group1.horrorgame.demo.repository;
import group1.horrorgame.demo.models.DTO.VillainDTO;
import org.springframework.data.repository.CrudRepository;


public interface villainRepository extends CrudRepository<VillainDTO,Integer> {

}
