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
-- Table structure for table `recipeingredient`
--

DROP TABLE IF EXISTS `recipeingredient`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `recipeingredient` (
  `recipeid` int NOT NULL,
  `foodcomponent` varchar(100) NOT NULL,
  `ingredient` varchar(300) NOT NULL,
  PRIMARY KEY (`recipeid`,`foodcomponent`,`ingredient`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recipeingredient`
--

LOCK TABLES `recipeingredient` WRITE;
/*!40000 ALTER TABLE `recipeingredient` DISABLE KEYS */;
INSERT INTO `recipeingredient` VALUES (1,'Ginger Garlic Sauce','1 tablespoon rice vinegar'),(1,'Ginger Garlic Sauce','2 tablespoons fresh ginger, grated'),(1,'Ginger Garlic Sauce','2 tablespoons garlic, finely minced'),(1,'Ginger Garlic Sauce','3 tablespoons peanut oil'),(1,'Ginger Garlic Sauce','kosher salt, to taste'),(1,'Hainanese Chicken','1 bunch fresh scallion'),(1,'Hainanese Chicken','1 gal cold water(3.7 L), plus more as needed'),(1,'Hainanese Chicken','¼ cup kosher salt(60 g), divided'),(1,'Hainanese Chicken','2 tablespoons sesame oil'),(1,'Hainanese Chicken','3 lb whole chicken(1.3 kg), giblets removed'),(1,'Hainanese Chicken','4 inch pieces fresh ginger, peeled and cut into ¼-inch (6 mm) slices'),(1,'Hainanese Rice','1 tablespoon fresh ginger, minced'),(1,'Hainanese Rice','1 tablespoon garlic, minced'),(1,'Hainanese Rice','1 tablespoon lime juice'),(1,'Hainanese Rice','2 tablespoons reserved chicken poaching broth'),(1,'Hainanese Rice','2 tablespoons sambal'),(1,'Hainanese Rice','2 tablespoons sriracha'),(1,'Hainanese Rice','2 teaspoons sugar'),(1,'Soy Dipping Sauce','1 bunch fresh cilantro, for serving'),(1,'Soy Dipping Sauce','1 tablespoon light soy sauce'),(1,'Soy Dipping Sauce','1 tablespoon oyster sauce'),(1,'Soy Dipping Sauce','2 cucumbers, thinly sliced, for serving'),(1,'Soy Dipping Sauce','2 tablespoons reserved chicken poaching broth'),(1,'Soy Dipping Sauce','3 tablespoons dark sweet soy sauce'),(1,'Soy Dipping Sauce','reserved fried garlic and ginger'),(2,'Coconut Milk Rice','1 stalk lemongrass'),(2,'Coconut Milk Rice','½ cup coconut cream'),(2,'Coconut Milk Rice','2 pandan leaves'),(2,'Coconut Milk Rice','3 cups jasmine rice'),(2,'Coconut Milk Rice','3 cups water'),(2,'Fried Anchovies and Peanuts','1 cup dried anchovies'),(2,'Fried Anchovies and Peanuts','1 cup dry roasted peanuts'),(2,'Fried Anchovies and Peanuts','2 tsp cooking oil divided'),(2,'Fried Anchovies and Peanuts','Pinch of sugar'),(2,'Garnish','1 small cucumber (washed and thinly sliced)'),(3,'Aromatics','1 Tbsp sambal oelek optional, or any chili sauce of your choice'),(3,'Aromatics','½ tsp Shrimp paste'),(3,'Aromatics','4 shallots thinly sliced'),(3,'Aromatics','5 cloves garlic minced or sliced'),(3,'Aromatics','5 serrano peppers sliced, more or less to your preference'),(3,'Common','150 g leftover cooked chicken meat cut into bite-size pieces'),(3,'Common','3 cups water spinach'),(3,'Common','3 Tbsp oil or as needed'),(3,'Common','500 g cooked rice preferably overnight'),(3,'Common','60 g dried anchovies small to medium size'),(3,'Seasonings','1 tsp chicken powder'),(3,'Seasonings','½ tsp sugar'),(3,'Seasonings','¼ tsp ground white pepper'),(3,'Seasonings','¾ tsp salt or more as needed'),(4,'Common','500 gr mackerel fish gutted, or you can use canned sardines in tomato sauce'),(4,'Common','500 gr thick rice noodles cook according to instruction on the package'),(4,'Seasonings','5 Tbsp sugar or more to taste'),(4,'Seasonings','Salt to taste'),(4,'Serve with','1 bunch fresh mint leaves'),(4,'Serve with','1 ginger flower finely chopped'),(4,'Serve with','1 head lettuce shredded'),(4,'Serve with','1 large cucumber julienned'),(4,'Serve with','1 large purple onion thinly sliced'),(4,'Serve with','1 lime quartered'),(4,'Serve with','100 gr pineapple chunks'),(4,'Serve with','50 gr hae ko (petis udang) + 1 Tbsp hot water'),(4,'Soup base','1 Tbsp shrimp paste'),(4,'Soup base','10 cups water'),(4,'Soup base','3 pieces dried bunga kencong if you use fresh you only need 1 fresh flower'),(4,'Soup base','3 stalks lemongrass cut into half and bruise with heavy object'),(4,'Soup base','5 pieces asam gelugur / dried tamarind peel'),(4,'Soup base','50 gr tamarind paste'),(4,'Spices and herbs to grind into paste','100 gr red chilies fresh or dried (soak in warm water if using dried chilies)'),(4,'Spices and herbs to grind into paste','150 gr shallots or use purple onion'),(4,'Spices and herbs to grind into paste','25 gr galangal skinned'),(4,'Spices and herbs to grind into paste','25 gr garlic'),(5,'Common','200 ml canned coconut cream'),(5,'Common','4 egg yolks from large eggs beaten'),(5,'For pandan flavor kaya','1 tsp pandan essence or use 50 ml of pandan juice extract'),(5,'For pandan flavor kaya','20 gr palm sugar'),(5,'For pandan flavor kaya','80 gr white sugar'),(5,'For regular kaya','3 pandan leaves/screwpine leaves knotted'),(5,'For regular kaya','50 gr palm sugar'),(5,'For regular kaya','50 gr white sugar you can reduce amount of sugar to your taste'),(6,'Common','1 cup of green peas (if frozen, thawed first)'),(6,'Common','1 tsp of turmeric powder'),(6,'Common','¼ cup curry leaves'),(6,'Common','10 shallots (peeled and thinly sliced)'),(6,'Common','2 boneless skinless chicken thighs (cut into 1-inch cubes)'),(6,'Common','2 cloves garlic (peeled and minced)'),(6,'Common','2 large onions (peeled and diced)'),(6,'Common','2 Tbsp margarine or butter'),(6,'Common','3 Tbsp grape seeds oil'),(6,'Common','4 cups cooked jasmine rice (made with 2 cups of jasmine rice + 2 cups of water)'),(6,'Common','4 oz of canned tuna'),(6,'Common','4-5 Bird’s eyes chili (as many or as little as you want) (chopped)'),(6,'Garnish','1 lime (cut into wedges)'),(6,'Garnish','Fried eggs (optional)'),(6,'Garnish','Generous amount of fried-shallot crisp (available at Asian grocery)'),(7,'Chocolate Ganache','1 Tbsp milk'),(7,'Chocolate Ganache','½ cup heavy Cream'),(7,'Chocolate Ganache','4 oz Bittersweet Chocolate Chips Or Chopped Chocolate'),(7,'For Swiss Roll','½ cup sugar'),(7,'For Swiss Roll','½ tsp vanilla extract'),(7,'For Swiss Roll','⅓ cup all-purpose Flour'),(7,'For Swiss Roll','¼ tsp salt'),(7,'For Swiss Roll','4 large Eggs'),(7,'For Swiss Roll','4 Tbsp butter melted'),(7,'For Swiss Roll','butter For Greasing'),(7,'For Swiss Roll','gel food coloring'),(7,'Homemade whipped cream','1 cup heavy Cream'),(7,'Homemade whipped cream','1 tsp vanilla extract'),(7,'Homemade whipped cream','¼ cup sugar'),(8,'Common','1 ½ cups coconut milk'),(8,'Common','1 ¾ cups of all-purpose flour'),(8,'Common','1 cup of Honey Comb cereal plus more for serving'),(8,'Common','1 stick unsalted butter 8 Tbsp, plus more for baking, melted'),(8,'Common','½ tsp baking powder'),(8,'Common','½ tsp salt'),(8,'Common','¼ tsp baking soda'),(8,'Common','3 large eggs'),(8,'Common','Maple syrup for serving'),(8,'Common','Sweetened coconut flakes'),(9,'Common','1/2 C julienned fresh basil leaves'),(9,'Common','1/2 C small-diced red onion (1 small onion)'),(9,'Common','1/2 tsp freshly ground black pepper'),(9,'Common','1/2 tsp kosher salt'),(9,'Common','3 Tbsp cider vinegar'),(9,'Common','3 Tbsp good olive oil'),(9,'Common','5 ears of corn, shucked'),(10,'Aromatics','2 cloves garlic finely chopped'),(10,'Aromatics','2 inch piece of ginger grated'),(10,'Aromatics','5 shallots finely chopped'),(10,'Common','1 Tbsp cooking oil'),(10,'Common','2 cups chopped celery optional'),(10,'Common','2 lbs Swai fillet or sole fillet cut into large chunks'),(10,'Common','4 Roma tomatoes seeded and diced'),(10,'Common','6 cups chicken stock'),(10,'Just before serving the soup','1 stalk green onion finely chopped'),(10,'Just before serving the soup','2 fresh limes optional'),(10,'Just before serving the soup','Cilantro leaves'),(10,'Marinade','1 Tbsp cornstarch'),(10,'Marinade','1 tsp fish sauce'),(10,'Seasonings','2 Tbsp Fish sauce or more to taste'),(10,'Seasonings','2 tsp sugar');
/*!40000 ALTER TABLE `recipeingredient` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-10-24 11:33:55
