const https = require('https');
const fs = require('fs')

// const writeStream = fs.createWriteStream('data.json')
// var options = {
//     "method": "GET",
//     "hostname": "api.coinmarketcap.com",
//     "path": "/v2/ticker/?convert=BTC&limit=10",
// };

// var request = https.request(options, function (response) {
//     var chunks = '';
//     // response.pipe(writeStream)
//     response.on("data", function (chunk) {
//         chunks += chunk.toString();
//     });

//     response.on("end", () => {
//         // console.log(chunks);
//         fs.writeFile('data.json', chunks, (err, results) => {
//             console.log(err, results)
//         })
//     });
// });

// request.end();

