package group1.horrorgame.demo.api;


import group1.horrorgame.demo.models.Item;
import group1.horrorgame.demo.services.ItemService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/items")
public class ItemController {

    final ItemService itemService;

    public ItemController(ItemService itemService) {
        this.itemService = itemService;
    }

    @GetMapping("/{id}")
    public Item getItemById(@PathVariable("id") Integer id) {
        return itemService.getItemById(id);
    }

    @GetMapping()
    public List<Item> getAllItems(){
        return itemService.getAllItems();
    }

    @PostMapping
    public Item addItem(@RequestBody Item item) {
        return itemService.addItem(item);
    }

    @DeleteMapping("/{id}")
    public void deleteItem(@PathVariable("id") Integer id)  {
        itemService.deleteItem(id);
    }

    @PutMapping("/{id}")
    public Item updateItem(@PathVariable("id") Integer id,
                           @RequestBody Item newItem)  {
        return itemService.updateItem(newItem, id);
    }

    @DeleteMapping("/empty-database")
    public void deleteAllItems()    {
        itemService.deleteAllItems();
    }
}
