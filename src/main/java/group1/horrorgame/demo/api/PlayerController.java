package group1.horrorgame.demo.api;

import group1.horrorgame.demo.models.recordsmodel.PlayerRecord;
import org.springframework.web.bind.annotation.*;
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
    public List<PlayerRecord> getAllPlayers(){
        return playerService.getAllPlayers();
    }

    @GetMapping("/{id}")
    public PlayerRecord getPlayerById(@PathVariable("id") Integer id){
        return playerService.getPlayerById(id);
    }

    @PostMapping
    public PlayerRecord addPlayer(@RequestBody PlayerRecord player){
        return playerService.addPlayer(player);
    }

    @DeleteMapping("/{id}")
    public void deletePlayer(@PathVariable("id") Integer id){
        playerService.deletePlayer(id);
    }

    @PutMapping("/{id}")
    public PlayerRecord updatePlayer(@PathVariable("id") Integer id,
                                     @RequestBody PlayerRecord newPlayer){
        return playerService.updatePlayer(newPlayer, id);
    }

    @DeleteMapping("/clear-database")
    public void deleteAllPlayers(){
        playerService.deleteAllPlayers();
    }

}

