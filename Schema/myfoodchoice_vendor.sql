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
-- Table structure for table `vendor`
--

DROP TABLE IF EXISTS `vendor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vendor` (
  `idvendor` int NOT NULL,
  `vendorname` varchar(100) DEFAULT NULL,
  `vendoremail` varchar(300) DEFAULT NULL,
  `vendorpassword` varchar(300) DEFAULT NULL,
  `vendoraddress` varchar(1000) DEFAULT NULL,
  `vendorspecialty` varchar(200) DEFAULT NULL,
  `vendorimg` varchar(2000) DEFAULT NULL,
  PRIMARY KEY (`idvendor`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vendor`
--

LOCK TABLES `vendor` WRITE;
/*!40000 ALTER TABLE `vendor` DISABLE KEYS */;
INSERT INTO `vendor` VALUES (1,'Burnt Ends','BurntEnds@gmail.com','BurntEnds','7 Dempsey Rd, #01-02, Singapore 249671','Bar & Grill','https://www.shutterstock.com/shutterstock/photos/2287821617/display_1500/stock-vector-burnt-ends-label-or-stamp-on-white-background-vector-illustration-2287821617.jpg'),(2,'WildFire Burger','WildFire@gmail.com','WildFire','80 Bencoolen St, #01-15 NAFA Campus, Singapore 189655','Hamburger','https://images.squarespace-cdn.com/content/v1/5ec69a21d1b2b336d94836d5/fa86e719-4d29-4805-ace8-d13b33fc6cb9/Wildfire+Burgers+Logo.png'),(3,'Project Burgs','Burgs@gmail.com','Project Burgs','313@somerset, 313 Orchard Road, #05-01/02/03, Stall 25','Hamburger','https://eatbook.sg/wp-content/uploads/2021/07/lotus-biscoff-icecream-min.jpg'),(4,'Chirashi King Kong','ChirashiKK@gmail.com','Chirashi King Kong','9 Raffles Boulevard, #02-17, Millenia Walk, Singapore 039596','Japanese Cuisine','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJPU-2hunCnEf_GIaqFS0Wd1bAqQh9ppT9_Q&usqp=CAU'),(5,'Umi Nami','UmiNami@gmail.com','Umi Nami','8 Lor Mambong, Singapore 277674','Japanese Cuisine','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCAup--CvakZWB9SDJrGGBuFNrA5ZhqGUfdg&usqp=CAU'),(6,'Wolf Burger','WolfBurger@gmail.com','Wolf Burger','63 Hillview Avenue','Hamburger','https://www.shutterstock.com/shutterstock/photos/2287821617/display_1500/stock-vector-burnt-ends-label-or-stamp-on-white-background-vector-illustration-2287821617.jpg');
/*!40000 ALTER TABLE `vendor` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-10-20 16:03:58
