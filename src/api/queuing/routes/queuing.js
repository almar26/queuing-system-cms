'use strict';

/**
 * queuing router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::queuing.queuing');
