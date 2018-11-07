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
            id: 'name',
            label: 'Nombre',
            column: 'name',
            type: 'text',
            maxLength: 32,
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
    ],
};

