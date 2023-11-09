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
-- Table structure for table `foodnutrition`
--

DROP TABLE IF EXISTS `foodnutrition`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `foodnutrition` (
  `id` int NOT NULL,
  `fname` varchar(100) DEFAULT NULL,
  `kcal` float DEFAULT NULL,
  `protein` float DEFAULT NULL,
  `fat` float DEFAULT NULL,
  `carbohydrate` float DEFAULT NULL,
  `saturatedfat` float DEFAULT NULL,
  `cholesterol` float DEFAULT NULL,
  `dietaryfibre` float DEFAULT NULL,
  `sodium` float DEFAULT NULL,
  `weight` float DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `foodnutrition`
--

LOCK TABLES `foodnutrition` WRITE;
/*!40000 ALTER TABLE `foodnutrition` DISABLE KEYS */;
INSERT INTO `foodnutrition` VALUES (1,'Ba Chor Mee',520,26.04,21.61,54.76,6.601,92,3.5,644,300),(2,'Char Kway Teow',742,22.7,39,76,0,235,7,1463,200),(3,'Chicken Rice',800,50,25,80,0,45,0,400,250),(4,'Chilli Crab',565,45,34,20,15.6,587,0,2139,250),(5,'Laksa',313,16.6,12.8,33.8,4.6,40,6,340,300),(6,'Nasi Lemak',389,13,14,80,20,40,5,200,300),(7,'Nasi Padang',664,5,15,70,20,40,5,300,120),(8,'Roti Prata',209,5,7,32,2.9,1,1.7,386,70);
/*!40000 ALTER TABLE `foodnutrition` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-11-10  0:43:16
