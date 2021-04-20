package group1.horrorgame.demo.models.DTO;


import group1.horrorgame.demo.models.PlayerItem;

import javax.persistence.*;
import java.net.Inet4Address;

@Entity
@Table(name = "playerItems")
public class PlayerItemDTO {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String item_name;
    private Integer player_id;

    public PlayerItemDTO(Integer id, String item_name, Integer player_id)   {
        this.id = id;
        this.item_name = item_name;
        this.player_id = player_id;
    }

    public PlayerItemDTO(){

    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getItem_name() {
        return item_name;
    }

    public void setItem_name(String item_name) {
        this.item_name = item_name;
    }

    public Integer getPlayer_id() {
        return player_id;
    }

    public void setPlayer_id(Integer player_id) {
        this.player_id = player_id;
    }
}
