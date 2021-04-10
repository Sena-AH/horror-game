package group1.horrorgame.demo.controllers;

import group1.horrorgame.demo.services.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class gameController {
//
    @Autowired
    ItemService itemService;

    @RequestMapping("/index")
    public String start()   {
        return "index";
    }

    @RequestMapping("/fight-1")
    public String startFight1() {
        return "fight-1";
    }

//
//    @Autowired
//    PlayerService playerService;
//
//    @Autowired
//    VillainService villainService;

}
