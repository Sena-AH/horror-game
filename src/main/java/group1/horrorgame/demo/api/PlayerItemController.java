package group1.horrorgame.demo.api;


import group1.horrorgame.demo.models.Item;
import group1.horrorgame.demo.models.PlayerItem;
import group1.horrorgame.demo.services.ItemService;
import group1.horrorgame.demo.services.PlayerItemService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/player_items")
public class PlayerItemController {

    final PlayerItemService playerItemService;

    public PlayerItemController(PlayerItemService playerItemService) {
        this.playerItemService = playerItemService;
    }

    @GetMapping("/{id}")
    public PlayerItem getPlayerItemsById(@PathVariable("id") Integer id) {
        return playerItemService.getPlayerItemById(id);
    }

    @GetMapping()
    public List<PlayerItem> getAllItems(){
        return playerItemService.getAllPlayerItems();
    }

    @PostMapping
    public PlayerItem addPlayerItem(@RequestBody PlayerItem playerItem) {
        return playerItemService.addPlayerItem(playerItem);
    }

    @DeleteMapping("/{id}")
    public void deletePlayerItems(@PathVariable("id") Integer id)  {
        playerItemService.deletePlayerItem(id);
    }

    @PutMapping("/{id}")
    public PlayerItem updatePlayerItem(@PathVariable("id") Integer id,
                           @RequestBody PlayerItem newPlayerItem)  {
        return playerItemService.updatePlayerItem(newPlayerItem, id);
    }

    @DeleteMapping("/empty-database")
    public void deleteAllPlayerItems()    {
        playerItemService.deleteAllPlayerItems();
    }



}
