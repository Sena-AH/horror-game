package group1.horrorgame.demo.models.DTO;
import javax.persistence.*;

@Entity
@Table(name = "players")
public class PlayerDTO {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
//    private double health;
//    private String level;
//    private int fighterScore;
//    private int liarScore;
//    private int pacifistScore;
//    private int totalScore;

    public PlayerDTO(Integer id, String name) {
        this.id = id;
        this.name = name;
//        this.health = health;
//        this.level = level;
//        this.fighterScore = fighterScore;
//        this.liarScore = liarScore;
//        this.pacifistScore = pacifistScore;
//        this.totalScore = totalScore;
    }
    public PlayerDTO(){

    }

    public int getId(){
        return id;
    }

    public void setId(int id){
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

//    public double getHealth() {
//        return health;
//    }
//
//    public void setHealth(double health) {
//        this.health = health;
//    }
//
//    public String getLevel() {
//        return level;
//    }
//
//    public void setLevel(String level) {
//        this.level = level;
//    }
//
//    public int getFighterScore() {
//        return fighterScore;
//    }
//
//    public void setFighterScore(int fighterScore) {
//        this.fighterScore = fighterScore;
//    }
//
//    public int getLiarScore() {
//        return liarScore;
//    }
//
//    public void setLiarScore(int liarScore) {
//        this.liarScore = liarScore;
//    }
//
//    public int getPacifistScore() {
//        return pacifistScore;
//    }
//
//    public void setPacifistScore(int pacifistScore) {
//        this.pacifistScore = pacifistScore;
//    }
//
//    public int getTotalScore() {
//        return totalScore;
//    }
//
//    public void setTotalScore(int totalScore) {
//        this.totalScore = totalScore;
//    }
}
