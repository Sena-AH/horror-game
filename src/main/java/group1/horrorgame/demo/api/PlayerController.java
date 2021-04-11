package group1.horrorgame.demo.api;

import org.springframework.web.bind.annotation.*;
import group1.horrorgame.demo.models.Player;
import group1.horrorgame.demo.services.PlayerService;

import java.util.List;

@RestController
@RequestMapping("/api/player")
public class PlayerController {
    final PlayerService playerService;


    public PlayerController(PlayerService playerService){
        this.playerService = playerService;
    }
    @GetMapping()
    public List<Player> getAllPlayers(){
        return playerService.getAllPlayers();
    }

    @GetMapping("/{id}")
    public Player getPlayerById(@PathVariable("id") Integer id){
        return playerService.getPlayerById(id);
    }

    @PostMapping
    public Player addPlayer(@RequestBody Player player){
        return playerService.addPlayer(player);
    }

    @DeleteMapping("/{id}")
    public void deletePlayer(@PathVariable("id") Integer id){
        playerService.deletePlayer(id);
    }

    @PutMapping("/{id}")
    public Player updatePlayer(@PathVariable("id") Integer id,
                               @RequestBody Player newPlayer){
        return playerService.updatePlayer(newPlayer, id);
    }

    @DeleteMapping("/clear-database")
    public void deleteAllPlayers(){
        playerService.deleteAllPlayers();
    }

}

