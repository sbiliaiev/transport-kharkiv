const fs = require('fs');

fs.readFile('./danimist.json', function(err, data) {
   if (err) {
      return console.error(err);
   }

//    console.log(JSON.parse(data));
    let result = JSON.parse(data);
    // console.log(result[0].routes_way);

   for (let i = 0; i < result.length; i++) {
    //    if (result[i].routes_transport_type === 'trolleybus' && result[i].routes_name === 3) {
        let routes = result[i].routes_way.split(' – ');
        console.log(routes);
        result[i].routes_way_array = routes;
    //    }
   }
    fs.writeFile(`./danimist_converted.json`, JSON.stringify(result), function(err) {
        if (err) {
            return console.error(err);
        }
    });
//    console.log("Asynchronous read: " + data.toString());
});
