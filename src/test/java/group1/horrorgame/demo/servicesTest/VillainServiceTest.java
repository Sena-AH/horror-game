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
class VillainServiceTest {

    public static VillainDAO villainDAO;
    public VillainService villainService;
    public List<VillainDTO> allVillains;

    @BeforeAll
    public static void initAll() {
        villainDAO = Mockito.mock(VillainDAO.class);
    }

    @BeforeEach
    public void init() {
        villainService = new VillainService(villainDAO);
        allVillains = new ArrayList<>();
        allVillains.add(new VillainDTO(1, "Chucky", 10, "Knife skills", "7", "Annabelle"));
        allVillains.add(new VillainDTO(2, "Jigsaw", 10, "Torture games", "5", "His tricycle"));
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


    @Test
    void addVillain_ShouldAddVillainAndReturnCorrectName() {
        VillainDTO villainDTOFromDatabase = new VillainDTO(1, "Chucky", 10, "Knife skills", "7", "Annabelle");
        Villain newVillain = new Villain(0, "Chucky", 10, "Knife skills", "7", "Annabelle");

        Mockito.when(villainDAO.addVillain(ArgumentMatchers.any(VillainDTO.class))).thenReturn(villainDTOFromDatabase);
        Villain createdVillain = villainService.addVillain(newVillain);

        Assertions.assertThat(newVillain.getVillainName()).isEqualTo(createdVillain.getVillainName());
    }

    @Test
    void getVillainById_ShouldFindVillainById() {
        VillainDTO villainDTOFromDatabase = new VillainDTO(1, "Chucky", 10, "Knife skills", "7", "Annabelle");
        Villain expectedVillain = new Villain(1, "Chucky", 10, "Knife skills", "7", "Annabelle");

        Mockito.when(villainDAO.findVillainByID(1)).thenReturn(Optional.of(villainDTOFromDatabase));
        Villain actualVillain = villainService.getVillainById(1);

        Assertions.assertThat(actualVillain.getId()).isEqualTo(expectedVillain.getId());
    }

    @Test
    void deleteVillain_ShouldInvokeDeleteVillain() {
        villainService.deleteVillain(1);
        Mockito.verify(villainDAO,Mockito.times(1)).deleteVillain(1);
    }

    @Test
    void deleteVillain_ShouldNotInvokeAddVillain() {
        villainService.deleteVillain(1);
        Mockito.verify(villainDAO, Mockito.times(0)).addVillain(new VillainDTO(0, null, 0,null,null,null));
    }


}
