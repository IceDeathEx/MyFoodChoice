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
  `l_image` varchar(10000) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `loyaltyitem`
--

LOCK TABLES `loyaltyitem` WRITE;
/*!40000 ALTER TABLE `loyaltyitem` DISABLE KEYS */;
INSERT INTO `loyaltyitem` VALUES (1,10000,'Vouchers from NTUCC Supermarket','$10 NTUCC Voucher(*Limited*)','https://lzd-img-global.slatic.net/g/ff/kf/Sb536cd8786c24786b98819a69c4119b2W.jpg_720x720q80.jpg'),(2,20000,'Vouchers from NTUCC Supermarket','$20 NTUCC Voucher(*Limited*)','https://df3k2q0k3bu2n.cloudfront.net/static/images/VOUCNTUC20.jpg'),(3,100000,'This is a fitness tracking watch made by FitnessBite company','FitBit Watch','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoTcJ-3RJaFL-zxM4PXBVBJEFlT8bSJ14L-g&usqp=CAU'),(4,5000,'Blue Water Bottle from nageve','Blue Water Bottle','data:image/jpeg;base64,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'),(5,5000,'Pink Water Bottle from nageve','Pink Water Bottle','data:image/jpeg;base64,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'),(6,100000,'This is a fitness tracking watch made by qwer company','Treadmill','data:image/jpeg;base64,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');
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

-- Dump completed on 2023-10-11 20:29:06
