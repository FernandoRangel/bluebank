-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 27-Fev-2017 às 01:20
-- Versão do servidor: 5.6.17
-- PHP Version: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `bluebank`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `agencia`
--

CREATE TABLE IF NOT EXISTS `agencia` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `numero` int(4) NOT NULL,
  `nome` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=3 ;

--
-- Extraindo dados da tabela `agencia`
--

INSERT INTO `agencia` (`id`, `numero`, `nome`) VALUES
(1, 1478, 'vila olímpia'),
(2, 2587, 'cotia');

-- --------------------------------------------------------

--
-- Estrutura da tabela `conta`
--

CREATE TABLE IF NOT EXISTS `conta` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `numeroAgencia` int(11) NOT NULL,
  `numero` int(11) NOT NULL,
  `senha` varchar(255) NOT NULL,
  `nome` varchar(255) NOT NULL,
  `cpf` varchar(14) NOT NULL,
  `saldo` decimal(11,2) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=3 ;

--
-- Extraindo dados da tabela `conta`
--

INSERT INTO `conta` (`id`, `numeroAgencia`, `numero`, `senha`, `nome`, `cpf`, `saldo`) VALUES
(1, 1478, 12345, '1234', 'Fernando Rangel', '455.898.784/57', '100.00'),
(2, 2587, 69856, '4321', 'Dave Grohl', '569.878.987/87', '3000.00');

-- --------------------------------------------------------

--
-- Estrutura da tabela `transferencia`
--

CREATE TABLE IF NOT EXISTS `transferencia` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `valor` decimal(11,2) NOT NULL,
  `numeroContaOrigem` int(11) NOT NULL,
  `numeroContaDestino` int(11) NOT NULL,
  `dataCadastro` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=14 ;

--
-- Extraindo dados da tabela `transferencia`
--

INSERT INTO `transferencia` (`id`, `valor`, `numeroContaOrigem`, `numeroContaDestino`, `dataCadastro`) VALUES
(13, '30.00', 12345, 69856, '2017-02-27 01:20:02');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
