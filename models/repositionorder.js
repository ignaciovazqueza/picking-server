module.exports = {
    id: 'repositionorder',
    entity: 'repositionorder',
    active: true,
    table: 'repositionorder',

    titleField: 'name',
    searchFields: ['item_id', 'name', 'creation_date'],

    label: 'Órdenes de reposición',
    name: 'órden de reposición',
    namePlural: 'órdenes de reposición',

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
            id: 'item_id',
            label: 'Artículo',
            column: 'item_id',
            entity: 'item',
            type: 'lov',
            inMany: true,
            required: true,
            lovtable: 'item'
        },
        {
            id: 'quantity',
            label: 'Cantidad',
            column: 'quantity',
            type: 'integer',
            maxLength: 4,
            inMany: true,
            required: true
        },
        {
            id: "position",
            label: "Posición",
            column: "position",
            type: "text",
            maxLength: 20,
            inMany: true,
            required: true
        },
        {
            id: 'creation_date',
            label: 'Fecha de creación',
            column: 'creation_date',
            type: 'date',
            inMany: true,
            required: true
        },
        {
            id: 'creation_time',
            label: 'Horario de creación',
            column: 'creation_time',
            type: 'time',
            maxLength: 8,
            inMany: true,
            required: true
        },
    ],
};

