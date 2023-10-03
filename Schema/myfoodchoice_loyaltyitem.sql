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
-- Table structure for table `loyaltyitem`
--

DROP TABLE IF EXISTS `loyaltyitem`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `loyaltyitem` (
  `id` int NOT NULL,
  `points` int NOT NULL,
  `desc` varchar(1000) NOT NULL,
  `l_name` varchar(45) NOT NULL,
  `l_image` varchar(1000) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `loyaltyitem`
--

LOCK TABLES `loyaltyitem` WRITE;
/*!40000 ALTER TABLE `loyaltyitem` DISABLE KEYS */;
INSERT INTO `loyaltyitem` VALUES (1,1000,'Vouchers from NTUCC Supermarket','$10 NTUCC Voucher','https://lzd-img-global.slatic.net/g/ff/kf/Sb536cd8786c24786b98819a69c4119b2W.jpg_720x720q80.jpg'),(2,2000,'Vouchers from NTUCC Supermarket','$20 NTUCC Voucher','https://df3k2q0k3bu2n.cloudfront.net/static/images/VOUCNTUC20.jpg'),(3,10000,'This is a fitness tracking watch made by qwer company','FitBit Watch','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoTcJ-3RJaFL-zxM4PXBVBJEFlT8bSJ14L-g&usqp=CAU'),(4,1000,'Vouchers from NTUCC Supermarket','$10 NTUCC Voucher','https://lzd-img-global.slatic.net/g/ff/kf/Sb536cd8786c24786b98819a69c4119b2W.jpg_720x720q80.jpg'),(5,2000,'Vouchers from NTUCC Supermarket','$20 NTUCC Voucher','https://df3k2q0k3bu2n.cloudfront.net/static/images/VOUCNTUC20.jpg'),(6,10000,'This is a fitness tracking watch made by qwer company','FitBit Watch','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoTcJ-3RJaFL-zxM4PXBVBJEFlT8bSJ14L-g&usqp=CAU'),(7,1000,'Vouchers from NTUCC Supermarket','$10 NTUCC Voucher','https://lzd-img-global.slatic.net/g/ff/kf/Sb536cd8786c24786b98819a69c4119b2W.jpg_720x720q80.jpg');
/*!40000 ALTER TABLE `loyaltyitem` ENABLE KEYS */;
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
