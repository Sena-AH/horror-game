package group1.horrorgame.demo.servicesTest;

import group1.horrorgame.demo.DAO.PlayerDAO;
import group1.horrorgame.demo.models.DTO.PlayerDTO;
import group1.horrorgame.demo.models.DTO.VillainDTO;
import group1.horrorgame.demo.models.Player;
import group1.horrorgame.demo.models.Villain;
import group1.horrorgame.demo.services.PlayerService;
import group1.horrorgame.demo.services.VillainService;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentMatchers;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@ExtendWith(MockitoExtension.class)
class PlayerServiceTest{

    public static PlayerDAO playerDAO;
    public PlayerService playerService;
    public List<PlayerDTO> allPlayers;

    @BeforeAll
    public static void initAll() {
        playerDAO = Mockito.mock(PlayerDAO.class);
    }

    @BeforeEach
    public void init() {
        playerService = new PlayerService(playerDAO);
        allPlayers = new ArrayList<>();
        allPlayers.add(new PlayerDTO(1, "Sena", 10, "9", 3, 2, 4, 10 ));
        allPlayers.add(new PlayerDTO(2, "Rui", 10, "7", 5, 0, 2, 7 ));
    }

    @Test
    void getAllPlayers_ShouldGetAllPlayers(){
        List<Player> expectedPlayers = new ArrayList<>();
        expectedPlayers.add(new Player(1, "Sena", 10, "9", 3, 2, 4, 10 ));
        expectedPlayers.add(new Player(2, "Rui", 10, "7", 5, 0, 2, 7 ));

        Mockito.when(playerDAO.getAllPlayers()).thenReturn(allPlayers);
        List<Player> actualPlayers = playerService.getAllPlayers();

        Assertions.assertThat(actualPlayers.size()).isEqualTo(expectedPlayers.size());
    }

    @Test
    void updatePlayerTest() {
        Player newPlayer = new Player(3, "Totoro", 10, "3", 0, 6, 0, 6 );
        PlayerDTO playerDTOFromDatabaseFirstIteration = new PlayerDTO(3, "Totoro", 10, "3", 0, 6, 0, 6 );
        PlayerDTO playerDTOFromDatabaseSecondIteration = new PlayerDTO(3, "Totoro", 10, "3", 0, 6, 0, 6 );

        Mockito.when(playerDAO.findPlayerByID(1)).thenReturn(Optional.of(playerDTOFromDatabaseFirstIteration));
        Mockito.when(playerDAO.addPlayer(ArgumentMatchers.any(PlayerDTO.class))).thenReturn(playerDTOFromDatabaseSecondIteration);
        Player actualPlayer = playerService.updatePlayer(newPlayer, 1);

        Assertions.assertThat(actualPlayer.getName()).isEqualTo(newPlayer.getName());
    }


    @Test
    void addPlayer_ShouldAddPlayerAndReturnCorrectName() {
        PlayerDTO playerDTOFromDatabase = new PlayerDTO(1, "Sena", 10, "9", 3, 2, 4, 10 );
        Player newPlayer = new Player(null, "Sena", 10, "9", 3, 2, 4, 10 );

        Mockito.when(playerDAO.addPlayer(ArgumentMatchers.any(PlayerDTO.class))).thenReturn(playerDTOFromDatabase);
        Player createdPlayer = playerService.addPlayer(newPlayer);

        Assertions.assertThat(newPlayer.getName()).isEqualTo(createdPlayer.getName());
    }

    @Test
    void getPlayerById_ShouldFindPlayerById() {
        PlayerDTO playerDTOFromDatabase = new PlayerDTO(1, "Sena", 10, "9", 3, 2, 4, 10 );
        Player expectedPlayer = new Player(1, "Sena", 10, "9", 3, 2, 4, 10 );

        Mockito.when(playerDAO.findPlayerByID(1)).thenReturn(Optional.of(playerDTOFromDatabase));
        Player actualPlayer = playerService.getPlayerById(1);

        Assertions.assertThat(actualPlayer.getId()).isEqualTo(expectedPlayer.getId());
    }

    @Test
    void deletePlayer_ShouldInvokeDeletePlayer() {
        playerService.deletePlayer(1);
        Mockito.verify(playerDAO,Mockito.times(1)).deletePlayer(1);
    }

    @Test
    void deletePlayer_ShouldNotInvokeAddVillain() {
        playerService.deletePlayer(1);
        Mockito.verify(playerDAO, Mockito.times(0)).addPlayer(new PlayerDTO(null, null, null,null,null,null,null, null));
    }


}