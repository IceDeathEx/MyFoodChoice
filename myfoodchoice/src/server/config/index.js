const express = require('express');
const db = require('./db')
const cors = require('cors')

const app = express();
const  PORT = 3002;
app.use(cors());
app.use(express.json())

// Route to get all rows (WORKING)
app.get("/api/get", (req,res)=>{
db.query("SELECT * FROM systemadmin;", (err,result)=>{
    if(err) {
    console.log(err)
    } 
res.send(result)
});   });

// Route to get one row (WORKING)
app.get('/api/read/:id', (req,res)=>{

const id = req.params.id;
 db.query("SELECT * FROM systemadmin WHERE id = ?;",id, (err,result)=>{
    if(err) {
    console.log(err)
    } 
    res.send(result)
    });   });

// Route for creating a row (WORKING)
app.post('/api/create', (req,res)=> {

const email = req.body.email;
const name = req.body.name;
const password = req.body.password;
const gender = req.body.gender;
const accounttype = req.body.accounttype;

db.query("INSERT INTO systemadmin (email, name, password, gender, accountType) VALUES (?,?,?,?,?)",[email, name, password, gender, accounttype], (err,result)=>{
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
db.query("UPDATE systemadmin SET name = ?, password = ? WHERE id = ?;",[name, password, id], (err,result)=>{
    if(err) {
   console.log(err)   } 
   console.log(result)
    });    
});

// Route to delete a post (WORKING)

app.delete('/api/delete/:id',(req,res)=>{
const id = req.params.id;

db.query("DELETE FROM systemadmin WHERE id= ?;", id, (err,result)=>{
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
    
    db.query("INSERT INTO systemadmin (email, name, password, gender, accountType) VALUES (?,?,?,?,?)",[email, name, password, gender, accounttype], (err,result)=>{
       if(err) {
       console.log(err)
       }
       console.log(result)
    });   })
    
    // Route to check for duplicate user and email
    
    app.post('/api/check-email-exists', (req, res) => {
      const { email } = req.body;
    
      // Query to check if the email exists in the database
      const queryEmail = 'SELECT * FROM systemadmin WHERE email = ?';
    
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

//Listening to PORT 3002
app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`)
})