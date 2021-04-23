package group1.horrorgame.demo.api;


import group1.horrorgame.demo.models.recordsmodel.ItemRecord;
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
    public ItemRecord getItemById(@PathVariable("id") Integer id) {
        return itemService.getItemById(id);
    }

    @GetMapping()
    public List<ItemRecord> getAllItems(){
        return itemService.getAllItems();
    }

    @PostMapping
    public ItemRecord addItem(@RequestBody ItemRecord item) {
        return itemService.addItem(item);
    }

    @DeleteMapping("/{id}")
    public void deleteItem(@PathVariable("id") Integer id)  {
        itemService.deleteItem(id);
    }

    @PutMapping("/{id}")
    public ItemRecord updateItem(@PathVariable("id") Integer id,
                           @RequestBody ItemRecord newItem)  {
        return itemService.updateItem(newItem, id);
    }

    @DeleteMapping("/empty-database")
    public void deleteAllItems()    {
        itemService.deleteAllItems();
    }
}
