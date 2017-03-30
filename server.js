var express = require('express');
var app = express();

var expressa = require('expressa');         // 
app.use('/api', expressa);                  //
app.use('/admin', expressa.admin({showCriticalFeaturesOnProduction: true}));        // pass expressa.admin({ apiurl:'/myprefix' }) if you're running the api on another host or prefix

var port = process.env.PORT || 8080;
app.listen(port, function () {
  console.log('Example app listening on port ' + port);
});
