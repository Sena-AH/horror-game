package group1.horrorgame.demo.services;

import group1.horrorgame.demo.DAO.PlayerItemDAO;
import group1.horrorgame.demo.models.DTO.PlayerItemDTO;
import group1.horrorgame.demo.models.PlayerItem;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class PlayerItemService {

    private final PlayerItemDAO playerItemDAO;

    @Autowired
    public PlayerItemService(PlayerItemDAO playerItemDAO){
        this.playerItemDAO = playerItemDAO;
    }

    public List<PlayerItem> getAllPlayerItems(){
        List<PlayerItem> playersItem = new ArrayList<>();
        for(PlayerItemDTO playerItemDTO : playerItemDAO.getAllPlayerItems()){
            PlayerItem playerItem = mapToPlayerItem(playerItemDTO);
            playerItems.add(playerItem);
        }
        return playerItems;
    }

    public PlayerItem updatePlayerItem(PlayerItem playerItem, Integer id){
        PlayerItem  playerItemToUpdate = getPlayerItemById(id);

        if(playerItemToUpdate != null){
            playerItemToUpdate.setItemName(playerItem.getItemName());
            playerItemToUpdate.setId(playerItem.getId());
            playerItemToUpdate.setPlayerId(playerItem.getPlayerId());

        }
        else{
            playerItemToUpdate.setId(id);
        }
        PlayerItemDTO updatedPlayerItem = playerItemDAO.addPlayerItem(mapFromPlayerItem(playerItemToUpdate));
        return mapToPlayerItem(updatedPlayerItem);
    }

    public PlayerItem addPlayerItem(PlayerItem playerItem){
        PlayerItemDTO newPlayerItemDTO = playerItemDAO.addPlayerItem(mapFromPlayerItem(playerItem));
        return mapToPlayerItem(newPlayerItemDTO);
    }

    public PlayerItem getPlayerItemById(int id){
        if (playerItemDAO.findPlayerItemByID(id).isPresent()) {
            return mapToPlayerItem(playerItemDAO.findPlayerItemByID(id).get());
        }
        return null;
    }

    public void deletePlayerItem(Integer id){
        playerItemDAO.deletePlayerItem(id);
    }

    public void deleteAllPlayerItems(){
        playerItemDAO.deleteAllPlayerItems();
    }

    public PlayerItemDTO mapFromPlayerItem(PlayerItem playerItem) {
        return new PlayerItemDTO(playerItem.getId(), playerItem.getItemName(),
                playerItem.getPlayerId());
    }

    public PlayerItem mapToPlayerItem(PlayerItemDTO playerItemDTO) {
        return new PlayerItem(playerItemDTO.getId(), playerItemDTO.getItemName(),
                playerItemDTO.getPlayerId());
    }
}