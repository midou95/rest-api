const express = require('express');
const app = express();
const mongoose = require('mongoose');
const { getMaxListeners } = require('./models/user');
const user=require('./models/user')

mongoose.Promise = global.Promise;

// Connect MongoDB at default port 27017.
mongoose.connect('mongodb+srv://chelbi:<deco1995>@cluster0.go5ta.mongodb.net/<sample_mflix>?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true,
}, (err) => {
    if (!err) {
        console.log('MongoDB Connection Succeeded.')
    } else {
        console.log('Error in DB connection: ' + err)
    }
});
app.use(express.json);
app.get('/users', (req, res) => {
    user.find({ 
        name:''
    }, (err, docs) => {
       if(err){
           console.log(`Error: ` + err)
       } else{
         if(docs.length === 0){
             console.log("this are users")
         } else{
           
         }
       }
    });
    
});
var createAndSavePerson = function (done) {
    let geder = new user({
      name: "gadour",
      email:'gadour@gmail.com',
      password: 123,
    });
  
    geder.save((err, data) => {
      if (err) {
        return console.log(err);
      } else {
        done(null, data);
      }
    });
  };
  
var arrayofuser = [
    {"_id":{"$oid":"59b99db5cfa9a34dcd7885b9"},"name":"Catelyn Stark","email":"michelle_fairley@gameofthron.es","password":"$2b$12$fiaTH5Sh1zKNFX2i/FTEreWGjxoJxvmV7XL.qlfqCr8CwOxK.mZWS"},
    {"_id":{"$oid":"59b99dcfcfa9a34dcd7885ec"},"name":"Rodrik Cassel","email":"ron_donachie@gameofthron.es","password":"$2b$12$dIvO2KpkHkje98eMZg.exuDR.MeOkHlRC9R7PTKj1D66PhX4NaDP6"},
    {"_id":{"$oid":"59b99dc3cfa9a34dcd7885d6"},"name":"Tormund Giantsbane","email":"kristofer_hivju@gameofthron.es","password":"$2b$12$SsfE7EbmV/HH6nii2jJFOe59P91dAV6CqYdGUDOTkNwcPAScUJyVa"}];
user.create(
    arrayofuser
).then((err,wascreated) => {
    
    if(err){
    console.log(err);
    }
    else{
        console.log(wascreated)
    }


    
});
user.find({ 
    name: geder
}, (err, docs) => {
   if(err){
       console.log(`Error: ` + err)
   } else{
     if(docs.length === 0){
         console.log("this is geder")
     } else{
       
     }
   }
});
app.get('/users', (req, res) => {
    user.findOne({
        name: 'Catelyn Stark',
    }).then((doc) => {
        if (!doc) {
            console.log("this is ")
        } else{
            
        }
    });
    user.findById({ 
        _id:{"$oid":"59b99db5cfa9a34dcd7885b9"}
    }, (err, doc) => {
       if(err){
           console.log(`Error: ` + err)
       } else{
         if(!doc){
             console.log("not find")
         } else{
           
         }
       }
    });
 user.findOneAndUpdate({
     name:'Catelyn Stark' ,
     email:'michelle_fairley@gameofthron.es'
 }, {
    name: 'ahmed amine',
    email:'hejer@gmail.com'
 }, (err, doc) => {
     if (err) {
         console.log(`Error: ` + err)
     } else {
          res.json(doc);
     }
 });
Model.findOneAndDelete({ 
    id: '59b99db4cfa9a34dcd7885b6'
}, (err, doc) => {
   if(err){
       console.log(`Error: ` + err)
   } else{
     if(!doc){
         console.log("message")
     } else{
          res.json(req.params._id);
       
     }
   }
});
});



app.get('/', (req, res) => {
    res.send('lovly baby');
});

app.listen(5000, () => {
    console.log('Example app listening on port 5000!');
});

//Run app, then load http://localhost:5000 in a browser to see the output.