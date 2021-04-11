package group1.horrorgame.demo.services;

import group1.horrorgame.demo.DAO.ItemDAO;
import group1.horrorgame.demo.models.DTO.ItemDTO;
import group1.horrorgame.demo.models.Item;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ItemService {

    private final ItemDAO itemDAO;

    @Autowired
    public ItemService(ItemDAO itemDAO) {
        this.itemDAO = itemDAO;
    }


    public Item getItemById(Integer id) {
        if (itemDAO.findItemById(id).isPresent())   {
            return mapToItem(itemDAO.findItemById(id).get());
        }
        return null;
    }

    public Item addItem(Item item)  {
        ItemDTO newItemDTO = itemDAO.addItem(mapFromItem(item));
        return mapToItem(newItemDTO);
    }

    public void deleteItem(Integer id)  {
        itemDAO.deleteItem(id);
    }

    public void deleteAllItems()    {
        itemDAO.deleteAllItems();
    }

    public List<Item> getAllItems() {
        List<Item> items = new ArrayList<>();
        for (ItemDTO itemDTO : itemDAO.getAllItems())   {
            Item item = mapToItem(itemDTO);
            items.add(item);
        }
        return items;
    }

    public Item updateItem(Item item, Integer id)   {
        Item itemToUpdate = getItemById(id);

        if (itemToUpdate != null)   {
            itemToUpdate.setItemName(item.getItemName());
            itemToUpdate.setAttackPoints(item.getAttackPoints());
            itemToUpdate.setSpecialAbility(item.getSpecialAbility());
        }

        ItemDTO updatedItem = itemDAO.addItem(mapFromItem(item));
        return mapToItem(updatedItem);
    }

    private ItemDTO mapFromItem(Item item) {
        return new ItemDTO(item.getId(), item.getItemName(),
                item.getAttackPoints(), item.getSpecialAbility());
    }

    private Item mapToItem(ItemDTO itemDTO) {
        return new Item(itemDTO.getId(), itemDTO.getItemName(),
                itemDTO.getAttackPoints(), itemDTO.getSpecialAbility());
    }
}
