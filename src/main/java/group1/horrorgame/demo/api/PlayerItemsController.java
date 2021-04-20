package group1.horrorgame.demo.api;


import group1.horrorgame.demo.models.Item;
import group1.horrorgame.demo.services.ItemService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/player_items")
public class PlayerItemsController {

    final PlayerItemsService playerItemsService;

    public PlayerItemsController(PlayerItemsService playerItemsService) {
        this.playerItemsService = playerItemsService;
    }

    @GetMapping("/{id}")
    public PlayerItems getPlayerItemsById(@PathVariable("id") Integer id) {
        return PlayerItemsService.getPlayerItemsById(id);
    }

    @GetMapping()
    public List<PlayerItems> getAllItems(){
        return PlayerItemsService.getAllItems();
    }

    @PostMapping
    public PlayerItems addItem(@RequestBody PlayerItems playerItems) {
        return PlayerItemsService.addItem(playerItems);
    }

    @DeleteMapping("/{id}")
    public void deletePlayerItems(@PathVariable("id") Integer id)  {
        PlayerItemsService.deleteItem(id);
    }

    @PutMapping("/{id}")
    public PlayerItems updateItem(@PathVariable("id") Integer id,
                           @RequestBody PlayerItems newPlayerItems)  {
        return PlayerItemsService.updatePlayerItems(newPlayerItems, id);
    }

    @DeleteMapping("/empty-database")
    public void deleteAllPlayerItems()    {
        PlayerItemsService.deleteAllItems();
    }



}
