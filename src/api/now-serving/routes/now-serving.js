'use strict';

/**
 * now-serving router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::now-serving.now-serving');
