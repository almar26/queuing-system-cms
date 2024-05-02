'use strict';

/**
 * queuing service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::queuing.queuing');
