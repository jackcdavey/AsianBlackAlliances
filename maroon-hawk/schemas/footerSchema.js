export default {
    name: 'footerContent',
    type: 'document',
    title: 'Footer Content',
    fields: [
        {
            name: 'body',
            type: 'text',
            title: 'Body',
        },
        {
            name: "link",
            type: "url",
            title: "Link",
        },
        {
            name: "order",
            title: "Order",
            type: "number",
            hidden: true,
        },

    ]
}