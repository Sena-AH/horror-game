DELETE FROM item;
DELETE FROM villains;

INSERT INTO item (id, attack_points, item_name, special_ability) VALUES
(1, 2, 'priest', 'Uses holy water and chants for extra damage on villains and heals player with one life point'),
(2, 3, 'knife', 'Stab your opponent'),
(3, 2, 'garlic', 'Use to fight vampires'),
(4, 0, 'rope_ladder', 'Use to climb out of pit fall');


INSERT INTO villains (id, difficulty, health, special_attack, villain_name, weakness) VALUES
(1, 7, 10, 'Knife skills', 'Chucky', 'Annabelle');
