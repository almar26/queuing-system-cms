'use strict';

/**
 * now-serving controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::now-serving.now-serving');
