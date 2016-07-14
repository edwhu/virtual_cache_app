const MongoClient = require('mongodb').MongoClient;
const MONGO_URL = require('./env.js').MONGO_URL;
const Promise = require('bluebird');
const fs = require('fs');
const _ = require('lodash')

const exportToCSV = array => {
  const stream = fs.createWriteStream('file.csv');
  const fields = ['name','date','loc','d2d','videoname', 'duration', 'length'];

  //write the fields
  stream.write(fields + '\n');
  //begin writing values.
  //console.log(array);
  _.forEach(array, object => {
    const name = object.name;
    const loc = `"${object.loc}"`;
    const d2d = `${object.d2d}`;
    const date = `${object.date}`;
    let cache = '';
    _.forEach(object.cache, (video,i) => {
      if(i === 0) cache +=`${video.name},${video.duration},${video.length}\n`
      else cache+=`,,,,${video.name},${video.duration},${video.length}\n`;
    })
    stream.write(`${name},${date},${loc},${d2d}, ${cache}\n\n`);
  });
  stream.end();
  console.log('stream ended');
}

MongoClient.connect(MONGO_URL, (err, database) =>{
  if(err) throw err;
  const json = database
    .collection('devices')
    .find({},{_id:0})
    .toArray();
  json.then(exportToCSV).then( () => database.close());

});
