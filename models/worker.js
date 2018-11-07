var worker_lovs = {
    type: [
        {id: 1, text: 'Auto-elevador'},
        {id: 2, text: 'Manual'},
    ],
};


module.exports = {
    id: 'worker',
    entity: 'worker',
    table: 'worker',
    active: true,

    titleField: 'name',
    searchFields: ['name', 'type'],

    label: 'Operarios',
    name: 'operario',
    namePlural: 'operarios',

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
        {
            id: 'type',
            label: 'Tipo',
            column: 'type',
            type: 'lov',
            list: worker_lovs.type,
            inMany: true,
            required: true,
            lovtable: 'worker_type'
        },
    ],
};

