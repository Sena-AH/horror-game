package group1.horrorgame.demo.DAO;


import group1.horrorgame.demo.models.DTO.PlayerItemDTO;
import group1.horrorgame.demo.repository.PlayerItemRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public class PlayerItemDAO {

    private final PlayerItemRepository playerItemRepository;

    public PlayerItemDAO(PlayerItemRepository playerItemRepository) {
        this.playerItemRepository = playerItemRepository;
    }

    public PlayerItemDTO addPlayerItems(PlayerItemDTO playerItemDTO) {
        return playerItemRepository.save(playerItemDTO);
    }

    public Iterable<PlayerItemDTO>  getAllPlayerItems() {
        return playerItemRepository.findAll();
    }

    public Optional<PlayerItemDTO> findPlayerItemsByID(Integer id)  {
        return playerItemRepository.findById(id);
    }

    public void deletePlayerItems(Integer id)   {
        playerItemRepository.deleteById(id);
    }

    public void deleteAllPlayerItems()  {
        playerItemRepository.deleteAll();
    }

}
