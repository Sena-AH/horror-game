package group1.horrorgame.demo.servicesTest;
import group1.horrorgame.demo.DAO.ItemDAO;
import group1.horrorgame.demo.models.DTO.ItemDTO;
import group1.horrorgame.demo.models.Item;
import group1.horrorgame.demo.services.ItemService;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentMatchers;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@ExtendWith(MockitoExtension.class)
class ItemServiceTest{
    public static ItemDAO itemDAO;
    public ItemService itemService;
    public List<ItemDTO> allItems;

    @BeforeAll
    public static void initAll() { itemDAO = Mockito.mock(ItemDAO.class); }

    @BeforeEach
    public void init() {
        itemService = new ItemService(itemDAO);
        allItems = new ArrayList<>();
        allItems.add(new ItemDTO(1, "Horror", 10, "ScaryItem"));
        allItems.add(new ItemDTO(2, "Hammer", 15, "Hurts"));
    }

    @Test
    void getAllItems_ShouldGetAllItems(){
        List<Item> expectedItems = new ArrayList<>();
        expectedItems.add(new Item(1, "Sword", 12, "slices"));
        expectedItems.add(new Item(2, "Banana", 5, "Slippery"));

        Mockito.when(itemDAO.getAllItems()).thenReturn(allItems);
        List<Item> actualItems = itemService.getAllItems();

        Assertions.assertThat(actualItems.size()).isEqualTo(expectedItems.size());
    }

    @Test
    void updateItemTest() {
        Item newItem = new Item(3, "Book", 25, "Throw this book");
        ItemDTO itemDTOFromDatabaseFirstIteration = new ItemDTO(3, "Book", 25, "Throw this book");
        ItemDTO itemDTOFromDatabaseSecondIteration = new ItemDTO(3, "Book", 25, "Throw this book");

        Mockito.when(itemDAO.findItemById(1)).thenReturn(Optional.of(itemDTOFromDatabaseFirstIteration));
        Mockito.when(itemDAO.addItem(ArgumentMatchers.any(ItemDTO.class))).thenReturn(itemDTOFromDatabaseSecondIteration);
        Item actualItem = itemService.updateItem(newItem, 1);

        Assertions.assertThat(actualItem.getItemName()).isEqualTo(newItem.getItemName());
    }


    @Test
    void addItem_ShouldAddItemAndReturnCorrectName() {
        ItemDTO itemDTOFromDatabase = new ItemDTO(1, "Candy", 5, "Poison candy");
        Item newItem = new Item(0, "Candy", 5, "Poison candy");

        Mockito.when(itemDAO.addItem(ArgumentMatchers.any(ItemDTO.class))).thenReturn(itemDTOFromDatabase);
        Item createdItem = itemService.addItem(newItem);

        Assertions.assertThat(newItem.getItemName()).isEqualTo(createdItem.getItemName());
    }

    @Test
    void getItemById_ShouldFindItemById() {
        ItemDTO itemDTOFromDatabase = new ItemDTO(1, "Rock", 13, "Throw this");
        Item expectedItem = new Item(1, "Rock", 13, "Throw this");

        Mockito.when(itemDAO.findItemById(1)).thenReturn(Optional.of(itemDTOFromDatabase));
        Item actualItem = itemService.getItemById(1);

        Assertions.assertThat(actualItem.getId()).isEqualTo(expectedItem.getId());
    }

    @Test
    void deleteItem_ShouldInvokeDeleteItem() {
        itemService.deleteItem(1);
        Mockito.verify(itemDAO,Mockito.times(1)).deleteItem(1);
    }

    @Test
    void deleteItem_ShouldNotInvokeAddItem() {
        itemService.deleteItem(1);
        Mockito.verify(itemDAO, Mockito.times(0)).addItem(new ItemDTO(0, null, 0,null));
    }


}
