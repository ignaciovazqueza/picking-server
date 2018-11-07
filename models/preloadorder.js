module.exports = {
    id: 'preloadorder',
    entity: 'preloadorder',
    active: true,
    table: 'preloadorder',
    
    titleField: 'name',
    searchFields: ['consolidatedinterface_id', 'worker_id', 'name', 'creation_date', 'freeSpace'],
    
    label: 'Órdenes de precarga',
    name: 'órden de precarga',
    namePlural: 'órdenes de precarga',

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
            id: 'worker_id',
            label: 'Operario',
            column: 'worker_id',
            entity: 'worker',
            type: 'lov',
            inMany: true,
            required: true,
            lovtable: 'worker'
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
            id: 'freeSpace',
            label: 'Espacio disponible',
            column: 'freeSpace',
            type: 'boolean',
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
        }
    ],
};

