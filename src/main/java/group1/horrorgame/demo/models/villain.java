package group1.horrorgame.demo.models;

public class villain {
    private String villainName;
    private int health;
    private String specialAttack;
    private String difficulty;
    private String weakness;

    public villain(String villainName, int health, String specialAttack, String difficulty, String weakness) {
        this.villainName = villainName;
        this.health = health;
        this.specialAttack = specialAttack;
        this.difficulty = difficulty;
        this.weakness = weakness;
    }

    public villain() {
    }

    public String getVillainName() {
        return villainName;
    }

    public void setVillainName(String villainName) {
        this.villainName = villainName;
    }

    public int getHealth() {
        return health;
    }

    public void setHealth(int health) {
        this.health = health;
    }

    public String getSpecialAttack() {
        return specialAttack;
    }

    public void setSpecialAttack(String specialAttack) {
        this.specialAttack = specialAttack;
    }

    public String getDifficulty() {
        return difficulty;
    }

    public void setDifficulty(String difficulty) {
        this.difficulty = difficulty;
    }

    public String getWeakness() {
        return weakness;
    }

    public void setWeakness(String weakness) {
        this.weakness = weakness;
    }
}
