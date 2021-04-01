package group1.horrorgame.demo.models;

public class item {
    private String itemName;
    private int attackPoints;
    private String specialAbility;

    public item(String itemName, int attackPoints, String specialAbility) {
        this.itemName = itemName;
        this.attackPoints = attackPoints;
        this.specialAbility = specialAbility;
    }

    public item() {
    }

    public String getItemName() {
        return itemName;
    }

    public void setItemName(String itemName) {
        this.itemName = itemName;
    }

    public int getAttackPoints() {
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
