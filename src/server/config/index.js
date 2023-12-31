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

// Route to get one row by email (WORKING)
app.get('/api/getnewaccountemail', (req, res) => {

  const id = req.params.id;
  db.query("SELECT * FROM user ORDER BY id DESC LIMIT 1;", id, (err, result) => {
    if (err) {
      console.log(err)
    }
    res.send(result)
  });
});

// Route for creating a new user profile row into the table 'userprofile' (WORKING)
app.post('/api/createuserprofilenewaccount', (req, res) => {

  const name = req.body.name;
  const gender = req.body.gender;
  const height = req.body.height;
  const weight = req.body.weight;
  const lifestyle = req.body.lifestyle;
  const conditions = req.body.conditions;
  const dob = req.body.dob;
  const iduserprofile = req.body.iduserprofile;
  const iduser = req.body.iduser;
  const bmi = req.body.bmi;
  const age = req.body.age;

  db.query("INSERT INTO userprofile (iduserprofile, iduser, name, dob, height, weight, conditions, lifestyle, gender, bmi, age) VALUES (?,?,?,?,?,?,?,?,?,?,?)", [iduserprofile, iduser, name, dob, height, weight, conditions, lifestyle, gender, bmi, age], (err, result) => {
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

// Route to update row (WORKING)
app.put('/api/updatepassword/:id', (req, res) => {

  const id = req.params.id;
  const password = req.body.password;
  db.query("UPDATE user SET password = ? WHERE id = ?;", [password, id], (err, result) => {
    if (err) {
      console.log(err)
    }
    console.log(result)
  });
});


// Route to update row on Vendor (WORKING)
app.put('/api/updatevendor/:id', (req, res) => {

  const id = req.params.id;
  const password = req.body.password;
  db.query("UPDATE vendor SET vendorpassword = ? WHERE idvendor = ?;", [password, id], (err, result) => {
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

// Route to inserting vendor records to user table
app.post('/api/insertvendortouser', (req, res) => {

  const name = req.body.vendorname;
  const email = req.body.vendoremail;
  const password = req.body.vendorpassword;
  const accountType = 'vendor'

  db.query("INSERT INTO user (email, name, password, accountType) VALUES (?, ?, ?, ?)", [email, name, password, accountType], (err, result) => {
    if (err) {
      console.log(err)
    }
    console.log(result)
  });
})
// THIS WORKS!!!!!!!!!!!!!!!
// Route to inserting records to vendor (WORKING)
app.post('/api/insertvendor', (req, res) => {

  const vendorimg = req.body.vendorimg;
  const vendorname = req.body.vendorname;
  const vendoremail = req.body.vendoremail;
  const vendorpassword = req.body.vendorpassword;
  const vendoraddress = req.body.vendoraddress;
  const vendorspecialty = req.body.vendorspecialty;

  db.query("INSERT INTO vendor (vendorname, vendoremail, vendorpassword, vendoraddress, vendorspecialty, vendorimg) VALUES (?, ?, ?, ?, ?, ?)", [vendorname, vendoremail, vendorpassword, vendoraddress, vendorspecialty, vendorimg], (err, result) => {
    if (err) {
      console.log(err)
    }
    console.log(result)
  });
})
// THIS WORKS!!!!!!!!!!!!!!!
// Route to get unique Id for Food Nutrition page(WORKING)
app.get("/api/getvendor", (req, res) => {
  const id = req.params.id;
  db.query("SELECT * FROM vendor;", (err, result) => {
    if (err) {
      console.log(err)
    }
    res.send(result)
  });
});



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
app.get("/api/getmealrecordfullinfo1/:id", (req, res) => {
  const id = req.params.id;
  db.query("select * from mealrecord left join foodnutrition on mealrecord.foodid = foodnutrition.id left join userprofile on userprofile.iduserprofile = mealrecord.upid where mealrecord.uid= ? AND iduser= ?;", [id, id], (err, result) => {
    if (err) {
      console.log(err)
    }
    res.send(result)
  });
});

// Route to get Total calories by meal
app.get("/api/totalMealcalories/:id", (req, res) => {
  const uid = req.params.id;
  const upid = req.query.upid;
  const mrdate = req.query.mrdate;
  console.log(upid, uid, mrdate)
  db.query("SELECT uid, upid, meal, SUM(kcal) AS kcal FROM myfoodchoice.mealrecord  join foodnutrition on mealrecord.foodid = foodnutrition.id WHERE upid = ? AND uid = ? AND DATE(mrdate) = ? GROUP BY uid, upid, meal", [upid, uid, mrdate], (err, result) => {
    if (err) {
      console.log(err)
    }
    res.send(result)
  });
});


// Route to get Total calories
app.get("/api/totalcalories/:id", (req, res) => {
  const uid = req.params.id;
  const upid = req.query.upid;
  const mrdate = req.query.mrdate;
  console.log(upid, uid, mrdate)
  db.query("SELECT uid, upid, SUM(kcal) AS kcal FROM myfoodchoice.mealrecord  join foodnutrition on mealrecord.foodid = foodnutrition.id WHERE upid = ? AND uid = ? AND DATE(mrdate) = ? GROUP BY uid, upid", [upid, uid, mrdate], (err, result) => {
    if (err) {
      console.log(err)
    }
    res.send(result)
  });
});

// Route to get user nutrients
app.get("/api/getmealrecordfullinfo/:id", (req, res) => {
  const upid = req.query.upid;
  const uid = req.params.id;
  const mrdate = req.query.mrdate;

  db.query(`
  SELECT uid, upid, SUM(carbohydrate) AS carbohydate , SUM(protein) AS protein, SUM(fat) AS fat, SUM(saturatedfat) AS saturatedfat, SUM(cholesterol) AS cholesterol, SUM(dietaryfibre) AS dietaryfibre, SUM(sodium) AS sodium, SUM(weight) AS weight
  FROM myfoodchoice.mealrecord 
  join foodnutrition on 
  mealrecord.foodid = foodnutrition.id
  WHERE upid = ? AND uid = ? AND DATE(mrdate) = ?
  GROUP BY uid, upid ;
`, [upid, uid, mrdate], (err, result) => {
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
  const iduserprofile = req.body.iduserprofile;
  const name = req.body.name;
  const gender = req.body.gender;
  const height = req.body.height;
  const weight = req.body.weight;
  const lifestyle = req.body.lifestyle;
  const conditions = req.body.conditions;
  const dob = req.body.dob;
  const bmi = req.body.bmi;
  const age = req.body.age;

  db.query("INSERT INTO userprofile (iduserprofile, iduser, name, dob, height, weight, lifestyle, conditions, gender, bmi, age) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [iduserprofile, id ,name, dob, height, weight, lifestyle, conditions, gender, bmi, age], (err, result) => {
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
  const id = req.params.id;

db.query("SELECT * FROM bmitracker WHERE iduser = ?;",id, (err, result) => {
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
  db.query("SELECT * FROM transaction WHERE (uid=? and transstatus='Paid') or (uid=? and transstatus='Unpaid');", [id,id], (err, result) => {
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
  const payment = req.body.payment;
  db.query("UPDATE transaction SET transstatus = ?, payment = ?, transdate = ? WHERE uid = ? AND transid = ?;", [transstatus, payment, transdate, id, transid], (err, result) => {
    if (err) {
      console.log(err)
    }
    console.log(result)
  });
});

// Route to update transaction status row with rowid(WORKING)
app.put('/api/updateuserpremiumstatus/:id', (req, res) => {

  const uid = req.params.id;
  const premium = req.body.premium;
  db.query("UPDATE user SET premium = ? WHERE id = ?;", [premium, uid], (err, result) => {
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


// Route to get all transaction with name
app.get("/api/getalltransactionwithname", (req, res) => {
  db.query("SELECT * FROM myfoodchoice.transaction join user on transaction.uid = user.id; ", (err, result) => {
    if (err) {
      console.log(err)
    }
    res.send(result)
  });
});



// Route for Vendor to post food (WORKING)
app.post('/api/postfood', (req, res) => {

  const ofname = req.body.ofname;
  const ofprice = req.body.ofprice;
  const ofimg = req.body.ofimg;
  const ofvendor = req.body.ofvendor;

  db.query("INSERT INTO orderfood (ofname, ofprice, ofimg, ofvendor) VALUES (?, ?, ?, ?)", [ofname, ofprice, ofimg, ofvendor], (err, result) => {
    if (err) {
      console.log(err)
    }
    console.log(result)
  });
})

// Route to get all food posted by vendor (WORKING)
app.get('/api/foodItems/:id', (req, res) => {

  const id = req.params.id;
  db.query("SELECT user.name AS vendor_name, orderfood.ofname AS ofname, orderfood.ofprice, orderfood.ofimg, orderfood.ofid AS ofid FROM `user` INNER JOIN `orderfood` ON user.name = orderfood.ofvendor WHERE user.accountType = 'vendor' AND orderfood.ofvendor = ?;", id, (err, result) => {
    if (err) {
      console.log(err)
    }
    res.send(result)
  });
});

// Route to get all top selling menu (WORKING)
app.get('/api/topSellingMenu/:id', (req, res) => {

  const id = req.params.id;
  db.query("SELECT transitemvendor, transitemname, transcategory, SUM(transqty) AS totalqty, transitemprice AS total_transqty, ofimg FROM transaction JOIN orderfood ON transitemid = ofid WHERE transstatus = 'Paid' AND transitemvendor = ? AND transcategory = 'Food' GROUP BY transitemvendor, transitemname, transcategory, transitemprice, ofimg ORDER BY SUM(transqty) DESC;", id, (err, result) => {
    if (err) {
      console.log(err)
    }
    res.send(result)
  });
});

// Route to get all top selling recipes
app.get('/api/topSellingRecipe/:id', (req, res) => {

  const id = req.params.id;
  db.query("SELECT transitemvendor, transitemname, transcategory, SUM(transqty) AS totalqty, transitemprice AS total_transqty, ofimg FROM transaction JOIN orderfood ON transitemid = ofid WHERE transstatus = 'Paid' AND transitemvendor = ? AND transcategory = 'Recipe' GROUP BY transitemvendor, transitemname, transcategory, transitemprice, ofimg ORDER BY SUM(transqty) DESC;", id, (err, result) => {
    if (err) {
      console.log(err)
    }
    res.send(result)
  });
});

// Route to get least selling items
app.get('/api/leastSellingItem/:id', (req, res) => {

  const id = req.params.id;
  db.query("SELECT transitemvendor, transitemname, transcategory, SUM(transqty) AS totalqty, transitemprice AS total_transqty, ofimg FROM transaction JOIN orderfood ON transitemid = ofid WHERE transstatus = 'Paid' AND transitemvendor = ? GROUP BY transitemvendor, transitemname, transcategory, transitemprice, ofimg ORDER BY SUM(transqty);", id, (err, result) => {
    if (err) {
      console.log(err)
    }
    res.send(result)
  });
});


// Route to get all vendor name from user table
app.get('/api/getVendorName1/:id', (req, res) => {

  const id = req.params.id;
  db.query("SELECT * FROM user WHERE id = ?;", id, (err, result) => {
    if (err) {
      console.log(err)
    }
    res.send(result)
  });
});

// Route to delete posted food (WORKING)

app.delete('/api/DeletefoodItems/:ofid', (req, res) => {
  const ofid = req.params.ofid;

  db.query("DELETE FROM orderfood WHERE ofid = ? ;", [ofid], (err, result) => {
    if (err) {
      console.log(err)
    }
    console.log(result)
  })
})

// Route to get all vendor name from user table
app.get('/api/vendordetails/:id', (req, res) => {

  const id = req.params.id;
  db.query("SELECT * FROM vendor WHERE idvendor = ?;", id, (err, result) => {
    if (err) {
      console.log(err)
    }
    res.send(result)
  });
});

app.get('/api/GetLoginStreak/:id', (req, res) => {

  const id = req.params.id;
  const date = req.body.date;
  
  db.query("SELECT * FROM loginstreak WHERE id = ? AND date = ?;",[id,date] , (err, result) => {
    if (err) {
      console.log(err)
    }
    res.send(result)
  });
});

app.get('/api/GetLoginStreakHome/:id', (req, res) => {

  const id = req.params.id;


  db.query("SELECT * FROM loginstreak WHERE id = ? ;",[id] , (err, result) => {
    if (err) {
      console.log(err)
    }
    res.send(result)
  });
});

app.post('/api/updateLoginStreak/:id', (req, res) => {

  const id = req.params.id;
  const date = req.body.date;
  db.query("INSERT INTO loginstreak (id, date) VALUES (?, ?)", [id, date], (err, result) => {
    if (err) {
      console.log(err)
    }
    console.log(result)
  });
})

// Route to put login streak loyalty point into user table
app.put('/api/streakLoyaltyPoints/:id', (req, res) => {

  const id = req.params.id;
  const loyaltypoint = req.body.loyaltypoint;
  db.query("update user SET loyaltypoint = loyaltypoint + ? WHERE id=?;", [loyaltypoint, id], (err, result) => {
    if (err) {
      console.log(err)
    }
    console.log(result)
  });
});

//Listening to PORT 3002
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`)
})