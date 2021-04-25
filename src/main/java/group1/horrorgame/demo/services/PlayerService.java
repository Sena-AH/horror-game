package group1.horrorgame.demo.services;

import group1.horrorgame.demo.DAO.PlayerDAO;
import group1.horrorgame.demo.models.DTO.PlayerDTO;
import group1.horrorgame.demo.models.Player;
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

    public List<Player> getAllPlayers(){
        List<Player> players = new ArrayList<>();
        for(PlayerDTO playerDTO : playerDAO.getAllPlayers()){
            Player player = mapToPlayer(playerDTO);
            players.add(player);
        }
        return players;
    }

    public Player updatePlayer(Player player, Integer id){
        Player playerToUpdate = getPlayerById(id);

        if(playerToUpdate != null){
            playerToUpdate.setName(player.getName());
            playerToUpdate.setHealth(player.getHealth());
            playerToUpdate.setLevel(player.getLevel());
            playerToUpdate.setFighterScore(player.getFighterScore());
            playerToUpdate.setLiarScore(player.getLiarScore());
            playerToUpdate.setPacifistScore(player.getPacifistScore());
            playerToUpdate.setTotalScore(player.getTotalScore());
        }
        else{
            playerToUpdate.setId(id);
        }
        PlayerDTO updatedPlayer = playerDAO.addPlayer(mapFromPlayer(playerToUpdate));
        return mapToPlayer(updatedPlayer);
    }

    public Player addPlayer(Player player){
        PlayerDTO newPlayerDTO = playerDAO.addPlayer(mapFromPlayer(player));
        return mapToPlayer(newPlayerDTO);
    }

    public Player getPlayerById(int id){
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

    public PlayerDTO mapFromPlayer(Player player) {
        return new PlayerDTO(player.getId(), player.getName(),
                player.getHealth(), player.getLevel(), player.getFighterScore(),
                player.getLiarScore(), player.getPacifistScore(), player.getTotalScore());
    }

    public Player mapToPlayer(PlayerDTO playerDTO) {
        return new Player(playerDTO.getId(), playerDTO.getName(),
                playerDTO.getHealth(), playerDTO.getLevel(), playerDTO.getFighterScore(),
                playerDTO.getLiarScore(), playerDTO.getPacifistScore(), playerDTO.getTotalScore());
    }
}
