'use strict';

const fs = require('fs');

fs.readFile('./danimist.json', function(err, data) {
   if (err) {
      return console.error(err);
   }

    let result = JSON.parse(data);
    let finish = [];

   for (let i = 0; i < result.length; i++) {
        var routes = result[i].routes_way.split(' – ');
        routes.map((item) => `'$(item)`);
        result[i].routes_way_forward = routes;
        if (result[i].routes_direction === 'both') {
            let routes_back = [];
            for (let j = routes.length - 1; j >= 0; j--) {
                routes_back.push(routes[j]);
            }
            // routes.reverse();       
            result[i].routes_way_back = routes_back;
            finish.push(result[i]);
        }
        else if (result[i].routes_direction === 'straight') {
            let routes_back = result[i+1].routes_way.split(' – ');
            routes_back.map((item) => `'$(item)`);
            result[i].routes_way_back = routes_back;
            finish.push(result[i]);            
            i++;
        }
   }

    fs.writeFile(`./danimist_converted_2_arrays.json`, JSON.stringify(finish, null, 4), 'utf8', function(err) {
        if (err) {
            return console.error(err);
        }
    });

//    console.log("Asynchronous read: " + data.toString());
});
