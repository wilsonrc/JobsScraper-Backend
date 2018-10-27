'use strict';

import devConfig from './dev';
import prodConfig from './prod';

const isProd = process.env.NODE_ENV === 'production';

export default (isProd ? prodConfig : devConfig);
