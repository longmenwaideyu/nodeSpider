var http = require('http');
/**
var options = 
{
 host: 'beijing.jinpu.com',
 port: 80,
 path: '/shangpu/zu/p',
 method: 'GET'
};
*/
function spiderUrl(opt, fnSpiderData) {
    var req = http.request(opt, function(res) {
        res.setEncoding('utf8');
        var g_data="";
        res.on('data', function (chunk) {
            g_data+=chunk;
        });
        res.on('end', function() {
            console.log("done url" + opt.path);
            fnSpiderData(g_data, opt);
        });
    });
    req.on('error', function(e)
    {
        console.log('problem with request ' + opt.path + ' : ' + e.message);
        fnSpiderData(null, opt);
    });
    req.end();
}
module.exports = spiderUrl;