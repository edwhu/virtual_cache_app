const Chance = require('chance').Chance();
const MongoClient = require('mongodb').MongoClient;
const MONGO_URL = require('./env.js').MONGO_URL;
let json = [];
function generateJSON(){
	let temp = {};
	temp.name = Chance.first();
	temp.cache = [];
	for(let i = 0; i < Chance.integer({min:1, max:30}); ++i){
		temp.cache.push({name:Chance.first(), length:Chance.integer({min:1, max:20}), duration:Chance.integer({min:1, max:20})});
	}
	temp.d2d = 0;
	temp.date = Chance.hammertime();
	temp.loc = [Chance.longitude(), Chance.latitude()];
	return temp;
}

for(let i = 0; i < 10; ++i) {
	json.push(generateJSON());
}

MongoClient.connect(MONGO_URL, (err, database) =>{
	if(err) throw err;
	database.collection('devices').insertMany(json);
	database.close();
});
console.log('finished');
