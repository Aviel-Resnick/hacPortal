const rp = require('request-promise');
const url = 'https://lmrhomeaccess.spihost.com';

rp(url)
  .then(function(html){
    //success!
    console.log(1);
  })
  .catch(function(err){
    //handle error
    console.log(0);
  });
