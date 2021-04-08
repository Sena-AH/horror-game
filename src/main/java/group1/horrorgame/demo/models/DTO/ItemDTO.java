package group1.horrorgame.demo.models.DTO;


import javax.persistence.*;

@Entity
@Table(name = "item")
public class ItemDTO {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String itemName;
    private Integer attackPoints;
    private String specialAbility;

    public ItemDTO(Integer id, String itemName, Integer attackPoints, String specialAbility) {
        this.id = id;
        this.itemName = itemName;
        this.attackPoints = attackPoints;
        this.specialAbility = specialAbility;
    }

    public ItemDTO()    {
    }

    public Integer getId() {
        return id;
    }

    public String getItemName() {
        return itemName;
    }

    public Integer getAttackPoints() {
        return attackPoints;
    }

    public String getSpecialAbility() {
        return specialAbility;
    }
}
