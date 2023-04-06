'use strict';

/**
 * visitor-message router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::visitor-message.visitor-message');
