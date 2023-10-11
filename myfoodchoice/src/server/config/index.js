const express = require('express');
const db = require('./db')
const cors = require('cors')

const app = express();
const  PORT = 3002;
app.use(cors());
app.use(express.json())

// Route to get all rows (WORKING)
app.get("/api/get", (req,res)=>{
db.query("SELECT * FROM user;", (err,result)=>{
    if(err) {
    console.log(err)
    } 
res.send(result)
});   });

// Route to get one row (WORKING)
app.get('/api/read/:id', (req,res)=>{

const id = req.params.id;
 db.query("SELECT * FROM user WHERE id = ?;",id, (err,result)=>{
    if(err) {
    console.log(err)
    } 
    res.send(result)
    });   });

// Route for creating a new user row into the table 'user' (WORKING)
app.post('/api/create', (req,res)=> {

const email = req.body.email;
const name = req.body.name;
const password = req.body.password;
const gender = req.body.gender;
const accounttype = req.body.accounttype;
const country = req.body.country;
const height = req.body.height;
const weight = req.body.weight;
const lifestyle = req.body.lifestyle;
const conditions = req.body.conditions;
const dob = req.body.dob;

db.query("INSERT INTO user (email, name, password, gender, accountType, country, height, weight, lifestyle, conditions, dob) VALUES (?,?,?,?,?,?,?,?,?,?,?)",[email, name, password, gender, accounttype, country, height, weight, lifestyle, conditions, dob], (err,result)=>{
   if(err) {
   console.log(err)
   } 
   console.log(result)
});   })

// Route to update row (WORKING)
app.put('/api/update/:id', (req,res)=>{

const id = req.params.id;
const name = req.body.name;
const password = req.body.password;
db.query("UPDATE user SET name = ?, password = ? WHERE id = ?;",[name, password, id], (err,result)=>{
    if(err) {
   console.log(err)   } 
   console.log(result)
    });    
});

// Route to delete a post (WORKING)

app.delete('/api/delete/:id',(req,res)=>{
const id = req.params.id;

db.query("DELETE FROM user WHERE id= ?;", id, (err,result)=>{
    if(err) {
    console.log(err)
         } 
    console.log(result)    
        }) })

// Route to sign up a user (WORKING)
app.post('/api/signup', (req,res)=> {

    const email = req.body.email;
    const name = req.body.name;
    const password = req.body.password;
    const gender = req.body.gender;
    const accounttype = req.body.accounttype;
    const country = req.body.country;
    const height = req.body.height;
    const weight = req.body.weight;
    const lifestyle = req.body.lifestyle;
    const conditions = req.body.conditions;
    const dob = req.body.dob;
    const bmi = req.body.bmi;
    const premium = req.body.premium;
    const loyaltypoint = req.body.loyalty;
    const age = req.body.age;
    const calorie = req.body.calorie;
  
  db.query("INSERT INTO user (email, name, password, gender, accountType, country, height, weight, lifestyle, conditions, dob, bmi, premium, loyaltypoint, age, calorielimit) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",[email, name, password, gender, accounttype, country, height, weight, lifestyle, conditions, dob, bmi, premium, loyaltypoint, age, calorie], (err,result)=>{
     if(err) {
     console.log(err)
     } 
     console.log(result)
  });   })
    
    // Route to check for duplicate user and email
    
    app.post('/api/check-email-exists', (req, res) => {
      const { email } = req.body;
    
      // Query to check if the email exists in the database
      const queryEmail = 'SELECT * FROM user WHERE email = ?';
    
      db.query(queryEmail, [email], (error, results) => {
        if (error) {
          console.error('Error querying MySQL:', error);
          return res.status(500).json({ error: 'Internal server error' });
        }
    
        // If results have length > 0, the email already exists
        if (results.length > 0) {
          return res.status(200).json({ emailExists: true });
        } else {
          return res.status(200).json({ emailExists: false });
        }
      });
    });
     // Route to check for duplicate loginCreds
    
     app.post('/api/validateLoginCreds', (req, res) => {
      const email = req.body.username;
      const password = req.body.password;
    
      // Query to check if the creds exists in the database
      const queryLoginCreds = 'SELECT * FROM user WHERE email = ? AND password = ?';
    
      db.query(queryLoginCreds, [email, password], (error, results) => {
        if (error) {
          console.error('Error querying MySQL:', error);
          return res.status(500).json({ error: 'Internal server error' });
        }
        // If results have length > 0, the creds already exists
        if (results.length > 0) {
          return res.status(200).json({ user: results });
        }
        else{
          return res.status(204).json({ error: 'Invalid login' });
        }
      });
    });

// Getting HealthTips db data (WORKING)
app.get("/api/getHealthTips", (req,res)=>{
  db.query("SELECT * FROM healthtips;", (err,result)=>{
      if(err) { console.log(err)}
      res.send(result)
  });   });

// Route to get unique Id for AccountDetails page(WORKING)
app.get("/api/getUser/:id", (req,res)=>{
  const id = req.params.id;
  db.query("SELECT * FROM user WHERE id = ?", id, (err,result)=>{
      if(err) {
      console.log(err)
      } 
  res.send(result)
  });   });

// Route to get user loyalty item information from database
app.get("/api/loyaltyitem", (req,res)=>{
  db.query("SELECT * FROM loyaltyitem;", (err,result)=>{
      if(err) {
      console.log(err)
      }
  res.send(result)
  });   });

  // Route to update user information based on ID
app.put('/api/accupdate/:id', (req,res)=>{
  const id = req.params.id;
  const password = req.body.password;
  const height = req.body.height;
  const weight = req.body.weight;
  const lifestyle = req.body.lifestyle;
  const conditions = req.body.conditions;
  const bmi = req.body.bmi;


db.query("UPDATE user SET password = ?, height = ?, weight = ?, lifestyle = ?, conditions = ?, bmi = ?  WHERE id = ?;",[password, height, weight, lifestyle, conditions, bmi, id], (err,result)=>{
  if(err) {
 console.log(err)   }
 console.log(result)
  });
});

// Route to get unique Id for Food Nutrition page(WORKING)
app.get("/api/getFood/:id", (req,res)=>{
  const id = req.params.id;
  db.query("SELECT * FROM foodnutrition WHERE id = ?", id, (err,result)=>{
      if(err) {
      console.log(err)
      } 
  res.send(result)
  });   });

// Route to update user loyaltypoints based on ID
app.put('/api/updateloyaltypts/:id', (req,res)=>{
  const id = req.params.id;
  const balance = req.body.balance;

db.query("UPDATE user SET loyaltypoint = ?  WHERE id = ?;",[balance, id], (err,result)=>{
  if(err) {
 console.log(err)   }
 console.log(result)
  });
});

// Route to inserting records to loyalty transaction (WORKING)
app.post('/api/loyaltytransaction', (req,res)=> {

  const userid = req.body.userid;
  const itemname = req.body.itemname;
  const point = req.body.point;
  const qty = req.body.qty;
  const date = req.body.date;

db.query("INSERT INTO loyaltytransaction (userid, itemname, point, qty, date) VALUES (?, ?, ?, ?, ?)",[userid, itemname, point, qty, date], (err,result)=>{
   if(err) {
   console.log(err)
   } 
   console.log(result)
});   })

// Route to get food item information from database (WORKING)
app.get("/api/orderfood", (req,res)=>{
  db.query("SELECT * FROM orderfood;", (err,result)=>{
      if(err) {
      console.log(err)
      }
  res.send(result)
  });   });

// Route to fetch user meal records in homepage ()
app.get("/api/mealrecord", (req, res) => {
  const { date } = req.query;
  db.query("SELECT * FROM mealrecord WHERE mrdate = ?;", [date], (err, result) => {
      if(err) {
      console.log(err)
      }
  res.send(result)
  });   });

//Route to store user BMI
// Route to store user BMI in bmi_tracker
app.post('/api/storeBMI', (req, res) => {
  const { id, bmi } = req.body;

  // Insert a new BMI record into the bmi_tracker table
  db.query('INSERT INTO bmi_tracker (id, bmi) VALUES (?, ?);', [id, bmi], (err, result) => {
      if(err) {
      console.log(err)
      }
  res.send(result)
  });   });

  // Route to fetch foodnutrition in mealrecord page ()
app.get("/api/getfoodnutrition", (req, res) => {
  db.query("SELECT * FROM foodnutrition;", (err, result) => {
      if(err) {
      console.log(err)
      }
  res.send(result)
  });   });

// Route to get Userprofiles by id for Meal Record page(WORKING)
app.get("/api/getUserProfile/:id", (req,res)=>{
  const id = req.params.id;
  db.query("SELECT * FROM userprofile WHERE iduser = ?", id, (err,result)=>{
      if(err) {
      console.log(err)
      } 
  res.send(result)
  });   });

// Route to inserting records to Meal Record (WORKING)
app.post('/api/insertmealrecords', (req,res)=> {

  const upid = req.body.upid;
  const uid = req.body.uid;
  const foodid = req.body.foodid;
  const datetime = req.body.datetime;
  const meal = req.body.meal;

db.query("INSERT INTO mealrecord (upid, uid, foodid, mrdate, meal) VALUES (?, ?, ?, ?, ?)",[upid, uid, foodid, datetime, meal], (err,result)=>{
   if(err) {
   console.log(err)
   } 
   console.log(result)
});   })

// Route to update user information based on ID
app.put('/api/userpointsupdate/:id', (req,res)=>{
  const id = req.params.id;
  const points = req.body.balance;


db.query("UPDATE user SET loyaltypoint = loyaltypoint + ?  WHERE id = ?;",[points, id], (err,result)=>{
  if(err) {
 console.log(err)   }
 console.log(result)
  });
});

// Route to get meal record based on ID
app.get("/api/getmealrecord/:id", (req,res)=>{
  const id = req.params.id;
  db.query("SELECT * FROM mealrecord WHERE uid = ?", id, (err,result)=>{
      if(err) {
      console.log(err)
      } 
  res.send(result)
  });   });

  // Route to get meal record based on ID join other tables
app.get("/api/getmealrecordfullinfo/:id", (req,res)=>{
  const id = req.params.id;
  db.query("select * from mealrecord join foodnutrition on mealrecord.foodid = foodnutrition.id join userprofile on userprofile.iduserprofile = mealrecord.upid where mealrecord.uid=?", id, (err,result)=>{
      if(err) {
      console.log(err)
      } 
  res.send(result)
  });   });

  // Route to get loyalty transaction record
app.get("/api/loyaltytransaction/:id", (req,res)=>{
  const id = req.params.id;
  db.query("select * from loyaltytransaction where userid=?", id, (err,result)=>{
      if(err) {
      console.log(err)
      } 
  res.send(result)
  });   });

  // Route to get unique Id for user profiles(WORKING)
app.get("/api/getUserProfiles/:id", (req,res)=>{
  const id = req.params.id;
  db.query("SELECT * FROM userprofile WHERE iduser = ?", id, (err,result)=>{
      if(err) {
      console.log(err)
      }
  res.send(result)
  });   });

  // Route to add user profile id(Working)
app.post('/api/addIdProfile', (req,res)=> {

  const id = req.body.iduser;

db.query("INSERT INTO userprofile (iduser) VALUES (?)",[id], (err,result)=>{
   if(err) {
   console.log(err)
   }
   console.log(result)
});   })

  // Route to get Userprofiles by id for Meal Record page(WORKING)
  app.get("/api/getUserProfile2/:id", (req,res)=>{
    const id = req.params.id;
    db.query("SELECT * FROM userprofile WHERE iduser = ?", id, (err,result)=>{
        if(err) {
        console.log(err)
        } 
    res.send(result)
    });   });

//Listening to PORT 3002
app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`)
})