package group1.horrorgame.demo.models;

public class player {
    private String name;
    private double health;
    private String level;
    private int fighterScore;
    private int liarScore;
    private int pacifistScore;
    private int totalScore;

    public player(String name, double health, String level, int fighterScore, int liarScore, int pacifistScore, int totalScore) {
        this.name = name;
        this.health = health;
        this.level = level;
        this.fighterScore = fighterScore;
        this.liarScore = liarScore;
        this.pacifistScore = pacifistScore;
        this.totalScore = totalScore;
    }

    public player() {
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getHealth() {
        return health;
    }

    public void setHealth(double health) {
        this.health = health;
    }

    public String getLevel() {
        return level;
    }

    public void setLevel(String level) {
        this.level = level;
    }

    public int getFighterScore() {
        return fighterScore;
    }

    public void setFighterScore(int fighterScore) {
        this.fighterScore = fighterScore;
    }

    public int getLiarScore() {
        return liarScore;
    }

    public void setLiarScore(int liarScore) {
        this.liarScore = liarScore;
    }

    public int getPacifistScore() {
        return pacifistScore;
    }

    public void setPacifistScore(int pacifistScore) {
        this.pacifistScore = pacifistScore;
    }

    public int getTotalScore() {
        return totalScore;
    }

    public void setTotalScore(int totalScore) {
        this.totalScore = totalScore;
    }
}
