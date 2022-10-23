export default {
    name: 'discussionQuestion',
    type: 'document',
    title: 'Discussion Questions',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title',
        },
        {
            name: 'body',
            type: 'string',
            title: 'Body',
        },
        {
            name: "order",
            title: "Order",
            type: "number",
            hidden: true,
        },

    ]
}