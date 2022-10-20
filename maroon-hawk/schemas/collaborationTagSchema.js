export default {
    name: 'collaborationTag',
    type: 'document',
    title: 'Collaboration Tags',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title',
        },
        {
            name: 'section',
            type: 'string',
            title: 'Section',
            options: {
                list: [
                    { title: 'Asia', value: 'asia' },
                    { title: 'North America', value: 'northamerica' },
                ]
            }
        },
        {
            name: 'date',
            type: 'string',
            title: 'Date',
        },
        {
            name: 'body',
            type: 'text',
            title: 'Body',
        },
        {
            name: 'link',
            type: 'array',
            title: 'Link',
            of: [{ type: 'url' }],
        },
        {
            name: 'linkLabel',
            type: 'array',
            title: 'Link Label',
            of: [{ type: 'string' }],
        },
        {
            name: "order",
            title: "Order",
            type: "number",
            hidden: true,
        },

    ]
}