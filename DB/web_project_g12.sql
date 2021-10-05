-- MySQL dump 10.13  Distrib 8.0.26, for macos11 (x86_64)
--
-- Host: localhost    Database: web_project_g12
-- ------------------------------------------------------
-- Server version	8.0.26

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Contact`
--

DROP TABLE IF EXISTS `Contact`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Contact` (
  `id` int NOT NULL,
  `type` varchar(50) DEFAULT NULL,
  `customer_email` varchar(50) DEFAULT NULL,
  `provider_email` varchar(50) DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `provider_email` (`provider_email`),
  KEY `customer_email` (`customer_email`),
  CONSTRAINT `contact_ibfk_1` FOREIGN KEY (`provider_email`) REFERENCES `Provider` (`email`),
  CONSTRAINT `contact_ibfk_2` FOREIGN KEY (`customer_email`) REFERENCES `Customer` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Contact`
--

LOCK TABLES `Contact` WRITE;
/*!40000 ALTER TABLE `Contact` DISABLE KEYS */;
/*!40000 ALTER TABLE `Contact` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Contact_Us`
--

DROP TABLE IF EXISTS `Contact_Us`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Contact_Us` (
  `email` varchar(50) DEFAULT NULL,
  `full_name` varchar(50) DEFAULT NULL,
  `phone` varchar(50) DEFAULT NULL,
  `content` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Contact_Us`
--

LOCK TABLES `Contact_Us` WRITE;
/*!40000 ALTER TABLE `Contact_Us` DISABLE KEYS */;
INSERT INTO `Contact_Us` VALUES ('shirmenashe135@gmail.com','שיר מנשה','0526377721',NULL),('dfsfg34@gmail.com','גבר אנוכי','046244234',NULL),('mismis34@hotmail.com','מישה המלשין','045624234',NULL);
/*!40000 ALTER TABLE `Contact_Us` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Customer`
--

DROP TABLE IF EXISTS `Customer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Customer` (
  `email` varchar(50) NOT NULL,
  `username` varchar(10) DEFAULT NULL,
  `password` varchar(10) DEFAULT NULL,
  `city` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Customer`
--

LOCK TABLES `Customer` WRITE;
/*!40000 ALTER TABLE `Customer` DISABLE KEYS */;
INSERT INTO `Customer` VALUES ('','','',''),('Eli@gmail.com','terijmfdg','3234dsf','להבים'),('Eli3@gmail.com','fddfsds','44463434','באר שבע '),('roi@gmail.com','rdfgsf','6456546','תל אביב'),('RoniGotliv@gmail.com','roniesf','456563','לוד'),('shirmenashe13456@gmail.com66','שיר מנשה','123456','להבים'),('shirmenashe135@gmail.com6','שיר מנשה','123456','להבים'),('shirmenashe135@gmail.com66','שיר מנשה','123456','להבים'),('shirmenashe13553456@gmail.com66','שיר מנשה','123456','להבים'),('shirmenashe13556@gmail.com66','שיר מנשה','123456','להבים'),('shirmenashe15635@gmail.com','שיר מנשה','123456','להבים'),('shirmenashe198735@gmail.com','שיר מנשה','123456','להבים'),('ShirWeb@gmail.com','shirtom','zxfdf567','באר שבע');
/*!40000 ALTER TABLE `Customer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Provider`
--

DROP TABLE IF EXISTS `Provider`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Provider` (
  `email` varchar(50) NOT NULL,
  `username` varchar(10) DEFAULT NULL,
  `password` varchar(10) DEFAULT NULL,
  `about` varchar(50) DEFAULT NULL,
  `city` varchar(50) DEFAULT NULL,
  `service_type` varchar(50) DEFAULT NULL,
  `fee` int DEFAULT NULL,
  `age` int DEFAULT NULL,
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Provider`
--

LOCK TABLES `Provider` WRITE;
/*!40000 ALTER TABLE `Provider` DISABLE KEYS */;
INSERT INTO `Provider` VALUES ('barakbz33@gmail.com','tomi4','xcx4545','מת על כלבים באמא שלי ','להבים','אילוף אישי',130,NULL),('fdfdsf@gmail.com','fsdfdsf','4343dfsd','בתחום 4 שנים מת על כלבים ויודע איך לגשת אליהם','תל אביב','אילוף אישי',130,NULL),('LebronJames@gmail.com','gdfgg56','fjasdcv78','עובד כבר 4 שנים לא תצטערו','תל אביב','אילוף בקבוצות',150,NULL),('MichaelBroid@gmail.com','rtijfdn56','aasdbg87','מספר בשיטת קוקו שאנל','צפת','ספר כלבים',200,NULL),('sdsdv4@gmail.com','addda','csasa23',' בוגר מכללת מיי-דוג. בעל תשומת לב וסבלנות רבה','הוד השרון','אילוף אישי',160,33),('shirmenashe135@gmail.com','שיר מנשה','123456','אחלה מאלפת ','להבים','אילוף כלבים',60,NULL);
/*!40000 ALTER TABLE `Provider` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Review`
--

DROP TABLE IF EXISTS `Review`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Review` (
  `Cemail` varchar(50) NOT NULL,
  `Pemail` varchar(50) NOT NULL,
  `starts` int DEFAULT NULL,
  `content` varchar(255) DEFAULT NULL,
  `service_type` varchar(50) DEFAULT NULL,
  `number_of_sessions` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`Cemail`,`Pemail`),
  KEY `Pemail` (`Pemail`),
  CONSTRAINT `review_ibfk_1` FOREIGN KEY (`Cemail`) REFERENCES `Customer` (`email`),
  CONSTRAINT `review_ibfk_2` FOREIGN KEY (`Pemail`) REFERENCES `Provider` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Review`
--

LOCK TABLES `Review` WRITE;
/*!40000 ALTER TABLE `Review` DISABLE KEYS */;
INSERT INTO `Review` VALUES ('Eli@gmail.com','LebronJames@gmail.com',5,'הבאנו את לוסי שלנו לברק עם שיער מקורזל שהפריע לה מאוד בשיגרה היומיומית, והידיים המדהימות של ברק עשו ללוסי תספורת מהממת, קצית ורעננה שללא מילים אלא רק מנביחות האושר, אנו יודעים שהיא מרוצה','ספרים לכלבים','1'),('roi@gmail.com','LebronJames@gmail.com',5,'אשתי ואני עובדים בענף ההייטק ימים ארוכים ללא זמן להוציא את דינגו שלנו לטיולים בבוקר ובצהריים, למזלנו מצאנו את לברון היקר אשר עושה זאת עבורנו במקצועיות ועדינות מופתית','דוג ווקינג','14'),('RoniGotliv@gmail.com','LebronJames@gmail.com',5,'תמיד רציתי שיכולות האגיליטי של דובילה יגיעו למקסימום, ואף הלכתי למספר מאמנים מובילים, כל זה נפסק כאשר הגעתי אל מיכאל ברויד הנודע. מיכאל הטמיע בדובילה את יכולות האגיליטי הגבוהות ביותר, וגם הפך אותו לכלב מאושר!','אגיליט','8');
/*!40000 ALTER TABLE `Review` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-10-05  4:17:52
