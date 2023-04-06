'use strict';

/**
 * visitor-message service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::visitor-message.visitor-message');
