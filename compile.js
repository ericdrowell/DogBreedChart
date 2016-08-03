var handlebars = require('handlebars');
var fs = require('fs');

fs.readFile('Table.hbs', 'utf8', function (err, Table) {
  if (err) {
    return console.log(err);
  }
  fs.readFile('dogs.json', 'utf8', function (err, data) {
    if (err) {
      return console.log(err);
    }

    var template = handlebars.compile(Table);
    var result = template(JSON.parse(data));
    
    fs.writeFile('Table.html', result, function(err) {
      if (err) {
        return console.log(err);
      }
    });
  });
});


