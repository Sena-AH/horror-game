package group1.horrorgame.demo.servicesTest;

import group1.horrorgame.demo.DAO.PlayerDAO;
import group1.horrorgame.demo.DAO.VillainDAO;
import group1.horrorgame.demo.models.DTO.PlayerDTO;
import group1.horrorgame.demo.models.DTO.VillainDTO;
import group1.horrorgame.demo.models.Villain;
import group1.horrorgame.demo.services.PlayerService;
import group1.horrorgame.demo.services.VillainService;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentMatchers;
import org.mockito.Mockito;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@ExtendWith(MockitoExtension.class)
class VillainServiceTest {

    public static VillainDAO villainDAO;
    public VillainService villainService;
    public List<VillainDTO> allVillains;

    @BeforeAll
    public static void initAll() {
        villainDAO = Mockito.mock(VillainDAO.class);
    }

    @Test
    void getAllVillains_ShouldGetAllVillains(){
        List<Villain> expectedVillains = new ArrayList<>();
        expectedVillains.add(new Villain(1, "Chucky", 10, "Knife skills", "7", "Annabelle"));
        expectedVillains.add(new Villain(2, "Jigsaw", 10, "Torture games", "5", "His tricycle"));

        Mockito.when(villainDAO.getAllVillains()).thenReturn(allVillains);
        List<Villain> actualVillains = villainService.getAllVillains();

        Assertions.assertThat(actualVillains.size()).isEqualTo(expectedVillains.size());
    }

    @Test
    void updateVillainTest() {
        Villain newVillain = new Villain(3, "Sadako", 10, "Cursed Eye", "10", "Wells");
        VillainDTO villainDTOFromDatabaseFirstIteration = new VillainDTO(3, "Sadako", 10, "Cursed Eye", "10", "Wells");;
        VillainDTO villainDTOFromDatabaseSecondIteration = new VillainDTO(3, "Sadako", 10, "Cursed Eye", "10", "Wells");;

        Mockito.when(villainDAO.findVillainByID(1)).thenReturn(Optional.of(villainDTOFromDatabaseFirstIteration));
        Mockito.when(villainDAO.addVillain(ArgumentMatchers.any(VillainDTO.class))).thenReturn(villainDTOFromDatabaseSecondIteration);
        Villain actualVillain = villainService.updateVillain(newVillain, 1);

        Assertions.assertThat(actualVillain.getVillainName()).isEqualTo(newVillain.getVillainName());
    }

}
