/**
 * ArrivalList.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

        title: {
            type: 'string'
        },
    
        name: {
            type: 'string'
        },
    
        date: {
            type: 'ref',
            columnType: 'date'
        },

        time: {
            type: 'ref',
            columnType: 'time'
        },
    
        email: {
            type: 'string',
            isEmail: true,
        },
        user: {
            model: 'user'
        }
  },

};

