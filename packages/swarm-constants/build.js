const StyleDictionary = require('style-dictionary').extend(`${__dirname}/config.json`);
const fs = require('fs');
const _ = require('lodash');

console.log('Build started...');
console.log('\n==============================================');

// Custom format that uses the Lodash "template" syntax
StyleDictionary.registerFormat({
  name: 'custom/format/colorModifiers',
  formatter: _.template(fs.readFileSync(`${__dirname}/templates/colorModifiers.template`))
});

// Custom format that uses the Lodash "template" syntax
StyleDictionary.registerFormat({
  name: 'custom/format/colorSwatch',
  formatter: _.template(fs.readFileSync(`${__dirname}/templates/colorSwatch.template`))
});

StyleDictionary.registerFormat({
  name: 'custom/format/customProperties',
  formatter: _.template(fs.readFileSync(`${__dirname}/templates/customProperties.template`))
});

// Filter to determine if a property is a color
StyleDictionary.registerFilter({
  name: 'isColorProp',
  matcher: function(prop) {
    return prop.name.startsWith('color');
  }
});

// Filter to determine if a property is a color and not a font color to remove repeats
StyleDictionary.registerFilter({
  name: 'isColorNotFontProp',
  matcher: function(prop) {
    return prop.name.startsWith('color') && !prop.name.startsWith('color-font');
  }
});

// FINALLY, BUILD ALL THE PLATFORMS
StyleDictionary.buildAllPlatforms();


console.log('\n==============================================');
console.log('\nBuild completed!');
