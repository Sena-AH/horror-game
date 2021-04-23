package group1.horrorgame.demo.models.recordsmodel;

public record PlayerRecord(String name, Integer id) {
    public PlayerRecord(String name, Integer id) {
        this.name = name;
        this.id = id;
    }
}
