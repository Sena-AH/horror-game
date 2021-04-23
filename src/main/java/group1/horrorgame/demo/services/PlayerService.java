package group1.horrorgame.demo.services;

import group1.horrorgame.demo.DAO.PlayerDAO;
import group1.horrorgame.demo.models.DTO.PlayerDTO;
//import group1.horrorgame.demo.models.Player;
import group1.horrorgame.demo.models.recordsmodel.PlayerRecord;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class PlayerService {

    private final PlayerDAO playerDAO;

    @Autowired
    public PlayerService(PlayerDAO playerDAO){
        this.playerDAO = playerDAO;
    }

    public List<PlayerRecord> getAllPlayers(){
        List<PlayerRecord> players = new ArrayList<>();
        for(PlayerDTO playerDTO : playerDAO.getAllPlayers()){
            PlayerRecord player = mapToPlayer(playerDTO);
            players.add(player);
        }
        return players;
    }

    public PlayerRecord updatePlayer(PlayerRecord player, Integer id){
        PlayerRecord playerToUpdate = getPlayerById(id);

        if(playerToUpdate != null){
            playerToUpdate.name(player.name());
        }
        else{
            playerToUpdate.id(id);
        }
        PlayerDTO updatedPlayer = playerDAO.addPlayer(mapFromPlayer(playerToUpdate));
        return mapToPlayer(updatedPlayer);
    }

    public PlayerRecord addPlayer(PlayerRecord player){
        PlayerDTO newPlayerDTO = playerDAO.addPlayer(mapFromPlayer(player));
        return mapToPlayer(newPlayerDTO);
    }

    public PlayerRecord getPlayerById(int id){
        if (playerDAO.findPlayerByID(id).isPresent()) {
            return mapToPlayer(playerDAO.findPlayerByID(id).get());
        }
        return null;
    }

    public void deletePlayer(Integer id){
        playerDAO.deletePlayer(id);
    }

    public void deleteAllPlayers(){
        playerDAO.deleteAllPlayers();
    }

    public PlayerDTO mapFromPlayer(PlayerRecord player) {
        return new PlayerDTO(player.id(), player.name());
    }

    public PlayerRecord mapToPlayer(PlayerDTO playerDTO) {
        return new PlayerRecord(playerDTO.getId(), playerDTO.getName());
    }
}
