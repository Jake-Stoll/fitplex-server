/**
 * Class.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    type: { type: 'string', required: true },
    // Date of the class
    date: { type: 'ref', columnType: 'datetime', required: true },
    // Duration of the class in minutes
    duration: { type: 'number', required: true },
    description: { type: 'string', required: true },
    instructor: { type: 'string', required: true },
    view: { type: 'number' },
    // Add a reference to Studio
    studio: {
      model: 'user'
    },
    videoUrl: { type: 'string' },
    liveUrl: { type: 'string' }
  },

};

