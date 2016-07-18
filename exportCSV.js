const Promise = require('bluebird');
const fs = require('fs');
const _ = require('lodash')

const exportToCSV = (array,filename) => {
  return new Promise ( resolve => {
    const stream = fs.createWriteStream(filename);
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
    resolve(fs.createReadStream(filename));
  });
}

module.exports = exportToCSV;
