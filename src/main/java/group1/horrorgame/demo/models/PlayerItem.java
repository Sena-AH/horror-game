package group1.horrorgame.demo.models;

public class PlayerItem {

    private Integer id;
    private String itemName;
    private Integer playerId;

    public PlayerItem(Integer id, String itemName, Integer playerId) {
        this.id = id;
        this.itemName = itemName;
        this.playerId = playerId;
    }

    public PlayerItem() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getItemName() {
        return itemName;
    }

    public void setItemName(String itemName) {
        this.itemName = itemName;
    }

    public Integer getPlayerId() {
        return playerId;
    }

    public void setPlayerId(Integer playerId) {
        this.playerId = playerId;
    }
}
