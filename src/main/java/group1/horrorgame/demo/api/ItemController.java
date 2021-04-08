package group1.horrorgame.demo.api;


import group1.horrorgame.demo.models.Item;
import group1.horrorgame.demo.services.ItemService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
}
