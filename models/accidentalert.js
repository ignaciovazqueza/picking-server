module.exports = {
    id: 'accidentalert',
    entity: 'accidentalert',
    table: 'accidentalert',
    active: true,

    titleField: 'name',
    searchFields: ['name', 'creation_date'],

    label: 'Accidentes de mercadería',
    name: 'accidente de mercadería',
    namePlural: 'accidentes de mercadería',

    fields: [
        {
            id: 'name',
            column: 'name',
            label: 'Nombre',
            type: 'text',
            maxLength: 50,
            inMany: true,
            required: true
        },
        {
            id: 'creation_date',
            column: 'creation_date',
            label: 'Fecha de creación',
            type: 'date',
            inMany: true,
            required: true
        },
        {
            id: 'creation_time',
            column: 'creation_time',
            label: 'Horario de creación',
            type: 'time',
            maxLength: 8,
            inMany: true,
            required: true
        },
    ],
};

