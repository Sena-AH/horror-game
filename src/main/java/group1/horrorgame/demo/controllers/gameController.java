package group1.horrorgame.demo.controllers;

import group1.horrorgame.demo.services.ItemService;
import group1.horrorgame.demo.services.PlayerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class gameController {

    @Autowired
    ItemService itemService;

    @Autowired
    PlayerService playerService;
    @RequestMapping("player")
    public String showPlayers(Model model){
        return "player";
    }
//
//    @Autowired
//    VillainService villainService;

}
