export default {
    name: 'chef',
    type: 'document',
    title: 'Chefs',
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
        // {
        //     name: 'link',
        //     type: 'url',
        //     title: 'Link',
        // },
        {
            name: 'links',
            type: 'array',
            title: 'Links',
            of: [{ type: 'url' }],
        },
        {
            name: 'linkLabels',
            type: 'array',
            title: 'Link Labels',
            of: [{ type: 'string' }],
        },
        {
            name: 'image',
            type: 'image',
            title: 'Image',
        },
        {
            name: "order",
            title: "Order",
            type: "number",
            hidden: true,
        },
    ]
}