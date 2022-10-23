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
            name: 'quesion',
            type: 'string',
            title: 'Question',
        },
        {
            name: "order",
            title: "Order",
            type: "number",
            hidden: true,
        },

    ]
}