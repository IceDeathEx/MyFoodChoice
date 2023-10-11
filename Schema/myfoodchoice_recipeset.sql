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
-- Table structure for table `recipeset`
--

DROP TABLE IF EXISTS `recipeset`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `recipeset` (
  `setid` int NOT NULL,
  `settitle` varchar(200) DEFAULT NULL,
  `recipeid1` int DEFAULT NULL,
  `recipeid2` int DEFAULT NULL,
  `recipeid3` int DEFAULT NULL,
  `recipeid4` int DEFAULT NULL,
  `diettype` varchar(100) DEFAULT NULL,
  `healthcategory` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`setid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recipeset`
--

LOCK TABLES `recipeset` WRITE;
/*!40000 ALTER TABLE `recipeset` DISABLE KEYS */;
INSERT INTO `recipeset` VALUES (1,'Hainese Chicken Rice',1,NULL,NULL,NULL,'Normal','Diabetes'),(2,'Nasi Lemak',2,NULL,NULL,NULL,'Normal','Diabetes'),(3,'Nasi Goreng',3,NULL,NULL,NULL,'Normal','Diabetes'),(4,'Penang Assam laksa',4,NULL,NULL,NULL,'Normal','Diabetes'),(5,'Kaya Jam',5,NULL,NULL,NULL,'Normal','Normal'),(6,'Fried Rice with shallots',6,NULL,NULL,NULL,'Normal','Cholesterol'),(7,'Pink swiss roll with chocolate ganache',7,NULL,NULL,NULL,'Normal','Cholesterol'),(8,'Coconut cereal Belgian waffles (4 waffles)',8,NULL,NULL,NULL,'Normal','Cholesterol'),(9,'Fresh corn salad',9,NULL,NULL,NULL,'Normal','Heart disease'),(10,'Asian Ginger Fish Soup',10,NULL,NULL,NULL,'Normal','Diabetes'),(11,'Super healthy set',1,2,3,4,'Keto Diet','All'),(12,'Super value set',5,6,7,8,'Healthy Diet','All');
/*!40000 ALTER TABLE `recipeset` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-10-11 20:29:06
