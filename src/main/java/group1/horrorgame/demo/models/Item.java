package group1.horrorgame.demo.models;

public class Item {

    private Integer id;
    private String itemName;
    private Integer attackPoints;
    private String specialAbility;

    public Item(Integer id, String itemName, Integer attackPoints, String specialAbility) {
        this.id = id;
        this.itemName = itemName;
        this.attackPoints = attackPoints;
        this.specialAbility = specialAbility;
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

    public Integer getAttackPoints() {
        return attackPoints;
    }

    public void setAttackPoints(int attackPoints) {
        this.attackPoints = attackPoints;
    }

    public String getSpecialAbility() {
        return specialAbility;
    }

    public void setSpecialAbility(String specialAbility) {
        this.specialAbility = specialAbility;
    }
}


//