/*
 Navicat Premium Data Transfer

 Source Server         : Dofus
 Source Server Type    : MySQL
 Source Server Version : 50736
 Source Host           : localhost:3306
 Source Schema         : dofus_wiki

 Target Server Type    : MySQL
 Target Server Version : 50736
 File Encoding         : 65001

 Date: 23/11/2022 18:07:28
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for classes
-- ----------------------------
DROP TABLE IF EXISTS `classes`;
CREATE TABLE `classes`  (
  `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `classe_name` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `alias` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `description` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `vitality` int(11) UNSIGNED NOT NULL,
  `wisdom` int(11) UNSIGNED NOT NULL,
  `strength` int(11) UNSIGNED NOT NULL,
  `intelligence` int(11) UNSIGNED NOT NULL,
  `chance` int(11) UNSIGNED NOT NULL,
  `agility` int(11) UNSIGNED NOT NULL,
  `bow` int(11) UNSIGNED NOT NULL,
  `wand` int(11) UNSIGNED NOT NULL,
  `staff` int(11) UNSIGNED NOT NULL,
  `dagger` int(11) UNSIGNED NOT NULL,
  `sword` int(11) UNSIGNED NOT NULL,
  `axe` int(11) UNSIGNED NOT NULL,
  `hammer` int(11) UNSIGNED NOT NULL,
  `shovel` int(11) UNSIGNED NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 13 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_bin ROW_FORMAT = Compact;

-- ----------------------------
-- Records of classes
-- ----------------------------
INSERT INTO `classes` VALUES (1, 'Feca', 'Le bouclier Féca', 'Les Fecas sont des Protecteurs loyaux. Ils sont appréciés dans les groupes d\'aventuriers à cause de leurs pouvoirs de protection, mais aussi parce qu\'ils manient le bâton comme pas deux. Des générations de Fécas s\'enorgueillissent d\'être des protecteurs hors pair à qui les Sages ont confié les objets les plus précieux qui soient, en toute confiance.\r\n\r\nUne classe de protecteurs. Leurs armures réduisent les dégâts infligés à leurs alliés.', 0, 0, 50, 100, 20, 20, 90, 95, 100, 90, 90, 90, 90, 90);
INSERT INTO `classes` VALUES (2, 'Osamodas', 'Le fouet d\'Osamodas', 'Les Osamodas sont des Invocateurs nés ! Ils ont le pouvoir d\'invoquer des créatures et sont de remarquables dresseurs. Une rumeur prétend qu\'ils taillent leurs vêtements dans la peau de leurs ennemis, mais allez donc leur demander ce qu\'il en est... Vous verrez bien si vous terminez votre vie sous la forme d\'une botte ou d\'un bonnet fourré.\r\n\r\nUne classe d\'invocateurs. Ils utilisent des invocations pour combattre tout en restant à distance.', 0, 0, 50, 100, 100, 20, 90, 90, 95, 90, 90, 90, 100, 90);
INSERT INTO `classes` VALUES (3, 'Enutrof', 'Les doigts d\'Enutrof', 'Les Enutrofs sont des Chasseurs de trésor invétérés ! Ils sont intéressés par toute denrée, objet, ou créature dont ils pourront tirer des kamas. La première chose que fait un Enutrof lorsqu\'il rencontre un autre aventurier, c\'est de le soupeser du regard. C\'est vrai : aux yeux d\'un Enutrof, un aventurier, c\'est une créature chargée de denrées, et bardée d\'objets... revendables !\r\n\r\nUne classe de chasseurs de trésors. Ils savent désenvoûter et ralentir les déplacements de leurs ennemis.', 0, 0, 50, 20, 100, 20, 90, 90, 90, 90, 90, 90, 95, 100);
INSERT INTO `classes` VALUES (4, 'Sram', 'L\'ombre de Sram', 'Les Srams sont des Assassins qui aiment les bourses, rebondies de préférence. Trousser les pans d\'une tunique, tâter le fond d\'une poche, faire preuve de doigté, palper enfin des bijoux tant convoités, poser un piège mortel, voilà la vie d\'un disciple de Sram !\r\n\r\nUne classe de roublards. Grâce à l\'invisibilité et leurs pièges, ils prennent leurs ennemis à revers.', 0, 0, 100, 0, 20, 100, 95, 90, 90, 100, 90, 90, 90, 90);
INSERT INTO `classes` VALUES (5, 'Xelor', 'Le sablier de Xélor', 'Les Xélors sont des Mages qui maîtrisent le temps et toutes les mécaniques qui donnent l\'heure : carillons, horloges, et pendules leur obéissent au doigt et à l\'oeil. Les Xélors jouent donc avec le temps pour ralentir un ennemi ou se téléporter où bon leur semble.\r\n\r\nUne classe de sorciers. Ils utilisent leurs sorts pour ralentir leurs ennemis et les empêcher de jouer.', 0, 0, 0, 100, 20, 20, 90, 95, 90, 90, 90, 90, 100, 90);
INSERT INTO `classes` VALUES (6, 'Ecaflip', 'La pièce d\'Ecaflip', 'Les Ecaflips sont des Guerriers joueurs qui se fourrent dans les endroits où l\'on peut gagner gros, et perdre beaucoup... Un Ecaflip bien dans sa peau joue sans arrêt, pour tout et pour rien. Mais attention, il prend le jeu très au sérieux et ira même jusqu\'à jouer sa vie sur un lancer de dés pour gagner un combat...\r\n\r\nUne classe de guerriers joueurs. Leurs attaques sont principalement basées sur le hasard.', 0, 0, 100, 20, 20, 50, 90, 90, 90, 95, 100, 90, 90, 90);
INSERT INTO `classes` VALUES (7, 'Eniripsa', 'Les mains d\'Eniripsa', 'Les Eniripsas sont des Soigneurs qui guérissent d\'un simple Mot. Ils les utilisent surtout pour soigner leurs alliés, mais parfois aussi pour blesser leurs ennemis. Parmi eux, certains sont même devenus chasseurs de mots, arpenteurs du verbe, ou rôdeurs des langues oubliées.\r\n\r\nUne classe de guérisseurs. Ils utilisent leurs sorts pour soigner leurs alliés.', 0, 0, 0, 100, 20, 20, 90, 100, 95, 90, 90, 90, 90, 90);
INSERT INTO `classes` VALUES (8, 'Iop', 'Le coeur d\'Iop', 'Les Iops sont des Guerriers fonceurs et sans reproches ! Une chose est sûre : les Iops savent faire parler les armes. D\'ailleurs, verser le premier sang au moins une fois par jour est pour eux un signe de bonne santé. Leur tempérament impétueux fait des Iops des paladins de l\'extrême, capables du meilleur... comme du pire !\r\n\r\nUne classe de guerriers. Leurs sorts offensifs leurs permettent de faire d\'énorme dégâts.', 0, 0, 100, 20, 20, 20, 90, 90, 90, 90, 100, 90, 95, 90);
INSERT INTO `classes` VALUES (9, 'Cra', 'L\'étendue de Crâ', 'Les Crâs sont des Archers aussi fiers que précis ! Ils font des alliés précieux contre les adeptes de la mêlée franche. Restant à distance, décochant leurs traits empennés dans le moindre orifice laissé sans surveillance, ils s\'y entendent pour faire des dégâts !\r\n\r\nUne classe d\'archers. Ils sont spécialisés dans les attaques à distance.', 0, 0, 50, 50, 20, 50, 100, 90, 90, 95, 90, 90, 90, 90);
INSERT INTO `classes` VALUES (10, 'Sadida', 'Le soulier de Sadida', 'Les Sadidas sont des Invocateurs qui fabriquent des onguents et des poisons redoutables ! Apprivoiser les Ronces pour en faire des armes terrifiantes, confectionner des poupées de guerre et de soins, voilà qui satisfait tout disciple Sadida digne de ce nom.\r\n\r\nUne classe de sorciers. Ils utilisent leurs poupées pour combattre et envoûter leurs ennemis.', 0, 0, 50, 100, 100, 20, 90, 95, 100, 90, 90, 90, 90, 90);
INSERT INTO `classes` VALUES (11, 'Sacrieur', 'Le sang de Sacrieur', 'Les Sacrieurs sont des Berzerkers qui décuplent leurs forces dès qu\'ils sont frappés ! N\'ayant pas peur de recevoir des coups, ni de s\'exposer aux blessures, ils seront souvent en première ligne, et donc très apprécié par les groupes d\'aventuriers ! Le Sacrieur est vraiment le compagnon idéal pour vos longues soirées guerrières...\r\n\r\nUne classe de protecteurs. Ils sont très résistants et encaissent les coups pour leurs alliés.', 0, 0, 0, 0, 0, 0, 90, 90, 90, 90, 90, 90, 90, 90);
INSERT INTO `classes` VALUES (12, 'Pandawa', 'La chopine de Pandawa', 'Les Pandawas sont des Guerriers porteurs qui savent faire des folies de leurs corps ! Ils peuvent même en faire avec le corps des autres... En effet, le Pandawa sait soulever ses alliés pour les protéger. Quant à ses ennemis, il les enverra dans les airs pour les blesser !\r\n\r\nUne classe de guerriers porteurs. La boisson les rend plus forts, ils peuvent porter leurs alliés.', 0, 0, 50, 50, 50, 50, 90, 90, 95, 90, 90, 100, 90, 90);

-- ----------------------------
-- Table structure for ecosystem
-- ----------------------------
DROP TABLE IF EXISTS `ecosystem`;
CREATE TABLE `ecosystem`  (
  `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `ecosystem_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 21 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_bin ROW_FORMAT = Compact;

-- ----------------------------
-- Records of ecosystem
-- ----------------------------
INSERT INTO `ecosystem` VALUES (1, 'Créatures des champs');
INSERT INTO `ecosystem` VALUES (2, 'Créatures Diverses');
INSERT INTO `ecosystem` VALUES (3, 'Créatures des marécages');
INSERT INTO `ecosystem` VALUES (4, 'Créatures des landes');
INSERT INTO `ecosystem` VALUES (5, 'Créatures des plages');
INSERT INTO `ecosystem` VALUES (6, 'Créatures de l\'île des Wabbits');
INSERT INTO `ecosystem` VALUES (7, 'Créatures de l\'île du Minotoror');
INSERT INTO `ecosystem` VALUES (8, 'Créatures de la zone des débutants');
INSERT INTO `ecosystem` VALUES (9, 'Créatures de l\'île de Moon');
INSERT INTO `ecosystem` VALUES (10, 'Créatures des villes');
INSERT INTO `ecosystem` VALUES (11, 'Créatures des plaines');
INSERT INTO `ecosystem` VALUES (12, 'Créatures du village des éleveurs');
INSERT INTO `ecosystem` VALUES (13, 'Créatures de la montagne');
INSERT INTO `ecosystem` VALUES (14, 'Protecteurs des ressources');
INSERT INTO `ecosystem` VALUES (15, 'Créatures de l\'île d\'Otomaï');
INSERT INTO `ecosystem` VALUES (16, 'Créatures de Pandala\r\n');
INSERT INTO `ecosystem` VALUES (17, 'Créatures de la forêt');
INSERT INTO `ecosystem` VALUES (18, 'Créatures humanoïdes');
INSERT INTO `ecosystem` VALUES (19, 'Créatures Archi-monstres');
INSERT INTO `ecosystem` VALUES (20, 'Créatures de la nuit');

-- ----------------------------
-- Table structure for monster
-- ----------------------------
DROP TABLE IF EXISTS `monster`;
CREATE TABLE `monster`  (
  `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `monster_name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `ecosystem_id` int(11) UNSIGNED NOT NULL,
  `race_id` int(11) UNSIGNED NOT NULL,
  `level` int(11) NOT NULL,
  `health` int(20) UNSIGNED NOT NULL,
  `action_point` int(4) UNSIGNED NOT NULL,
  `movement_point` int(4) UNSIGNED NOT NULL,
  `experience` int(50) UNSIGNED NOT NULL,
  `init` int(20) UNSIGNED NOT NULL,
  `earth` int(11) UNSIGNED NOT NULL,
  `fire` int(11) UNSIGNED NOT NULL,
  `water` int(11) UNSIGNED NOT NULL,
  `wind` int(11) UNSIGNED NOT NULL,
  `dodge_pa` int(4) NULL DEFAULT NULL,
  `dodge_pm` int(4) NULL DEFAULT NULL,
  `resi_neutral` int(11) NOT NULL,
  `resi_earth` int(11) NOT NULL,
  `resi_fire` int(11) NOT NULL,
  `resi_water` int(11) NOT NULL,
  `resi_wind` int(11) NOT NULL,
  `spells_id` int(11) UNSIGNED NULL DEFAULT NULL,
  `zones` varchar(600) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  `drops` varchar(600) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  `image_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `ecosystem`(`ecosystem_id`) USING BTREE,
  INDEX `race`(`race_id`) USING BTREE,
  INDEX `spells`(`spells_id`) USING BTREE,
  CONSTRAINT `monster_ibfk_1` FOREIGN KEY (`ecosystem_id`) REFERENCES `ecosystem` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `monster_ibfk_2` FOREIGN KEY (`race_id`) REFERENCES `race` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `monster_ibfk_3` FOREIGN KEY (`spells_id`) REFERENCES `spells` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 18 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_bin ROW_FORMAT = Compact;

-- ----------------------------
-- Records of monster
-- ----------------------------
INSERT INTO `monster` VALUES (1, 'Larve Bleue', 2, 26, 2, 10, 4, 2, 200, 10, 10, 0, 0, 0, 5, 3, 1, 5, 5, -9, -9, 1, 'Port de Madrestam, La montagne des Craqueleurs, Le champ des Ingalsses, La forêt d\'Amakna, Bord de la fôret maléfique, Forêt des Abraknydes, Contour d\'Astrub, Champs d\'Astrub, Le coin des Tofus, Village de Pandala, La jungle profonde de Moon, Forêt des Abraknydes Sombres, Orée de la forêt des Abraknydes, Plaine des Scarafeuilles, Prairies d\'Astrub, Donjon des Champs - Salle 2, Donjon des Champs - Salle 3, Donjon des Champs - Salle 4, Donjon des Champs - Salle 7, Montagne basse des Craqueleurs', 'Poudre de Perlinpainpain∞ (54%), Peau de Larve Bleue (30%), Oeuf de Larve Dorée∞ (1%), Chapeau de l\'Aventurier (0.5%), Fil de Soie∞ (0.1%), Clef des Champs∞ (0.5%), Parchemin de Sorts1 (0.001%), Chair de Larve∞ (60%), Cervelle de larve∞ (?)', '1.svg');
INSERT INTO `monster` VALUES (2, 'Larve Verte', 2, 26, 6, 20, 5, 3, 600, 50, 20, 0, 30, 0, 5, 4, 6, 5, -10, 6, 10, 213, 'La montagne des Craqueleurs, Le champ des Ingalsses, La forêt d\'Amakna, Bord de la fôret maléfique, Forêt des Abraknydes, Champs d\'Astrub, Le coin des Tofus, La jungle profonde de Moon, Forêt des Abraknydes Sombres, Orée de la forêt des Abraknydes, Plaine des Scarafeuilles, Prairies d\'Astrub, Donjon des Champs - Salle 3, Donjon des Champs - Salle 4, Donjon des Champs - Salle 7, Montagne basse des Craqueleurs', 'Poudre de Perlinpainpain∞ (54%), Peau de Larve Verte (25%), Oeuf de Larve Dorée∞ (1%), Fil de Soie∞ (0.1%), Peau de Larve Verte Magique (0.05%), Clef des Champs∞ (0.5%), Chair de Larve **∞ (60%), Cervelle de larve∞ (?)', '2.svg');
INSERT INTO `monster` VALUES (3, 'Bouftou', 1, 74, 1, 30, 5, 2, 0, 310, 80, 80, 80, 70, 15, 15, 25, 0, -12, 6, -50, 203, NULL, NULL, '3.svg');
INSERT INTO `monster` VALUES (4, 'Craqueleur', 1, 74, 1, 100, 5, 2, 0, 265, 80, 80, 80, 25, 15, 15, 0, 25, -50, 6, -12, 1, NULL, NULL, '4.svg');
INSERT INTO `monster` VALUES (5, 'Lapino', 1, 74, 1, 100, 5, 4, 0, 185, 0, 160, 0, 25, 25, 25, 10, 15, -30, -20, 25, 211, NULL, NULL, '5.svg');
INSERT INTO `monster` VALUES (6, 'Sanglier', 1, 74, 1, 50, 5, 3, 0, 265, 80, 80, 80, 25, 11, 11, -50, 6, 6, 25, -12, 1, NULL, NULL, '6.svg');
INSERT INTO `monster` VALUES (7, 'Prespic', 2, 74, 1, 25, 6, 5, 0, 260, 80, 80, 80, 20, 17, 17, -12, 6, -12, 6, 6, 204, '', '', '7.svg');
INSERT INTO `monster` VALUES (8, 'Gelée Royale Menthe', 17, 25, 100, 1250, 10, 5, 21000, 320, 100, 100, 0, 120, 0, 0, 70, -10, 70, 70, 70, 218, '', 'Gelée à la Menthe∞ (100% ), Gelée Menthe Royale∞ (20% )', '8.svg');
INSERT INTO `monster` VALUES (9, 'Dark Vlad', 20, 60, 120, 5000, 9, 7, 100000, 2100, 700, 700, 0, 700, 125, 125, 50, -20, 40, -20, 40, 142, 'La forêt maléfique', 'Pierre de Cristal (30% ), Pierre d\'Emeraude (30% ), Pierre de Diamant (30% ), Pierre de Saphir (30% ), Pierre de Rubis (30% ), Potion Dantegoulesque (10% ), Epaulette du Dark Vlad (1.5% ), Dofus Emeraude (0.1% ), Hormone d\'Estok∞ (1% ), Hormone de Karne∞ (1% ), Hormone de Tibilax∞ (1% ), Hormone de Tibilax Saphir∞ (1% )', '9.svg');
INSERT INTO `monster` VALUES (10, 'Paysan en Détresse', 18, 71, 0, 5, 0, 7, 1, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 1, '', '', '10.svg');
INSERT INTO `monster` VALUES (11, 'Kralamoure Géant', 15, 46, 1600, 4600, 18, 0, 2000000, 16400, 2000, 2000, 2000, 2000, 11499, 2499, 900, 900, 900, 900, 900, 290, 'Tourbière nauséabonde', 'Ventouse du Kralamoure géant∞ (24% ), Eau∞ (20% ), Encre du Kralamoure géant∞ (5.4% )', 'krala.svg');
INSERT INTO `monster` VALUES (17, 'Qu\'Tan', 2, 73, 555, 13000, 9, 4, 0, 2700, 300, 300, 300, 300, 250, 200, 35, 35, 35, 35, 35, 243, 'Sanctuaire de Qu\'Tan', 'Dofus Ebène (0.01% ), Ongle Désincarné de Qu\'Tan (?), Défense Maléfique (?)', '1665.svg');

-- ----------------------------
-- Table structure for post
-- ----------------------------
DROP TABLE IF EXISTS `post`;
CREATE TABLE `post`  (
  `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `title` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `content` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `creation_time` datetime(0) NOT NULL,
  `author` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  `category` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 22 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_bin ROW_FORMAT = Compact;

-- ----------------------------
-- Records of post
-- ----------------------------
INSERT INTO `post` VALUES (10, 'Premier post', 'Bonjour à tous, le site ouvre enfin ses portes, nous sommes très heureux de vous accueillir et nous espérons que vous trouverez ce que vous cherchez à travers notre wiki. Bonne navigation.', '2022-10-31 15:06:11', 'Black Pearl', 'Informations');
INSERT INTO `post` VALUES (19, 'Le bestiaire voit le jour !', 'Nous sommes heureux de vous annoncer que le bestiaire est disponible et fonctionnel. Vous pourrez rechercher les monstres du jeu, des outils de filtres sont mis à votre disposition pour faciliter vos recherches.', '2022-11-09 14:58:23', 'Black Pearl', 'Mise à jour');
INSERT INTO `post` VALUES (20, 'Coiffe et cape Meulou Polykromes', 'Décembre approche. Un froid de meulou s’installe, prêt à vous geler jusqu’aux os. Conçues en authentique fourrure (prélevée sur des cadavres d’animaux : aucun n’a été tué pour l’occasion, rassurez-vous), la cape et la coiffe Meulou polykromes vous tiendront chaud tout l’hiver... et donneront des sueurs à ceux qui croiseront votre route !', '2022-11-17 11:00:00', 'Black Pearl', 'Évenements');
INSERT INTO `post` VALUES (21, 'Refonte graphique', 'Le site fait peau neuve et s\'offre une nouvelle interface, un subtil mélange entre la DA de Dofus et quelque chose de plus moderne, plus animé.', '2022-11-23 18:04:12', 'Black Pearl', 'Mise à jour');

-- ----------------------------
-- Table structure for post_category
-- ----------------------------
DROP TABLE IF EXISTS `post_category`;
CREATE TABLE `post_category`  (
  `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `category_name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_bin ROW_FORMAT = Compact;

-- ----------------------------
-- Records of post_category
-- ----------------------------
INSERT INTO `post_category` VALUES (1, 'News');
INSERT INTO `post_category` VALUES (2, 'Évenements');
INSERT INTO `post_category` VALUES (3, 'Mise à jour');
INSERT INTO `post_category` VALUES (4, 'Informations');

-- ----------------------------
-- Table structure for race
-- ----------------------------
DROP TABLE IF EXISTS `race`;
CREATE TABLE `race`  (
  `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `race_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 75 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_bin ROW_FORMAT = Compact;

-- ----------------------------
-- Records of race
-- ----------------------------
INSERT INTO `race` VALUES (1, 'Monstres des marécages');
INSERT INTO `race` VALUES (2, 'Monstres de Moon');
INSERT INTO `race` VALUES (3, 'Crocodailles');
INSERT INTO `race` VALUES (4, 'Dragodinde');
INSERT INTO `race` VALUES (5, 'Animaux de la forêt');
INSERT INTO `race` VALUES (6, 'Arakne');
INSERT INTO `race` VALUES (7, 'Firefoux');
INSERT INTO `race` VALUES (8, 'Gobelins');
INSERT INTO `race` VALUES (9, 'Kitsous');
INSERT INTO `race` VALUES (10, 'Tortues de Moon');
INSERT INTO `race` VALUES (11, 'Cochons');
INSERT INTO `race` VALUES (12, 'Plantes des champs');
INSERT INTO `race` VALUES (13, 'Monstres de l\'Arche d\'Otomaï');
INSERT INTO `race` VALUES (14, 'Monstres des landes');
INSERT INTO `race` VALUES (15, 'Mulou');
INSERT INTO `race` VALUES (16, 'Plantes de Moon');
INSERT INTO `race` VALUES (17, 'Plantes de Pandala');
INSERT INTO `race` VALUES (18, 'Monstres de l\'Arbre Hakam');
INSERT INTO `race` VALUES (19, 'Pandawas');
INSERT INTO `race` VALUES (20, 'Protecteurs des Plantes');
INSERT INTO `race` VALUES (21, 'Bandits');
INSERT INTO `race` VALUES (22, 'Bouftous');
INSERT INTO `race` VALUES (23, 'Brigandins');
INSERT INTO `race` VALUES (24, 'Corbacs');
INSERT INTO `race` VALUES (25, 'Gelées');
INSERT INTO `race` VALUES (26, 'Larves');
INSERT INTO `race` VALUES (27, 'Monstres des Plaines de Cania');
INSERT INTO `race` VALUES (28, 'Pious');
INSERT INTO `race` VALUES (29, 'Pirates de Moon');
INSERT INTO `race` VALUES (30, 'Chafers');
INSERT INTO `race` VALUES (31, 'Fantômes');
INSERT INTO `race` VALUES (32, 'Monstres des Plaines herbeuses');
INSERT INTO `race` VALUES (33, 'Protecteurs des Céréales');
INSERT INTO `race` VALUES (34, 'Monstres de la plage de corail');
INSERT INTO `race` VALUES (35, 'Monstres de Pandala');
INSERT INTO `race` VALUES (36, 'Monstres des plages');
INSERT INTO `race` VALUES (37, 'Monstres Tutorial');
INSERT INTO `race` VALUES (38, 'Boss');
INSERT INTO `race` VALUES (39, 'Craqueleurs');
INSERT INTO `race` VALUES (40, 'Monstres de la Jungle Sombre');
INSERT INTO `race` VALUES (41, 'Protecteurs des Minerais');
INSERT INTO `race` VALUES (42, 'Scarafeuille');
INSERT INTO `race` VALUES (43, 'Dopeuls Temple');
INSERT INTO `race` VALUES (44, 'Gardiens des villages de Kwaks');
INSERT INTO `race` VALUES (45, 'Kwaks');
INSERT INTO `race` VALUES (46, 'Monstres de la Tourbière sans fond');
INSERT INTO `race` VALUES (47, 'Bworks');
INSERT INTO `race` VALUES (48, 'Wabbits');
INSERT INTO `race` VALUES (49, 'Avis de recherche');
INSERT INTO `race` VALUES (50, 'Champignons');
INSERT INTO `race` VALUES (51, 'Minos');
INSERT INTO `race` VALUES (52, 'Monstres des cavernes');
INSERT INTO `race` VALUES (53, 'Monstres des conquêtes de territoires');
INSERT INTO `race` VALUES (54, 'Protecteurs des Poissons');
INSERT INTO `race` VALUES (55, 'Monstres de la Canopée Embrumée');
INSERT INTO `race` VALUES (56, 'Blop');
INSERT INTO `race` VALUES (57, 'Gardes');
INSERT INTO `race` VALUES (58, 'Protecteurs des Arbres');
INSERT INTO `race` VALUES (59, 'Fantôme de Pandala');
INSERT INTO `race` VALUES (60, 'Monstres de la nuit');
INSERT INTO `race` VALUES (61, 'Abraknydien');
INSERT INTO `race` VALUES (62, 'Tofus');
INSERT INTO `race` VALUES (63, 'Monstre des égouts');
INSERT INTO `race` VALUES (64, 'Koalaks');
INSERT INTO `race` VALUES (65, 'Monstres de la zone des débutants');
INSERT INTO `race` VALUES (66, 'Monstres du village de Pandala');
INSERT INTO `race` VALUES (67, 'Les Archi-monstres');
INSERT INTO `race` VALUES (68, 'Dragoeufs');
INSERT INTO `race` VALUES (69, 'Monstres du Village des Dopeuls');
INSERT INTO `race` VALUES (70, 'Monstres de Nowel');
INSERT INTO `race` VALUES (71, 'Pnjs');
INSERT INTO `race` VALUES (72, 'Familiers Fantômes');
INSERT INTO `race` VALUES (73, 'Monstres de quête');
INSERT INTO `race` VALUES (74, 'Invocations de classe');

-- ----------------------------
-- Table structure for role
-- ----------------------------
DROP TABLE IF EXISTS `role`;
CREATE TABLE `role`  (
  `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_bin ROW_FORMAT = Compact;

-- ----------------------------
-- Records of role
-- ----------------------------
INSERT INTO `role` VALUES (1, 'user');
INSERT INTO `role` VALUES (2, 'admin');

-- ----------------------------
-- Table structure for spells
-- ----------------------------
DROP TABLE IF EXISTS `spells`;
CREATE TABLE `spells`  (
  `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `spell_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 303 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_bin ROW_FORMAT = Compact;

-- ----------------------------
-- Records of spells
-- ----------------------------
INSERT INTO `spells` VALUES (1, 'Coup de poing');
INSERT INTO `spells` VALUES (2, 'Armure Incandescente');
INSERT INTO `spells` VALUES (3, 'Aveuglement');
INSERT INTO `spells` VALUES (4, 'Attaque Naturelle');
INSERT INTO `spells` VALUES (5, 'Renvoi de Sort');
INSERT INTO `spells` VALUES (6, 'Trêve');
INSERT INTO `spells` VALUES (7, 'Armure Terrestre');
INSERT INTO `spells` VALUES (8, 'Bouclier Feca');
INSERT INTO `spells` VALUES (9, 'Retour du Bâton');
INSERT INTO `spells` VALUES (10, 'Attaque Nuageuse');
INSERT INTO `spells` VALUES (11, 'Glyphe Enflammé ');
INSERT INTO `spells` VALUES (12, 'Téléportation');
INSERT INTO `spells` VALUES (13, 'Glyphe dAveuglement');
INSERT INTO `spells` VALUES (14, 'Glyphe de Silence');
INSERT INTO `spells` VALUES (15, 'Armure Venteuse');
INSERT INTO `spells` VALUES (16, 'Glyphe d\'immobilisation');
INSERT INTO `spells` VALUES (17, 'Science du bâton');
INSERT INTO `spells` VALUES (18, 'Glyphe Agressif');
INSERT INTO `spells` VALUES (19, 'Armure Aqueuse');
INSERT INTO `spells` VALUES (20, 'Bulle');
INSERT INTO `spells` VALUES (21, 'Immunité ');
INSERT INTO `spells` VALUES (22, 'Griffe Spectrale');
INSERT INTO `spells` VALUES (23, 'Déplacement Félin');
INSERT INTO `spells` VALUES (24, 'Cri de lOurs');
INSERT INTO `spells` VALUES (25, 'Corbeau');
INSERT INTO `spells` VALUES (26, 'Soin Animal');
INSERT INTO `spells` VALUES (27, 'Bénédiction Animale ');
INSERT INTO `spells` VALUES (28, 'Piqûre Motivante');
INSERT INTO `spells` VALUES (29, 'Crapaud');
INSERT INTO `spells` VALUES (30, 'Crocs du Mulou');
INSERT INTO `spells` VALUES (31, 'Fouet');
INSERT INTO `spells` VALUES (32, 'Invocation de Dragonnet Rouge');
INSERT INTO `spells` VALUES (33, 'Résistance Naturelle');
INSERT INTO `spells` VALUES (34, 'Griffe Cinglante');
INSERT INTO `spells` VALUES (35, 'Invocation de Tofu');
INSERT INTO `spells` VALUES (36, 'Invocation de Bouftou');
INSERT INTO `spells` VALUES (37, 'Frappe du Craqueleur');
INSERT INTO `spells` VALUES (38, 'Invocation de Prespic');
INSERT INTO `spells` VALUES (39, 'Invocation de Sanglier');
INSERT INTO `spells` VALUES (40, 'Invocation de Bwork Mage');
INSERT INTO `spells` VALUES (41, 'Invocation de Craqueleur');
INSERT INTO `spells` VALUES (42, 'Sac Animé ');
INSERT INTO `spells` VALUES (43, 'Chance');
INSERT INTO `spells` VALUES (44, 'Lancer de Pelle');
INSERT INTO `spells` VALUES (45, 'Roulage de Pelle');
INSERT INTO `spells` VALUES (46, 'Clé Réductrice');
INSERT INTO `spells` VALUES (47, 'Desinvocacion');
INSERT INTO `spells` VALUES (48, 'Boîte de Pandore');
INSERT INTO `spells` VALUES (49, 'Remblai');
INSERT INTO `spells` VALUES (50, 'Pelle Fantomatique');
INSERT INTO `spells` VALUES (51, 'Maladresse');
INSERT INTO `spells` VALUES (52, 'Lancer de Pièces');
INSERT INTO `spells` VALUES (53, 'Cupidité ');
INSERT INTO `spells` VALUES (54, 'Force de l\'Age');
INSERT INTO `spells` VALUES (55, 'Maladresse de Masse');
INSERT INTO `spells` VALUES (56, 'Accélération');
INSERT INTO `spells` VALUES (57, 'Pelle du Jugement');
INSERT INTO `spells` VALUES (58, 'Pelle Animée');
INSERT INTO `spells` VALUES (59, 'Pelle Massacrante');
INSERT INTO `spells` VALUES (60, 'Corruption');
INSERT INTO `spells` VALUES (61, 'Coffre Animé ');
INSERT INTO `spells` VALUES (62, 'Sournoiserie');
INSERT INTO `spells` VALUES (63, 'Concentration de Chakra');
INSERT INTO `spells` VALUES (64, 'Coup Sournois');
INSERT INTO `spells` VALUES (65, 'Repérage');
INSERT INTO `spells` VALUES (66, 'Piège Sournois');
INSERT INTO `spells` VALUES (67, 'Poison insidieux');
INSERT INTO `spells` VALUES (68, 'Peur');
INSERT INTO `spells` VALUES (69, 'Fourvoiement');
INSERT INTO `spells` VALUES (70, 'Piège dImmobilisation');
INSERT INTO `spells` VALUES (71, 'Arnaque');
INSERT INTO `spells` VALUES (72, 'Piège Empoisonné ');
INSERT INTO `spells` VALUES (73, 'Invisibilité ');
INSERT INTO `spells` VALUES (74, 'Piège répulsif');
INSERT INTO `spells` VALUES (75, 'Double');
INSERT INTO `spells` VALUES (76, 'Pulsion de Chakra');
INSERT INTO `spells` VALUES (77, 'Attaque Mortelle');
INSERT INTO `spells` VALUES (78, 'Piège de Silence');
INSERT INTO `spells` VALUES (79, 'Invisibilité d\'autrui');
INSERT INTO `spells` VALUES (80, 'Piège de Masse');
INSERT INTO `spells` VALUES (81, 'Piège Mortel');
INSERT INTO `spells` VALUES (82, 'Ralentissement');
INSERT INTO `spells` VALUES (83, 'Contre');
INSERT INTO `spells` VALUES (84, 'Aiguille');
INSERT INTO `spells` VALUES (85, 'Gelure');
INSERT INTO `spells` VALUES (86, 'Flou');
INSERT INTO `spells` VALUES (87, 'Aiguille Chercheuse');
INSERT INTO `spells` VALUES (88, 'Démotivation');
INSERT INTO `spells` VALUES (89, 'Téléportation');
INSERT INTO `spells` VALUES (90, 'Devouement');
INSERT INTO `spells` VALUES (91, 'Fuite');
INSERT INTO `spells` VALUES (92, 'Frappe de Xélor');
INSERT INTO `spells` VALUES (93, 'Rayon Obscur');
INSERT INTO `spells` VALUES (94, 'Flétrissement ');
INSERT INTO `spells` VALUES (95, 'Protection Aveuglante');
INSERT INTO `spells` VALUES (96, 'Horloge');
INSERT INTO `spells` VALUES (97, 'Poussière Temporelle ');
INSERT INTO `spells` VALUES (98, 'Cadran de Xélor');
INSERT INTO `spells` VALUES (99, 'Vol du Temps');
INSERT INTO `spells` VALUES (100, 'Momification');
INSERT INTO `spells` VALUES (101, 'Sablier de Xélor');
INSERT INTO `spells` VALUES (102, 'Roulette');
INSERT INTO `spells` VALUES (103, 'Pile ou Face');
INSERT INTO `spells` VALUES (104, 'Chance dEcaflip');
INSERT INTO `spells` VALUES (105, 'Trèfle');
INSERT INTO `spells` VALUES (106, 'Bond du Félin');
INSERT INTO `spells` VALUES (107, 'Roue de la Fortune');
INSERT INTO `spells` VALUES (108, 'Topkaj');
INSERT INTO `spells` VALUES (109, 'Esprit Félin');
INSERT INTO `spells` VALUES (110, 'Bluff');
INSERT INTO `spells` VALUES (111, 'Griffe Joueuse');
INSERT INTO `spells` VALUES (112, 'Contrecoup');
INSERT INTO `spells` VALUES (113, 'Griffe de Ceangal');
INSERT INTO `spells` VALUES (114, 'Perception');
INSERT INTO `spells` VALUES (115, 'Rekop');
INSERT INTO `spells` VALUES (116, 'Odorat');
INSERT INTO `spells` VALUES (117, 'Langue Râpeuse ');
INSERT INTO `spells` VALUES (118, 'Griffe Invocatrice');
INSERT INTO `spells` VALUES (119, 'Réflexes');
INSERT INTO `spells` VALUES (120, 'Tout ou rien');
INSERT INTO `spells` VALUES (121, 'Destin dEcaflip');
INSERT INTO `spells` VALUES (122, 'Mot Curatif');
INSERT INTO `spells` VALUES (123, 'Mot Blessant');
INSERT INTO `spells` VALUES (124, 'Mot Drainant');
INSERT INTO `spells` VALUES (125, 'Mot Soignant');
INSERT INTO `spells` VALUES (126, 'Mot Interdit');
INSERT INTO `spells` VALUES (127, 'Mot Stimulant');
INSERT INTO `spells` VALUES (128, 'Mot de Prévention');
INSERT INTO `spells` VALUES (129, 'Mot de Frayeur');
INSERT INTO `spells` VALUES (130, 'Mot d\'Amitié ');
INSERT INTO `spells` VALUES (131, 'Mot Revitalisant');
INSERT INTO `spells` VALUES (132, 'Mot de Régénération');
INSERT INTO `spells` VALUES (133, 'Mot d\'Epine');
INSERT INTO `spells` VALUES (134, 'Disipar');
INSERT INTO `spells` VALUES (135, 'Mot Vampirique');
INSERT INTO `spells` VALUES (136, 'Mot de Sacrifice');
INSERT INTO `spells` VALUES (137, 'Mot d\'Immobilisation');
INSERT INTO `spells` VALUES (138, 'Mot d\'Envol');
INSERT INTO `spells` VALUES (139, 'Mot de Silence');
INSERT INTO `spells` VALUES (140, 'Mot d\'Altruisme');
INSERT INTO `spells` VALUES (141, 'Mot de Reconstitution');
INSERT INTO `spells` VALUES (142, 'Pression');
INSERT INTO `spells` VALUES (143, 'Bond');
INSERT INTO `spells` VALUES (144, 'Intimidation');
INSERT INTO `spells` VALUES (145, 'Compulsion');
INSERT INTO `spells` VALUES (146, 'Epée divine');
INSERT INTO `spells` VALUES (147, 'Epée du destin');
INSERT INTO `spells` VALUES (148, 'Guide de Bravoure');
INSERT INTO `spells` VALUES (149, 'Amplification');
INSERT INTO `spells` VALUES (150, 'Mutilation');
INSERT INTO `spells` VALUES (151, 'Couper');
INSERT INTO `spells` VALUES (152, 'Souflle');
INSERT INTO `spells` VALUES (153, 'Epée du Jugement');
INSERT INTO `spells` VALUES (154, 'Puissance');
INSERT INTO `spells` VALUES (155, 'Epée Destructrice');
INSERT INTO `spells` VALUES (156, 'Vitalité ');
INSERT INTO `spells` VALUES (157, 'Tempête de Puissance');
INSERT INTO `spells` VALUES (158, 'Epée Céleste');
INSERT INTO `spells` VALUES (159, 'Concentration');
INSERT INTO `spells` VALUES (160, 'Colère de Iop');
INSERT INTO `spells` VALUES (161, 'Epée de Iop');
INSERT INTO `spells` VALUES (162, 'Flèche Magique');
INSERT INTO `spells` VALUES (163, 'Tir Critique');
INSERT INTO `spells` VALUES (164, 'Flèche Glacée');
INSERT INTO `spells` VALUES (165, 'Flèche Empoisonnée');
INSERT INTO `spells` VALUES (166, 'Flèche Enflammée');
INSERT INTO `spells` VALUES (167, 'Tir Puissant');
INSERT INTO `spells` VALUES (168, 'Flèche d\'Expiation');
INSERT INTO `spells` VALUES (169, 'Oeil de Taupe');
INSERT INTO `spells` VALUES (170, 'Flèche de Recul');
INSERT INTO `spells` VALUES (171, 'Flèche d\'Immobilisation');
INSERT INTO `spells` VALUES (172, 'Flèche Punitive');
INSERT INTO `spells` VALUES (173, 'Tir Eloigné');
INSERT INTO `spells` VALUES (174, 'Flèche Harcelante');
INSERT INTO `spells` VALUES (175, 'Flèche Cinglante');
INSERT INTO `spells` VALUES (176, 'Flèche Destructrice');
INSERT INTO `spells` VALUES (177, 'Flèche Persécutrice');
INSERT INTO `spells` VALUES (178, 'Flèche Ralentissante');
INSERT INTO `spells` VALUES (179, 'Flèche Absorbante');
INSERT INTO `spells` VALUES (180, 'Flèche Explosive');
INSERT INTO `spells` VALUES (181, 'Maîtrise de l\'Arc');
INSERT INTO `spells` VALUES (182, 'Tremblement');
INSERT INTO `spells` VALUES (183, 'La Folle');
INSERT INTO `spells` VALUES (184, 'Ronce');
INSERT INTO `spells` VALUES (185, 'Feu de Brousse');
INSERT INTO `spells` VALUES (186, 'Herbe Folle');
INSERT INTO `spells` VALUES (187, 'Arbre');
INSERT INTO `spells` VALUES (188, 'La Surpuissante');
INSERT INTO `spells` VALUES (189, 'Ronce Insolente');
INSERT INTO `spells` VALUES (190, 'La Sacrifiée');
INSERT INTO `spells` VALUES (191, 'La Gonflable');
INSERT INTO `spells` VALUES (192, 'Ronces Multiples');
INSERT INTO `spells` VALUES (193, 'Ronce Apaisante');
INSERT INTO `spells` VALUES (194, 'La Bloqueuse');
INSERT INTO `spells` VALUES (195, 'Ronces Agressives ');
INSERT INTO `spells` VALUES (196, 'Larme');
INSERT INTO `spells` VALUES (197, 'Vent Empoisonné ');
INSERT INTO `spells` VALUES (198, 'Puissance Sylvestre');
INSERT INTO `spells` VALUES (199, 'Sacrifice Poupesque');
INSERT INTO `spells` VALUES (200, 'Connaissance des Poupées');
INSERT INTO `spells` VALUES (201, 'Poison Paralysant');
INSERT INTO `spells` VALUES (202, 'Béco du Tofu');
INSERT INTO `spells` VALUES (203, 'Morsure du Bouftou');
INSERT INTO `spells` VALUES (204, 'Moquerie');
INSERT INTO `spells` VALUES (205, 'Embrochement');
INSERT INTO `spells` VALUES (206, 'Eclair en serie');
INSERT INTO `spells` VALUES (207, 'Ecrasement ');
INSERT INTO `spells` VALUES (208, 'Petit coup du Chafer');
INSERT INTO `spells` VALUES (209, 'Tornado');
INSERT INTO `spells` VALUES (210, 'Gatake');
INSERT INTO `spells` VALUES (211, 'Lapino Heal');
INSERT INTO `spells` VALUES (212, 'Chosse');
INSERT INTO `spells` VALUES (213, 'Larvement');
INSERT INTO `spells` VALUES (214, 'Frappe');
INSERT INTO `spells` VALUES (215, 'Invocation dArakne');
INSERT INTO `spells` VALUES (216, 'Retour de flamme');
INSERT INTO `spells` VALUES (217, 'Carapace');
INSERT INTO `spells` VALUES (218, 'Gel Protecteur');
INSERT INTO `spells` VALUES (219, 'Invocation de Gelée Bleue');
INSERT INTO `spells` VALUES (220, 'Empoisonnement');
INSERT INTO `spells` VALUES (221, 'Effleurement');
INSERT INTO `spells` VALUES (222, 'Pince');
INSERT INTO `spells` VALUES (223, 'Eventration');
INSERT INTO `spells` VALUES (224, 'Météorite');
INSERT INTO `spells` VALUES (225, 'Invocation de Tofu Maléfique');
INSERT INTO `spells` VALUES (226, 'Invocation de Gelée Menthe');
INSERT INTO `spells` VALUES (227, 'Invocation de Gelée Fraise');
INSERT INTO `spells` VALUES (228, 'Protection Magique');
INSERT INTO `spells` VALUES (229, 'Etourderie Mortelle');
INSERT INTO `spells` VALUES (230, 'Croutage');
INSERT INTO `spells` VALUES (231, 'Feu Ardent');
INSERT INTO `spells` VALUES (232, 'Morsure Sylvestre');
INSERT INTO `spells` VALUES (233, 'Agacement');
INSERT INTO `spells` VALUES (234, 'Sacrifice');
INSERT INTO `spells` VALUES (235, 'Coup de Pioche');
INSERT INTO `spells` VALUES (236, 'Jet de pierre');
INSERT INTO `spells` VALUES (237, 'Vol de Vie');
INSERT INTO `spells` VALUES (238, 'Teubatak');
INSERT INTO `spells` VALUES (239, 'Persécution');
INSERT INTO `spells` VALUES (240, 'Lancer de Hachette');
INSERT INTO `spells` VALUES (241, 'Branche Paralysante');
INSERT INTO `spells` VALUES (242, 'Reconstitucion');
INSERT INTO `spells` VALUES (243, 'Rage');
INSERT INTO `spells` VALUES (244, 'Disruption');
INSERT INTO `spells` VALUES (245, 'Immobilisation');
INSERT INTO `spells` VALUES (246, 'Lancer de tofu');
INSERT INTO `spells` VALUES (247, 'Graines Magiques');
INSERT INTO `spells` VALUES (248, 'Morsure');
INSERT INTO `spells` VALUES (249, 'Force des Ames Putrides');
INSERT INTO `spells` VALUES (250, 'Bavouille');
INSERT INTO `spells` VALUES (251, 'Crachouille');
INSERT INTO `spells` VALUES (252, 'Abolicion');
INSERT INTO `spells` VALUES (253, 'Guérison Bouftou');
INSERT INTO `spells` VALUES (254, 'Fureur du Bouftou');
INSERT INTO `spells` VALUES (255, 'Cri du Mulou');
INSERT INTO `spells` VALUES (256, 'Hypnose');
INSERT INTO `spells` VALUES (257, 'Lancer de Pain');
INSERT INTO `spells` VALUES (258, 'Confusion Visuelle');
INSERT INTO `spells` VALUES (259, 'Frappe Gerbante');
INSERT INTO `spells` VALUES (260, 'Mordillement');
INSERT INTO `spells` VALUES (261, 'Invocation d\'Araknelle');
INSERT INTO `spells` VALUES (262, 'Motivacion Natural');
INSERT INTO `spells` VALUES (263, 'Appel Dragernel');
INSERT INTO `spells` VALUES (264, 'Souffle Du Dragoeuf');
INSERT INTO `spells` VALUES (265, 'Coquillement');
INSERT INTO `spells` VALUES (266, 'Cascara de choque');
INSERT INTO `spells` VALUES (267, 'Invocation de Fourbe');
INSERT INTO `spells` VALUES (268, 'Fraise Os');
INSERT INTO `spells` VALUES (269, 'Coup du Chafer');
INSERT INTO `spells` VALUES (270, 'Guérison Dragodinde');
INSERT INTO `spells` VALUES (271, 'Coup de Tête');
INSERT INTO `spells` VALUES (272, 'Vol de Pièces');
INSERT INTO `spells` VALUES (273, 'Javeline');
INSERT INTO `spells` VALUES (274, 'Dindofeu');
INSERT INTO `spells` VALUES (275, 'Grokokoko');
INSERT INTO `spells` VALUES (276, 'Tikokoko');
INSERT INTO `spells` VALUES (277, 'Enfeuillage');
INSERT INTO `spells` VALUES (278, 'Kokopok');
INSERT INTO `spells` VALUES (279, 'Fleche Kanniboul');
INSERT INTO `spells` VALUES (280, 'Fleche Kanniboul explosive');
INSERT INTO `spells` VALUES (281, 'Fronde Kanniboul');
INSERT INTO `spells` VALUES (282, 'Javelot');
INSERT INTO `spells` VALUES (283, 'Flechette Empoisonnée');
INSERT INTO `spells` VALUES (284, 'Flechette OPE');
INSERT INTO `spells` VALUES (285, 'Accélération Poupesque');
INSERT INTO `spells` VALUES (286, 'Kikol');
INSERT INTO `spells` VALUES (287, 'Encollement');
INSERT INTO `spells` VALUES (288, 'Engluement');
INSERT INTO `spells` VALUES (289, 'Aspiration');
INSERT INTO `spells` VALUES (290, 'Gobage');
INSERT INTO `spells` VALUES (291, 'Judkoko');
INSERT INTO `spells` VALUES (292, 'Javelot');
INSERT INTO `spells` VALUES (293, 'Frappe vitalisante');
INSERT INTO `spells` VALUES (294, 'Marteau de Moon');
INSERT INTO `spells` VALUES (295, 'Affaiblissement rouge');
INSERT INTO `spells` VALUES (296, 'Affaiblissement bleu');
INSERT INTO `spells` VALUES (297, 'Affaiblissement vert');
INSERT INTO `spells` VALUES (298, 'Affaiblissement jaune');
INSERT INTO `spells` VALUES (299, 'Totem rouge');
INSERT INTO `spells` VALUES (300, 'Totem bleu');
INSERT INTO `spells` VALUES (301, 'Totem vert');
INSERT INTO `spells` VALUES (302, 'Totem jaune');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `username` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `email` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `uuid` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `role_id` int(11) UNSIGNED NOT NULL,
  `last_connection` datetime(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `role_id`(`role_id`) USING BTREE,
  CONSTRAINT `user_ibfk_1` FOREIGN KEY (`role_id`) REFERENCES `role` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 8 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_bin ROW_FORMAT = Compact;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (4, 'pseudo', '$2b$10$TqdQJA8VZ6cPC.KjLVVhBOg7P7BkfXnK6jjgh3XMalUtgb25kD25a', 'email@gmail.com', '4ce01562-346d-4dfe-86a0-c80db8556472', 1, '2022-10-07 19:05:51.000000');
INSERT INTO `user` VALUES (5, 'fdzef', '$2b$10$juAPYoSd09sE93dvgTDMg.yNgjkasz.2OqY2.AhURXvI.qkIlHC/2', 'fzefzefzef@gmail.com', '414b0363-f8da-411b-abc5-9bf68a86cadc', 1, '2022-10-11 14:31:32.000000');
INSERT INTO `user` VALUES (6, 'admin', '$2b$10$fkZpoqRxeUzFdYG9yPKCUeVdGtGqQjz.uH/BKyAxWKiDWQfYsILB6', 'admin@gmail.com', '8d831564-7d58-4901-b359-9d91b9f0d56f', 2, '2022-10-11 16:40:20.000000');
INSERT INTO `user` VALUES (7, 'user', '$2b$10$FUsIL61p1vOuoG5uhoXObuKUHVacjuVZtTqcDixNCinv71LFgsrUK', 'user@gmail.com', '9f18870f-b4b2-45a3-bb40-c1bfda0c8429', 1, '2022-11-01 19:51:20.000000');

SET FOREIGN_KEY_CHECKS = 1;
