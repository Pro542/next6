const variables = require('./css-variables.json');

module.exports = {
    plugins: {
        'postcss-rtl': {},
        'postcss-css-variables': { variables }
    }
}