module.exports = {
    id: 'client',
    entity: 'client',
    active: true,
    table: 'client',

    titleField: 'name',
    searchFields: ['name'],

    label: 'Clientes',
    name: 'cliente',
    namePlural: 'clientes',

    fields: [
        {
            id: 'name',
            label: 'Nombre',
            column: 'name',
            type: 'text',
            maxLength: 50,
            inMany: true,
            required: true
        },
    ],
};

