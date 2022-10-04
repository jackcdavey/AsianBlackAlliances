export default {
    name: 'timelinePoint',
    type: 'document',
    title: 'Timeline Point',
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
            title: 'Citation',
            of: [{ type: 'url' }],
        },
        {
            name: "order",
            title: "Order",
            type: "number",
            hidden: true,
        },

    ]
}