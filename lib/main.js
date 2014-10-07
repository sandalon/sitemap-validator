

var argv = require('yargs')
      .usage('Validates that the URLs in a sitemap are correct')
      .example('$0 -l http://www.sitename.com/sitemap.xml -c 200 ')
      .demand('l')
      .demand('c')
      .alias('l', 'location')
      .alias('c', 'code')
      .describe('l', 'The URL to the sitemap.xml file')
      .describe('c', 'The successful http return code, typically 200')
      .version('0.0.1', 'v')
      .argv

var s = require('string')
var validate = require('./validate')

if(s(argv.l).right(3) != 'xml') {
  console.log('The location must be an xml file');
  return;
}

validate.CheckSitemap(argv.l, argv.c, function(){
  
});
