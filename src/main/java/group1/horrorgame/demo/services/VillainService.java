package group1.horrorgame.demo.services;

import group1.horrorgame.demo.DAO.VillainDAO;
import group1.horrorgame.demo.models.DTO.PlayerDTO;
import group1.horrorgame.demo.models.DTO.VillainDTO;
import group1.horrorgame.demo.models.Player;
import group1.horrorgame.demo.models.Villain;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class VillainService {
    private final VillainDAO villainDAO;

@Autowired
public VillainService(VillainDAO villainDAO) {
    this.villainDAO = villainDAO;
}
    public List<Villain> getAllVillains(){
        List<Villain> villains = new ArrayList<>();
        for(VillainDTO villainDTO : villainDAO.getAllVillains()){
            Villain villain = mapToVillain(villainDTO);
            villains.add(villain);
        }
        return villains;
}
    public Villain updateVillain(Villain villain, Integer id) {
        Villain villainToUpdate = getVillainById(id);

        if (villainToUpdate != null) {
            villainToUpdate.setVillainName(villain.getVillainName());
            villainToUpdate.setHealth(villain.getHealth());
            villainToUpdate.setSpecialAttack(villain.getSpecialAttack());
            villainToUpdate.setDifficulty(villain.getDifficulty());
            villainToUpdate.setWeakness(villain.getWeakness());

        } else {
            villainToUpdate.setId(id);
        }
        VillainDTO updatedVillain = villainDAO.addVillain(mapFromVillain(villainToUpdate));
        return mapToVillain(updatedVillain);

    }
    public Villain addVillain(Villain villain){
        VillainDTO newVillainDTO = villainDAO.addVillain(mapFromVillain(villain));
        return mapToVillain(newVillainDTO);
    }
    public Villain getVillainById(int id){
        if (villainDAO.findVillainByID(id).isPresent()) {
            return mapToVillain(villainDAO.findVillainByID(id).get());
        }
        return null;
    }
    public void deleteVillian(Integer id){
        villainDAO.deleteVillian(id);
    }

    public void deleteAllPlayers(){
        villainDAO.deleteAllVillains();
    }

    public VillainDTO mapFromVillain(Villain villain) {
        return new VillainDTO(villain.getId(), villain.getVillainName(),
                villain.getHealth(), villain.getSpecialAttack(), villain.getDifficulty(),
                villain.getWeakness());
    }

    public Villain mapToVillain(VillainDTO villainDTO) {
        return new Villain(villainDTO.getId(), villainDTO.getVillainName(),
                villainDTO.getHealth(), villainDTO.getSpecialAttack(), villainDTO.getDifficulty(),
                villainDTO.getWeakness());
    }
}

