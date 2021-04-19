//Create Read

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;//Will give us access to the function neccesary to connet to the db

const connectionURL = 'mongodb://127.0.0.1:27017'; //localhost thats runnig
const databaseName = 'findMyRestaurant';//db name whatever we want

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => { //The callback function will when the operation is complete. If error happend we will have error otherwise we will have client
  if (error) {
    return console.log('Unable to connect to database');
  }
  const db = client.db(databaseName); //will give us a client to work on our db. If one does not exsits it will create db. 
  const restaurants = db.collection('Restaurant');

  //   1. Crud
  // 1.1 – Write a MongoDb query to display all the documents in the restaurant collection.
  // restaurants.find().forEach(r => console.log(r));



  // 1.2 - Write a MongoDb query to display all restaurants that have a specific cuisine
  // restaurants.find({ cuisine: 'asian' }).forEach(r => console.log(r));


  // 1.3 - Write a MongoDb query that displays only kosher restaurants
  // restaurants.find({ kosher: true }).forEach(r => console.log(r));

  // 1.4 - Write a MongoDb query that displays only a specific cities restaurants
  // restaurants.find({ "address.city": 'Holon' }).forEach(r => console.log(r));

  // 1.5 - Write a MongoDb query to display a specific restaurants address
  // restaurants.find({ "address.city": 'Holon', "address.street": "Herzel 15" }).forEach(r => console.log(r));


  // 1.6 - Write a MongoDb query to display a specific restaurants coordinates
  // restaurants.find({ "address.coordinates": [20.46574, 10.6774] }).forEach(r => console.log(r));


  // 1.7. - Write a MongoDb query that should display all restaurants in ascending order by restaurant name.
  // restaurants.find().sort({ name: 1 }).forEach(r => console.log(r));


  // 1.8 - Write a MongoDb query that should display all restaurants in ascending order by city names.
  // restaurants.find().sort({ name: -1 }).toArray((error, result) => {
  //   if (error) {
  //     console.log(error);
  //   }
  //   else {
  //     console.log(result);
  //   }
  // });

  // 1.9 - Update a specific restaurant's name
  //restaurants.updateOne({ name: "coconut jam" }, { $set: { name: "pb&jam" } });


  // 1.10 - Update a specific restaurant by adding a new review.
  // restaurants.updateOne({ name: "bombay" }, { $push: { reviews: { date: new Date("1981-10-04"), score: 10 } } });

  // 1.11 - Update all restaurants to be kosher
  // restaurants.updateMany({}, { $set: { kosher: true } });

  // 1.12 - Delete a specific restaurant
  // restaurants.deleteOne({ name: "asian delight" });

  // 1.13 - Delete all restaurants
  // restaurants.deleteMany({});

  // 1.14 – Increment a specific restaurants score by 2
  // restaurants.updateOne({ name: "bombay" }, { $inc: { "reviews.2.score": 2 } });

  // 1.15 – Decrement a specific restaurants score by 1
  // restaurants.updateOne({ name: "bombay" }, { $inc: { "reviews.1.score": -1 } });

  // 2.2 - Write a MongoDb query to print all restaurant cities
  // restaurants.find({}).forEach(r => console.log(r.address.city));

  //  3. Advanced Queries
  // 3.1 - Query for restaurant names that start with a specific alphabet
  // restaurants.find({ name: { $in: [/^a/] } }).forEach(r => console.log(r));

  // 3.2 - Query how many documents you have from the restaurant collection.
  // restaurants.countDocuments({}, ((err, res) => {
  //   console.log(err ? err : res);
  // }));

  // 3.3 - Write a MongoDb query to get restaurants that include reviews from a specific date.
  // restaurants.find({ reviews: { $elemMatch: { date: new Date("2018-01-01") } } }).toArray((err, res) => {
  //   console.log(res);
  // })
});
