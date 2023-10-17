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
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transaction`
--

LOCK TABLES `transaction` WRITE;
/*!40000 ALTER TABLE `transaction` DISABLE KEYS */;
INSERT INTO `transaction` VALUES (15,16,2,'Salad',10,4,'2023-10-17 20:20:19','Admiralty 313','Unpaid','Counter','Food'),(18,16,9,'Fresh corn salad',10,1,'2023-10-17 20:20:19','Care Calories','Unpaid','Counter','Recipe'),(19,16,5,'Chicken Rice',3.5,10,'2023-10-17 20:20:19','Ji De Lai Chicken Rice','Unpaid','Counter','Food'),(21,16,0,'Upgrade',30,1,'2023-10-17 20:20:19','Care Calories','Unpaid','Counter','Upgrade'),(27,16,1,'Hamburger',19.99,1,'2023-10-17 20:20:19','Clementi Mall','Unpaid','Counter','Food'),(28,16,2,'Nasi Lemak',10,1,'2023-10-17 20:53:31','Care Calories','Paid','Counter','Recipe'),(30,16,4,'Penang Assam laksa',20,1,'2023-10-17 21:00:37','Care Calories','Paid','Counter','Recipe'),(31,16,1,'Hainese Chicken Rice',20,1,'2023-10-17 21:00:37','Care Calories','Paid','Counter','Recipe'),(32,16,11,'Super healthy set',60,1,'2023-10-17 21:04:26','Care Calories','Paid','Counter','Recipe'),(33,16,12,'Super value set',64,1,'2023-10-17 22:10:52','Care Calories','Paid','Counter','Recipe'),(41,16,6,'Chicken Rice',3.5,3,'2023-10-17 23:42:37','Tiong Bahru Chicken Rice','Ongoing','Counter','Food');
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

-- Dump completed on 2023-10-18  0:15:40
