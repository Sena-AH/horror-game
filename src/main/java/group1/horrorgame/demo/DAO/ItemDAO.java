package group1.horrorgame.demo.DAO;

import group1.horrorgame.demo.models.DTO.ItemDTO;
import group1.horrorgame.demo.repository.ItemRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public class ItemDAO {

    private final ItemRepository itemRepository;

    public ItemDAO(ItemRepository itemRepository) {
        this.itemRepository = itemRepository;
    }

    public ItemDTO addItem(ItemDTO itemDTO) {
        return itemRepository.save(itemDTO);
    }

    public Iterable<ItemDTO> getAllItems()  {
        return itemRepository.findAll();
    }

    public Optional<ItemDTO> findItemById(Integer id)   {
        return itemRepository.findById(id);
    }

    public void deleteItem(Integer id)  {
        itemRepository.deleteById(id);
    }

    public void deleteAllItems()    {
        itemRepository.deleteAll();
    }
}
