package group1.horrorgame.demo.services;

import group1.horrorgame.demo.DAO.ItemDAO;
import group1.horrorgame.demo.models.DTO.ItemDTO;
//import group1.horrorgame.demo.models.Item;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import group1.horrorgame.demo.models.recordsmodel.ItemRecord;
import java.util.ArrayList;
import java.util.List;

@Service
public class ItemService {

    private final ItemDAO itemDAO;

    @Autowired
    public ItemService(ItemDAO itemDAO) {
        this.itemDAO = itemDAO;
    }


    public ItemRecord getItemById(Integer id) {
        if (itemDAO.findItemById(id).isPresent())   {
            return mapToItem(itemDAO.findItemById(id).get());
        }
        return null;
    }

    public ItemRecord addItem(ItemRecord item)  {
        ItemDTO newItemDTO = itemDAO.addItem(mapFromItem(item));
        return mapToItem(newItemDTO);
    }

    public void deleteItem(Integer id)  {
        itemDAO.deleteItem(id);
    }

    public void deleteAllItems()    {
        itemDAO.deleteAllItems();
    }

    public List<ItemRecord> getAllItems() {
        List<ItemRecord> items = new ArrayList<>();
        for (ItemDTO itemDTO : itemDAO.getAllItems())   {
            ItemRecord item = mapToItem(itemDTO);
            items.add(item);
        }
        return items;
    }

    public ItemRecord updateItem(ItemRecord item, Integer id)   {
        ItemRecord itemToUpdate = getItemById(id);

        if (itemToUpdate != null)   {
            itemToUpdate.itemName(item.itemName());
            itemToUpdate.id(item.id());
           /* itemToUpdate.setAttackPoints(item.getAttackPoints());*/
            itemToUpdate.specialAbility(item.specialAbility());
        }

        ItemDTO updatedItem = itemDAO.addItem(mapFromItem(item));
        return mapToItem(updatedItem);
    }

    private ItemDTO mapFromItem(ItemRecord item) {
        return new ItemDTO(item.getId(), item.getItemName() /*,
                item.getAttackPoints()*/, item.getSpecialAbility());
    }

    private ItemRecord mapToItem(ItemDTO itemDTO) {
        return new ItemRecord(itemDTO.getId(), itemDTO.getItemName(),
                /*itemDTO.getAttackPoints(),*/ itemDTO.getSpecialAbility());
    }
}
