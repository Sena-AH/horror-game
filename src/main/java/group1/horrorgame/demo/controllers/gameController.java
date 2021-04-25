package group1.horrorgame.demo.controllers;

import group1.horrorgame.demo.services.ItemService;
import group1.horrorgame.demo.services.PlayerItemService;
import group1.horrorgame.demo.services.PlayerService;
import group1.horrorgame.demo.services.VillainService;
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

    @Autowired
    VillainService villainService;

    @Autowired
    PlayerItemService playerItemService;


    @RequestMapping("/index")
    public String start()   {
        return "index";
    }

    @RequestMapping("/player_item")
    public String playerItems() { return "player_item"; }

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

    @RequestMapping("/chucky")
    public String chuckyFight(){
        return "chucky";
    }
//
//    @Autowired
//    PlayerService playerService;
//
//    @Autowired
//    VillainService villainService;

}
