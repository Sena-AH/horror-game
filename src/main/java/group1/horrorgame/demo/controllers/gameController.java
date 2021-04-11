package group1.horrorgame.demo.controllers;

import group1.horrorgame.demo.services.ItemService;
import group1.horrorgame.demo.services.PlayerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class gameController {
//
    @Autowired
    ItemService itemService;

    @Autowired
    PlayerService playerService;

    @RequestMapping("/index")
    public String start()   {
        return "index";
    }

    @RequestMapping("/fight-1")
    public String startFight1() {
        return "fight-1";
    }

    @RequestMapping("/player")
    public String playerView(){
        return "player";
    }

//    @Autowired
//    VillainService villainService;

}
