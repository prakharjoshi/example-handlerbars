var Handlebars = require('handlebars');
var fs = require('fs');
_ = require('lodash');
var mail;
var context;
var result;

defaults = {'subject' : 'Welcome', 'foo' : 'Dermicool'};
inputs = {'foo' : 'cool'};

var http = require('http'),
    fs = require('fs');


fs.readFile('./text.html', function (err, html) {
    if (err) {
        throw err; 
    }       
    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});
        mail = Handlebars.compile(String(html));
        context = _.merge(defaults, inputs);
        result = mail(context);
        response.write(result);  
        response.end();  
    }).listen(8000);
});
