module.exports = {
    id: 'pickingorder',
    entity: 'pickingorder',
    active: true,
    table: 'pickingorder',

    titleField: 'name',
    searchFields: ['consolidatedinterface_id', 'item_id', 'name', 'creation_date'],

    label: 'Órdenes de pickeo',
    name: 'órden de pickeo',
    namePlural: 'órdenes de pickeo',

    fields: [
        {
            id: 'consolidatedinterface_id',
            label: 'Interfaz consolidada',
            column: 'consolidatedinterface_id',
            entity: 'consolidatedinterface',
            type: 'lov',
            inMany: true,
            required: true,
            lovtable: 'consolidatedinterface'
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
            id: 'name',
            label: 'Nombre',
            column: 'name',
            type: 'text',
            maxLength: 50,
            inMany: true,
            required: true
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
        {
            id: 'end_date',
            label: 'Fecha de finalización',
            column: 'end_date',
            type: 'date',
            inMany: true,
        },
        {
            id: 'end_time',
            label: 'Horario de finalización',
            column: 'end_time',
            type: 'time',
            maxLength: 8,
            inMany: true,
        }
    ],
};

