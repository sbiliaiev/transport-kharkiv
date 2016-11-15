const fs = require('fs');

fs.readFile('./danimist.json', function(err, data) {
   if (err) {
      return console.error(err);
   }

//    console.log(JSON.parse(data));
    const result = JSON.parse(data);
    console.log();

   for (let i = 0; i < result.length; i++) {
       fs.writeFile(`./file_${i}.json`, JSON.stringify(result[i]), function(err) {
           if (err) {
                return console.error(err);
            }
       });
   }
//    console.log("Asynchronous read: " + data.toString());
});
