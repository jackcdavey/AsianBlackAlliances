export default {
    name: 'timelinePoint',
    type: 'document',
    title: 'Timeline Points',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title',
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
            name: 'citation',
            type: 'array',
            title: 'Link',
            of: [{ type: 'url' }],
        },
        {
            name: 'linkNote',
            type: 'array',
            title: 'Link Note',
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