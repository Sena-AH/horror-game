package group1.horrorgame.demo.servicesTest;
import group1.horrorgame.demo.DAO.ItemDAO;
import group1.horrorgame.demo.models.DTO.ItemDTO;
import group1.horrorgame.demo.services.ItemService;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentMatchers;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;
import java.util.List;
@ExtendWith(MockitoExtension.class)
class ItemServiceTest{
    public static ItemDAO itemDAO;
    public ItemService itemService;
    public List<ItemDTO> allItems;
    @BeforeAll
    public static void initAll() {
        itemDAO = Mockito.mock(ItemDAO.class);
    }
}