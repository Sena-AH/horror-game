package group1.horrorgame.demo.servicesTest;

import group1.horrorgame.demo.DAO.PlayerDAO;
import group1.horrorgame.demo.models.DTO.PlayerDTO;
import group1.horrorgame.demo.services.PlayerService;
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
class PlayerServiceTest{

    public static PlayerDAO playerDAO;
    public PlayerService playerService;
    public List<PlayerDTO> allplayers;

    @BeforeAll
    public static void initAll() {
        playerDAO = Mockito.mock(PlayerDAO.class);
    }

    @Test
    void shouldGetAllPlayers(){

    }

}