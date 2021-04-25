package group1.horrorgame.demo.models;

public class PlayerItem {

    private Integer id;
    private String item_name;
    private Integer player_id;

    public PlayerItem(Integer id, String itemName, Integer playerId) {
        this.id = id;
        this.item_name = itemName;
        this.player_id = playerId;
    }



    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getItemName() {
        return item_name;
    }

    public void setItemName(String itemName) {
        this.item_name = itemName;
    }

    public Integer getPlayerId() {
        return player_id;
    }

    public void setPlayerId(Integer playerId) {
        this.player_id = playerId;
    }
}
