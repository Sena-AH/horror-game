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

    @RequestMapping("/samara")
    public String samaraFight() {
        return "samara";
    }

    @RequestMapping("/player")
    public String playerView(){
        return "player";
    }

    @RequestMapping("/jigsaw")
    public String jigsawFight(){
        return "jigsaw";
    }

    @RequestMapping("/intro")
    public String gameIntro(){
        return "intro";
    }

    @RequestMapping("/annabelle")
    public String annabelleFight(){
        return "annabelle";
    }
//
//    @Autowired
//    PlayerService playerService;
//
//    @Autowired
//    VillainService villainService;

}
