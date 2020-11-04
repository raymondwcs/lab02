const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const ObjectId = require('mongodb').ObjectID;
const url = '';  // MongoDB Atlas Connection URL
const dbName = 'test'; // Database Name

const countRestaurants = (db, callback) => {
	db.collection('restaurants').countDocuments((err,count) => {
		assert.equal(null,err);
		console.log(`There are ${count} documents in the restuarant collection`);
		callback();
	})
}

const client = new MongoClient(url);

client.connect((err) => {
	assert.equal(null,err);
	console.log(`Connected successfully to ${url}`);

	const db = client.db(dbName);

	countRestaurants(db, () => {
		client.close();
	})
})
