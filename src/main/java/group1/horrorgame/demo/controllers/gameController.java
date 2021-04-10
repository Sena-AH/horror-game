package group1.horrorgame.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import group1.horrorgame.demo.services.PlayerService;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class gameController {

   /* @Autowired
    ItemService itemService;*/

    @Autowired
    PlayerService playerService;

   /* @Autowired
    VillainService villainService;*/

    @RequestMapping("players")
    public String showPlayers(Model model){
        model.addAttribute("players", playerService.getAllPlayers());
        return "players";
    }


}
