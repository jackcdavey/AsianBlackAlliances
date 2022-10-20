export default {
    name: 'historyResources',
    type: 'document',
    title: 'History of Collab: Additional Info',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title',
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
            of: [
                {
                    type: 'url',
                },
            ],
        },
        {
            name: 'linkLabel',
            type: 'array',
            title: 'Link Label',
            of: [
                {
                    type: 'string',
                },
            ],
        },
        {
            name: "order",
            title: "Order",
            type: "number",
            hidden: true,
        },

    ]
}