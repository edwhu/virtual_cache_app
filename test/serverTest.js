const fetch = require('isomorphic-fetch')
for(let i = 0; i < 100; ++i) {
  fetch('http://www.edward-hu.com/logs',
  {
    method:'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'x-www-form-urlencoded'
    },
    body:{
      name:'Ed'
    }
  }).catch (function (error) {
    console.log('Request failed', error);
  });
}
