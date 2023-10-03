CREATE DATABASE  IF NOT EXISTS `myfoodchoice` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `myfoodchoice`;
-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: myfoodchoice
-- ------------------------------------------------------
-- Server version	8.1.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `gender` varchar(20) NOT NULL,
  `accountType` varchar(45) NOT NULL,
  `country` varchar(45) NOT NULL,
  `height` int NOT NULL,
  `weight` float NOT NULL,
  `lifestyle` varchar(45) NOT NULL,
  `conditions` varchar(45) NOT NULL,
  `dob` date NOT NULL,
  `bmi` float NOT NULL,
  `premium` varchar(45) DEFAULT NULL,
  `loyaltypoint` int DEFAULT NULL,
  `age` int DEFAULT NULL,
  PRIMARY KEY (`id`,`email`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'JohnDoe@gmail.com','John Doe','test','Male','user','Singapore',190,80.5,'Sedentary','Diabetes','1997-01-28',22.2991,'basic',10000,NULL),(2,'KarenLoh@gmail.com','Karen Loh','test456','Female','system admin','Singapore',180,70.7,'Not Active','Diabetes','1997-01-28',21.8209,'premium',2000,NULL),(3,'NelsonAw@gmail.com','Nelson Aw','test456','Female','system admin','Singapore',170,60.6,'Sedentary','High blood pressure','1997-01-28',20.9688,'premium',5000,NULL),(4,'SionggoJapit@gmail.com','Sionggo Japit','test789','Male','vendor','Singapore',160,90.9,'Not Active','High Cholesterol','1997-01-28',35.5078,'basic',100000,NULL),(13,'NicholasTan@gmail.com','Nicholas Tan','test','Male','system admin','Singapore',170,80.8,'Sedentary','High blood pressure','1997-01-28',27.9584,'premium',120000,NULL),(15,'Garytan@gmail.com','Gary Tan','test','Male','user','Singapore',180,70.7,'Sedentary','High blood pressure','1997-01-28',21.8209,'basic',120000,NULL),(16,'testing@gmail.com','testing','test','Male','user','Singapore',123,13,'Not Active(0-1 times a week)','High Blood Pressure','1990-01-28',8.59,'basic',50000,NULL),(17,'testing2@gmail.com','testing2','test','Male','user','Singapore',171,70,'Not Active','Normal','1990-12-03',23.9389,'premium',1000,NULL),(18,'JonathanZheng@gmail.com','Jonathan Zheng','test123','Male','vendor','Indonesia',170,65,'Very Active(More than 3 times a week)','Normal','1990-01-02',22.4914,'basic',1500,NULL);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-10-03 22:49:28
