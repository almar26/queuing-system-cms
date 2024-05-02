'use strict';

/**
 * now-serving service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::now-serving.now-serving');
