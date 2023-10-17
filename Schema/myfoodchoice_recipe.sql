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
-- Table structure for table `recipe`
--

DROP TABLE IF EXISTS `recipe`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `recipe` (
  `recipeid` int NOT NULL,
  `recipetitle` varchar(100) DEFAULT NULL,
  `vendor` varchar(100) DEFAULT NULL,
  `recipeprice` float DEFAULT NULL,
  `protein` int DEFAULT NULL,
  `carbohydrate` int DEFAULT NULL,
  `fat` int DEFAULT NULL,
  `saturatedfat` int DEFAULT NULL,
  `sodium` int DEFAULT NULL,
  `cholesterol` int DEFAULT NULL,
  `calories` int DEFAULT NULL,
  `recipedate` datetime DEFAULT NULL,
  `recipeimage` varchar(1000) DEFAULT NULL,
  `sugar` float DEFAULT NULL,
  `dietaryfibre` int DEFAULT NULL,
  PRIMARY KEY (`recipeid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recipe`
--

LOCK TABLES `recipe` WRITE;
/*!40000 ALTER TABLE `recipe` DISABLE KEYS */;
INSERT INTO `recipe` VALUES (1,'Hainese Chicken Rice','Tian Tian Chicken Rice',20,100,325,20,8,1112,41,525,'2023-10-11 15:24:22','https://100kcals.com/wp-content/uploads/2020/10/Hainanese-Chicken-Rice-Calories.jpg',0,0),(2,'Nasi Lemak','Encik Ali',10,13,80,14,8,838,76,494,'2023-10-11 16:24:22','https://www.yummytummyaarthi.com/wp-content/uploads/2023/03/3f0d98a9-c59f-4dac-8071-4087d82aa365-scaled.jpeg',0,7),(3,'Nasi Goreng','Encik Asgar',10,12,36,9,2,549,98,274,'2023-10-11 17:24:22','https://www.wandercooks.com/wp-content/uploads/2023/05/nasi-goreng-3.jpg',1,1),(4,'Penang Assam laksa','Encik Ali',20,13,61,1,0,2140,0,310,'2023-10-11 16:24:22','https://health.family.my/files/sites/55/2015/04/malaysia-asam-laksa.jpg',5,5),(5,'Kaya Jam','Nyonya Special',25,15,105,76,43,1231,738,979,'2023-10-11 15:24:22','https://www.sidechef.com/recipe/86efa116-1720-4732-bc84-38608f237591.jpeg?d=1408x1120',97,0),(6,'Fried Rice with shallots','Queen of Fried Rice',15,6,45,4,1,530,25,238,'2023-10-11 17:24:22','https://www.savoryexperiments.com/wp-content/uploads/2022/11/Fried-Rice-9-500x500.jpg',1,2),(7,'Swiss roll with chocolate','Hearts Bakery',12,1,19,5,2,103,0,124,'2023-10-11 15:24:22','https://www.simplyrecipes.com/thmb/hlTbS_TNYARzCdBhAtbEjRmRvzU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Chocolate-Swiss-Roll-LEAD-2-ecad1f5cc39246b7b53d9d46afaa9e6a.jpg',12,1),(8,'Belgian waffles','Hearts Bakery',12,6,25,11,2,383,52,218,'2023-10-11 15:24:22','https://images.immediate.co.uk/production/volatile/sites/30/2022/09/Classic-Waffles-0ae28b2.jpg?resize=768,574',10,1),(9,'Fresh corn salad','Salad Expert',10,5,31,13,2,317,0,239,'2023-10-11 15:24:22','https://www.inspiredtaste.net/wp-content/uploads/2023/06/Easy-Corn-Salad-1200.jpg',7,4),(10,'Asian Ginger Fish Soup','Souper Lang',12,29,13,3,1,1690,163,210,'2023-10-11 15:24:22','https://noobcook.com/wp-content/uploads/2018/03/9F5C4471-620x465.jpg',7,3);
/*!40000 ALTER TABLE `recipe` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-10-18  0:15:41
