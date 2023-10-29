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
-- Table structure for table `mealrecord`
--

DROP TABLE IF EXISTS `mealrecord`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mealrecord` (
  `id` int NOT NULL AUTO_INCREMENT,
  `upid` int DEFAULT NULL,
  `uid` int DEFAULT NULL,
  `foodid` int DEFAULT NULL,
  `mrdate` datetime DEFAULT NULL,
  `meal` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mealrecord`
--

LOCK TABLES `mealrecord` WRITE;
/*!40000 ALTER TABLE `mealrecord` DISABLE KEYS */;
INSERT INTO `mealrecord` VALUES (1,1,16,1,'2023-10-10 12:52:00','lunch'),(2,2,16,1,'2023-10-10 12:52:00','lunch'),(3,1,16,3,'2023-10-10 16:04:06','snacks'),(4,2,16,3,'2023-10-10 16:04:06','snacks'),(5,1,16,6,'2023-10-10 16:04:33','snacks'),(6,2,16,6,'2023-10-10 16:04:33','snacks'),(7,1,16,6,'2023-10-10 16:06:49','snacks'),(8,2,16,6,'2023-10-10 16:06:49','snacks'),(9,2,16,3,'2023-10-10 18:50:57','dinner'),(10,3,16,3,'2023-10-10 18:51:06','dinner'),(11,2,16,8,'2023-10-10 18:52:39','dinner'),(12,3,16,8,'2023-10-10 18:52:39','dinner'),(13,4,16,4,'2023-10-10 21:49:44','snacks'),(14,3,16,4,'2023-10-10 21:49:44','snacks'),(15,5,16,4,'2023-10-10 21:49:44','snacks'),(16,1,16,3,'2023-10-16 08:39:24','breakfast'),(17,3,16,3,'2023-10-16 08:39:24','breakfast'),(18,5,16,3,'2023-10-16 08:39:24','breakfast'),(19,1,16,3,'2023-10-16 08:39:26','breakfast'),(20,3,16,3,'2023-10-16 08:39:26','breakfast'),(21,5,16,3,'2023-10-16 08:39:26','breakfast'),(22,1,16,3,'2023-10-16 08:39:24','breakfast'),(23,5,16,3,'2023-10-16 08:39:24','breakfast'),(24,4,16,1,'2023-10-23 22:18:23',''),(25,3,16,1,'2023-10-23 22:18:23','');
/*!40000 ALTER TABLE `mealrecord` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-10-29 13:52:25
