export default {
    name: 'discussionPost',
    type: 'document',
    title: 'Discussion Posts',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title',
        },
        {
            name: 'name',
            type: 'string',
            title: 'Submission Name',
        },
        {
            name: 'body',
            type: 'text',
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