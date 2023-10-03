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
    const loyaltypoint = req.body.loyaltypoint;
    const age = req.body.age;
  
  db.query("INSERT INTO user (email, name, password, gender, accountType, country, height, weight, lifestyle, conditions, dob, bmi, premium, loyaltypoint, age) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",[email, name, password, gender, accounttype, country, height, weight, lifestyle, conditions, dob, bmi, premium, loyaltypoint, age], (err,result)=>{
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
        } else {
          return res.status(200).json({ accountType: results[0].accountType });
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

//Listening to PORT 3002
app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`)
})