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
  `gender` varchar(20) DEFAULT NULL,
  `accountType` varchar(45) NOT NULL,
  `country` varchar(45) DEFAULT NULL,
  `height` int DEFAULT NULL,
  `weight` float DEFAULT NULL,
  `lifestyle` varchar(45) DEFAULT NULL,
  `conditions` varchar(45) DEFAULT NULL,
  `dob` date DEFAULT NULL,
  `bmi` float DEFAULT NULL,
  `premium` varchar(45) DEFAULT NULL,
  `loyaltypoint` int DEFAULT NULL,
  `age` int DEFAULT NULL,
  `calorielimit` int DEFAULT NULL,
  PRIMARY KEY (`id`,`email`)
) ENGINE=InnoDB AUTO_INCREMENT=72 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (2,'KarenLoh@gmail.com','Karen Loh','test456','Female','system admin','Singapore',180,70.7,'Not Active','Diabetes','1997-01-28',21.8209,'premium',2000,18,2000),(56,'KFC@gmail.com','KFC','KFCisGood!!123',NULL,'vendor',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(57,'WolfBurger@gmail.com','Wolf Burger','Wolf Burger',NULL,'vendor',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(58,'UmiNami@gmail.com','Umi Nami','Umi Nami',NULL,'vendor',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(59,'ChirashiKK@gmail.com','Chirashi King Kong','Chirashi King Kong',NULL,'vendor',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(60,'Burgs@gmail.com','Project Burgs','Project Burgs',NULL,'vendor',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(61,'WildFire@gmail.com','WildFire Burger','WildFire',NULL,'vendor',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(62,'BurntEnds@gmail.com','Burnt Ends','BurntEnds',NULL,'vendor',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(68,'DonDon@gmail.com','Don Don Donki','DonDon@123!!!',NULL,'vendor',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(69,'Karen99@gmail.com','Karen99','test456@123','Male','user','Malaysia',165,50,'Not Active','Asthma','2005-02-15',18.3655,'basic',750,18,2500),(70,'Karen123@gmail.com','Karen123','P@ssword123','Male','user','Malaysia',160,50,'Active(1-2 times a week)','Asthma','2006-07-12',19.5312,'basic',500,17,2500),(71,'KarenAwesome@gmail.com','KarenAwesome','P@ssword@123','Female','user','Singapore',170,65,'Active(1-2 times a week)','Normal','2000-11-03',22.4914,'basic',1000,23,2000);
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

-- Dump completed on 2023-11-10  0:43:17
