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
-- Table structure for table `orderfood`
--

DROP TABLE IF EXISTS `orderfood`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orderfood` (
  `ofid` int NOT NULL,
  `ofname` varchar(100) DEFAULT NULL,
  `ofvendor` varchar(100) DEFAULT NULL,
  `ofprice` float DEFAULT NULL,
  `ofimg` varchar(2000) DEFAULT NULL,
  PRIMARY KEY (`ofid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orderfood`
--

LOCK TABLES `orderfood` WRITE;
/*!40000 ALTER TABLE `orderfood` DISABLE KEYS */;
INSERT INTO `orderfood` VALUES (1,'Hamburger','Clementi Mall',19.99,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCj-rrbXtqidB3coimmXmCOzLTbHwptgdA0g&usqp=CAU'),(2,'Salad','Admiralty 313',10,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1jilAOw-NbN6aV2xQ85h-zp9m2mqWO-3L3w&usqp=CAU'),(3,'Pasta','Woodlands North',15.99,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp3Rp4BN1k9rMidFoBnD7OLU_p0g-6Dwf0xA&usqp=CAU'),(4,'Green Smoothie','Yishun',8.7,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv079VWcqjozYf_8AmhByGaeG7OD5eShR21g&usqp=CAU'),(5,'Chicken Rice','Ji De Lai Chicken Rice',3.5,'https://danielfooddiary.com/wp-content/uploads/2022/03/jidelai9.jpg'),(6,'Chicken Rice','Tiong Bahru Chicken Rice',3.5,'https://d3h1lg3ksw6i6b.cloudfront.net/media/image/2017/06/16/cc07b8ef705f420fa49d30c54adbecc9_Tiong+Bahru+Hainanese+Chicken+Rice+1.jpg'),(7,'Beef Burger','One Fattened Calf',12.5,'https://static.thehoneycombers.com/wp-content/uploads/sites/2/2022/02/best-burger-in-singapore-one-fattened-calf-900x643.png'),(8,'Beef Burger','Burnt Ends',18.9,'https://static.thehoneycombers.com/wp-content/uploads/sites/2/2020/03/burnt-ends.png'),(9,'Beef Burger','Wildfire Burgers',15.9,'https://static.thehoneycombers.com/wp-content/uploads/sites/2/2022/02/best-burger-in-singapore-wildfire-burgers-900x643.png'),(10,'Beef Burger','Project Burgs',14.9,'https://static.thehoneycombers.com/wp-content/uploads/sites/2/2022/02/Project-Burgs-best-burgers-in-singapore-900x643.png'),(11,'Beef Burger','Burger Frites',15.6,'https://static.thehoneycombers.com/wp-content/uploads/sites/2/2022/02/Burger-Frites-best-burgers-in-singapore-900x643.png'),(12,'Beef Burger','Wolf Burger',15.9,'https://static.thehoneycombers.com/wp-content/uploads/sites/2/2021/05/best-burgers-singapore-_-wolf-burger-900x643.png'),(13,'Bryani','Bismi Biryani',13.8,'https://eatbook.sg/wp-content/uploads/2021/03/bismi-briyani-combo-platter-dulang.jpg'),(14,'Bryani','Cafe Mariam',14.9,'https://eatbook.sg/wp-content/uploads/2021/03/cafe-mariam-briyani-in-singapore.jpg'),(15,'Bryani','Bismillah Biryani Restaurant',8.9,'https://eatbook.sg/wp-content/uploads/2021/03/bismillah-biryani-briyani-in-singapore.jpg'),(16,'Bryani','Allauddin’s Biryani Pte Ltd',8.8,'https://eatbook.sg/wp-content/uploads/2021/03/allauddins-best-briyani-singapore-1.jpg'),(17,'Bryani','Koothurar Nasi Briyani',9.5,'https://eatbook.sg/wp-content/uploads/2021/03/koothurar-nasi-briyani-best-briyani-singapore.jpg'),(18,'Bryani','Geylang (Hamid’s)',7.9,'https://eatbook.sg/wp-content/uploads/2021/03/geylang-hamids-briyani-stall-best-briyani-singapore-1.jpg'),(19,'Chirashi Don','The Sushi Bar',23.9,'https://i0.wp.com/singaporeverified.com/wp-content/uploads/2023/08/The-Sushi-Bar-2.jpg?resize=1024%2C1024&ssl=1'),(20,'Chirashi Don','Sen-ryo',32,'https://i0.wp.com/singaporeverified.com/wp-content/uploads/2023/08/Sen-ryo-2.jpg?resize=819%2C1024&ssl=1'),(21,'Chirashi Don','Chirashi King Kong',13,'https://i0.wp.com/singaporeverified.com/wp-content/uploads/2023/08/Chirashi-King-Kong.jpg?resize=1024%2C1024&ssl=1'),(22,'Chirashi Don','Umi Nami',10,'https://i0.wp.com/singaporeverified.com/wp-content/uploads/2023/08/Umi-Nami.jpg?resize=1024%2C1024&ssl=1'),(23,'Chirashi Don','Hokkaido-ya',15,'https://i0.wp.com/singaporeverified.com/wp-content/uploads/2023/08/Hokkaido-ya.jpg?resize=1024%2C1024&ssl=1'),(24,'Chirashi Don','Otou-San Hokkaido Donburi',16,'https://i0.wp.com/singaporeverified.com/wp-content/uploads/2023/08/Otou-San-Hokkaido-Donburi.jpg?w=680&ssl=1'),(25,'Chicken Rice','Tian Tian Chicken Rice',5.5,'https://i.ytimg.com/vi/XFrGqXd06zY/maxresdefault.jpg'),(26,'Chicken Rice','Boon Tong Kee',6,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp65C68B2gSH5jTw53hPAa9qp2aHj47G1uMA&usqp=CAU'),(27,'Chicken Rice','People\'s Park Chicken Rice',4.5,'https://danielfooddiary.com/wp-content/uploads/2020/01/Peoples-Park-Centre-Hainanese-Chicken-Rice-scaled.jpg'),(28,'Chicken Rice','Hoe Kee Chicken Rice',2,'https://danielfooddiary.com/wp-content/uploads/2022/05/hoekee1-scaled.jpg');
/*!40000 ALTER TABLE `orderfood` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-10-16 23:05:10
