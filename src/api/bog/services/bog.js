'use strict';

/**
 * bog service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::bog.bog');
