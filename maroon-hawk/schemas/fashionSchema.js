export default {
    name: 'fashion',
    type: 'document',
    title: 'Fashion Cards',
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
            name: 'linkLabel',
            type: 'array',
            title: 'Link Label',
            of: [{ type: 'string' }],
        },
        {
            name: 'image',
            type: 'array',
            title: 'Image',
            of: [{ type: 'image' }],
        },
        {
            name: "order",
            title: "Order",
            type: "number",
            hidden: true,
        },
    ]
}