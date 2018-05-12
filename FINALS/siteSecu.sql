-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: May 12, 2018 at 07:28 AM
-- Server version: 5.7.19
-- PHP Version: 5.6.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `site-secu`
--

-- --------------------------------------------------------

--
-- Table structure for table `answer`
--

DROP TABLE IF EXISTS `answer`;
CREATE TABLE IF NOT EXISTS `answer` (
  `idanswer` int(11) NOT NULL AUTO_INCREMENT,
  `answer` varchar(150) NOT NULL,
  PRIMARY KEY (`idanswer`),
  UNIQUE KEY `idanswer_UNIQUE` (`idanswer`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `answer`
--

INSERT INTO `answer` (`idanswer`, `answer`) VALUES
(1, 'Broken Authentication'),
(2, 'XML External Entities'),
(3, 'Injection'),
(4, 'Insecure Deserialization'),
(5, 'Security Misconfiguration'),
(6, 'Insufficient Logging & Monitoring'),
(7, 'Broken Access Control'),
(9, 'Security Misconfiguration'),
(10, 'Insufficient Logging & Monitoring'),
(11, 'XML External Entitie'),
(12, 'Sensitive Data Exposure'),
(14, 'Components w/ known vulnerabilities'),
(15, 'Cross-Site Scripting');

-- --------------------------------------------------------

--
-- Table structure for table `answerstoquest`
--

DROP TABLE IF EXISTS `answerstoquest`;
CREATE TABLE IF NOT EXISTS `answerstoquest` (
  `quest` int(11) NOT NULL,
  `ans` int(11) NOT NULL,
  PRIMARY KEY (`ans`,`quest`),
  KEY `quest_idx` (`quest`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `answerstoquest`
--

INSERT INTO `answerstoquest` (`quest`, `ans`) VALUES
(1, 3),
(2, 4),
(3, 9),
(4, 7),
(5, 6),
(6, 15),
(7, 14),
(8, 1),
(9, 2),
(10, 12);

-- --------------------------------------------------------

--
-- Table structure for table `choicesofquestions`
--

DROP TABLE IF EXISTS `choicesofquestions`;
CREATE TABLE IF NOT EXISTS `choicesofquestions` (
  `question` int(11) NOT NULL,
  `choices` int(11) NOT NULL,
  PRIMARY KEY (`question`,`choices`),
  KEY `choices_idx` (`choices`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `choicesofquestions`
--

INSERT INTO `choicesofquestions` (`question`, `choices`) VALUES
(1, 1),
(5, 1),
(6, 1),
(7, 1),
(8, 1),
(9, 1),
(10, 1),
(1, 2),
(4, 2),
(5, 2),
(7, 2),
(9, 2),
(1, 3),
(4, 3),
(1, 4),
(2, 4),
(3, 4),
(8, 4),
(10, 4),
(2, 5),
(10, 5),
(2, 6),
(5, 6),
(2, 7),
(4, 7),
(2, 9),
(3, 9),
(9, 9),
(3, 10),
(3, 11),
(4, 12),
(5, 12),
(6, 12),
(9, 12),
(10, 12),
(6, 14),
(7, 14),
(8, 14),
(6, 15),
(7, 15),
(8, 15);

-- --------------------------------------------------------

--
-- Table structure for table `question`
--

DROP TABLE IF EXISTS `question`;
CREATE TABLE IF NOT EXISTS `question` (
  `idquestion` int(11) NOT NULL AUTO_INCREMENT,
  `question` varchar(300) NOT NULL,
  PRIMARY KEY (`idquestion`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `question`
--

INSERT INTO `question` (`idquestion`, `question`) VALUES
(1, 'This occurs when untrusted data is sent to an interpreter as part of a command or query.'),
(2, 'This often leads to remote code execution'),
(3, 'This is commonly a result of insecure default configurations, incomplete or ad hoc configurations, etc'),
(4, 'Restrictions on what authenticated users are allowed to do are often not properly enforced. Attackers can exploit these flaws to access unauthorized functionality and/or data'),
(5, 'This allows attackers to further attack systems, maintain persistence, pivot to more systems, and tamper, extract, or destroy data.'),
(6, 'Allows attackers to execute scripts in the victim’s browser which can hijack user sessions, deface web sites, or redirect the user to malicious sites.'),
(7, 'Applications and APIs using components with known vulnerabilities may undermine application defenses and enable various attacks and impacts.'),
(8, 'Allowing attackers to compromise passwords, keys, or session tokens, or to exploit other implementation flaws to assume other users’ identities temporarily or permanently by incorrect implementation of application functions related to authentication and session management.'),
(9, 'External entities can be used to disclose internal files using the file URI handler, internal file shares, internal port scanning, remote code execution, and denial of service attacks.'),
(10, 'Sensitive data may be compromised without extra protection, such as encryption at rest or in transit, and requires special precautions when exchanged with the browser.');

--
-- Constraints for dumped tables
--

--
-- Constraints for table `answerstoquest`
--
ALTER TABLE `answerstoquest`
  ADD CONSTRAINT `ans` FOREIGN KEY (`ans`) REFERENCES `answer` (`idanswer`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `quest` FOREIGN KEY (`quest`) REFERENCES `question` (`idquestion`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `choicesofquestions`
--
ALTER TABLE `choicesofquestions`
  ADD CONSTRAINT `choices` FOREIGN KEY (`choices`) REFERENCES `answer` (`idanswer`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `question` FOREIGN KEY (`question`) REFERENCES `question` (`idquestion`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
