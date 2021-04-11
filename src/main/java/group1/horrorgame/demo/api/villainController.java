package group1.horrorgame.demo.api;

import group1.horrorgame.demo.models.Player;
import group1.horrorgame.demo.models.Villain;
import group1.horrorgame.demo.services.PlayerService;
import group1.horrorgame.demo.services.VillainService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/villain")
public class VillainController {
    final VillainService villainService;


    public VillainController(VillainService villainService){
        this.villainService = villainService;
    }
    @GetMapping()
    public List<Villain> getAllVillains(){
        return villainService.getAllVillains();
    }

    @GetMapping("/{id}")
    public Villain getVillainById(@PathVariable("id") Integer id){
        return villainService.getVillainById(id);
    }

    @PostMapping
    public Villain addVillain(@RequestBody Villain villain){
        return villainService.addVillain(villain);
    }

    @DeleteMapping("/{id}")
    public void deleteVillain(@PathVariable("id") Integer id){
        villainService.deleteVillian(id);
    }

    @PutMapping("/{id}")
    public Villain updateVillain(@PathVariable("id") Integer id,
                               @RequestBody Villain newVillain){
        return villainService.updateVillain(newVillain, id);
    }

    @DeleteMapping("/clear-database")
    public void deleteAllVillains(){
        villainService.deleteAllVillains();
    }


}
