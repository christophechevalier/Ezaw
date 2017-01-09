-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Client :  127.0.0.1
-- Généré le :  Lun 09 Janvier 2017 à 13:28
-- Version du serveur :  5.6.17
-- Version de PHP :  5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données :  `ezaw`
--

-- --------------------------------------------------------

--
-- Structure de la table `alert`
--

CREATE TABLE IF NOT EXISTS `alert` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` int(11) NOT NULL,
  `lat` float NOT NULL,
  `lng` float NOT NULL,
  `date_ajout` date NOT NULL,
  `date_expir` date NOT NULL,
  `compt` int(11) NOT NULL,
  `time_created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `fk_type` (`type`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 COLLATE=utf8_bin AUTO_INCREMENT=55 ;

--
-- Contenu de la table `alert`
--

INSERT INTO `alert` (`id`, `type`, `lat`, `lng`, `date_ajout`, `date_expir`, `compt`, `time_created`) VALUES
(51, 4, 43.6051, 1.39034, '2016-11-29', '2016-11-29', 1, '2016-11-29 20:41:06'),
(52, 2, 43.6051, 1.39034, '2016-11-29', '2016-11-29', 1, '2016-11-29 20:41:09'),
(53, 0, 21.21, 22.31, '2017-01-09', '2017-01-09', 1, '2017-01-09 10:34:06');

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(256) COLLATE utf8_bin NOT NULL,
  `mail` varchar(256) COLLATE utf8_bin NOT NULL,
  `password` varchar(256) COLLATE utf8_bin NOT NULL,
  `lat` float DEFAULT NULL,
  `lon` float DEFAULT NULL,
  `session` varchar(256) COLLATE utf8_bin DEFAULT NULL,
  `session_expir` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 COLLATE=utf8_bin AUTO_INCREMENT=14 ;

--
-- Contenu de la table `user`
--

INSERT INTO `user` (`id`, `username`, `mail`, `password`, `lat`, `lon`, `session`, `session_expir`) VALUES
(12, 'joshua', 'j.lariau@yahoo.fr', 'jojo2411', NULL, NULL, NULL, NULL),
(13, 'chris', 'c.chevalier@yahoo.fr', 'chris0101', NULL, NULL, NULL, NULL),
(11, 'yolo', 'hui@hy.com', '964fe6242ca987d24f0fdfd851983c68', NULL, NULL, NULL, NULL);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
