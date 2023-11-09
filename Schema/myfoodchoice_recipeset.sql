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
  `recipeid1` varchar(100) DEFAULT NULL,
  `recipeid2` varchar(100) DEFAULT NULL,
  `recipeid3` varchar(100) DEFAULT NULL,
  `recipeid4` varchar(100) DEFAULT NULL,
  `diettype` varchar(100) DEFAULT NULL,
  `healthcategory` varchar(100) DEFAULT NULL,
  `recipesetprice` float DEFAULT NULL,
  PRIMARY KEY (`setid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recipeset`
--

LOCK TABLES `recipeset` WRITE;
/*!40000 ALTER TABLE `recipeset` DISABLE KEYS */;
INSERT INTO `recipeset` VALUES (1,'Hainese Chicken Rice','Hainese Chicken Rice',NULL,NULL,NULL,'Normal Diet','Diabetes',20),(2,'Nasi Lemak','Nasi Lemak',NULL,NULL,NULL,'Normal Diet','Diabetes',10),(3,'Nasi Goreng','Nasi Goreng',NULL,NULL,NULL,'Normal Diet','Diabetes',10),(4,'Penang Assam laksa','Penang Assam laksa',NULL,NULL,NULL,'Normal Diet','Diabetes',20),(5,'Kaya Jam','Kaya Jam',NULL,NULL,NULL,'Normal Diet','Normal',25),(6,'Fried Rice with shallots','Fried Rice with shallots',NULL,NULL,NULL,'Normal Diet','Cholesterol',15),(7,'Swiss roll with chocolate','Swiss roll with chocolate',NULL,NULL,NULL,'Normal Diet','Cholesterol',12),(8,'Belgian waffles','Belgian waffles',NULL,NULL,NULL,'Normal Diet','Cholesterol',12),(9,'Fresh corn salad','Fresh corn salad',NULL,NULL,NULL,'Normal Diet','Heart disease',10),(10,'Asian Ginger Fish Soup','Asian Ginger Fish Soup',NULL,NULL,NULL,'Normal Diet','Diabetes',12),(11,'Super healthy set','Hainese Chicken Rice','Nasi Lemak','Nasi Goreng','Penang Assam laksa','Keto Diet','All',60),(12,'Super value set','Kaya Jam','Fried Rice with shallots','Swiss roll with chocolate','Belgian waffles','Healthy Diet','All',64);
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

-- Dump completed on 2023-11-10  0:43:15
