module.exports = {
    id: 'consolidatedinterface',
    entity: 'consolidatedinterface',
    table: 'consolidatedinterface',
    active: true,

    titleField: 'name',
    searchFields: ['client_id', 'worker_id', 'name', 'creation_date'],

    label: 'Interfaces consolidadas',
    name: 'interfaz consolidada',
    namePlural: 'interfaces consolidadas',

    fields: [
        {
            id: 'name',
            label: 'Nombre',
            column: 'name',
            type: 'text',
            maxLength: 32,
            inMany: true,
            required: true
        },
        {
            id: 'client_id',
            label: 'Cliente',
            column: 'client_id',
            entity: 'client',
            type: 'lov',
            inMany: true,
            required: true,
            lovtable: 'client'
        },
        {
            id: 'worker_id',
            label: 'Operario',
            column: 'worker_id',
            entity: 'worker',
            type: 'lov',
            inMany: true,
            lovtable: 'worker'
        },
        {
            id: 'creation_date',
            label: 'Fecha de creación',
            column: 'creation_date',
            type: 'date',
            inMany: true,
            required: true
        },
    ],

    // collections: [
    //     {
    //         id:'pickingorder_id',
    //         entity: 'pickingorder',
    //         table: 'pickingorder',
    //         column: 'name',
    //         label: 'Órdenes asociadas',
    //         fields: [
    //             {
    //                 id: "item_id",
    //                 label: "Artículo",
    //                 column: "item_id",
    //                 entity: "item",
    //                 type: "lov",
    //                 inMany: true,
    //                 required: true,
    //                 lovtable: "item",
    //                 width: 33
    //             },
    //             {
    //                 id: "quantity",
    //                 label: "Cantidad",
    //                 column: "quantity",
    //                 type: "integer",
    //                 maxLength: 4,
    //                 inMany: true,
    //                 required: true,
    //                 width: 33
    //             },
    //             {
    //                 id: "position",
    //                 label: "Posición",
    //                 column: "position",
    //                 type: "text",
    //                 maxLength: 20,
    //                 inMany: true,
    //                 required: true,
    //                 width: 33
    //             },
    //         ],
    //     }
    // ]
};

