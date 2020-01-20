const Base = require('../base');

class ObjectionBoiler extends Base {
    static get tableName() {
        return 'comments';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            properties: {
                id: { type: 'integer' },
                content: { type: 'string' },
                article_id: { type: 'integer' },
                created_at: { type: 'date' },
                updated_at: { type: 'date' },
            },
        };
    }
}

module.exports = ObjectionBoiler;
