package group1.horrorgame.demo.DAO;

import group1.horrorgame.demo.repository.ItemRepository;
import org.springframework.stereotype.Repository;

@Repository
public class ItemDAO {

    private final ItemRepository itemRepository;

    public ItemDAO(ItemRepository itemRepository) {
        this.itemRepository = itemRepository;
    }
}
