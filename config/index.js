'use strict';

const isProd = process.env.NODE_ENV !== 'production';
const configToExport = isProd ? require('./prod') : require('./dev');

module.exports = configToExport;
