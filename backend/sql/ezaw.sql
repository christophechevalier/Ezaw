-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Client :  127.0.0.1
-- Généré le :  Jeu 12 Janvier 2017 à 17:10
-- Version du serveur :  5.7.9
-- Version de PHP :  5.6.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `ezaw`
--

-- --------------------------------------------------------

--
-- Structure de la table `alert`
--

DROP TABLE IF EXISTS `alert`;
CREATE TABLE IF NOT EXISTS `alert` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` int(11) NOT NULL,
  `lat` float NOT NULL,
  `lng` float NOT NULL,
  `date_ajout` date NOT NULL,
  `date_expir` datetime NOT NULL,
  `compteur_like` int(11) NOT NULL,
  `compteur_dislike` int(11) NOT NULL,
  `time_created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `fk_type` (`type`)
) ENGINE=MyISAM AUTO_INCREMENT=170 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Contenu de la table `alert`
--

INSERT INTO `alert` (`id`, `type`, `lat`, `lng`, `date_ajout`, `date_expir`, `compteur_like`, `compteur_dislike`, `time_created`) VALUES
(169, 2, 43.5738, 1.49155, '2017-01-12', '2017-01-12 23:20:22', 6, 0, '2017-01-12 16:50:22'),
(168, 0, 43.5738, 1.49156, '2017-01-12', '2017-01-12 22:04:23', 1, 0, '2017-01-12 16:49:23');

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(256) COLLATE utf8_bin NOT NULL,
  `mail` varchar(256) COLLATE utf8_bin NOT NULL,
  `password` varchar(256) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=34 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Contenu de la table `user`
--

INSERT INTO `user` (`id`, `username`, `mail`, `password`) VALUES
(11, 'yolo', 'hui@hy.com', '964fe6242ca987d24f0fdfd851983c68'),
(25, 'jojo', 'jojo', 'silitsch'),
(33, 'christophe', 'cri@gmail.com', 'jojo');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
