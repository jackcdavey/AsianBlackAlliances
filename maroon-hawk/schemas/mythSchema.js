export default {
    name: 'myth',
    type: 'document',
    i18n: true,
    title: 'Myth',
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