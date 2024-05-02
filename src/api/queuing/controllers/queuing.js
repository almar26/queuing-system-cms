'use strict';

/**
 * queuing controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::queuing.queuing');
