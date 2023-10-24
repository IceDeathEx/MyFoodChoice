const express = require('express');
const db = require('./db')
const cors = require('cors')

const app = express();
const PORT = 3002;
app.use(cors());
app.use(express.json())

// Route to get all rows (WORKING)
app.get("/api/get", (req, res) => {
  db.query("SELECT * FROM user;", (err, result) => {
    if (err) {
      console.log(err)
    }
    res.send(result)
  });
});

// Route to get one row (WORKING)
app.get('/api/read/:id', (req, res) => {

  const id = req.params.id;
  db.query("SELECT * FROM user WHERE id = ?;", id, (err, result) => {
    if (err) {
      console.log(err)
    }
    res.send(result)
  });
});

// Route for creating a new user row into the table 'user' (WORKING)
app.post('/api/create', (req, res) => {

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

  db.query("INSERT INTO user (email, name, password, gender, accountType, country, height, weight, lifestyle, conditions, dob) VALUES (?,?,?,?,?,?,?,?,?,?,?)", [email, name, password, gender, accounttype, country, height, weight, lifestyle, conditions, dob], (err, result) => {
    if (err) {
      console.log(err)
    }
    console.log(result)
  });
})

// Route to update row (WORKING)
app.put('/api/update/:id', (req, res) => {

  const id = req.params.id;
  const name = req.body.name;
  const password = req.body.password;
  db.query("UPDATE user SET name = ?, password = ? WHERE id = ?;", [name, password, id], (err, result) => {
    if (err) {
      console.log(err)
    }
    console.log(result)
  });
});

// Route to delete a post (WORKING)

app.delete('/api/delete/:id', (req, res) => {
  const id = req.params.id;

  db.query("DELETE FROM user WHERE id= ?;", id, (err, result) => {
    if (err) {
      console.log(err)
    }
    console.log(result)
  })
})

// Route to sign up a user (WORKING)
app.post('/api/signup', (req, res) => {

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

  db.query("INSERT INTO user (email, name, password, gender, accountType, country, height, weight, lifestyle, conditions, dob, bmi, premium, loyaltypoint, age, calorielimit) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)", [email, name, password, gender, accounttype, country, height, weight, lifestyle, conditions, dob, bmi, premium, loyaltypoint, age, calorie], (err, result) => {
    if (err) {
      console.log(err)
    }
    console.log(result)
  });
})

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
    else {
      return res.status(204).json({ error: 'Invalid login' });
    }
  });
});

// Getting HealthTips db data (WORKING)
app.get("/api/getHealthTips", (req, res) => {
  db.query("SELECT * FROM healthtips;", (err, result) => {
    if (err) { console.log(err) }
    res.send(result)
  });
});

// Route to get unique Id for AccountDetails page(WORKING)
app.get("/api/getUser/:id", (req, res) => {
  const id = req.params.id;
  db.query("SELECT * FROM user WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err)
    }
    res.send(result)
  });
});

// Route to get user loyalty item information from database
app.get("/api/loyaltyitem", (req, res) => {
  db.query("SELECT * FROM loyaltyitem;", (err, result) => {
    if (err) {
      console.log(err)
    }
    res.send(result)
  });
});

// Route to update user information based on ID
app.put('/api/accupdate/:id', (req, res) => {
  const id = req.params.id;
  const password = req.body.password;
  const height = req.body.height;
  const weight = req.body.weight;
  const lifestyle = req.body.lifestyle;
  const conditions = req.body.conditions;
  const bmi = req.body.bmi;


  db.query("UPDATE user SET password = ?, height = ?, weight = ?, lifestyle = ?, conditions = ?, bmi = ?  WHERE id = ?;", [password, height, weight, lifestyle, conditions, bmi, id], (err, result) => {
    if (err) {
      console.log(err)
    }
    console.log(result)
  });
});



// Route to update user information based on ID
app.put('/api/accupdateUP/:iduserprofile', (req,res)=>{
  const id = req.params.iduserprofile;
  const height = req.body.height;
  const weight = req.body.weight;
  const lifestyle = req.body.lifestyle;
  const conditions = req.body.conditions;
  const bmi = req.body.bmi;


db.query("UPDATE userprofile SET  height = ?, weight = ?, lifestyle = ?, conditions = ?, bmi = ?  WHERE iduserprofile = ?;",[height, weight, lifestyle, conditions, bmi, id], (err,result)=>{
  if(err) {
 console.log(err)   }
 console.log(result)
  });
});

//Route to Delete user profile
app.delete('/api/deleteProfile/:iduserprofile',(req,res)=>{
  const id = req.params.iduserprofile;
  
    db.query('DELETE FROM userprofile WHERE iduserprofile = ?', id, (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).json({ error: "Could not delete profile" });
      } else {
        console.log(result);
        res.sendStatus(200);
      }
    });
  });

// Route to get unique Id for Food Nutrition page(WORKING)
app.get("/api/getFood/:id", (req, res) => {
  const id = req.params.id;
  db.query("SELECT * FROM foodnutrition WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err)
    }
    res.send(result)
  });
});

// Route to update user loyaltypoints based on ID
app.put('/api/updateloyaltypts/:id', (req, res) => {
  const id = req.params.id;
  const balance = req.body.balance;

  db.query("UPDATE user SET loyaltypoint = ?  WHERE id = ?;", [balance, id], (err, result) => {
    if (err) {
      console.log(err)
    }
    console.log(result)
  });
});

// Route to inserting records to loyalty transaction (WORKING)
app.post('/api/loyaltytransaction', (req, res) => {

  const userid = req.body.userid;
  const itemname = req.body.itemname;
  const point = req.body.point;
  const qty = req.body.qty;
  const date = req.body.date;

  db.query("INSERT INTO loyaltytransaction (userid, itemname, point, qty, date) VALUES (?, ?, ?, ?, ?)", [userid, itemname, point, qty, date], (err, result) => {
    if (err) {
      console.log(err)
    }
    console.log(result)
  });
})

// Route to get food item information from database (WORKING)
app.get("/api/orderfood", (req, res) => {
  db.query("SELECT * FROM orderfood;", (err, result) => {
    if (err) {
      console.log(err)
    }
    res.send(result)
  });
});

// Route to fetch user meal records in homepage ()
app.get("/api/mealrecord", (req, res) => {
  const { date } = req.query;
  db.query("SELECT * FROM mealrecord WHERE mrdate = ?;", [date], (err, result) => {
    if (err) {
      console.log(err)
    }
    res.send(result)
  });
});

//Route to store user BMI
// Route to store user BMI in bmi_tracker
app.post('/api/storeBMI', (req, res) => {
  const { id, bmi } = req.body;

  // Insert a new BMI record into the bmi_tracker table
  db.query('INSERT INTO bmi_tracker (id, bmi) VALUES (?, ?);', [id, bmi], (err, result) => {
    if (err) {
      console.log(err)
    }
    res.send(result)
  });
});

// Route to fetch foodnutrition in mealrecord page ()
app.get("/api/getfoodnutrition", (req, res) => {
  db.query("SELECT * FROM foodnutrition;", (err, result) => {
    if (err) {
      console.log(err)
    }
    res.send(result)
  });
});

// Route to get Userprofiles by id for Meal Record page(WORKING)
app.get("/api/getUserProfile/:id", (req, res) => {
  const id = req.params.id;
  db.query("SELECT * FROM userprofile WHERE iduser = ?", id, (err, result) => {
    if (err) {
      console.log(err)
    }
    res.send(result)
  });
});

// Route to inserting records to Meal Record (WORKING)
app.post('/api/insertmealrecords', (req, res) => {

  const upid = req.body.upid;
  const uid = req.body.uid;
  const foodid = req.body.foodid;
  const datetime = req.body.datetime;
  const meal = req.body.meal;

  db.query("INSERT INTO mealrecord (upid, uid, foodid, mrdate, meal) VALUES (?, ?, ?, ?, ?)", [upid, uid, foodid, datetime, meal], (err, result) => {
    if (err) {
      console.log(err)
    }
    console.log(result)
  });
})

// Route to update user information based on ID
app.put('/api/userpointsupdate/:id', (req, res) => {
  const id = req.params.id;
  const points = req.body.balance;


  db.query("UPDATE user SET loyaltypoint = loyaltypoint + ?  WHERE id = ?;", [points, id], (err, result) => {
    if (err) {
      console.log(err)
    }
    console.log(result)
  });
});

// Route to get meal record based on ID
app.get("/api/getmealrecord/:id", (req, res) => {
  const id = req.params.id;
  db.query("SELECT * FROM mealrecord WHERE uid = ?", id, (err, result) => {
    if (err) {
      console.log(err)
    }
    res.send(result)
  });
});

// Route to get meal record based on ID join other tables
app.get("/api/getmealrecordfullinfo/:id", (req, res) => {
  const id = req.params.id;
  db.query("select * from mealrecord join foodnutrition on mealrecord.foodid = foodnutrition.id join userprofile on userprofile.iduserprofile = mealrecord.upid where mealrecord.uid=?", id, (err, result) => {
    if (err) {
      console.log(err)
    }
    res.send(result)
  });
});

// Route to get loyalty transaction record
app.get("/api/loyaltytransaction/:id", (req, res) => {
  const id = req.params.id;
  db.query("select * from loyaltytransaction where userid=?", id, (err, result) => {
    if (err) {
      console.log(err)
    }
    res.send(result)
  });
});

// Route to get unique Id for user profiles(WORKING)
app.get("/api/getUserProfiles/:id", (req, res) => {
  const id = req.params.id;
  db.query("SELECT * FROM userprofile WHERE iduser = ?", id, (err, result) => {
    if (err) {
      console.log(err)
    }
    res.send(result)
  });
});

// Route to add user profile id(Working)
app.post('/api/addIdProfile', (req, res) => {

  const id = req.body.iduser;

  db.query("INSERT INTO userprofile (iduser) VALUES (?)", [id], (err, result) => {
    if (err) {
      console.log(err)
    }
    console.log(result)
  });
})

// Route to get Userprofiles by id for Meal Record page(WORKING)
app.get("/api/getUserProfile2/:id", (req, res) => {
  const id = req.params.id;
  db.query("SELECT * FROM userprofile WHERE iduser = ?", id, (err, result) => {
    if (err) {
      console.log(err)
    }
    res.send(result)
  });
});

// Route to insert height, weight, bmi into bmitracker()
app.post('/api/UserBMItracker/:id', (req, res) => {

  const id = req.params.id;
  const iduserprofile = req.body.iduserprofile;
  const height = req.body.height;
  const weight = req.body.weight;
  const bmi = req.body.bmi;

  db.query("INSERT INTO bmitracker(iduser, iduserprofile, height, weight, bmi, timestamp) VALUES (?,?,?,?,?, CURRENT_TIMESTAMP)", [id, iduserprofile, height, weight, bmi], (err, result) => {
    if (err) {
      console.log(err)
    }
    console.log(result)
  });
})

// Get user BMI, weight, height for graph
app.get("/api/UserBMIgraph/:id",(req, res) => {
  db.query("SELECT * FROM bmitracker;", (err, result) => {
    if (err) {
      console.log(err)
    }
    res.send(result)
  });
});

// Route to get all rows (WORKING)
app.get("/api/getrecipeset", (req, res) => {
  db.query("SELECT * FROM recipeset;", (err, result) => {
    if (err) {
      console.log(err)
    }
    res.send(result)
  });
});
// Route to get all rows for recipeset (WORKING)
app.get("/api/getrecipesetbyid/:id", (req, res) => {
  const id = req.params.id;
  db.query("SELECT * FROM recipeset WHERE setid=?;", id, (err, result) => {
    if (err) {
      console.log(err)
    }
    res.send(result)
  });
});
// Route to get all rows for recipeingredient (WORKING)
app.get("/api/getrecipeingredient", (req, res) => {
  db.query("SELECT * FROM myfoodchoice.recipe join recipeingredient on recipeingredient.recipeid = recipe.recipeid;", (err, result) => {
    if (err) {
      console.log(err)
    }
    res.send(result)
  });
});
// Route to get all rows for recipeingredient (WORKING)
app.get("/api/getrecipestep/", (req, res) => {
  const id = req.params.id;
  db.query("SELECT * FROM myfoodchoice.recipe join recipestep on recipestep.recipeid = recipe.recipeid;", id, (err, result) => {
    if (err) {
      console.log(err)
    }
    res.send(result)
  });
});

// Route to get all rows for recipeset (WORKING)
app.get("/api/getrecipe", (req, res) => {
  db.query("SELECT * FROM recipe;", (err, result) => {
    if (err) {
      console.log(err)
    }
    res.send(result)
  });
});

// Route to get all rows for orderfood (WORKING)
app.get("/api/getorderfood", (req, res) => {
  db.query("SELECT * FROM orderfood;", (err, result) => {
    if (err) {
      console.log(err)
    }
    res.send(result)
  });
});

// Route to inserting records to transaction table (WORKING)
app.post('/api/createtransaction/:id', (req, res) => {

  const transitemid = req.body.transitemid;
  const transitemprice = req.body.transitemprice;
  const transdate = req.body.transdate;
  const transqty = req.body.transqty;
  const transstatus = req.body.transstatus;
  const uid = req.params.id;
  const transitemname = req.body.transitemname;
  const transitemvendor = req.body.transitemvendor;
  const payment = req.body.payment;
  const transcategory = req.body.transcategory;

  db.query("INSERT INTO transaction (uid, transitemid, transitemname, transitemprice, transqty, transdate, transitemvendor, transstatus, payment, transcategory) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [uid, transitemid, transitemname, transitemprice, transqty, transdate, transitemvendor, transstatus, payment, transcategory], (err, result) => {
    if (err) {
      console.log(err)
    }
    console.log(result)
  });
})

// Route to get all rows for shopping cart (WORKING)
app.get("/api/getshoppingcart/:id", (req, res) => {
  const id = req.params.id;
  db.query("SELECT * FROM transaction WHERE uid=? and transstatus='Ongoing';", id, (err, result) => {
    if (err) {
      console.log(err)
    }
    res.send(result)
  });
});

// Route to getting all rows for shopping cart that user has paid for (WORKING)
app.get("/api/gettransactionpaid/:id", (req, res) => {
  const id = req.params.id;
  db.query("SELECT transitemid FROM transaction WHERE uid=? and transstatus='Paid' and transcategory='Recipe';", id, (err, result) => {
    if (err) {
      console.log(err)
    }
    res.send(result)
  });
});
// Route to getting all rows for shopping cart that user has paid and unpaid for (WORKING)
app.get("/api/gettransactionpaidandunpaid/:id", (req, res) => {
  const id = req.params.id;
  db.query("SELECT * FROM transaction WHERE (uid=? and transstatus='Paid' and transcategory='Recipe') or (uid=? and transstatus='Unpaid' and transcategory='Recipe');", [id,id], (err, result) => {
    if (err) {
      console.log(err)
    }
    res.send(result)
  });
});

// Route to delete a transaction item  (WORKING)

app.delete('/api/deletetransactionrecord/:id', (req, res) => {
  const id = req.params.id;

  db.query("DELETE FROM transaction WHERE transid= ?;", id, (err, result) => {
    if (err) {
      console.log(err)
    }
    console.log(result)
  })
})
// Route to get total price of shopping cart
app.get("/api/gettotalprice/:id", (req, res) => {
  const id = req.params.id;
  db.query("SELECT SUM(transitemprice * transqty) AS total FROM myfoodchoice.transaction WHERE uid=? and transstatus='Ongoing';", id, (err, result) => {
    if (err) {
      console.log(err)
    }
    res.send(result)
  });
});

// Route to update transaction qty row with rowid(WORKING)
app.put('/api/updatetransactionrecord/:id', (req, res) => {

  const id = req.params.id;
  const transqty = req.body.transqty;
  db.query("UPDATE transaction SET transqty = ? WHERE transid = ?;", [transqty, id], (err, result) => {
    if (err) {
      console.log(err)
    }
    console.log(result)
  });
});

// Route to update transaction status row with rowid(WORKING)
app.put('/api/updatetransaction/:id', (req, res) => {

  const id = req.params.id;
  const transid = req.body.transid;
  const transstatus = req.body.transstatus;
  const transdate = req.body.transdate;
  db.query("UPDATE transaction SET transstatus = ?, transdate = ? WHERE uid = ? AND transid = ?;", [transstatus, transdate, id, transid], (err, result) => {
    if (err) {
      console.log(err)
    }
    console.log(result)
  });
});

// Route to inserting records to review table (WORKING)
app.post('/api/addreview/:id', (req, res) => {

  const star = req.body.star;
  const title = req.body.title;
  const body = req.body.body;
  const id = req.params.id;

  db.query("INSERT INTO review (reviewstar, reviewtitle, reviewbody, uid) VALUES (?, ?, ?, ?)", [star, title, body, id], (err, result) => {
    if (err) {
      console.log(err)
    }
    console.log(result)
  });
})

// Route to get reviews
app.get("/api/getreviews/", (req, res) => {
  db.query("SELECT idreview, reviewstar, reviewtitle, reviewbody, uid, name FROM myfoodchoice.review left outer join myfoodchoice.user on myfoodchoice.user.id = myfoodchoice.review.uid;", (err, result) => {
    if (err) {
      console.log(err)
    }
    res.send(result)
  });
});

// Route to get vendors
app.get("/api/getvendors", (req, res) => {
  db.query("SELECT * FROM vendor;", (err, result) => {
    if (err) {
      console.log(err)
    }
    res.send(result)
  });
});


//Listening to PORT 3002
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`)
})