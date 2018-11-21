module.exports = {
    id: 'item',
    entity: 'item',
    table: 'item',
    active: true,

    titleField: 'name',
    searchFields: ['name'],

    label: 'Artículos',
    name: 'artículo',
    namePlural: 'artículos',

    fields: [
        {
            id: 'name',
            label: 'Nombre',
            column: 'name',
            type: 'text',
            maxLength: 50,
            inMany: true,
            required: true
        }
    ],
};

