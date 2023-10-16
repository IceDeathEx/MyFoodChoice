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
-- Table structure for table `transaction`
--

DROP TABLE IF EXISTS `transaction`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `transaction` (
  `transid` int NOT NULL AUTO_INCREMENT,
  `uid` int DEFAULT NULL,
  `transitemid` int DEFAULT NULL,
  `transitemname` varchar(200) DEFAULT NULL,
  `transitemprice` float DEFAULT NULL,
  `transqty` int DEFAULT NULL,
  `transdate` datetime DEFAULT NULL,
  `transitemvendor` varchar(200) DEFAULT NULL,
  `transstatus` varchar(100) DEFAULT NULL,
  `payment` varchar(45) DEFAULT NULL,
  `transcategory` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`transid`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transaction`
--

LOCK TABLES `transaction` WRITE;
/*!40000 ALTER TABLE `transaction` DISABLE KEYS */;
INSERT INTO `transaction` VALUES (1,16,1,'Hamburger',19.99,1,'2023-10-16 20:11:40','Clementi Mall','Unpaid','Counter','Food'),(2,16,2,'Salad',10,1,'2023-10-16 20:12:33','Admiralty 313','Unpaid','Counter','Food'),(7,16,2,'Salad',10,1,'2023-10-16 22:15:10','Admiralty 313','Unpaid','Counter','Food'),(8,16,3,'Pasta',15.99,1,'2023-10-16 22:15:28','Woodlands North','Unpaid','Counter','Food'),(9,16,6,'Chicken Rice',3.5,1,'2023-10-16 22:16:57','Tiong Bahru Chicken Rice','Unpaid','Counter','Food'),(12,16,11,'Super healthy set',60,1,'2023-10-16 22:50:01','Care Calories','Unpaid','Counter','Recipe');
/*!40000 ALTER TABLE `transaction` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-10-16 23:05:09
