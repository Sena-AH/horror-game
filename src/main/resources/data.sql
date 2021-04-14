DELETE FROM item;
DELETE FROM villains;

INSERT INTO item (id, attack_points, item_name, special_ability) VALUES
(1, 2, 'Priest', 'Uses holy water and chants for extra damage on villains and heals player with one life point'),
(2, 1, 'Knife', 'Very sharp'),
(3, 0, 'Garlic', 'Kills vampires immediately'),
(4, 4, 'Pepper spray', 'Makes it hard for villains to see you');

INSERT INTO villains (id, difficulty, health, special_attack, villain_name, weakness) VALUES
(1, 7, 10, 'Knife skills', 'Chucky', 'Annabelle'),
(2, 9, 10, 'Deadly stare', 'Sadako', 'Wells'),
(3, 3, 10, 'Torture games', 'Jigsaw', 'Pushing him off his tricycle'),
(4, 10, 10, 'Supernatural power', 'Annabelle', 'Exorcisms');


