package group1.horrorgame.demo.api;


import group1.horrorgame.demo.models.Item;
import group1.horrorgame.demo.services.ItemService;
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
        return PlayerItemService.getPlayerItemById(id);
    }

    @GetMapping()
    public List<PlayerItem> getAllItems(){
        return PlayerItemService.getAllItems();
    }

    @PostMapping
    public PlayerItem addItem(@RequestBody PlayerItem playerItem) {
        return PlayerItemService.addItem(playerItem);
    }

    @DeleteMapping("/{id}")
    public void deletePlayerItems(@PathVariable("id") Integer id)  {
        PlayerItemService.deleteItem(id);
    }

    @PutMapping("/{id}")
    public PlayerItem updateItem(@PathVariable("id") Integer id,
                           @RequestBody PlayerItem newPlayerItem)  {
        return PlayerItemService.updatePlayerItem(newPlayerItem, id);
    }

    @DeleteMapping("/empty-database")
    public void deleteAllPlayerItems()    {
        PlayerItemsService.deleteAllItems();
    }



}
