package group1.horrorgame.demo.servicesTest;

import group1.horrorgame.demo.DAO.PlayerItemDAO;
import group1.horrorgame.demo.models.DTO.PlayerItemDTO;
import group1.horrorgame.demo.models.PlayerItem;
import group1.horrorgame.demo.services.PlayerItemService;

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
class PlayerItemServiceTest {

    public static PlayerItemDAO playerItemDAO;
    public PlayerItemService playerItemService;
    public List<PlayerItemDTO> allPlayerItems;

    @BeforeAll
    public static void initializeAll()  {
        playerItemDAO = Mockito.mock(PlayerItemDAO.class);
    }

    @BeforeEach
    public void initialize()    {
        playerItemService = new PlayerItemService(playerItemDAO);
        allPlayerItems = new ArrayList<>();
        allPlayerItems.add(new PlayerItemDTO(16, "Tire glue", 1));
        allPlayerItems.add(new PlayerItemDTO(18, "Golden tooth", 3));
        allPlayerItems.add(new PlayerItemDTO(22, "Cat nip", 1));
    }

    @Test
    void updatePlayerItemsTest()    {
        PlayerItem newPlayerItem = new PlayerItem(77, "Fork", 1);
        PlayerItemDTO playerItemDataTransferFromDBFirstIteration = new PlayerItemDTO(77, "Fork", 1);
        PlayerItemDTO playerItemDataTransferFromDBSecondIteration = new PlayerItemDTO(77, "Fork", 1);

        Mockito.when(playerItemDAO.findPlayerItemsByID(16)).thenReturn(Optional.of(playerItemDataTransferFromDBFirstIteration));
        Mockito.when(playerItemDAO.addPlayerItems(ArgumentMatchers.any(PlayerItemDTO.class))).thenReturn(playerItemDataTransferFromDBSecondIteration);
        PlayerItem actualPlayerItems = playerItemService.updatePlayerItem(newPlayerItem, 16);

        Assertions.assertThat(actualPlayerItems.getItemName()).isEqualTo(newPlayerItem.getItemName());
    }

    @Test
    void getAllPlayerItems_ShouldReturnAllPlayerItems() {
        List<PlayerItem> expectedPlayerItems = new ArrayList<>();
        expectedPlayerItems.add(new PlayerItem(16, "Tire glue", 1));
        expectedPlayerItems.add(new PlayerItem(18, "Golden tooth", 3));
        expectedPlayerItems.add(new PlayerItem(22, "Cat nip", 1));

        Mockito.when(playerItemDAO.getAllPlayerItems()).thenReturn(allPlayerItems);
        List<PlayerItem> actualPlayerItems = playerItemService.getAllPlayerItems();

        Assertions.assertThat(actualPlayerItems.size()).isEqualTo(expectedPlayerItems.size());
    }

    @Test
    void getPlayerItemsById_ShouldFIndPlayerItemsById() {
        PlayerItemDTO playerItemDTOFromDB = new PlayerItemDTO(18, "Golden tooth", 3);
        PlayerItem expectedPlayerItem = new PlayerItem(18, "Golden tooth", 3);

        Mockito.when(playerItemDAO.findPlayerItemsByID(18)).thenReturn(Optional.of(playerItemDTOFromDB));
        PlayerItem actualPlayerItem = playerItemService.getPlayerItemById(18);

        Assertions.assertThat(actualPlayerItem.getItemName()).isEqualTo(expectedPlayerItem.getItemName());
    }

    @Test
    void addPlayerItems_ShouldAddPlayerItemsAndReturnItemName() {
        PlayerItemDTO playerItemDTOFromDatabase = new PlayerItemDTO(66, "Pitchfork", 66);
        PlayerItem newPlayerItem = new PlayerItem(null, "Pitchfork", 66);

        Mockito.when(playerItemDAO.addPlayerItems(ArgumentMatchers.any(PlayerItemDTO.class))).thenReturn(playerItemDTOFromDatabase);
        PlayerItem createdPlayerItems = playerItemService.addPlayerItem(newPlayerItem);

        Assertions.assertThat(newPlayerItem.getItemName()).isEqualTo((createdPlayerItems.getItemName()));
    }

    @Test
    void deletePlayerItem_ShouldDeletePlayerItem()  {
        playerItemService.deletePlayerItem(18);
        Mockito.verify(playerItemDAO, Mockito.times(1)).deletePlayerItems(18);

    }



}
