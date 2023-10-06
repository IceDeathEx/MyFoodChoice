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
-- Table structure for table `healthtips`
--

DROP TABLE IF EXISTS `healthtips`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `healthtips` (
  `id` int NOT NULL,
  `category` varchar(45) DEFAULT NULL,
  `title` varchar(200) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `message` varchar(9000) DEFAULT NULL,
  `image` varchar(1000) DEFAULT NULL,
  `shortmsg` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `healthtips`
--

LOCK TABLES `healthtips` WRITE;
/*!40000 ALTER TABLE `healthtips` DISABLE KEYS */;
INSERT INTO `healthtips` VALUES (1,'Sports','5 Boxing Workouts That\'ll Get You in Fighting Shape','2023-01-08','Boxing (also known as \'western boxing\' or \'pugilism\') is a combat sport and a martial art in which two people, usually wearing protective gloves and other protective equipment such as hand wraps and mouthguards, throw punches at each other for a predetermined amount of time in a boxing ring. Although the term boxing is commonly attributed to Western boxing, in which only fists are involved, it has developed in different ways in different geographical areas and cultures of the World. In global terms, \'boxing\' today is also a set of combat sports focused on striking, in which two opponents face each other in a fight using at least their fists, and possibly involving other actions such as kicks, elbow strikes, knee strikes, and headbutts, depending on the rules. Some of these variants are the bare knuckle boxing, kickboxing, muay-thai, lethwei, savate, and sanda. Boxing techniques have been incorporated into many martial arts, military systems, and other combat sports.','https://www.mensjournal.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_760/MTk2MTM2NzExODk5ODUwMjQ1/jab-punch-boxing-main.webp','This article is talking about Boxing.'),(2,'Sports','Can swimming help you lose belly fat?','2019-12-13','Remember, any activity that burns calories will help you shed fat all over—including around your middle. Certain swimming exercises also target your core specifically, like flutter kicks (lower abs) and butterfly kicks (obliques). In fact, a 2015 study in the Journal of Exercise Rehabilitation found that women who swam three times a week shed more fat around their waists and hips compared to those who walked three times a week. Another big benefit: Water-based workouts are low-impact, so they tend to be easier on your hips, knees, and feet. “Swimming can give you cardio and muscle building without the heavy wear and tear on your body that you might get from a ground-based activity like running,” Caprio says. How much do you have to swim to lose weight? It all depends on how intense your workout is. Swimming vigorously for an hour burns around 800 calories. Do that four times a week, and you could lose three or four pounds in a month. (You need to burn 3,500 calories to lose one pound.) Prefer a less intense approach? Swimming at a moderate pace for 30 minutes burns around 250 calories. Do that four times a week, and in a month, you’ll lose a little more than a pound. But every body is different, and research suggests that some people lose more or less weight than others—even when they do the same amount of exercise. However, making exercises, like swimming, a part of your regular routine can help you reach or maintain a healthy weight. If you’re trying to drop pounds, consider aiming to do moderate or vigorous exercises like swimming for around an hour a day.','https://hips.hearstapps.com/hmg-prod/images/shining-blue-water-ripple-background-royalty-free-image-1592490615.jpg?resize=1200:*','This article is talking about Swimming.'),(3,'Sports','6 Health benefits of running','2023-01-23','1. Running improves your heart condition. Running is a great exercise for the heart. Over time, it helps your heart pump more efficiently. Running keeps the arteries elastic so blood flows smoothly. Cardiovascular exercise also lowers your blood pressure and bad (LDL) cholesterol, but increases good (HDL) cholesterol, thus reducing your risk of heart disease. 2. Running boosts weight loss. Running is excellent to burn fat.As it involves large muscle groups, it is actually one of the best ways to burn calories. According to the Mayo Clinic, a 73-kg individual can burn some 600 calories per hour when running at 12 km/h. Want to lose weight, stay slim or have a firm butt? Start running. 3. Running strengthens bone structure Running is a weight-bearing exercise. The pounding on the ground puts stress on the skeletal system which in turn boosts bone mineral density (BMD). Higher BMD means stronger bones. This reduces the risk of osteoporosis, falls and fractures as you age. 4. Running stimulates the brain Research has shown that running and other aerobic exercises trigger brain cell growth in the hippocampus – the part of the brain responsible for learning and memory. Running also develops the areas of the brain which control movement, coordination and long-term memory. 5. Running enhances emotional and psychological well-being Running releases natural feel-good hormones called endorphins. Running, especially distance running, gives you the time and space to clear your mind or t​hink through a problem. As a natural stress buster, running can instantly lift up your mood and give you a sense of well-being. 6. Running retards ageing Running slows down age-related bone and muscle loss as it promotes the release of the human growth hormone. Maximal aerobic capacity (or VO2 max) typically declines 10 per cent per decade, starting from the mid-20s. Running is able to arrest this decline. Keen to reap the health benefits of running? Check with your doctor before starting any exercise regime, and practise caution when exercising. If you have been living a sedentary lifestyle, start with brisk walking. Remember, safety first!','https://www.healthxchange.sg/sites/hexassets/Assets/fitness-exercise/why-run-the-health-benefits-of-running.jpg','This article is talking about Running.'),(4,'Sports','HIIT (High Intensity Interval Training)','2021-11-01','“I don’t have time!” is one of the top reasons for not exercising, as many traditional workouts push a commitment of about an hour. High intensity interval training, or HIIT, challenges this barrier by incorporating an effective workout in half that time. In our time-pressured culture, HIIT has claimed a spot in the top 10 fitness trends since 2014 as surveyed by the American College of Sports Medicine. [1] In about 30 minutes, it is considered a complete workout that combines both aerobic and strength (resistance) training. In order to achieve similar benefits to a longer workout, the intensity is vigorous. HIIT is a type of interval training exercise. It incorporates several rounds that alternate between several minutes of high intensity movements to significantly increase the heart rate to at least 80% of one’s maximum heart rate, followed by short periods of lower intensity movements. Interval training was first introduced in the 1950s as a higher intensity form called sprint interval training, which reached 100% maximum heart rate and was used to improve the performance of elite Olympic athletes. Body weight can be used as the main form of resistance so that additional equipment is not needed. HIIT workouts also generally do not require a large amount of space, making the format ideal for a home workout. HIIT workouts can be integrated into various exercise formats, such as running (outdoors or on a treadmill), dancing, rowing machines, stationary bicycles, or stair climbers. [2] The interval durations can be timed by using one to five-minute music tracks. Other terms that are used interchangeably with HIIT are Tabata and circuit training. Tabata is a form of HIIT that was created by Professor Izumi Tabata in 1996 involving Olympic speedskaters. His exercise intervals were extremely high intensity, followed by very brief rest periods. Fitness centers and gyms that offer Tabata classes are typically 20-30 minutes and encourage participants to reach their highest intensity ability, but they can self-regulate their workouts. Circuit training involves 8-12 exercise stations that target different muscle groups. Participants rotate through each station, completing one exercise that lasts several minutes. The difference with circuit training is that the intensity is variable, whereas HIIT encourages maximum effort by reaching 80-90% maximum heart rate. HIIT can help to decrease body fat, increase strength and endurance, and improve health outcomes, but it is not necessarily better than other exercise formats. Its main appeal is that it can achieve similar fitness and health benefits in a shorter duration, and that it includes periods of rest.','https://www.hsph.harvard.edu/nutritionsource/wp-content/uploads/sites/30/2021/11/pexels-pavel-danilyuk-6339341-1024x684.jpg','This article is talking about HIIT.'),(5,'Sports','What is a \'Spinning Class\' Anyway?','2022-08-18','You may have heard of people doing Spinning Classes or Spin Classes and wondered what exactly it means. First of all, since “Spinning” refers specifically to the company, Spinning classes mean classes put on or licensed by Mad Dogg Athletics, the company that created the Spinning program. You can definitely get a great workout at home on a Spin bike of your own (check here for the best Spin Bikes for home), but it’s also great to workout in a class environment where there is a sense of team effort and group motivation. When you’re by yourself it’s hard to truly push yourself as you’re the only one there to keep you accountable. But if you’re in a class then you have the other participants, as well as the teacher, constantly watching over you which will give you more drive. For anyone looking in on a class it almost looks torturous: loud music blaring through the speakers, an assertive class leader shouting at people to go harder and a group of people sweating buckets from every part of their body. However, once you start you’ll never go back.  So let’s get specific about what you can expect from a Spinning Class. You’ll Burn Big Calories. An hour-long Spin class can burn anywhere from 600-1000 calories depending on the intensity of the instructor and the amount that you push yourself. It relies on a combination of fast-paced cycling and strategic lighter rest intervals to get you recovered for the next burst. Most spinning classes last around 40 minutes so you’ll be burning about 400-600 calories per class. You’ll Customize Your Spin Bike. Each Spinning class will have their own bikes which are fully customizable for you as an individual. You’ll be able to adjust the seat, handlebars and the tension/resistance accordingly. Make sure to do this at the start of each workout so that you’re not uncomfortable for the workout. The instructor should be able to help you if you’re unfamiliar with the equipment. Some bikes even have gel saddles to make them more comfortable and some people even bring their own. If they are not supplied and you don’t have one then padded shorts will help. You’ll Have a Unique Experience. The set up may be a bit different depending on the studio. In some classes the bikes are set up in rows with everyone facing the instructor/the mirror where as others will be set up in a semi circle which gives you a better view of everyone else in the room. There should be air-con in the room as well as on the bikes, too, to keep you at a good temperature. Each Spinning class will also have their own instructors with their own technique, goals and ability. If you test out one Spinning class and decide that it’s not for you then what you may need to do is simply try a different instructor. Certain instructors will target different demographics like young/old, male/female and fit/unfit. Every instructor will be certified but a Spin instructor really can make or break a class so it’s down to you to pick the class and instructor that suits you best. You’ll Get an Intense Indoor Cycle Workout. The average class will begin at a gentle pace for 5-10 minutes. The indoor bike pace will gradually pick up throughout this period but it will stay similar to cycling on flat terrain. After this period you will enter into different intervals of seated and standing work dependent on the intensity. If you’re ‘climbing’ then you’ll normally be standing but expect to be on and off the saddle through the whole session. The instructor may also ask for you to ‘hover’ which is basically where you are leaning forward over the handlebars with your hips above the saddle and towards the back of the Spin bike. It’s a similar position to someone trying to gain a lot of speed at a slight incline on a normal bike. You’ll Come Prepared. Make sure to pack a water bottle as you will get incredibly thirsty due to the amount of sweat you’re releasing. Also, wear tight fitting and light clothing so that you can move freely without overheating. You’ll Be Sore The days after your class you can expect to have very sore legs which can be helped by stretching, foam rolling or getting a massage. Don’t worry, this is normal. Your muscles have to be broken down in order to grow stronger. Over time the amount of muscle ache that you get from a Spinning class will decrease because your body will have adapted but for the first couple of weeks the aches will be quite intense. You’ll Get Healthier. Just as your body will adapt to the aches, you will also improve aerobically. Each class that you complete will be one step forwards. A few weeks will pass and you’ll look back to see how far you’ve come. You may have turned up the resistance on the bike or simply be pushing yourself harder each class but you will have definitely improved. You should also notice that your body composition has changed. Your legs should be bigger and stronger and your fat mass should have decreased. You’ll Love It. So “what is Spinning class” you ask?  It’s an amazing, challenging way to get incredibly fit.  All it takes is pushing through those first sessions as they are always the hardest.  Once you do, don’t be surprised if you find yourself addicted.','https://www.topfitnessmag.com/wp-content/uploads/2015/11/what-is-spinning-class.jpg','This article is talking about Spinning Class.'),(6,'Food','How many calories do we need daily?','2023-09-26','The amount of calories your body needs depends on your age, gender, level of physical activity, and body size. People who are active and exercise regularly would require more calories than someone who is mostly desk-bound. Recommended daily calorie intake for females: 1,800 kcal. Recommended daily calorie intake for males: 2,200 kcal','https://www.healthhub.sg/sites/assets/Assets/Programs/nutrition-portal/images/eat-less/excess-calories/why-do-we-need.jpg','This article is talking about Calories.'),(7,'Food','How can we consume less calories?','2023-09-26','One simple way to achieve this is to follow the My Healthy Plate (MHP) guidelines. Fill your plate with: ¼ Wholegrains. ¼ Good sources of protein. ½ Fruit and vegetables. Choose quality over quantity. Not all calories are equal. It’s important to consume the right number of calories from a variety of nutrient-dense foods such as wholegrains, lean protein, fruit and vegetables. Be sure to also choose foods prepared with healthier ingredients and methods, and limit your intake of high-sugar food and drinks as they increase your calorie intake with little to no nutrients (empty calories). 500 kcal is the magic number. Your favourite meals could hit a whopping 700-800 kcal each time! To keep within your daily caloric intake, try to swap one of your regular meals for a lower-calorie one that is around 500 kcal.','https://www.healthhub.sg/sites/assets/Assets/Programs/nutrition-portal/images/eat-less/excess-calories/what-are-calories-kv.jpg','This article is talking about Calories.'),(8,'Food','Why do we need to reduce excess calorie intake?','2023-09-26','On average, Singapore residents consume about 2,500 calories daily, which is above the recommended calorie intake. This stems from unhealthy meals and regular grazing between meals. Lowering your calorie intake lowers your health risks too. Have lower-calorie meals to keep your weight in check and lead a healthier lifestyle.','https://www.healthhub.sg/sites/assets/Assets/Programs/nutrition-portal/images/eat-less/excess-calories/why-need-to-reduce-1.jpg','This article is talking about Calories.'),(9,'Food','Calories and Weight Management','2023-09-26','The key to weight management is a healthy diet and an active lifestyle. Here are some simple tips to help you maintain a healthy weight. Have regular meals. Eat balanced, healthier meals. Budget those calories. Eat less, saturated fats. Eat less: sugar. Eat more: Wholegrains, Fruits and Vegetables.','https://www.healthhub.sg/sites/assets/Assets/Programs/nutrition-portal/images/eat-less/excess-calories/calories-management-2.png','This article is talking about Calories.'),(10,'Food','Drinking in moderation','2023-09-26','Having drinks with your friends? Healthy adult men should drink no more than 2 standard drinks a day, and women should drink no more than 1 standard drink a day. A standard drink is 1 can (330ml) of regular beer with 5% alcohol content, ½ glass (100ml) of wine with 15% alcohol content, where the glass height is not more than 15cm, or 1 shot (30ml) of spirits with 40% alcohol content. Better yet, drink something other than alcohol, which is a concentrated source of calories. ','https://www.healthhub.sg/sites/assets/Assets/Programs/nutrition-portal/images/eat-less/cut-down-3.png','This article is talking about effects of alcohol consumption.'),(11,'Lifestyle','Prediabetes: Symptoms to watch out for','2023-09-26','Feeling tired, thirsty or urinating more than usual? These are signs that your blood sugar levels may be higher than normal. But few people with borderline diabetes will have these warning signals. There are, however, other indications. People who are overweight, middle-aged, lead a sedentary lifestyle, have high blood pressure, LDL cholesterol or triglyceride levels, and a family history of diabetes, are more likely to develop the condition. Prediabetes is diagnosed if the blood sugar level registers between 7.8 mmol/L and 11.0 mmol/L by the gold standard oral glucose tolerance test. The test involves taking a blood sample after overnight fasting, and a second sample two hours after consuming a sweet glucose drink. Diabetes is diagnosed if the reading is more than 11.1 mmol/L. Normal blood glucose level is under 7.8 mmol/L. People diagnosed with prediabetes should get their blood glucose level measured every six to 12 months. Those who have normal blood sugar levels but who have a family history of type 2 diabetes should undergo diabetes screening after the age of 40.','https://www.healthxchange.sg/sites/hexassets/Assets/diabetes/prediabetes-symptoms-causes.jpg','This article is talking about Prediabetes.'),(12,'Lifestyle','Diet to lower LDL (bad cholesterol)','2023-09-26','Reducing saturated fat intake will result in reduction of bad cholesterol. Saturated fat is found in dairy fats and other animal fats (from the fats of chicken, pork, beef, butter, etc.), and some tropical oils like coconut and palm oil. Substitute with better fat such as olive oil, canola oil, sunflower oil. This substitution will help in lowering LDL. Replacing snacks high in saturated fats (chocolate, potato chips) with nuts like walnuts and almonds also lowers LDL. Substituting avocadoes for other unhealthy fats in the diet also lowers cholesterol, at an intake of 1 avocado a day. (Avocadoes are still high in fat so be careful not over indulge.) Increasing plant protein intake. For example, taking soy or beans in replacement of animal protein like milk or meat will lower LDL. Plant protein, in substitution of animal protein has been found in a randomised controlled trial to lower LDL cholesterol independent of the amount of saturated fat the diet contains5. In the study, the diet contained about 30g of soy protein a day, equivalent to about 375g of tofu or 2 small cups of edamame beans daily. Increase intake of viscous fibre2, to decrease absorption of cholesterol in the intestines. Viscous fibre is found in fruits like apples and oranges, vegetables like eggplant and okra, and grains like oats and barley. Beans also have viscous fibre.','https://www.healthxchange.sg/sites/hexassets/Assets/high-cholesterol/how-to-lower-bad-cholesterol-ldl.jpg','This article is talking about Bad cholesterol.'),(13,'Lifestyle','Low blood pressure (hypotension): How does it occur?','2023-09-26','Low blood pressure (hypotension) is a state where not enough blood (carrying oxygen) flows to vital organs such as the brain. It is mainly for this reason that one may experience dizziness. It is known as “shock” when the drop in blood pressure is severe and persistent. If it is not treated immediately, shock can cause permanent damage to the vital organs, and may result in death. Normal blood pressure is below 130/80 mmHg. The first reading measures systolic pressure or the amount of blood pressure when the heart is beating (squeezing the blood). The second reading measures diastolic pressure or the amount of blood pressure when the heart is at rest. Some doctors consider blood pressure to be low when it is below 90/60 mmHg. However, there is no specific number at which day-to-day blood pressure is considered too low as long as it does not cause noticeable signs and symptoms. People who are physically fit sometimes have lower blood pressure. And some people have naturally low blood pressure, with no ill effects.','https://www.healthxchange.sg/sites/hexassets/Assets/high-blood-pressure/low-blood-pressure-symptoms-causes-b.jpg','This article is talking about Low blood pressure.'),(14,'Lifestyle','Blood pressure (BP) readings','2023-09-26','Blood pressure (BP) readings are expressed as a ratio of the systolic pressure (the first number or numerator), over the diastolic pressure (the second number or denominator). A blood pressure of 120/80 mmHg (millimetres of mercury) is expressed verbally as 120 over 80. A healthy blood pressure reading should be lower than 120/80 mmHg. Normal blood pressure is less than 120 mmHg systolic and 80 mmHg diastolic (see blood pressure chart below), and may vary from 90/60mmHg to 120/80mmHg in a healthy young woman. A blood pressure of 140/90 mmHg or higher indicates high blood pressure (hypertension).','https://www.heart.org/-/media/Images/Health-Topics/High-Blood-Pressure/Rainbow-Chart/blood-pressure-readings-chart.jpg','This article is talking about Blood pressure.'),(15,'Lifestyle','10 Proven Ways to Boost Mental Health','2023-09-26','Get at least eight hours of sleep a day. You are more alert and less prone to stress after a good night’s rest. Getting enough sleep can also improve your memory. Adopt a healthy diet. Foods rich in omega-3 fatty acids, such as salmon, tuna and mackerel, cut the risk of dementia and mental decline. Good nutrition is a natural defence against stress. Begin your day with a nutritious breakfast, preferably of wholegrain cereals and fruits, and take balanced meals throughout the day. Keep yourself active. At least 150 minutes of exercise a week (or 30 minutes daily) is ideal. Exercising not only keeps you physically strong, it also reduces or prevents stress. Go for a walk or unwind with yoga. It is better to do moderate exercise regularly than to have a heavy workout occasionally. Interact with others. Talk to another person for at least 10 minutes daily. Talking to people stimulates the brain. A study in the US found that talking to another person for just 10 minutes a day improves memory scores. Also, the more you interact with others, the faster your brain will work. Pick up a new skill or hobby. Learning to play a musical instrument, acquiring computer skills, starting a new hobby or learning to cook a new dish can help keep your brain active and healthy. Get a mental workout. Scrabble or mahjong anyone? Engaging in mind-boggling games involves a combination of memory, decision-making and strategising, which keeps the brain active and prevents dementia. In addition, playing in a group will boost interaction. Help others to help yourself. This is the best remedy when you’re feeling down. Helping a friend or family member, or doing community work helps you to take the focus away from yourself. In turn, you will feel more positive and less helpless. Learn to manage stress. Shift your mindset and make a list. Make a list of goals and check them off when they are completed. This will help you tackle things one at a time. Seeing problems as opportunities or focusing on the positive can also help to reduce stress. Stress cannot be avoided, but you can learn to manage stress. Avoid alcohol, cigarettes and drugs. They are not the solutions to problems. If you have emotional problems, seek support from family and friends, or get professional help. Alcohol, cigarettes and drugs provide only temporary relief from stress and unhappiness. Laughter is the best medicine. Laugh yourself silly and have fun whenever you can. Laughing can help to keep the doctor away because humo​ur activates the brain’s reward and pleasure centres, generating emotions and relaxing the mind.','https://www.healthxchange.sg/sites/hexassets/Assets/wellness/ten-ways-achieve-mental-wellness-b.jpg','This article is talking about Mental Health.'),(16,'Weight Loss','Can swimming help you lose belly fat?','2019-12-13','Remember, any activity that burns calories will help you shed fat all over—including around your middle. Certain swimming exercises also target your core specifically, like flutter kicks (lower abs) and butterfly kicks (obliques). In fact, a 2015 study in the Journal of Exercise Rehabilitation found that women who swam three times a week shed more fat around their waists and hips compared to those who walked three times a week. Another big benefit: Water-based workouts are low-impact, so they tend to be easier on your hips, knees, and feet. “Swimming can give you cardio and muscle building without the heavy wear and tear on your body that you might get from a ground-based activity like running,” Caprio says. How much do you have to swim to lose weight? It all depends on how intense your workout is. Swimming vigorously for an hour burns around 800 calories. Do that four times a week, and you could lose three or four pounds in a month. (You need to burn 3,500 calories to lose one pound.) Prefer a less intense approach? Swimming at a moderate pace for 30 minutes burns around 250 calories. Do that four times a week, and in a month, you’ll lose a little more than a pound. But every body is different, and research suggests that some people lose more or less weight than others—even when they do the same amount of exercise. However, making exercises, like swimming, a part of your regular routine can help you reach or maintain a healthy weight. If you’re trying to drop pounds, consider aiming to do moderate or vigorous exercises like swimming for around an hour a day.','https://hips.hearstapps.com/hmg-prod/images/shining-blue-water-ripple-background-royalty-free-image-1592490615.jpg?resize=1200:*','This article is talking about Losing weiht through swimming.'),(17,'Weight Loss','How Intermittent Fasting Works','2023-01-08','You do an intermittent fast by pausing your food intake for several hours. The fast cuts off your supply of near-instant blood glucose, forcing the body to get its fuel from storage. In this case, storage means fat deposits that your body turns to when calorie supplies run low. The consistent burning of fat deposits has health benefits like weight loss and lowering your risk of a wide range of diseases. Cutting your calorie intake regularly trains the body to burn fat when it runs out of ready blood glucose. Over time, the body’s metabolism turns to fat burning within a few hours of a fast. Intermittent fasting also provides benefits like improved insulin response and better blood sugar control. This means that the eating pattern helps to prevent conditions like diabetes. It can also reverse insulin resistance in pre-diabetics, and it’s an effective way to lose weight. Lastly, regular fasting will gradually decrease the amount of food your stomach needs to ‘feel’ full. You get a permanent life hack for portion control. Weight loss from intermittent fasting comes down to the foods you eat. This eating pattern does not impose a strict diet, but it pays to choose low-calorie, nutrient-rich foods. The good news is that you don’t have to starve yourself or make complex changes to stick to start IF.','https://cdn5.vectorstock.com/i/1000x1000/75/74/logo-of-intermittent-fasting-clock-face-vector-23297574.jpg','This article is talking about Intermitten Fasting.'),(18,'Weight Loss','Cutting back on sugar and refined carbohydrates','2019-12-13','The Western diet is increasingly high in added sugars, which has definite links to obesityTrusted Source, even when the sugar occurs in beveragesTrusted Source rather than food. Refined carbohydrates are heavily processed foods that no longer contain fiber and other nutrients. These include white rice, bread, and pasta. These foods are quick to digest, and they convert to glucose rapidly. Excess glucose enters the blood and provokes the hormone insulin, which promotes fat storage in the adipose tissue. This contributes to weight gain. Where possible, people should swap processed and sugary foods for more healthful options. Good food swaps include: whole-grain rice, bread, and pasta instead of the white versions fruit, nuts, and seeds instead of high sugar snacks herb teas and fruit-infused water instead of high sugar sodas smoothies with water or milk instead of fruit juice','https://weightlosssurgeryinstitute.com/wp-content/uploads/2020/05/Weight-Loss-Infographic-6-Easy-Ways-to-Cut-Back-on-Sugar-scaled.jpg','This article is talking about Cutting down on sugar consumption.'),(19,'Weight Loss','Eating plenty of fiber','2023-01-08','Dietary fiber describes plant-based carbohydrates that are impossible to digest in the small intestine, unlike sugar and starch. Including plenty of fiber in the diet can increase the feeling of fullness, potentially leading to weight loss. Fiber-rich foods include: whole-grain breakfast cereals, whole-wheat pasta, whole-grain bread, oats, barley, and rye fruit and vegetables peas, beans, and pulses nuts and seeds','https://figureweightloss.com/wp-content/uploads/2019/02/high-fiber-low-carb.jpg','This article is talking about eating food with fiber.'),(20,'Weight Loss','Getting a good night’s sleep','2019-12-13','Numerous studies have shown that getting fewer than 5–6 hours of sleep per night is associated with an increased incidence of obesityTrusted Source. There are several reasons behind this. Research suggestsTrusted Source that insufficient or poor-quality sleep slows down the process in which the body converts calories to energy, called metabolism. When metabolism is less effective, the body may store unused energy as fat. In addition, poor sleep can increase the production of insulin and cortisolTrusted Source, which also prompt fat storage. How long someone sleeps also affects the regulation of the appetite-controlling hormones leptin and ghrelin. Leptin sends signals of fullness to the brain.','https://www.nia.nih.gov/sites/default/files/2022-03/NIA_Sleep_infographic_12.22.17_thumb_0.jpg','This article is talking about appriopriate amount of sleep.');
/*!40000 ALTER TABLE `healthtips` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-10-07  3:02:44
