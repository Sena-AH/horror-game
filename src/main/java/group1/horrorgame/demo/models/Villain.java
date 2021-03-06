package group1.horrorgame.demo.models;

public class Villain {
    private Integer id;
    private String villainName;
    private double health;
    private String specialAttack;
    private String difficulty;
    private String weakness;

    public Villain(Integer id,String villainName, double health, String specialAttack, String difficulty, String weakness) {
        this.id = id;
        this.villainName = villainName;
        this.health = health;
        this.specialAttack = specialAttack;
        this.difficulty = difficulty;
        this.weakness = weakness;
    }

    public Villain() {
    }

    public Integer getId(){
        return id;
    }

    public void setId(Integer id){
        this.id = id;
    }

    public String getVillainName() {
        return villainName;
    }

    public void setVillainName(String villainName) {
        this.villainName = villainName;
    }

    public double getHealth() {
        return health;
    }

    public void setHealth(double health) {
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
